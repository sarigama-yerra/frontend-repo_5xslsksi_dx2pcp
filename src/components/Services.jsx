import { useState } from 'react'
import { Users, PhoneCall, Share2, Mail, Rocket, Bot } from 'lucide-react'
import ServiceShowcase from './ServiceShowcase'
import { getShowcaseFor } from './useServiceShowcaseData'

const services = [
  {
    icon: Users,
    title: 'B2B Lead Generation',
    desc: 'End-to-end outbound engine: ICP research, targeting, multi-channel outreach and booked meetings.'
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Agents',
    desc: '24/7 inbound and outbound AI agents that answer, qualify, schedule and follow up on calls.'
  },
  {
    icon: Share2,
    title: 'Social Media Automation',
    desc: 'Content scheduling, auto-repurposing, engagement workflows and analytics across platforms.'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Warmup, deliverability, hyper-personalized sequences and high-converting campaigns.'
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    desc: 'Paid ads, SEO, landing pages and conversion rate optimization with clear ROI tracking.'
  },
  {
    icon: Bot,
    title: 'Custom AI & Integrations',
    desc: 'Internal automations, CRM integrations and bespoke AI copilots for your workflows.'
  }
]

function Services() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const onTileClick = (title) => {
    setActive(getShowcaseFor(title))
    setOpen(true)
  }

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(125,211,252,0.12),transparent_60%),radial-gradient(900px_500px_at_90%_10%,rgba(216,180,254,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Automation that drives pipeline and revenue. Pick a managed service or combine modules for a full growth system.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <button
              key={s.title}
              onClick={() => onTileClick(s.title)}
              className="group text-left rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 text-white shadow-lg">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </button>
          ))}
        </div>
      </div>

      <ServiceShowcase open={open} onClose={() => setOpen(false)} service={active} />
    </section>
  )
}

export default Services
