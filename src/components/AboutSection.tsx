import { ShieldCheck, Award, Palette } from "lucide-react";
import aboutImg from "../assets/about-studio.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "Higiene Rigorosa",
    desc: "Materiais descartáveis, esterilização hospitalar e ambiente sanitizado para sua segurança.",
  },
  {
    icon: Award,
    title: "Experiência",
    desc: "Mais de uma década dedicada à arte da tatuagem e piercing com formação contínua.",
  },
  {
    icon: Palette,
    title: "Arte Única",
    desc: "Cada peça é desenhada exclusivamente para você. Sem repetição, sem padrão.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img src={aboutImg} alt="Tatuador trabalhando no Stúdio Pexe Tattoo" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-xl bg-card border border-primary/40 neon-border p-6 max-w-[200px]">
              <div className="font-display text-4xl text-primary">10+</div>
              <div className="text-xs text-muted-foreground mt-1">Anos transformando peles em arte</div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Sobre o estúdio
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              Onde a pele encontra
              <br />
              <span className="text-primary text-glow">a sua história.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              O Stúdio Pexe Tattoo nasceu da paixão por traduzir momentos em traços eternos. Em um ambiente
              acolhedor e profissional, unimos técnica apurada, criatividade e respeito absoluto pelos
              padrões de biossegurança.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group flex gap-4 rounded-xl border border-border bg-card/50 p-5 hover:border-primary/50 hover:bg-card transition-all"
                >
                  <div className="shrink-0 grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl tracking-wide">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
