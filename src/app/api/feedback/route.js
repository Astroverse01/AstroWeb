import { NextResponse } from "next/server";

// Your existing Apps Script Web App URL (from the HTML)
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwWnAJisfxjVxJKc4PnUgVaAxRvES1JxSMlhSI7RCZsxOhRJ9odncvvsU5nzYq60Auu/exec";

export async function POST(request) {
  try {
    const payload = await request.json();

    // Server-side fetch avoids browser CORS issues
    const resp = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // No need for mode: "no-cors" on the server
    });

    // Try to parse JSON. If Apps Script returns opaque/HTML, still return ok.
    let data = null;
    try {
      data = await resp.json();
    } catch {
      // fallback if Apps Script doesn’t return JSON
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
    console.error("Feedback API error:", err);
    return NextResponse.json(
      { success: false, error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
