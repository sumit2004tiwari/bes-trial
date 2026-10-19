"use client";
import { useEffect, useState } from "react";

export default function EventCountdown({ from }: { from: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const date = new Date(from).getTime();
    if (!Number.isFinite(date)) return;
    const tick = () => setRemaining(Math.max(0, Math.floor((date - Date.now()) / 1000)));
    tick(); const timer = setInterval(tick, 1000); return () => clearInterval(timer);
  }, [from]);
  if (remaining === null) return <div className="event-countdown countdown-placeholder">Preparing the event countdown.</div>;
  if (remaining === 0) return <div className="event-countdown">Explore the event programme and latest updates.</div>;
  const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
  return <div className="event-countdown" aria-label="Countdown to the event"><span className="countdown-label">Until the next<br /><strong>BES EXPO</strong></span><div className="countdown-units">{values.map((value, index) => <div key={index}><strong>{String(value).padStart(2, "0")}</strong><span>{["Days", "Hours", "Minutes", "Seconds"][index]}</span></div>)}</div></div>;
}
