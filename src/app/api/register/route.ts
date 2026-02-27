import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface GangMember {
  tradeId: string;
  tradeName: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { trade, tradeId, region, county, experienceTier, hasCSCS, name, phone, gangType, gangMembers } = body;

    const isGang = gangType === "gang";

    if (!region || !county || hasCSCS === undefined || !name || !phone || !experienceTier) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!isGang && (!trade || !tradeId)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build gang composition rows if applicable
    let teamSection = "";
    if (gangType === "gang" && Array.isArray(gangMembers) && gangMembers.length > 0) {
      const gangRows = (gangMembers as GangMember[])
        .map(
          (m) =>
            `<tr style="border-bottom: 1px solid #333;">
              <td style="padding: 6px 0; color: #999; padding-left: 16px;">${m.tradeName}</td>
              <td style="padding: 6px 0; text-align: right; color: #fff;">${m.quantity}</td>
            </tr>`
        )
        .join("");

      const totalMembers = (gangMembers as GangMember[]).reduce((sum: number, m: GangMember) => sum + m.quantity, 0);

      teamSection = `
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Team</td>
        <td style="padding: 8px 0; text-align: right; color: #FF6B00; font-weight: bold;">Gang (${totalMembers} members)</td>
      </tr>
      <tr><td colspan="2" style="padding: 0;">
        <table style="width: 100%; border-collapse: collapse;">
          ${gangRows}
        </table>
      </td></tr>`;
    } else {
      teamSection = `
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Team</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">Individual</td>
      </tr>`;
    }

    const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #111; padding: 24px; border-bottom: 3px solid #FF6B00;">
    <h1 style="color: #FF6B00; margin: 0; font-size: 24px;">New Worker Registration</h1>
    <p style="color: #999; margin: 8px 0 0;">${name} &mdash; ${isGang ? "Gang" : trade} (${county})</p>
  </div>

  <div style="padding: 24px; background: #1a1a1a; color: #ddd;">
    <h2 style="color: #FF6B00; font-size: 16px; margin: 0 0 12px; text-transform: uppercase;">Worker Details</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Name</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${name}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Phone</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;"><a href="tel:${phone}" style="color: #FF6B00; text-decoration: none;">${phone}</a></td>
      </tr>
      ${!isGang ? `
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Trade</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${trade}</td>
      </tr>` : ""}
      ${teamSection}
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Experience</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${experienceTier} years</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">CSCS Card</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${hasCSCS ? "Yes" : "No"}</td>
      </tr>
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 8px 0; color: #999;">Region</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${region}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #999;">County</td>
        <td style="padding: 8px 0; text-align: right; color: #fff;">${county}</td>
      </tr>
    </table>
  </div>

  <div style="padding: 16px 24px; background: #111; text-align: center;">
    <p style="color: #666; margin: 0; font-size: 12px;">4A Trades &mdash; Worker Registration System</p>
  </div>
</div>`;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "4A Trades Registrations <orders@4atrades.co.uk>",
      to: ["vincent@askqs.co.uk", "chris@4atrades.co.uk"],
      subject: `New Worker Registration: ${name} — ${isGang ? "Gang" : trade} (${county})`,
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
