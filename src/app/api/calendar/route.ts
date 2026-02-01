// app/api/calendar/route.ts
import { NextResponse } from "next/server";

type CalendarEvent = {
  id: string;
  summary?: string;
  location?: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
};

export async function GET() {
  try {
    const key = process.env.GOOGLE_API_KEY;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!key || !calendarId) {
      return NextResponse.json(
        { error: "Missing GOOGLE_API_KEY or GOOGLE_CALENDAR_ID" },
        { status: 500 },
      );
    }

    const url =
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId,
      )}/events` +
      `?key=${key}` +
      `&singleEvents=true` +
      `&orderBy=startTime` +
      `&timeMin=${new Date().toISOString()}`;

    const res = await fetch(url);

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }

    const data: { items: CalendarEvent[] } = await res.json();

    return NextResponse.json(data.items);
  } catch (err: unknown) {
    // Narrow unknown to string safely
    const message = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
