/**
 * All portfolio content lives here so the presentation components stay
 * free of copy and the data can be edited in one place.
 */

export const profile = {
  name: "Danish Ansari",
  handle: "dvansari65",
  role: "Software Engineer",
  location: "Building for Solana and EVM",
  avatar: "/assets/luffy.jpg",
  resume: "/assets/danish.pdf",
  email: "dvansari360@gmail.com",
  bio: [
    "I work on Rust, distributed systems and Web3 infrastructure: high-throughput backends, indexers, payment rails and DeFi trading protocols.",
    "Most of my recent work is in open source. I contribute to core repositories such as Tycho, Firewood and Surfpool, and take on protocol-integration engagements for teams that need production-grade indexing and execution.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/dvansari65", kind: "github" },
    { label: "X", href: "https://x.com/danisshhh_h", kind: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danish-ansari-347a06299/", kind: "linkedin" },
    { label: "Telegram", href: "https://t.me/danisshhh_h", kind: "telegram" },
    { label: "Email", href: "mailto:dvansari360@gmail.com", kind: "mail" },
  ],
} as const;

export const stack = [
  "Rust",
  "TypeScript",
  "Solana / Anchor",
  "EVM",
  "Next.js",
  "React",
  "Axum",
  "Node.js",
  "Postgres",
  "Redis",
  "AWS",
] as const;

export type Experience = {
  role: string;
  org?: { name: string; href?: string };
  period: string;
  kind?: string;
  amount?: string;
  summary?: string;
  bullets?: string[];
  proof?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    role: "Founder",
    org: { name: "finalZone", href: "https://finalzone-ten.vercel.app/" },
    period: "May 2026 — Present",
  },
  {
    role: "Protocol Integration Engineer",
    org: { name: "PropellerHeads · Tycho", href: "https://github.com/propeller-heads/tycho" },
    period: "Jul — Sep 2026",
    kind: "Freelance engagement",
    amount: "$1,500",
    summary:
      "Integrated Native, an RFQ liquidity source, into the Tycho indexer end to end: orderbook indexing, TVL filtering, firm quotes, swap encoding and an on-chain executor, live on five chains.",
    bullets: [
      "Built the rfq:native protocol module (client, models, decoder, state) and registered it in the RFQ and swap-encoder registries.",
      "Stream polls Native Relay's orderbook, groups bids and asks per pair, handles one- and two-sided books, and emits snapshots and removals.",
      "TVL derived from live orderbook depth with quote-token normalisation, so markets quoted in unapproved tokens are still ranked.",
      "Firm quotes are validated for expiry, token addresses and output amount; target, calldata and payable value are carried into the signed quote.",
      "NativeExecutor.sol restricts execution to Router V4, Router V3 and CreditVault, validates selectors and forwards payable value for native-input swaps.",
      "Configured for Ethereum, Base, Arbitrum, BNB Chain and Monad. 5,135 lines across 26 files, merged with test coverage for indexing, TVL, decoding and encoding.",
    ],
    proof: { label: "Merged pull request #1244", href: "https://github.com/propeller-heads/tycho/pull/1244" },
  },
  {
    role: "Crypto Researcher",
    period: "Dec 2025",
    kind: "Freelance",
    summary:
      "Deep-dive research into EVM ecosystems: mapped inbound and outbound bridging architectures, analysed RPC endpoints, evaluated network limitations and audited mainnet readiness across emerging chains.",
  },
  {
    role: "Software Engineer",
    org: { name: "onBoardPouch", href: "https://onbord-pouch.vercel.app" },
    period: "2023 — 2024",
    summary:
      "Developed secure Solana smart contracts and scalable backend systems for high-throughput on-chain interactions.",
  },
];

export type Contribution = {
  repo: string;
  number: number;
  href: string;
  title: string;
  status: "merged" | "open";
  date: string;
  summary: string;
  highlights?: string[];
  stats?: { additions: number; deletions: number; files: number };
};

export type ContributionGroup = {
  org: string;
  repo: string;
  href: string;
  items: Contribution[];
};

export const contributions: ContributionGroup[] = [
  {
    org: "PropellerHeads",
    repo: "tycho",
    href: "https://github.com/propeller-heads/tycho",
    items: [
      {
        repo: "propeller-heads/tycho",
        number: 1430,
        href: "https://github.com/propeller-heads/tycho/pull/1430",
        title: "Bound token metadata fetch and recover deferred tokens",
        status: "open",
        date: "Sep 2026",
        summary:
          "One slow RPC call while fetching a new token's metadata was holding every pool on the chain. Metadata fetches are now concurrent, batched and time-boxed; tokens that miss the deadline are marked pending and repaired in the background, so blocks keep publishing.",
        highlights: [
          "Problem: symbol, decimals and a transfer simulation were fetched one after another per token, before a block could be cached, committed or published. A single symbol() call on Robinhood measured 3.38 s.",
          "Fast path: up to four tokens are enriched concurrently and symbol + decimals go out as one batched eth_call. Median latency for two tokens fell from 2,394 ms to 402 ms.",
          "Bounded worst case: an optional TOKEN_ENRICHMENT_BUDGET_MS deadline covers the whole batch including queue time, analysis and retry backoff. Tokens that miss it are stored as Pending and the block ships.",
          "Background repair: a per-process worker retries pending tokens after finality with exponential backoff (5 s to 1 h), commits, and refreshes both caches. Repairs only ever touch rows still pending.",
          "Consumers stay correct: the client parks pools whose tokens are pending and refetches a snapshot once they are ready; the decoder treats Pending as \"not yet\", never as failed.",
          "Additive wire format and migration, seven new Prometheus metrics, deterministic stall tests using a socket that never answers, and a 2,245-test unit suite passing.",
        ],
        stats: { additions: 4366, deletions: 250, files: 52 },
      },
      {
        repo: "propeller-heads/tycho",
        number: 1244,
        href: "https://github.com/propeller-heads/tycho/pull/1244",
        title: "Integrate Native RFQ protocol",
        status: "merged",
        date: "Sep 2026",
        summary:
          "Added Native Relay as a request-for-quote liquidity source: orderbook indexing, TVL filtering, firm quotes, swap encoding and a restricted on-chain executor, configured for Ethereum, Base, Arbitrum, BNB Chain and Monad.",
        highlights: [
          "New rfq:native protocol module with client, builder, models, decoder and state, plus NATIVE_API_KEY authentication.",
          "Orderbook stream supports one- and two-sided books and emits removals when markets disappear or fail filters.",
          "TVL is averaged across bid and ask depth and normalised through an approved quote-token market when needed.",
          "Firm quotes validate expiry, addresses and output amount; the encoder rejects malformed or overflowing values instead of silently encoding zero.",
          "NativeExecutor.sol validates the calldata selector, restricts targets to Router V4/V3 and CreditVault, and propagates failed calls as reverts.",
        ],
        stats: { additions: 5135, deletions: 22, files: 26 },
      },
      {
        repo: "propeller-heads/tycho",
        number: 1229,
        href: "https://github.com/propeller-heads/tycho/pull/1229",
        title: "Track dynamic admin swap-fee changes in Balancer V2",
        status: "merged",
        date: "Jul 2026",
        summary:
          "Balancer V2 swap fees were exported once at pool creation and never updated. Added the BasePool ABI, decoded SwapFeePercentageChanged events and emitted the fee as a dynamic attribute so downstream indexers see the live value.",
        stats: { additions: 156, deletions: 56, files: 10 },
      },
    ],
  },
  {
    org: "Ava Labs",
    repo: "firewood",
    href: "https://github.com/ava-labs/firewood",
    items: [
      {
        repo: "ava-labs/firewood",
        number: 2095,
        href: "https://github.com/ava-labs/firewood/pull/2095",
        title: "Prevent OOM DoS from untrusted item counts in proof parsing",
        status: "merged",
        date: "Jun 2026",
        summary:
          "Proof deserialization read an item count from untrusted input and used it as a loop bound. Added an early check that the count cannot exceed the bytes remaining, so malformed proofs are rejected immediately with a clear error.",
        highlights: [
          "Seven tests cover a corrupted real proof claiming ten million items, usize::MAX, mid-array EOF, nested length amplification, empty arrays and exact-fit boundaries.",
        ],
        stats: { additions: 219, deletions: 29, files: 3 },
      },
      {
        repo: "ava-labs/firewood",
        number: 2082,
        href: "https://github.com/ava-labs/firewood/pull/2082",
        title: "Add fwdctl import command",
        status: "merged",
        date: "Jun 2026",
        summary:
          "There was no way to rebuild a database from an exported dump. The new import subcommand streams CSV from a file or stdin, commits in configurable batches, supports hex-encoded keys, skips malformed rows and reports throughput.",
        highlights: [
          "Integration tests round-trip plain and hex CSV, verify malformed-row recovery, and export, import and compare a 100k-key random database.",
        ],
        stats: { additions: 470, deletions: 0, files: 5 },
      },
      {
        repo: "ava-labs/firewood",
        number: 2092,
        href: "https://github.com/ava-labs/firewood/pull/2092",
        title: "Remove bitflags dependency from path encoding",
        status: "merged",
        date: "Jun 2026",
        summary:
          "Resolved a long-standing TODO: the whole bitflags crate was pulled in to track a single odd-length flag. Replaced it with a const and plain bitwise operations, dropping a dependency with zero regressions across 309 storage tests.",
        stats: { additions: 6, deletions: 17, files: 3 },
      },
      {
        repo: "ava-labs/firewood",
        number: 2029,
        href: "https://github.com/ava-labs/firewood/pull/2029",
        title: "Add atomic update convenience API",
        status: "merged",
        date: "Jun 2026",
        summary:
          "Propose, commit and read-root as three calls let another thread commit in between and return the wrong root. Db::update now captures the root from the proposal and commits in one call.",
        stats: { additions: 66, deletions: 0, files: 2 },
      },
    ],
  },
  {
    org: "Solana Foundation",
    repo: "surfpool",
    href: "https://github.com/solana-foundation/surfpool",
    items: [
      {
        repo: "solana-foundation/surfpool",
        number: 586,
        href: "https://github.com/solana-foundation/surfpool/pull/586",
        title: "Add Prometheus metrics",
        status: "merged",
        date: "Apr 2026",
        summary:
          "Instrumented the node with transaction success and latency, RPC request rate and latency by method, and mainnet account-cloning latency, exposed as Prometheus counters and histograms.",
        stats: { additions: 454, deletions: 11, files: 14 },
      },
      {
        repo: "solana-foundation/surfpool",
        number: 489,
        href: "https://github.com/solana-foundation/surfpool/pull/489",
        title: "Consistent error handling in the Geyser runloop",
        status: "merged",
        date: "Jan 2026",
        summary:
          "Silent channel and IPC failures in the plugin runloop now propagate with context (UUID, slot), callers are notified on load, unload and reload, and plugin reloads are atomic.",
        stats: { additions: 76, deletions: 28, files: 1 },
      },
    ],
  },
  {
    org: "Anza",
    repo: "wincode",
    href: "https://github.com/anza-xyz/wincode",
    items: [
      {
        repo: "anza-xyz/wincode",
        number: 206,
        href: "https://github.com/anza-xyz/wincode/pull/206",
        title: "Return compile_error for empty enums in SchemaRead derive",
        status: "merged",
        date: "Mar 2026",
        summary:
          "Deriving SchemaRead on an empty enum produced an opaque failure. The macro now emits a clear compile-time error at the derive site.",
        stats: { additions: 4, deletions: 1, files: 1 },
      },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status?: string;
  featured?: boolean;
  tags: string[];
  links: { label: string; href: string; kind: "site" | "code" | "docs" }[];
  details?: { heading: string; items: string[] }[];
  diagram?: "flux";
};

export const projects: Project[] = [
  {
    slug: "fswa",
    name: "fswa.fun",
    tagline: "Solana gacha protocol for backed NFTs",
    featured: true,
    status: "In development · devnet",
    description:
      "A Solana-native NFT gacha protocol inspired by Fake World Assets. Makers deposit an NFT plus SOL backing into a shared pool; takers pay a dynamic price to spin, randomness selects one backed position, and the taker keeps either the NFT claim or most of the backing, never both. Makers earn fee share while their positions are active.",
    tags: ["Anchor", "Metaplex Core", "MagicBlock", "Switchboard", "LiteSVM"],
    links: [{ label: "Visit fswa.fun", href: "https://fswa.fun", kind: "site" }],
    details: [
      {
        heading: "Architecture",
        items: [
          "NFT and SOL escrow plus final settlement stay on L1. MagicBlock Ephemeral Rollups handle fast spin sessions, session keys, VRF selection, batching and committing results back.",
          "Randomness: Switchboard on-demand on L1 as the fallback, MagicBlock Ephemeral VRF in progress.",
          "Later phases: Token-2022 protocol token, Meteora DBC to Raydium liquidity, Next.js frontend.",
        ],
      },
      {
        heading: "Shipped so far",
        items: [
          "Anchor core accounting with SOL-backed positions, Metaplex Core custody adapter, weighted selection and request escrow.",
          "Indexed position pages for deposit, withdraw and resolve; L1 SpinSession open and commit; prepaid SpinBudget session-key spend limits; protocol fee claim.",
          "Phase 4 MagicBlock VRF build deployed on devnet. Direct ER smoke passes end to end for single-page and 65-position multi-page fixtures; delegates Pool, SpinSession and PositionPage accounts, resolves on ER, undelegates and finalises with commit_spin_result.",
          "Core custody and Switchboard randomness smokes pass on Surfpool and devnet. Pools can pin a specific VRF queue; authorities can update pools when no requests are pending.",
        ],
      },
      {
        heading: "Next",
        items: [
          "Router-side VRF queue routing with MagicBlock. The raw router still rejects the default devnet request when delegated accounts and queue sit on different ER nodes.",
        ],
      },
    ],
  },
  {
    slug: "velox",
    name: "Velox",
    tagline: "On-chain orderbook DEX on Solana",
    description:
      "A modular Solana DEX with an on-chain orderbook, built with Anchor and Next.js. Real-time order matching, an event queue and off-chain indexing for high-performance trading.",
    tags: ["Anchor", "Next.js", "Orderbook"],
    links: [
      { label: "Live app", href: "https://dexfrontend-murex.vercel.app/", kind: "site" },
      { label: "Source", href: "https://github.com/dvansari65/dex_orderbook", kind: "code" },
    ],
  },
  {
    slug: "predicta",
    name: "Predicta",
    tagline: "Predict Solana transaction outcomes before submission",
    description:
      "A Rust library that estimates success probability, optimises fees and surfaces runtime-aware insights under real network conditions, before a transaction is sent.",
    tags: ["Rust", "Solana", "Library"],
    links: [
      { label: "Docs", href: "https://predicta-docs-8xjw17658-dvansari65s-projects.vercel.app/", kind: "docs" },
      { label: "Source", href: "https://github.com/dvansari65/predicta", kind: "code" },
    ],
  },
  {
    slug: "aegis",
    name: "Aegis",
    tagline: "Stablecoin liquidity-stress engine",
    description:
      "An open Solana-native risk engine that detects stablecoin liquidity stress early, publishes a real-time stress score and exposes on-chain emergency signals that DeFi protocols can wire into their own circuit breakers.",
    tags: ["Rust", "Solana", "DeFi risk"],
    links: [
      { label: "Live app", href: "https://aegis-murex-three.vercel.app/", kind: "site" },
      { label: "Source", href: "https://github.com/dvansari65/aegis", kind: "code" },
    ],
  },
  {
    slug: "flux",
    name: "Flux",
    tagline: "Cross-chain intent settlement",
    description:
      "An intent-based settlement protocol. Users sign an intent; a competitive off-chain solver network handles routing and execution for the best price, removing bridging UX and fragmented liquidity from the user's path.",
    tags: ["Solana", "Intents", "Solver network"],
    links: [{ label: "Source", href: "https://github.com/dvansari65/Flux", kind: "code" }],
    diagram: "flux",
  },
  {
    slug: "kangarow",
    name: "Kangarow",
    tagline: "AUDD invoicing and escrow on Solana",
    description:
      "Production-grade invoicing and escrow payments in AUDD for freelancers and agencies.",
    tags: ["Solana", "Payments", "Escrow"],
    links: [
      { label: "Live app", href: "https://auddfrontend.vercel.app/", kind: "site" },
      { label: "Source", href: "https://github.com/dvansari65/kangarow", kind: "code" },
    ],
  },
  {
    slug: "raffledrop",
    name: "RaffleDrop",
    tagline: "Decentralised raffle marketplace",
    description:
      "Sellers list items and buyers enter with small fees. Once enough players join, Switchboard randomness picks a winner: the seller is paid and one buyer gets the product at a fraction of the price.",
    tags: ["Anchor", "Switchboard VRF"],
    links: [
      { label: "Live app", href: "https://raffledrop.vercel.app/", kind: "site" },
      { label: "Source", href: "https://github.com/dvansari65/RaffleDrop", kind: "code" },
    ],
  },
];
