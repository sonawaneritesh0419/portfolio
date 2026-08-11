import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X, Download } from "lucide-react";
import { toggleMenu, closeMenu } from "@/store/uiSlice";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { navLinks } from "@/config/navigation";
import { profile } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Header() {
  const dispatch = useDispatch();
  const menuOpen = useSelector((s) => s.ui.menuOpen);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center gap-2 rounded-full border border-border bg-surface/85 px-3 py-2 shadow-sm backdrop-blur-md sm:gap-4 sm:px-5">
        <NavLink to="/" onClick={() => dispatch(closeMenu())} className="flex items-center gap-2 pl-1 pr-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-ink">
            RS
          </span>
          <span className="hidden font-display text-sm font-semibold text-ink sm:inline">
            Ritesh Sonawane
          </span>
        </NavLink>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-ink-muted hover:text-ink"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a
            href={profile.resumeFile}
            download
            className="hidden items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-primary hover:text-primary lg:flex"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />
          <button
            className="p-2 text-ink md:hidden"
            onClick={() => dispatch(toggleMenu())}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-surface p-2 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => dispatch(closeMenu())}
              className={({ isActive }) =>
                cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium",
                  isActive ? "bg-primary/10 text-primary" : "text-ink-muted"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-sm font-medium text-ink-muted"
          >
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
