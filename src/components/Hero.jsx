import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability - pointer events disabled so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,0.2),rgba(2,6,23,0.65)_50%,rgba(2,6,23,0.95))]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              AI Agents • Automation • Growth
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              GVK Automations
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              We help you scale with intelligent systems: B2B lead generation, AI voice agents for inbound/outbound calls, social media automation, email marketing, digital marketing and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold shadow hover:shadow-xl transition">Get a Demo</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-white font-semibold hover:bg-white/20 transition">Explore Services</a>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
