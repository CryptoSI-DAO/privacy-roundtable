import type { Episode } from "@/data/episodes";

function EpisodeCard({ ep }: { ep: Episode }) {
  return (
    <article className="group rounded-2xl border border-line bg-panel p-5 transition hover:border-gold/40 md:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-line bg-ink px-2.5 py-1 font-mono text-zinc-400">
          {ep.displayDate}
        </span>
        <span className="rounded-full bg-gold/10 px-2.5 py-1 font-bold text-gold">
          {ep.guests.length} guest{ep.guests.length === 1 ? "" : "s"}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-zinc-100 transition group-hover:text-goldsoft md:text-xl">
        {ep.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{ep.topic}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {ep.guests.map((g) => (
            <span
              key={g}
              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-zinc-400"
            >
              {g}
            </span>
          ))}
        </div>
        {ep.replayUrl && (
          <a
            href={ep.replayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/40 px-4 py-1.5 text-xs font-bold text-gold transition hover:bg-gold hover:text-ink"
          >
            ▶ Watch replay
          </a>
        )}
      </div>
    </article>
  );
}

export default function Episodes({ episodes }: { episodes: Episode[] }) {
  return (
    <section id="episodes" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Archive
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Previous episodes
            </h2>
          </div>
          <a
            href="https://x.com/PrivacyRndtable"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-zinc-400 transition hover:text-gold"
          >
            Announcements live on X ↗
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} ep={ep} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          This archive is community-maintained. New episodes are announced first
          on the official X account.
        </p>
      </div>
    </section>
  );
}
