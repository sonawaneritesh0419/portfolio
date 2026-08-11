import { NavLink } from "react-router-dom";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { navLinks } from "@/config/navigation";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-ink">{profile.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              {profile.role} building fast, reliable interfaces for FinTech,
              HRMS, ERP and healthcare products.
            </p>
            <div className="mt-4 flex items-center gap-4 text-ink-faint">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className="text-sm text-ink-muted hover:text-primary transition-colors">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
              Get in touch
            </p>
            <a href={`mailto:${profile.email}`} className="block text-sm text-ink-muted hover:text-primary transition-colors break-all">
              {profile.email}
            </a>
            <p className="mt-2 text-sm text-ink-muted">{profile.phone}</p>
            <p className="mt-2 text-sm text-ink-muted">{profile.location}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 text-xs text-ink-faint hover:text-primary transition-colors"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
