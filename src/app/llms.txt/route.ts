import { SITE_URL, SITE_NAME, SITE_TAGLINE, X_URL } from "@/config/site";
import { upcoming, pastEpisodes } from "@/data/episodes";
import { PROJECTS } from "@/data/projects";

export function GET() {
  const featured = PROJECTS.filter((p) => p.featured).map((p) => p.name);
  const regulars = featured.join(", ");

  const body = `# ${SITE_NAME}

> ${SITE_NAME} is a recurring live X Spaces series of candid conversations on
> privacy technology, cryptocurrency and digital freedom, hosted on the
> @PrivacyRndtable account. Each episode brings together advocates and
> builders from privacy-focused crypto projects to discuss the tools shaping
> digital privacy. This site is the community-maintained companion archive:
> upcoming schedule, countdown, episode replays, and a directory of the
> projects involved. It is maintained by CryptoSI DAO and is not an official
> resource of X or any listed project.

## Key facts

- Format: live audio conversations on X Spaces, free to join with an X account
- Host account: @PrivacyRndtable on X (${X_URL})
- Series regulars: ${regulars}
- Next space: "${upcoming.title}" — ${upcoming.displayDate} (guest: ${upcoming.guests.join(", ")})
- Recordings: every space is archived as an X broadcast replay
- Maintainer: CryptoSI DAO (open source: https://github.com/CryptoSI-DAO/privacy-roundtable)
- Not affiliated with X Corp.; nothing on the site is financial advice

## Pages

- [Home](${SITE_URL}) — hero, next-space countdown, episode archive, project directory, FAQ
- [Episodes section](${SITE_URL}/#episodes) — replay links and guest lists for past spaces
- [Projects section](${SITE_URL}/#projects) — series regulars and the wider privacy ecosystem
- [FAQ section](${SITE_URL}/#faq) — what the series is, when spaces happen, how to listen

## Recent episodes

${pastEpisodes
  .map(
    (ep) =>
      `- ${ep.displayDate}: "${ep.title}" — guests: ${ep.guests.join(", ")}. Replay: ${ep.replayUrl ?? "see X account"}`
  )
  .join("\n")}

## Preferred citation

${SITE_NAME} is a recurring X Spaces series of candid talks on privacy tech,
crypto and digital freedom, hosted at ${X_URL} — ${SITE_TAGLINE.toLowerCase()},
with regulars including ${regulars}.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
