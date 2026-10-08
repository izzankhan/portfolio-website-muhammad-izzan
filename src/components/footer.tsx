import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 overflow-hidden rounded-full border border-primary/40 shadow-[0_0_15px_-4px_var(--glow-gold)]">
                <img
                  src={SITE.avatar}
                  alt={SITE.name}
                  className="h-full w-full object-cover object-top"
                />
              </span>
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.role}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px_var(--glow-gold)] transition-all hover:shadow-[0_0_32px_-4px_var(--glow-gold)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {[
                { href: SITE.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: SITE.social.instagram, icon: Instagram, label: "Instagram" },
                { href: SITE.social.twitter, icon: Twitter, label: "Twitter" },
                { href: SITE.social.facebook, icon: Facebook, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:text-foreground hover:glow-ring"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{SITE.email}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Izzan Khan. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">GoHighLevel • Meta Ads • AI Automation</p>
        </div>
        {/* Spacer so the floating WhatsApp widget never covers the footer
            copyright / links on mobile. */}
        <div className="h-16 sm:h-4" aria-hidden="true" />
      </div>
    </footer>
  );
}
