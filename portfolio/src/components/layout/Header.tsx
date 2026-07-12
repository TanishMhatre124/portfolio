import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { personalInfo } from "@/data/personalInfo";
import { cn } from "@/utils/cn";
import { useActiveSection } from "@/hooks/useActiveSection";

const HOME_SECTION_IDS = ["home", "about", "experience", "contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeSection = useActiveSection(isHome ? HOME_SECTION_IDS : []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-line bg-ink/90 backdrop-blur" : "border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 max-w-content items-center justify-between">
        <Link to="/#home" className="font-display text-lg font-semibold tracking-tight text-paper">
          <span className="text-signal">{personalInfo.initials.slice(0, 1)}</span>
          {personalInfo.initials.slice(1)}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const sectionId = item.path.replace("/#", "");
            const isActive = isHome && !item.isRoute && activeSection === sectionId;
            const isRouteActive = item.isRoute && location.pathname.startsWith(item.path);
            return item.isRoute ? (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "rounded px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                  isRouteActive ? "text-signal" : "text-fog hover:text-paper"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.path}
                className={cn(
                  "rounded px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                  isActive ? "text-signal" : "text-fog hover:text-paper"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download
            className="hidden rounded border border-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:border-signal/60 hover:text-signal sm:inline-flex"
          >
            Resume
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded p-2 text-paper transition-colors hover:text-signal md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link to={item.path} className="block py-3 font-mono text-sm uppercase tracking-wider text-fog hover:text-paper">
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.path} className="block py-3 font-mono text-sm uppercase tracking-wider text-fog hover:text-paper">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
