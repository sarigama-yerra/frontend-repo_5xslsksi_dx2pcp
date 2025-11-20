function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 p-8 sm:p-12 backdrop-blur">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to automate growth?</h3>
              <p className="mt-3 text-white/80">Tell us about your goals. We’ll design a tailored system with fast ROI.</p>
            </div>
            <form className="grid gap-3">
              <input type="text" placeholder="Your name" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input type="email" placeholder="Work email" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input type="text" placeholder="Company / Website" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <textarea rows="3" placeholder="What do you want to automate?" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 shadow hover:shadow-xl transition">Request Proposal</button>
              <p className="text-xs text-white/60">By submitting, you agree to be contacted about services and updates.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
