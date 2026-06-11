import { MessageCircle, MapPin, Clock, Phone, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Vamos criar juntos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            Agende sua
            <span className="text-primary text-glow"> sessão.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Tire suas dúvidas, peça orçamento ou marque seu horário. Respondemos rápido pelo WhatsApp.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: "Endereço", text: "Rua das Artes, 123 — Centro" },
              { icon: Clock, title: "Horário", text: "Ter — Sáb · 10h às 20h" },
              { icon: Phone, title: "Telefone", text: "(11) 99999-9999" },
              { icon: Instagram, title: "Instagram", text: "@pexetattoo" },
            ].map((i) => (
              <div
                key={i.title}
                className="flex gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/50 transition-colors"
              >
                <div className="shrink-0 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.title}</div>
                  <div className="text-foreground font-medium mt-0.5 truncate">{i.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="lg:col-span-3 relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-card/40 p-8 sm:p-10 neon-border">
            <h3 className="font-display text-3xl sm:text-4xl">
              Pronto para sua próxima <span className="text-primary">arte?</span>
            </h3>
            <p className="mt-4 text-muted-foreground">
              Clique abaixo e fale agora mesmo com nossa equipe. Atendimento personalizado,
              orçamento sem compromisso.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20uma%20sessão%20no%20Stúdio%20Pexe%20Tattoo."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground neon-glow hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Rua+das+Artes+123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-primary/10 hover:border-primary transition-all"
              >
                <MapPin className="h-5 w-5" />
                Como Chegar
              </a>
            </div>

            {/* Mock map */}
            <div className="mt-8 relative h-48 rounded-xl overflow-hidden border border-border grid-bg bg-background/50">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="inline-grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground neon-glow animate-pulse">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-sm text-foreground font-medium">Stúdio Pexe Tattoo</div>
                  <div className="text-xs text-muted-foreground">Rua das Artes, 123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
