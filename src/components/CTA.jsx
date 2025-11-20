import { useState } from 'react'

function CTA() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name')?.toString().trim() || '',
      email: form.get('email')?.toString().trim() || '',
      company: form.get('company')?.toString().trim() || '',
      message: form.get('message')?.toString().trim() || '',
      source: 'website'
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ state: 'error', message: 'Please fill name, email and message.' })
      return
    }

    try {
      setStatus({ state: 'submitting', message: 'Sending...' })
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `Request failed (${res.status})`)
      }

      setStatus({ state: 'success', message: 'Thanks! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong.' })
    }
  }

  const disabled = status.state === 'submitting'

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 p-8 sm:p-12 backdrop-blur">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to automate growth?</h3>
              <p className="mt-3 text-white/80">Tell us about your goals. We’ll design a tailored system with fast ROI.</p>
              {status.state === 'success' && (
                <div className="mt-4 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 px-4 py-3 text-sm">
                  {status.message}
                </div>
              )}
              {status.state === 'error' && (
                <div className="mt-4 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-400/30 px-4 py-3 text-sm">
                  {status.message}
                </div>
              )}
            </div>
            <form className="grid gap-3" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your name" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input name="email" type="email" placeholder="Work email" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input name="company" type="text" placeholder="Company / Website" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <textarea name="message" rows="3" placeholder="What do you want to automate?" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button disabled={disabled} className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 shadow hover:shadow-xl transition disabled:opacity-60 disabled:cursor-not-allowed">
                {status.state === 'submitting' ? 'Sending...' : 'Request Proposal'}
              </button>
              <p className="text-xs text-white/60">By submitting, you agree to be contacted about services and updates.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
