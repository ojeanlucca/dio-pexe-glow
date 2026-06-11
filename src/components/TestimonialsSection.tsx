import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Cliente desde 2022",
    text: "Experiência incrível do início ao fim. O traço é impecável, o ambiente super limpo e o atendimento atencioso. Já voltei três vezes!",
    rating: 5,
  },
  {
    name: "Rafael Mendes",
    role: "Primeira tattoo",
    text: "Estava com medo da minha primeira tatuagem, mas o Pexe me deixou super à vontade. Resultado superou todas as expectativas.",
    rating: 5,
  },
  {
    name: "Júlia Almeida",
    role: "Piercing",
    text: "Fiz dois piercings e o cuidado com higiene me impressionou. Cicatrizou perfeitamente e sem complicações. Recomendo demais.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 bg-card/30">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            O que dizem
            <br />
            <span className="text-primary text-glow">nossos clientes.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Histórias reais de quem confiou sua pele à nossa arte.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:neon-border"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-foreground/90 leading-relaxed">"{t.text}"</p>

              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-border">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 text-primary font-display text-lg">
                  {t.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
