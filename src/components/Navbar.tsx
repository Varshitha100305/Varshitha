import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-shadow ${
          scrolled ? "shadow-[0_8px_40px_-16px_rgba(0,0,0,0.9)]" : ""
        }`}
      >
        <a href="#home" className="font-display text-lg font-extrabold tracking-tight group">
          <span className="text-rose-400 group-hover:text-rose-300 transition-colors">
            SV<span className="text-rose-500">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link hover:text-rose-400 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 chip">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          Available
        </div>
      </nav>
    </header>
  );
}