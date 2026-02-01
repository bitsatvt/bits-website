"use client";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

/**
 * ============================================================================
 * TYPES
 * ============================================================================
 */

/**
 * Raw event structure from Google Calendar API
 * Supports both timed events (dateTime) and all-day events (date)
 */
type CalendarEvent = {
  id: string;
  summary?: string;
  location?: string;
  description?: string;
  start: {
    dateTime?: string; // ISO 8601 format (e.g., "2026-02-10T17:00:00-05:00")
    date?: string; // YYYY-MM-DD format (e.g., "2026-02-16")
  };
  end?: {
    dateTime?: string;
    date?: string;
  };
};

/**
 * Normalized event with parsed dates and computed properties
 * Used internally after processing from raw API response
 */
type NormalizedEvent = Omit<CalendarEvent, "start" | "end"> & {
  startDate: Date; // Parsed JavaScript Date object
  endDate?: Date; // Optional end date for multi-day events
  isMultiDay: boolean; // True if event spans multiple days
  start: CalendarEvent["start"];
  end?: CalendarEvent["end"];
};

/**
 * ============================================================================
 * UTILITY FUNCTIONS
 * ============================================================================
 */

/**
 * Parse a date string from Google Calendar API
 * Handles both ISO 8601 (timed) and YYYY-MM-DD (all-day) formats
 *
 * @param value - Date string from API, or undefined
 * @returns Parsed Date object, or undefined if parsing fails
 */
function parseGoogleDate(value?: string): Date | undefined {
  if (!value) return undefined;
  return new Date(value);
}

/**
 * Check if two dates fall on the same calendar day
 * Ignores time component, only compares year/month/day
 *
 * @param date1 - First date to compare
 * @param date2 - Second date to compare
 * @returns True if dates are the same day
 */
function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Format a time string from a Date object
 * Example: "5:00 PM" or "2:30 PM"
 *
 * @param date - Date object to format
 * @returns Formatted time string
 */
function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Format a date range for display
 * Single-day events show as "Mon, Jan 10"
 * Multi-day events show as "Mon, Jan 10 → Wed, Jan 12"
 *
 * @param start - Start date
 * @param end - Optional end date (if not provided or same day, shows single date)
 * @returns Formatted date range string
 */
function formatDateRange(start: Date, end?: Date): string {
  const startStr = start.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  // Single-day event or no end date provided
  if (!end || isSameDay(start, end)) {
    return startStr;
  }

  // Multi-day event - show range
  const endStr = end.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return `${startStr} → ${endStr}`;
}

/**
 * ============================================================================
 * COMPONENT: EventList
 * ============================================================================
 *
 * Displays upcoming events from Google Calendar
 * Features:
 * - Fetches events from /api/calendar endpoint
 * - Shows only future events (upcoming)
 * - Handles multi-day events with date ranges
 * - Responsive design optimized for dark theme
 * - Loading and error states
 */
export default function EventList() {
  const [events, setEvents] = useState<NormalizedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch and process calendar events
   * Runs once on component mount
   */
  useEffect(() => {
    fetch("/api/calendar")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load events");
        return res.json();
      })
      .then((data: CalendarEvent[]) => {
        const now = new Date();
        const normalized: NormalizedEvent[] = [];

        // Parse and normalize events
        for (const event of data) {
          // Parse start date (required field)
          const startDate = parseGoogleDate(
            event.start.dateTime ?? event.start.date,
          );
          if (!startDate) continue;

          // Skip events in the past
          if (startDate < now) continue;

          // Parse end date (optional field)
          const endDate = parseGoogleDate(
            event.end?.dateTime ?? event.end?.date,
          );

          // Determine if event spans multiple calendar days
          const isMultiDay = endDate ? !isSameDay(startDate, endDate) : false;

          normalized.push({
            ...event,
            startDate,
            endDate,
            isMultiDay,
          });
        }

        // Sort chronologically by start date (earliest first)
        normalized.sort(
          (a, b) => a.startDate.getTime() - b.startDate.getTime(),
        );

        setEvents(normalized);
      })
      .catch((err) => {
        console.error(err);
        setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => setLoading(false));
  }, []);

  /**
   * Loading state
   */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="space-y-3">
          <div className="h-3 w-48 bg-white/10 rounded-full animate-pulse"></div>
          <div className="h-3 w-32 bg-white/10 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  /**
   * Error state
   */
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-900/20 border border-red-700/50 text-red-200 px-6 py-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  /**
   * Empty state (no future events)
   */
  if (!events.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-lg">No upcoming events</p>
      </div>
    );
  }

  /**
   * Main render - event cards
   */
  return (
    <div className="relative p-8 z-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">Events</h1>
          <p className="text-gray-400 text-lg">
            {events.length} upcoming event{events.length !== 1 ? "s" : ""}
          </p>
        </header>

        {/* Event cards */}
        <div className="space-y-4">
          {events.map((event) => {
            const dateStr = formatDateRange(event.startDate, event.endDate);

            return (
              <div
                key={event.id}
                className="group relative rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-bits-orange/50 hover:bg-white/10 overflow-hidden"
              >
                <div className="relative p-6 flex flex-col sm:flex-row gap-6">
                  {/* Date Section */}
                  <div className="flex-shrink-0 sm:w-48">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      {event.isMultiDay ? "Date Range" : "Date"}
                    </p>
                    <p className="text-2xl font-semibold text-white leading-tight mb-2">
                      {dateStr}
                    </p>
                    {event.startDate.getHours() !== 0 ||
                    event.startDate.getMinutes() !== 0 ? (
                      <p className="text-sm text-gray-400">
                        {formatTime(event.startDate)}
                        {event.endDate &&
                        (event.endDate.getHours() !== 0 ||
                          event.endDate.getMinutes() !== 0) ? (
                          <> – {formatTime(event.endDate)}</>
                        ) : null}
                      </p>
                    ) : null}
                  </div>

                  {/* Divider (visible on desktop only) */}
                  <div className="hidden sm:block w-px bg-white/10" />

                  {/* Content Section */}
                  <div className="flex-grow min-w-0">
                    {/* Event title */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-white break-words mb-3">
                      {event.summary ?? "Untitled Event"}
                    </h3>

                    {/* Location (if present) */}
                    {event.location && (
                      <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                        <MapPin size={16} className="flex-shrink-0" />
                        {event.location}
                      </p>
                    )}

                    {/* Description (if present, truncated to 2 lines) */}
                    {event.description && (
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
