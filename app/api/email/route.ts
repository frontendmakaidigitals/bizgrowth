// app/api/email/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const raw = await req.json();
  const sheetName = "Bizgrowth- website";
  const payload: Record<string, any> = {
    ...raw,
    date: new Date().toISOString().split("T")[0],
    visas: "visas" in raw ? raw.visas : "N/A",
    sheetName: sheetName,
  };

  console.log(raw.visas)
  try {
    const googleResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbyYS4sJSLGXCzBlh-3C6HulqGDH1RGpnfpeLLEYitR2RgHaRlGLt9JKtjt1PnPg4EBr/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const text = await googleResponse.text();
    return NextResponse.json({ text });
  } catch (error) {
    console.error("API error:", error);
    return new NextResponse("Failed to submit to Google Apps Script", {
      status: 500,
    });
  }
}
