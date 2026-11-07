/**
 * FAQ — authored ONCE here and rendered BOTH as visible page content and as
 * FAQPage schema. Never duplicate these strings manually elsewhere.
 */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What is the Privacy Roundtable?",
    a: "Privacy Roundtable is a recurring live X Spaces series of candid conversations on privacy tech, crypto and digital freedom, hosted on the @PrivacyRndtable account. Advocates and builders from privacy-focused projects join each space to discuss the tools shaping digital privacy.",
  },
  {
    q: "When is the next Privacy Roundtable space?",
    a: "The next space is announced first on the official @PrivacyRndtable X account, and this site shows a live countdown with a reminder link. Announcements typically go out about a week ahead, and the direct link is posted shortly before the event starts.",
  },
  {
    q: "How do I listen to previous Privacy Roundtable episodes?",
    a: "Every space is recorded and shared as an X broadcast replay. This site keeps a community-maintained archive of past episodes with replay links and guest lists — see the Previous episodes section.",
  },
  {
    q: "Which privacy coins take part in the roundtable?",
    a: "Series regulars include PIVX, Firo, Zano, Particl and BasicSwap DEX. Guests from across the wider privacy ecosystem — projects like Monero, Zcash, Aztec and Railgun — join for individual episodes.",
  },
  {
    q: "Is Privacy Roundtable free to join?",
    a: "Yes. Spaces are free to listen to live on X Spaces — you only need an X account to join the audience, and replays are freely available afterwards.",
  },
];
