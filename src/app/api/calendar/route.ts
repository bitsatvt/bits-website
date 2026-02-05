// app/api/calendar/route.ts
import { NextResponse } from "next/server";

// Define TypeScript type for calender events based on API response structure
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

// Fetch upcoming events from Google Calendar API
export async function GET() {
  try {
    const key = process.env.GOOGLE_API_KEY;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    // If either key is missing, return an error response
    if (!key || !calendarId) {
      return NextResponse.json(
        { error: "Missing GOOGLE_API_KEY or GOOGLE_CALENDAR_ID" },
        { status: 500 },
      );
    }

    //Construct Google Calender API URL with query params
    const url =
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId,
      )}/events` +
      `?key=${key}` +
      `&singleEvents=true` +
      `&orderBy=startTime` +
      `&timeMin=${new Date().toISOString()}`;

    //Fetch events from Google Calender API
    const res = await fetch(url);

    // Return error if API call fails
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }

    //Parse response; return events as JSON
    const data: { items: CalendarEvent[] } = await res.json();

    return NextResponse.json(data.items);
  } catch (err: unknown) {
    // Handle unexpected errors; return JSON error response
    const message = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
