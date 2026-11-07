"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FEATURED, PROJECTS } from "@/data/projects";

const ANGLE_STEP = 360 / PROJECTS.length;

export default function LogoWheel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % FEATURED.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  const center = FEATURED[idx];

  return (
    <div
      className="relative mx-auto aspect-square w-[300px] md:w-[560px]"
      aria-hidden
    >
      {/* ambient glow */}
      <div className="animate-glow absolute inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(232,182,76,0.16),transparent_65%)]" />

      {/* decorative rings */}
      <div className="absolute inset-[8%] rounded-full border border-line/60" />
      <div className="absolute inset-[24%] rounded-full border border-line/40" />

      {/* rotating ring of logos */}
      <div className="animate-orbit absolute inset-0">
        {PROJECTS.map((p, i) => {
          const angle = i * ANGLE_STEP;
          return (
            <div
              key={p.ticker}
              className="ring-slot absolute top-1/2 left-1/2 -mt-4 -ml-4 md:-mt-6 md:-ml-6"
              style={{ "--a": `${angle}deg` } as React.CSSProperties}
            >
              <div style={{ transform: `rotate(${-angle}deg)` }}>
                <div className="animate-orbit-rev">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-panel/90 shadow-[0_0_18px_rgba(0,0,0,0.55)] md:h-12 md:w-12">
                    <Image
                      src={p.logo}
                      alt=""
                      width={44}
                      height={44}
                      loading="eager"
                      className="h-5 w-5 object-contain md:h-7 md:w-7"
                    />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* center featured logo — swaps every 3s */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-gold/30 bg-panel shadow-[0_0_60px_rgba(232,182,76,0.22)] md:h-32 md:w-32">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={center.ticker}
            src={center.logo}
            alt={`${center.name} logo`}
            className="logo-swap h-12 w-12 object-contain md:h-20 md:w-20"
          />
        </div>
        <div
          key={`label-${center.ticker}`}
          className="logo-swap mt-3 text-center md:mt-4"
        >
          <p className="text-sm font-bold tracking-wide text-gold md:text-base">
            {center.name}
          </p>
          <p className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
            Series regular
          </p>
        </div>
      </div>
    </div>
  );
}
