function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About GVK Automations</h2>
          <p className="mt-4 text-white/80">We're a team of growth engineers and AI specialists helping B2B brands systemize pipeline. We design, build and operate automations that generate qualified demand while keeping your brand voice and guardrails intact.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-white/80 text-sm">
            <li>• Results-first, ROI in weeks not months</li>
            <li>• Privacy and compliance by design</li>
            <li>• Integrates with your CRM and tools</li>
            <li>• Fully managed or co-pilot modes</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
