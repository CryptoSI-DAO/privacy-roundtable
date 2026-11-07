export type PrivacyProject = {
  ticker: string;
  name: string;
  tagline: string;
  logo: string;
  url: string;
  featured: boolean;
};

export { X_URL, REPO_URL } from "@/config/site";

/**
 * Featured projects are the series regulars seen on the roundtable banner.
 * Taglines are short factual descriptors — keep them neutral.
 */
export const PROJECTS: PrivacyProject[] = [
  {
    ticker: "PIVX",
    name: "PIVX",
    tagline: "Proof-of-Stake privacy coin with shield transactions.",
    logo: "/logos/pivx.svg",
    url: "https://pivx.org",
    featured: true,
  },
  {
    ticker: "FIRO",
    name: "Firo",
    tagline: "Privacy coin built on the Lelantus Spark protocol.",
    logo: "/logos/firo.svg",
    url: "https://firo.org",
    featured: true,
  },
  {
    ticker: "ZANO",
    name: "Zano",
    tagline: "Privacy-focused blockchain with confidential assets.",
    logo: "/logos/zano.svg",
    url: "https://zano.org",
    featured: true,
  },
  {
    ticker: "PART",
    name: "Particl",
    tagline: "Privacy-first decentralized marketplace economy.",
    logo: "/logos/particl.svg",
    url: "https://particlproject.org",
    featured: true,
  },
  {
    ticker: "BSWAP",
    name: "BasicSwap DEX",
    tagline: "Cross-chain, no-KYC decentralized exchange.",
    logo: "/logos/basicswap.png",
    url: "https://basicswap.com",
    featured: true,
  },
  {
    ticker: "XMR",
    name: "Monero",
    tagline: "Private, decentralized digital cash by default.",
    logo: "/logos/monero.svg",
    url: "https://getmonero.org",
    featured: false,
  },
  {
    ticker: "ZEC",
    name: "Zcash",
    tagline: "Shielded zero-knowledge payments on a UTXO chain.",
    logo: "/logos/zcash.svg",
    url: "https://z.cash",
    featured: false,
  },
  {
    ticker: "BEAM",
    name: "Beam",
    tagline: "Confidential Mimblewimble-based cryptocurrency.",
    logo: "/logos/beam.svg",
    url: "https://beam.mw",
    featured: false,
  },
  {
    ticker: "GRIN",
    name: "Grin",
    tagline: "Minimal Mimblewimble chain — privacy by simplicity.",
    logo: "/logos/grin.svg",
    url: "https://grin-tech.org",
    featured: false,
  },
  {
    ticker: "SCRT",
    name: "Secret Network",
    tagline: "Privacy-preserving smart contracts (secret contracts).",
    logo: "/logos/secret.svg",
    url: "https://scrt.network",
    featured: false,
  },
  {
    ticker: "MANTA",
    name: "Manta Network",
    tagline: "ZK-powered privacy layer for Web3 assets.",
    logo: "/logos/manta.png",
    url: "https://manta.network",
    featured: false,
  },
  {
    ticker: "AZTEC",
    name: "Aztec",
    tagline: "Zero-knowledge rollup with private smart contracts.",
    logo: "/logos/aztec.png",
    url: "https://aztec.network",
    featured: false,
  },
  {
    ticker: "RAIL",
    name: "Railgun",
    tagline: "Private on-chain DeFi via zero-knowledge proofs.",
    logo: "/logos/railgun.png",
    url: "https://railgun.org",
    featured: false,
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const OTHERS = PROJECTS.filter((p) => !p.featured);
