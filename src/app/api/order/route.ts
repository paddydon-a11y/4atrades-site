import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    // Build order lines
    const itemLines = items.map(
      (item: { workerType: string; tier: string; quantity: number; ratePerHour: number }) =>
        `${item.workerType} (${item.tier}) x${item.quantity} @ £${item.ratePerHour.toFixed(2)}/hr = £${(item.quantity * item.ratePerHour).toFixed(2)}/hr`
    );

    const totalWorkers = items.reduce((sum: number, i: { quantity: number }) => sum + i.quantity, 0);
    const totalRate = items.reduce(
      (sum: number, i: { quantity: number; ratePerHour: number }) => sum + i.quantity * i.ratePerHour,
      0
    );

    // Build HTML email
    const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #111; padding: 24px; border-bottom: 3px solid #FF6B00;">
    <h1 style="color: #FF6B00; margin: 0; font-size: 24px;">New Worker Order</h1>
    <p style="color: #999; margin: 8px 0 0;">${jobDetails.company} — ${totalWorkers} worker${totalWorkers !== 1 ? "s" : ""}</p>
  </div>

  <div style="padding: 24px; background: #1a1a1a; color: #ddd;">
    <h2 style="color: #FF6B00; font-size: 16px; margin: 0 0 12px; text-transform: uppercase;">Order Details</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Contractor Type</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${contractorType}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Location</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${county}, ${region}</td>
      </tr>
    </table>

    <h2 style="color: #FF6B00; font-size: 16px; margin: 24px 0 12px; text-transform: uppercase;">Workers Ordered</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
      ${items
        .map(
          (item: { workerType: string; tier: string; quantity: number; ratePerHour: number }) =>
            `<tr style="border-bottom: 1px solid #333;">
              <td style="padding: 8px 0; color: #fff;">${item.workerType} <span style="color: #999;">(${item.tier})</span></td>
              <td style="padding: 8px 0; text-align: center; color: #fff;">x${item.quantity}</td>
              <td style="padding: 8px 0; text-align: right; color: #fff;">£${(item.quantity * item.ratePerHour).toFixed(2)}/hr</td>
            </tr>`
        )
        .join("")}
      <tr style="border-top: 2px solid #FF6B00;">
        <td style="padding: 12px 0; color: #FF6B00; font-weight: bold;">Total</td>
        <td style="padding: 12px 0; text-align: center; color: #FF6B00; font-weight: bold;">x${totalWorkers}</td>
        <td style="padding: 12px 0; text-align: right; color: #FF6B00; font-weight: bold; font-size: 18px;">£${totalRate.toFixed(2)}/hr</td>
      </tr>
    </table>

    <h2 style="color: #FF6B00; font-size: 16px; margin: 24px 0 12px; text-transform: uppercase;">Job Details</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Company</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${jobDetails.company}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Contact</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${jobDetails.contactName}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Phone</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;"><a href="tel:${jobDetails.phone}" style="color: #FF6B00; text-decoration: none;">${jobDetails.phone}</a></td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Email</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;"><a href="mailto:${jobDetails.email}" style="color: #FF6B00; text-decoration: none;">${jobDetails.email}</a></td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Site Address</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${jobDetails.siteAddress}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Postcode</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${jobDetails.postcode}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Start Date</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${jobDetails.startDate}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Duration</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${jobDetails.duration}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #999;">Special Requirements</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${jobDetails.specialRequirements || "None"}</td>
      </tr>
    </table>
  </div>

  <div style="padding: 16px 24px; background: #111; text-align: center;">
    <p style="color: #666; margin: 0; font-size: 12px;">4A Trades — Worker Order System</p>
  </div>
</div>`;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "4A Trades Orders <orders@4atrades.co.uk>",
      to: ["vincent@askqs.co.uk", "chris@4atrades.co.uk"],
      subject: `New Worker Order: ${jobDetails.company} — ${totalWorkers} worker${totalWorkers !== 1 ? "s" : ""}`,
      html,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
