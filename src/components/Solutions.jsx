function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1100px_550px_at_20%_0%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Solutions we deliver</h2>
          <p className="mt-3 text-white/70">Combine modules into a full revenue engine or start with one quick-win. Everything is designed to integrate with your current stack.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Demand Gen Stack</h3>
            <p className="mt-2 text-white/70 text-sm">ICP research, multi-channel outbound, AI follow-ups and live routing to book qualified calls.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">AI Support & Sales</h3>
            <p className="mt-2 text-white/70 text-sm">24/7 AI agents on voice and chat that answer FAQs, qualify, schedule and escalate when needed.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Content Automation</h3>
            <p className="mt-2 text-white/70 text-sm">From long-form to short-form across channels with posting, engagement workflows and analytics.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
