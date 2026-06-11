import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "../assets/hero-tattoo.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Neon glow orb */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-widest">
              Estúdio Profissional
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-wide">
            A arte que você
            <br />
            <span className="text-primary text-glow">carrega para sempre.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            No <strong className="text-foreground">Stúdio Pexe Tattoo</strong> transformamos sua história em arte.
            Tatuagem e piercing com técnica, higiene impecável e olhar autoral.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground neon-glow hover:scale-105 transition-all"
            >
              Agende sua Tattoo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-primary/10 hover:border-primary transition-all"
            >
              Conheça o Estúdio
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              { n: "10+", l: "Anos de arte" },
              { n: "2k+", l: "Clientes felizes" },
              { n: "100%", l: "Higiene" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
