"use client";

import { useEffect, useState } from "react";

type Parts = { d: number; h: number; m: number; s: number };

function partsFrom(diffMs: number): Parts {
  const s = Math.floor(diffMs / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

function Tile({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="flex w-16 flex-col items-center rounded-xl border border-line bg-panel px-2 py-3 md:w-20 md:py-4">
      <span className="font-mono text-2xl font-bold tabular-nums text-gold md:text-3xl">
        {value === null ? "--" : String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ targetIso }: { targetIso: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const target = new Date(targetIso).getTime();
  const diff = now === null ? null : Math.max(0, target - now);
  const p = diff === null ? null : partsFrom(diff);

  return (
    <div className="flex gap-2.5 md:gap-3">
      <Tile value={p?.d ?? null} label="days" />
      <Tile value={p?.h ?? null} label="hrs" />
      <Tile value={p?.m ?? null} label="min" />
      <Tile value={p?.s ?? null} label="sec" />
    </div>
  );
}
