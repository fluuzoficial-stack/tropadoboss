import type { ReactNode } from "react";

export function LinkCard({ href, label, icon, delay }: { href: string; label: string; icon: ReactNode; delay: number }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre em nova aba)`}
      style={{ animationDelay: `${delay}ms` }}
      className="animate-rise group relative flex min-h-[72px] items-center rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-glow-strong active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg">{icon}</span>
      <span className="flex-1 pr-12 text-center font-display text-2xl tracking-[0.12em] text-foreground transition-colors group-hover:text-glow">
        {label}
      </span>
    </a>
  );
}
