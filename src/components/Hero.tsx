import LogoWheel from "@/components/LogoWheel";
import { X_URL } from "@/data/projects";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* backdrop flourishes */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(232,182,76,0.09),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(8,8,10,0.9))]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-16 md:grid-cols-2 md:px-6 md:pt-24 md:pb-24">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-panel px-3 py-1 text-[11px] font-bold tracking-[0.25em] text-gold uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Live on X Spaces
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-black tracking-tight md:text-6xl">
            Privacy
            <br />
            <span className="bg-gradient-to-r from-gold to-goldsoft bg-clip-text text-transparent">
              Roundtable
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-zinc-400 md:mx-0 md:text-lg">
            Candid talks on privacy tech, crypto &amp; digital freedom.
            Advocates and builders from across the ecosystem — in one
            roundtable, on air.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-ink transition hover:bg-goldsoft"
            >
              Follow @PrivacyRndtable
            </a>
            <a
              href="#episodes"
              className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-gold/50 hover:text-gold"
            >
              Browse episodes
            </a>
          </div>
        </div>
        <LogoWheel />
      </div>
    </section>
  );
}
