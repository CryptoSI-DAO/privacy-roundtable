import Image from "next/image";
import { PROJECTS } from "@/data/projects";

export default function Marquee() {
  const row = [...PROJECTS, ...PROJECTS];
  return (
    <div className="border-y border-line/70 bg-panel/30 py-4">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 pr-8 hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <a
              key={`${p.ticker}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 opacity-60 transition hover:opacity-100"
              title={p.name}
            >
              <Image
                src={p.logo}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="text-sm font-semibold whitespace-nowrap text-zinc-400">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
