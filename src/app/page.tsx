import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Marquee from "@/components/Marquee";
import Episodes from "@/components/Episodes";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import { upcoming, pastEpisodes } from "@/data/episodes";
import { X_URL } from "@/data/projects";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-panel text-gold">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden>
              <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Zm3 4a1.5 1.5 0 0 1 .75 2.8L12 18.5a1.5 1.5 0 1 1 0-4.5Z" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-wide md:text-base">
            Privacy <span className="text-gold">Roundtable</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <a href="#next" className="transition hover:text-gold">Next space</a>
          <a href="#episodes" className="transition hover:text-gold">Episodes</a>
          <a href="#projects" className="transition hover:text-gold">Projects</a>
          <a href="#about" className="transition hover:text-gold">About</a>
        </nav>
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-ink transition hover:bg-goldsoft md:text-sm"
        >
          Follow on X
        </a>
      </div>
    </header>
  );
}

function NextSpace() {
  return (
    <section id="next" className="border-t border-line/70 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Next live space
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">{upcoming.title}</h2>
            <p className="mt-2 text-sm text-zinc-400 md:text-base">
              {upcoming.displayDate} · X Spaces
              {upcoming.guests.length > 0 && (
                <>
                  {" "}· Guest:{" "}
                  <span className="text-goldsoft">{upcoming.guests.join(", ")}</span>
                </>
              )}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={upcoming.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink transition hover:bg-goldsoft"
              >
                Set a reminder on X
              </a>
              <a
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  "Privacy Roundtable — " + upcoming.title
                )}&dates=${upcoming.calendarDates}&details=${encodeURIComponent(
                  "Live X Space — Privacy Roundtable. Details: " + upcoming.postUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-zinc-300 transition hover:border-gold/50 hover:text-gold"
              >
                + Google Calendar
              </a>
            </div>
          </div>
          <Countdown targetIso={upcoming.date} />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-line/70">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center md:px-6 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">About the roundtable</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
          Privacy Roundtable is a recurring X Spaces series of candid talks on
          privacy tech, crypto &amp; digital freedom — bringing together
          advocates and builders for thoughtful discussions on the tools shaping
          our future. Regulars include the teams behind PIVX, Firo, Zano,
          Particl and BasicSwap DEX, with guests from across the wider
          privacy ecosystem.
        </p>
        <p className="mt-6 text-xs text-zinc-500">
          This site is a community-run archive maintained by CryptoSI DAO. It is
          not official and nothing here is financial advice.
        </p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <NextSpace />
        <Episodes episodes={pastEpisodes} />
        <ProjectsGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
