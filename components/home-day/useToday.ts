"use client";

// The day on the page is the visitor's actual day. Values resolve after
// mount (SSR renders the neutral fallbacks, so there's no hydration
// mismatch): the dawn eyebrow shows today's weekday, the 7:42 phone shows
// today's date, and the new-dawn finale shows tomorrow's weekday.
import { useEffect, useState } from "react";

export default function useToday() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (!now) {
    return { weekday: "TODAY", phoneDate: "Today", nextWeekday: "TOMORROW" };
  }

  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const fmt = (d: Date, opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-AU", opts).format(d);

  return {
    weekday: fmt(now, { weekday: "long" }).toUpperCase(),
    phoneDate: fmt(now, { weekday: "long", day: "numeric", month: "long" }),
    nextWeekday: fmt(tomorrow, { weekday: "long" }).toUpperCase(),
  };
}
