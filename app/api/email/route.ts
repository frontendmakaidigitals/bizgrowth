import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_6GLFhiTf_3javH3x77xZTr6qutop8Z1LS"); // Your Resend API key here

export async function POST(req: Request) {
  try {
    const { name, email, businessActivity, contact, message, visas } =
      await req.json();

    const emailElement = await resend.batch.send([
      {
        from: "onboarding@resend.dev", // your email
        to: ["frontendmakaidigitals@gmail.com"],
        subject: `New Contact from ${name}`,
        text: `
        Name: ${name} 
        Phone: ${contact}
        Business Activity: ${businessActivity}
        Email: ${email}
        ${visas ? `Visa: ${visas}` : ""}
        Message: ${message}
      `,
      },
      {
        from: "onboarding@resend.dev", // your email
        to: ["info@bizgrowthconsultancy.com"],
        subject: `New Contact from ${name}`,
        text: `
        Name: ${name} 
        Phone: ${contact}
        Business Activity: ${businessActivity}
        Email: ${email}
        ${visas ? `Visa: ${visas}` : ""}
        Message: ${message}
      `,
      },
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
