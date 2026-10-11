import { createFileRoute } from "@tanstack/react-router";
import { LinkCard } from "@/components/LinkCard";
import boss from "@/assets/boss.jpg.asset.json";
import money from "@/assets/money.jpg.asset.json";
import eyes from "@/assets/eyes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BOSS • Tropa do Boss" },
      { name: "description", content: "Bem-vindo à tropa. Acesse as redes do BOSS, a comunidade no Discord e o LivePix." },
      { property: "og:title", content: "BOSS • Tropa do Boss" },
      { property: "og:description", content: "Acesse minhas redes, fortaleça a tropa e acompanhe minhas lives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SubwayIcon = (
  <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
    <rect width="48" height="48" rx="10" fill="#F7C600" />
    <text x="24" y="31" textAnchor="middle" fontSize="16" fontWeight="900" fill="#1E5BD8" fontFamily="Arial Black, sans-serif">SS</text>
  </svg>
);
const DiscordIcon = (
  <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
    <rect width="48" height="48" rx="10" fill="#5865F2" />
    <path transform="translate(10 12) scale(1.17)" fill="#fff" d="M20.3 1.7A19.6 19.6 0 0 0 15.4.2l-.6 1.3a18 18 0 0 0-5.6 0L8.6.2a19.5 19.5 0 0 0-4.9 1.5C.6 6.4-.3 10.9.1 15.4A19.8 19.8 0 0 0 6.1 18.4l1.3-2.1a12.7 12.7 0 0 1-2-1l.5-.4a14 14 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.7 19.7 0 0 0 6-3c.5-5.2-.9-9.7-3.6-13.7ZM8 12.6c-1.2 0-2.2-1.1-2.2-2.4S6.8 7.8 8 7.8s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z" />
  </svg>
);
const LivePixIcon = (
  <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
    <rect width="48" height="48" rx="10" fill="#FF3C5F" />
    <path fill="#fff" d="M24 11 37 24 24 37 11 24Z" opacity=".25" />
    <text x="24" y="30" textAnchor="middle" fontSize="15" fontWeight="900" fill="#fff" fontFamily="Arial Black, sans-serif">LP</text>
  </svg>
);

const particles = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  dur: `${9 + (i % 5) * 2}s`,
  delay: `${(i * 1.3) % 10}s`,
}));

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* money texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12] mix-blend-luminosity"
        style={{ backgroundImage: `url(${money.url})` }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <span key={i} className="particle" style={{ left: p.left, animationDuration: p.dur, animationDelay: p.delay }} />
        ))}
      </div>

      <main className="relative mx-auto flex max-w-md flex-col px-5 pb-10 pt-6 md:max-w-lg">
        <header className="animate-rise flex items-center justify-center">
          <div className="text-center leading-none">
            <span className="font-display text-3xl tracking-[0.3em] text-primary text-glow">BOSS</span>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.5em] text-muted-foreground">TROPA DO BOSS</p>
          </div>
        </header>

        <section className="mt-8 flex flex-col items-center text-center">
          <div className="animate-rise animate-pulse-glow relative w-full max-w-[320px] overflow-hidden rounded-2xl border border-border" style={{ animationDelay: "120ms" }}>
            <img src={boss.url} alt="Personagem BOSS com olho branco brilhante" width={1080} height={1080} className="aspect-square w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <h1 className="animate-rise -mt-14 relative font-display text-7xl tracking-[0.15em] text-foreground text-glow md:text-8xl" style={{ animationDelay: "250ms" }}>
            BOSS
          </h1>
          <p className="animate-rise font-display text-2xl tracking-[0.3em] text-primary" style={{ animationDelay: "350ms" }}>
            BEM-VINDO À TROPA
          </p>
          <p className="animate-rise mt-3 max-w-xs text-sm text-muted-foreground" style={{ animationDelay: "450ms" }}>
            Acesse minhas redes, fortaleça a tropa e acompanhe minhas lives.
          </p>
        </section>

        <nav className="mt-8 flex flex-col gap-4" aria-label="Links">
          <LinkCard href="https://tavvkkj" label="SUBWAY SURFERS" icon={SubwayIcon} delay={550} />
          <LinkCard href="https://discord.gg/JFW8nxVmCp" label="MINHA COMUNIDADE" icon={DiscordIcon} delay={650} />
          <LinkCard href="https://livepix.gg/tropadoboss" label="LIVE PIX" icon={LivePixIcon} delay={750} />
        </nav>

        <div className="relative mt-10 overflow-hidden rounded-xl border border-border">
          <img src={eyes} alt="" loading="lazy" width={1280} height={512} className="w-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        </div>

        <footer className="mt-8 text-center">
          <p className="font-display text-lg tracking-[0.25em] text-foreground">© BOSS • TROPA DO BOSS</p>
          <p className="mt-1 text-[11px] tracking-[0.3em] text-muted-foreground">TODOS NA TROPA. TODOS COM O BOSS.</p>
        </footer>
      </main>
    </div>
  );
}
