# Privacy Roundtable — Website

Community-run companion site for the **Privacy Roundtable** X Spaces series
([@PrivacyRndtable](https://x.com/PrivacyRndtable)) — candid talks on privacy
tech, crypto & digital freedom.

Built with Next.js (App Router) + Tailwind CSS v4. Deployed on Vercel.

## Features

- **Animated hero** — a slowly rotating orbit of 13 privacy-project logos,
  with the five series regulars (PIVX, Firo, Zano, Particl, BasicSwap DEX)
  taking turns in the center stage.
- **Next space countdown** — live countdown to the upcoming X Space, with a
  "set a reminder on X" link and a one-click Google Calendar template.
- **Previous episodes archive** — replay links and guest rosters, sourced
  verbatim from the official account's announcements.
- **Project directory** — the series regulars plus a wider privacy-ecosystem
  grid (Monero, Zcash, Beam, Grin, Secret Network, Manta, Aztec, Railgun).
- Fully static, `prefers-reduced-motion`-aware, mobile-first.

## Editing content

All content lives in two files — no framework knowledge needed:

| File | What's in it |
| --- | --- |
| [`src/data/episodes.ts`](src/data/episodes.ts) | The upcoming space + previous episodes (title, date, guests, topic, replay link) |
| [`src/data/projects.ts`](src/data/projects.ts) | The logo roster, taglines and official URLs |

To add an episode: copy one record in `pastEpisodes`, fill in the fields from
the official announcement post, and open a PR. Dates are ISO-8601 UTC.

## Logos

Project logos are fetched from public brand/CDN sources at build-authoring
time and committed here for reliability. Trademarks belong to their
respective owners; presence on this community site is not an endorsement
either way.

`public/logos/zano.svg` is a **community-drawn typographic placeholder**, not
the official Zano asset — PRs replacing it with an official-brand-permitted
logo are welcome.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Contributing

PRs welcome — especially episode archives. Keep facts verbatim from the
official @PrivacyRndtable posts and link the source post in each entry.

## License

[MIT](LICENSE) © CryptoSI DAO. This is a community project and is not
affiliated with X Corp. Nothing on the site is financial advice.
