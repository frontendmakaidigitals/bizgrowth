import { NextResponse } from "next/server";
import { Resend } from "resend";
const key =process.env.RESEND_API_KEY || ''
const resend = new Resend(key);

export async function POST(req: Request) {
  const raw = await req.json();

  const payload = {
    ...raw,
    date: new Date().toISOString().split("T")[0],
  };

  try {
    await resend.emails.send({
      from: "Bizgrowth Website <no-reply@insightvision.marketing>",
      to: "Info@bizgrowthconsultancy.com",
      subject: "New Website Lead from Form",
      html: `
        <h3>New Website Lead</h3>
        <p><b>Name:</b> ${raw.name}</p>
        <p><b>Email:</b> ${raw.email}</p>
        <p><b>Phone:</b> ${raw.contact || "N/A"}</p>
        <p><b>Business Activity:</b> ${raw.businessActivity || "N/A"}</p>
        <p><b>Visas:</b> ${payload.message || "N/A"}</p>
        <p><b>Date:</b> ${payload.date}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend API error:", error);
    return new NextResponse("Failed to submit form", { status: 500 });
  }
}
