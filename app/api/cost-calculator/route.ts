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
      to: 'Info@bizgrowthconsultancy.com',

      subject: "Submission received from Cost Calculator",

      text: `
        User Details:

        Name: ${raw.name}
        Email: ${raw.email}
        Emirate: ${raw.emirate}
        Setup Type: ${raw.setupType}
        Business Activity: ${raw.businessActivity}
        Shareholders: ${raw.shareholders}
        Employees: ${raw.employees}
        Office Type: ${raw.officeType}
        Services: ${raw.services?.join(", ")}
        Date: ${payload.date}
      `,

      html: `
        <h3>User Details:</h3>

        <p><b>Name:</b> ${raw.name}</p>
        <p><b>Email:</b> ${raw.email}</p>
        <p><b>Emirate:</b> ${raw.emirate}</p>
        <p><b>Setup Type:</b> ${raw.setupType}</p>
        <p><b>Business Activity:</b> ${raw.businessActivity}</p>
        <p><b>Shareholders:</b> ${raw.shareholders}</p>
        <p><b>Employees:</b> ${raw.employees}</p>
        <p><b>Office Type:</b> ${raw.officeType}</p>
        <p><b>Services:</b> ${raw.services?.join(", ")}</p>
        <p><b>Date:</b> ${payload.date}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return new NextResponse("Failed to submit form", { status: 500 });
  }
}
