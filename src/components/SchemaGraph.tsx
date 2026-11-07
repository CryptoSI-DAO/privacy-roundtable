import { FAQS } from "@/data/faq";
import { upcoming, pastEpisodes } from "@/data/episodes";
import {
  SITE_URL,
  SITE_NAME,
  X_URL,
  REPO_URL,
} from "@/config/site";

/**
 * Single JSON-LD @graph — engines merge the linked nodes into one entity.
 * Event node is generated from the live `upcoming` episode record.
 */
export default function SchemaGraph() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      description:
        "Community-run companion project for the Privacy Roundtable X Spaces series.",
      sameAs: [X_URL, REPO_URL],
      knowsAbout: [
        "privacy coins",
        "privacy technology",
        "digital freedom",
        "cryptocurrency",
        "X Spaces",
        "PIVX",
        "Firo",
        "Zano",
        "Particl",
        "BasicSwap DEX",
        "Monero",
        "Zcash",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Privacy Coin & Tech Talks on X Spaces | Privacy Roundtable",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#org` },
      primaryImageOfPage: `${SITE_URL}/og-card.png`,
      description:
        "Candid talks on privacy tech, crypto & digital freedom — live on X Spaces.",
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#next-event`,
      name: upcoming.title,
      startDate: upcoming.date,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      isAccessibleForFree: true,
      location: {
        "@type": "VirtualLocation",
        url: X_URL,
      },
      organizer: { "@id": `${SITE_URL}/#org` },
      performer: upcoming.guests.map((g) => ({
        "@type": "Person",
        name: g,
      })),
      description: upcoming.topic,
      url: upcoming.postUrl,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#episodes`,
      name: "Previous Privacy Roundtable episodes",
      itemListElement: pastEpisodes.map((ep, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: ep.title,
        url: ep.replayUrl ?? ep.postUrl,
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
