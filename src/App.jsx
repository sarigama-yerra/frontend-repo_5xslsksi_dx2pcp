import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solutions'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Cinematic background accents */}
      <div className="pointer-events-none fixed inset-0">
        {/* Soft color wash */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(125,211,252,0.18),transparent_60%),radial-gradient(900px_500px_at_90%_10%,rgba(216,180,254,0.18),transparent_60%),radial-gradient(1000px_600px_at_50%_100%,rgba(251,191,36,0.12),transparent_60%)]" />
        {/* Subtle vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.35))]" />
        {/* Film grain overlay */}
        <div className="grain" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Solutions />
        <About />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} GVK Automations. All rights reserved.</p>
          <div className="text-white/60 text-sm">Built with AI-driven automation.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
