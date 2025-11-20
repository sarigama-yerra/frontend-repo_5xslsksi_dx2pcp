import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" onClick={handleNavClick} className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 shadow-lg" />
              <span className="text-lg font-semibold tracking-tight text-white">GVK Automations</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a href="#services" onClick={handleNavClick} className="text-sm text-white/80 hover:text-white transition">Services</a>
              <a href="#solutions" onClick={handleNavClick} className="text-sm text-white/80 hover:text-white transition">Solutions</a>
              <a href="#about" onClick={handleNavClick} className="text-sm text-white/80 hover:text-white transition">About</a>
              <a href="#contact" onClick={handleNavClick} className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition">
                <Phone className="h-4 w-4" /> Contact
              </a>
            </nav>

            <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-nav">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div id="mobile-nav" className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="grid gap-2">
                <a href="#services" onClick={handleNavClick} className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Services</a>
                <a href="#solutions" onClick={handleNavClick} className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Solutions</a>
                <a href="#about" onClick={handleNavClick} className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">About</a>
                <a href="#contact" onClick={handleNavClick} className="rounded-lg px-3 py-2 text-slate-900 bg-white font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;