import { X_URL, REPO_URL } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold">
            Privacy <span className="text-gold">Roundtable</span>
          </p>
          <p className="mt-1 max-w-md text-xs leading-relaxed text-zinc-500">
            Community-run archive by CryptoSI DAO. Not affiliated with X and
            not an official project resource. Nothing here is financial
            advice.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-gold/50 hover:text-gold"
          >
            X / Spaces
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-gold/50 hover:text-gold"
          >
            Open source ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
