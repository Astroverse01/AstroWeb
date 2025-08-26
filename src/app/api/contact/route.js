import { NextResponse } from "next/server";

// Re-using the same Google Apps Script Web App URL you used for feedback
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwWnAJisfxjVxJKc4PnUgVaAxRvES1JxSMlhSI7RCZsxOhRJ9odncvvsU5nzYq60Auu/exec";

export async function POST(request) {
  try {
    const payload = await request.json();

    // You can tag the payload to distinguish contact vs feedback rows in your sheet
    const body = { source: "contact", ...payload };

    const resp = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // Try to parse JSON (Apps Script might return HTML or empty)
    let data = null;
    try {
      data = await resp.json();
    } catch {
      data = { result: resp.ok ? "success" : "error" };
    }

    if (!resp.ok) {
      return NextResponse.json(
        { success: false, ...data },
        { status: resp.status || 500 }
      );
    }

    return NextResponse.json({ success: true, ...data });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
