import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type QuickOption = {
  key: string;
  label: string;
  message: string;
};

const QUICK_OPTIONS: QuickOption[] = [
  {
    key: "ghl",
    label: "GoHighLevel Setup",
    message: "Hi Izzan, I'd like to discuss a GoHighLevel setup for my business.",
  },
  {
    key: "meta",
    label: "Meta Ads Campaign",
    message: "Hi Izzan, I'm interested in running Meta Ads campaigns. Can we talk?",
  },
  {
    key: "automation",
    label: "AI & Workflow Automation",
    message: "Hi Izzan, I want to automate follow-ups and workflows. Let's discuss.",
  },
  {
    key: "leads",
    label: "Lead Generation System",
    message: "Hi Izzan, I need a complete lead generation system. Can you help?",
  },
  {
    key: "custom",
    label: "Something Else",
    message: SITE.whatsappMessage,
  },
];

function waLinkFor(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Reveal the widget shortly after mount so it animates in once.
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Quick-chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
            role="dialog"
            aria-label="WhatsApp quick chat"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-[color-mix(in_oklab,var(--primary)_15%,transparent)] px-4 py-3.5">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_18px_-4px_#25D366]">
                <WhatsAppIcon className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-emerald-400" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  Chat with {SITE.name}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Typically replies within a few hours
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-4 py-4">
              <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                Pick a topic to start the conversation — your WhatsApp will open with the message
                pre-filled.
              </p>
              <div className="flex flex-col gap-2">
                {QUICK_OPTIONS.map((opt) => (
                  <a
                    key={opt.key}
                    href={waLinkFor(opt.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card/60 px-3.5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--primary)_18%,transparent)] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                      </span>
                      {opt.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border px-4 py-3">
              <a
                href={waLinkFor(SITE.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-8px_#25D366] transition-all hover:shadow-[0_0_28px_-6px_#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <AnimatePresence>
        {mounted && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            className={cn(
              "relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform active:scale-95 sm:h-16 sm:w-16",
              "hover:scale-105",
            )}
          >
            {/* Pulse ring */}
            {!open && (
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            )}
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-6 w-6 sm:h-7 sm:w-7" />
                </motion.span>
              ) : (
                <motion.span
                  key="wa"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
