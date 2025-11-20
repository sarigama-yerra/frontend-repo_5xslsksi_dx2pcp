import { Menu, Phone, Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = useMemo(
    () => [
      { id: "services", label: "Services" },
      { id: "solutions", label: "Solutions" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact", cta: true },
    ],
    []
  );

  const closeMobile = () => setOpen(false);

  const headerHeight = () => {
    const el = document.querySelector("header");
    return (el?.getBoundingClientRect().height || 80) + 12; // add a small margin
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight();
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    scrollToSection(id);
    closeMobile();
  };

  // Scrollspy: highlight menu item as sections enter the viewport
  useEffect(() => {
    const ids = ["home", ...links.map((l) => l.id)];
    const options = { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id") || "";
          if (id) setActive(id);
        }
      });
    }, options);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  const LinkEl = ({ item, mobile = false }) => {
    const isActive = active === item.id;
    const base = mobile
      ? "rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
      : "relative text-sm transition focus:outline-none focus:ring-2 focus:ring-white/30";

    const className = item.cta
      ? mobile
        ? "rounded-lg px-3 py-2 text-slate-900 bg-white font-semibold flex items-center gap-2 hover:bg-white/90"
        : "inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition"
      : `${base} ${isActive ? "text-white" : "text-white/80 hover:text-white"}`;

    return (
      <a
        href={`#${item.id}`}
        onClick={(e) => handleNavClick(e, item.id)}
        className={className}
        aria-current={isActive ? "page" : undefined}
      >
        {item.cta ? (
          <>
            <Phone className="h-4 w-4" /> {item.label}
          </>
        ) : (
          <>
            {item.label}
            {!mobile && (
              <span
                className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-white transition-all duration-300 ${
                  isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full"
                }`}
              />
            )}
          </>
        )}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" onClick={(e)=>handleNavClick(e, "home")} className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 shadow-lg" />
              <span className="text-lg font-semibold tracking-tight text-white">GVK Automations</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {links.filter(l=>!l.cta).map((item) => (
                <div key={item.id} className="group relative">
                  <LinkEl item={item} />
                </div>
              ))}
              {links.filter(l=>l.cta).map((item) => (
                <LinkEl key={item.id} item={item} />
              ))}
            </nav>

            <button
              className="md:hidden text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div id="mobile-nav" className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="grid gap-2">
                {links.filter(l=>!l.cta).map((item) => (
                  <LinkEl key={item.id} item={item} mobile />
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="rounded-lg px-3 py-2 text-slate-900 bg-white font-semibold flex items-center gap-2"
                >
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
