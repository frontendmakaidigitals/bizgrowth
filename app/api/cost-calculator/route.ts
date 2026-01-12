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
      from: "Bizgrowth Website <no-reply@bizgrowth.ae>",
      to: "Info@bizgrowthconsultancy.com", // your receiver email
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
    console.error("Resend API error:", error);
    return new NextResponse("Failed to submit form", { status: 500 });
  }
}
