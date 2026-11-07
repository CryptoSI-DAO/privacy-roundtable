export type Episode = {
  id: string;
  title: string;
  /** ISO 8601 UTC datetime of the space */
  date: string;
  displayDate: string;
  guests: string[];
  topic: string;
  /** Vercel/Google Calendar template dates string, e.g. 20261110T1300Z/20261110T1430Z */
  calendarDates?: string;
  replayUrl?: string;
  postUrl: string;
  status: "upcoming" | "past";
};

/**
 * ✍️ TO ADD AN EPISODE: append a record to `pastEpisodes` (or set a new
 * `upcoming`). Keep facts verbatim from the official @PrivacyRndtable posts.
 */
export const upcoming: Episode = {
  id: "zano-nov-2026",
  title: "Zano updates and the hacking of the largest centralized exchange",
  date: "2026-11-10T13:00:00Z",
  displayDate: "Nov 10, 2026 · 9:00 am EDT / 1:00 pm GMT",
  guests: ["@GinoFPM (Zano)"],
  topic: "Zano project updates, plus lessons for privacy after the largest CEX hack.",
  calendarDates: "20261110T1300Z/20261110T1430Z",
  postUrl: "https://x.com/PrivacyRndtable",
  status: "upcoming",
};

export const pastEpisodes: Episode[] = [
  {
    id: "ai-private-crypto",
    title: "Recent AI breakthroughs and their significance to private crypto",
    date: "2026-09-30T13:00:00Z",
    displayDate: "Sep 30, 2026 · 9:00 am EDT / 1:00 pm GMT",
    guests: ["Firo", "BasicSwap DEX", "Particl", "PIVX"],
    topic:
      "What recent AI breakthroughs mean for privacy-focused crypto, with four of the series' regular projects.",
    replayUrl: "https://x.com/i/broadcasts/1qJVmyavRwAGB",
    postUrl: "https://x.com/PrivacyRndtable/status/2102402143843950807",
    status: "past",
  },
];
