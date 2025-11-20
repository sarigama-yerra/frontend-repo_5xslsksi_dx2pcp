import { X, ExternalLink } from 'lucide-react'

function ServiceShowcase({ open, onClose, service }) {
  if (!open || !service) return null

  const { title, cases = [] } = service

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={`${title} showcase`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute inset-x-0 bottom-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[min(900px,92vw)]">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-t-2xl sm:rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">Showcase</p>
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white">{title}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {cases.length === 0 ? (
              <p className="text-white/70">No samples yet. Check back soon.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cases.map((c) => (
                  <article
                    key={c.title}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <div className="aspect-video w-full bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-amber-400/20" />
                    <div className="p-4">
                      <h4 className="text-white font-medium line-clamp-2">{c.title}</h4>
                      {Array.isArray(c.metrics) && c.metrics.length > 0 && (
                        <ul className="mt-2 space-y-1 text-xs text-white/70">
                          {c.metrics.map((m, idx) => (
                            <li key={idx}>• {m}</li>
                          ))}
                        </ul>
                      )}
                      {c.link && (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300"
                        >
                          View details <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceShowcase
