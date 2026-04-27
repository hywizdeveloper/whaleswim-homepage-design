import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experience", href: "#experience" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative grid h-7 w-7 place-items-center">
            <span className="absolute inset-0 rounded-full border border-aqua/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-aqua shadow-[0_0_12px_var(--color-aqua)]" />
          </span>
          <span className="text-[13px] font-medium tracking-[0.18em] uppercase text-foreground">
            WhaleSwim
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="group inline-flex h-9 items-center gap-2 rounded-full border border-hairline bg-white/5 px-4 text-[12px] font-medium tracking-wide text-foreground backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" />
          Book Expedition
        </a>
      </div>
    </header>
  );
}
