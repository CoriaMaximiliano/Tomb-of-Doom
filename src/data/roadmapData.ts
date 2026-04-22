import { Chapter, TokenomicsItem } from '../types';

export const chapters: Chapter[] = [
  {
    number: 1,
    title: 'Foundation & Genesis',
    subtitle: 'Core architecture, token deployment, and community ignition.',
    quarter: 'Q1 – Q2 2025',
    progress: 100,
    milestones: [
      {
        title: 'Smart Contract Audit',
        description: 'Completed third-party security audit by CertiK. All critical and high-severity findings resolved before mainnet deployment.',
        status: 'completed',
        tag: 'Security',
      },
      {
        title: 'Token Generation Event (TGE)',
        description: 'Mainnet token launch with full vesting schedules locked on-chain. Initial liquidity seeded across Uniswap V3 and centralized exchange partners.',
        status: 'completed',
        tag: 'Launch',
      },
      {
        title: 'Core Protocol V1',
        description: 'Deployment of the foundational protocol layer — including staking contracts, governance primitives, and treasury multisig infrastructure.',
        status: 'completed',
        tag: 'Protocol',
      },
      {
        title: 'Community & DAO Bootstrap',
        description: 'Launch of the governance forum, Discord community, and initial on-chain proposals. 12,000+ wallets onboarded in genesis week.',
        status: 'completed',
        tag: 'Community',
      },
    ],
  },
  {
    number: 2,
    title: 'Ecosystem Growth',
    subtitle: 'Product suite expansion, developer grants, and exchange listings.',
    quarter: 'Q3 – Q4 2025',
    progress: 62,
    milestones: [
      {
        title: 'Developer SDK & API V1',
        description: 'Public release of the developer SDK enabling third-party integrations. Comprehensive documentation, code samples, and a sandbox environment shipped.',
        status: 'completed',
        tag: 'Developer',
      },
      {
        title: 'Grants Program — Round 1',
        description: 'Allocation of 2M tokens to fund 18 ecosystem projects across DeFi tooling, analytics dashboards, and cross-chain bridges.',
        status: 'completed',
        tag: 'Grants',
      },
      {
        title: 'Tier-1 CEX Listings',
        description: 'Negotiations finalized with two Tier-1 exchanges. Listing announcements pending compliance clearance. Market-making agreements executed.',
        status: 'in-progress',
        tag: 'Exchange',
      },
      {
        title: 'Mobile Wallet Integration',
        description: 'Native support within MetaMask Mobile, Rainbow, and Trust Wallet. Deep-link protocol for seamless dApp interactions from iOS and Android.',
        status: 'upcoming',
        tag: 'Mobile',
      },
    ],
  },
  {
    number: 3,
    title: 'Expansion & Partnerships',
    subtitle: 'Institutional integrations, cross-chain bridges, and enterprise pilots.',
    quarter: 'Q1 – Q2 2026',
    progress: 15,
    milestones: [
      {
        title: 'Cross-Chain Bridge V2',
        description: 'Trustless bridging infrastructure connecting Ethereum, Arbitrum, Base, and Solana. Sub-30-second finality with under $0.10 average fees.',
        status: 'in-progress',
        tag: 'Infrastructure',
      },
      {
        title: 'Enterprise Pilot Program',
        description: 'Onboarding of five Fortune 500 enterprise partners for private chain deployments. White-label licensing framework and SLA-backed support tiers.',
        status: 'upcoming',
        tag: 'Enterprise',
      },
      {
        title: 'Institutional Custody Integration',
        description: 'Native compatibility with Fireblocks, Copper, and Anchorage Digital custody solutions, enabling institutional-grade asset management.',
        status: 'upcoming',
        tag: 'Institutional',
      },
      {
        title: 'Protocol Revenue Share',
        description: 'Activation of on-chain fee distribution to long-term stakers. Buyback-and-burn mechanism tied to protocol revenue exceeding quarterly targets.',
        status: 'upcoming',
        tag: 'Tokenomics',
      },
    ],
  },
  {
    number: 4,
    title: 'Maturity & Full Decentralization',
    subtitle: 'DAO handoff, protocol ossification, and sustainable ecosystem flywheel.',
    quarter: 'Q3 – Q4 2026',
    progress: 0,
    milestones: [
      {
        title: 'Full DAO Governance Handoff',
        description: 'Core team relinquishes admin keys. All protocol parameters — fees, grants, treasury — governed exclusively by token-holder votes with time-locked execution.',
        status: 'upcoming',
        tag: 'Governance',
      },
      {
        title: 'Protocol V3 — Modular Architecture',
        description: 'Upgrade to a modular, plugin-based architecture allowing third-party teams to extend the protocol without permission, audited via community review.',
        status: 'upcoming',
        tag: 'Protocol',
      },
      {
        title: 'Ecosystem Fund — $50M Target',
        description: 'Series of strategic raises with leading crypto-native VCs to fuel a dedicated ecosystem fund, supporting 100+ projects over a three-year horizon.',
        status: 'upcoming',
        tag: 'Funding',
      },
      {
        title: 'Global Regulatory Compliance Framework',
        description: 'MiCA compliance for EU markets, FinCEN registration finalized, and engagement with APAC regulators to establish compliant operating jurisdictions.',
        status: 'upcoming',
        tag: 'Compliance',
      },
    ],
  },
];

export const tokenomicsData: TokenomicsItem[] = [
  { label: 'Community & Ecosystem', percentage: 35, color: '#D4AF37' },
  { label: 'Team & Advisors', percentage: 18, color: '#B8961E' },
  { label: 'Treasury', percentage: 20, color: '#E8C84A' },
  { label: 'Public Sale', percentage: 12, color: '#F0D878' },
  { label: 'Strategic Partners', percentage: 10, color: '#A07C10' },
  { label: 'Liquidity', percentage: 5, color: '#C8A030' },
];

export const totalProgress = Math.round(
  chapters.reduce((acc, ch) => acc + ch.progress, 0) / chapters.length
);
