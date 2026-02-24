import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      contractorType,
      region,
      county,
      items,
      jobDetails,
    } = body;

    if (!contractorType || !region || !county || !items?.length || !jobDetails) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build email body
    const itemLines = items.map(
      (item: { workerType: string; tier: string; quantity: number; ratePerHour: number }) =>
        `${item.workerType} (${item.tier}) x${item.quantity} @ £${item.ratePerHour.toFixed(2)}/hr = £${(item.quantity * item.ratePerHour).toFixed(2)}/hr`
    );

    const totalWorkers = items.reduce((sum: number, i: { quantity: number }) => sum + i.quantity, 0);
    const totalRate = items.reduce(
      (sum: number, i: { quantity: number; ratePerHour: number }) => sum + i.quantity * i.ratePerHour,
      0
    );

    // Send via Formspree
    const res = await fetch("https://formspree.io/f/mjgewpwj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _subject: `New Worker Order: ${jobDetails.company} — ${totalWorkers} workers`,
        contractorType,
        region,
        county,
        orderSummary: itemLines.join("\n"),
        totalWorkers,
        totalHourlyRate: `£${totalRate.toFixed(2)}/hr`,
        company: jobDetails.company,
        contactName: jobDetails.contactName,
        phone: jobDetails.phone,
        email: jobDetails.email,
        siteAddress: jobDetails.siteAddress,
        postcode: jobDetails.postcode,
        startDate: jobDetails.startDate,
        duration: jobDetails.duration,
        specialRequirements: jobDetails.specialRequirements || "None",
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
