// Centralized showcase data for each service tile
export const showcaseData = {
  'B2B Lead Generation': {
    title: 'B2B Lead Generation',
    cases: [
      {
        title: 'SaaS DevOps Platform — Pipeline from 0 to 1 in 60 days',
        metrics: ['612 ICP accounts researched', '2,140 multi-channel touches', '38 SQLs', '6 closed-won'],
      },
      {
        title: 'Fintech API — Enterprise ABM pods with multithreaded outreach',
        metrics: ['Account penetration in 21 target firms', 'Avg reply rate 14.2%', '8 meetings with VP-level'],
      },
      {
        title: 'AI Security Startup — Founder-led outbound to first 20 customers',
        metrics: ['Personalized email + LinkedIn', 'Booked 24 demos in 45 days'],
      },
    ],
  },
  'AI Voice Agents': {
    title: 'AI Voice Agents',
    cases: [
      {
        title: 'National Home Services — 24/7 inbound triage with handoffs',
        metrics: ['Cut missed calls by 72%', 'NPS +1.1 increase', 'Scheduler integration'],
      },
      {
        title: 'E-commerce CX — Post-purchase call-backs with order lookups',
        metrics: ['AHT -28%', 'CSAT +9%'],
      },
    ],
  },
  'Social Media Automation': {
    title: 'Social Media Automation',
    cases: [
      {
        title: 'B2B Founders — LinkedIn content engine',
        metrics: ['Weekly batching + auto-repurpose to Twitter', 'Follower growth 3.2x in 90 days'],
      },
      {
        title: 'Podcast to Clips — Auto clips, captions and scheduler',
        metrics: ['Cut editing time 80%', 'Consistent posting 5x/week'],
      },
    ],
  },
  'Email Marketing': {
    title: 'Email Marketing',
    cases: [
      {
        title: 'DevTools Product — Lifecycle & win-back campaigns',
        metrics: ['Open rates 48%', 'Revenue lift +22% MoM'],
      },
      {
        title: 'DTC Brand — Deliverability rehab + warmup',
        metrics: ['Inbox placement from 62% to 94%', 'Spam rate <0.1%'],
      },
    ],
  },
  'Digital Marketing': {
    title: 'Digital Marketing',
    cases: [
      {
        title: 'SaaS Trials — Paid search + landing tests',
        metrics: ['CPC -31%', 'Trial-to-paid +18%'],
      },
      {
        title: 'Local Services — LSA + map pack + reviews',
        metrics: ['Lead volume 2.4x', 'Cost per lead -37%'],
      },
    ],
  },
  'Custom AI & Integrations': {
    title: 'Custom AI & Integrations',
    cases: [
      {
        title: 'CRM Copilot — Deal insights and next-best actions',
        metrics: ['Time-to-update -65%', 'Forecast accuracy +12%'],
      },
      {
        title: 'Ops Automations — ETL to warehouse with Slack alerts',
        metrics: ['Eliminated 10 hrs/week manual work', 'Real-time anomaly detection'],
      },
    ],
  },
}

export function getShowcaseFor(title) {
  return showcaseData[title] || { title, cases: [] }
}
