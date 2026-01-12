import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const raw = await req.json();

  const payload = {
    ...raw,
    date: new Date().toISOString().split("T")[0],
  };

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      port: 587,
    });

    await transporter.sendMail({
      from: `"Bizgrowth Website" <${process.env.GMAIL_USER}>`,
      to: "Info@bizgrowthconsultancy.com", 
      subject: "New Website Lead from Form",
      text: `
        New lead received:
          `,
          html: `
            <h3>New Website Lead</h3>
            <p><b>Name:</b> ${raw.name}</p>
            <p><b>Email:</b> ${raw.email}</p>
            <p><b>Phone:</b> ${raw.contact}</p>
            <p><b>Phone:</b> ${raw.businessActivity}</p>
            <p><b>Visas:</b> ${payload.message}</p>
            <p><b>Date:</b> ${payload.date}</p>
          `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return new NextResponse("Failed to submit form", { status: 500 });
  }
}
