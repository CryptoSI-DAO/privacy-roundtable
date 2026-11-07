import Image from "next/image";
import { FEATURED, OTHERS, type PrivacyProject } from "@/data/projects";

function Logo({ p, size }: { p: PrivacyProject; size: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-2xl border border-line bg-ink"
      style={{ width: size, height: size }}
    >
      <Image
        src={p.logo}
        alt=""
        width={size}
        height={size}
        loading="eager"
        className="object-contain"
        style={{ width: size * 0.55, height: size * 0.55 }}
      />
    </span>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="border-t border-line/70 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
          Ecosystem
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          Projects on &amp; around the roundtable
        </h2>

        {/* series regulars */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((p) => (
            <a
              key={p.ticker}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gold/25 bg-panel p-5 transition hover:border-gold/60"
            >
              <div className="flex items-center gap-4">
                <Logo p={p} size={56} />
                <div>
                  <p className="font-bold text-zinc-100 group-hover:text-goldsoft">
                    {p.name}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                    Series regular
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {p.tagline}
              </p>
            </a>
          ))}
        </div>

        {/* wider ecosystem */}
        <h3 className="mt-12 text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
          From the wider privacy ecosystem
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {OTHERS.map((p) => (
            <a
              key={p.ticker}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-line bg-panel p-3.5 transition hover:border-gold/40"
            >
              <Logo p={p} size={40} />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-zinc-200 group-hover:text-goldsoft">
                  {p.name}
                </p>
                <p className="truncate text-xs text-zinc-500">{p.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
