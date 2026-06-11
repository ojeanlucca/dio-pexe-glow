import { Zap, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <a href="#inicio" className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" fill="currentColor" />
              <span className="font-display text-xl tracking-wider">
                PEXE <span className="text-primary">TATTOO</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Arte autoral, técnica e biossegurança em cada traço.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          <div className="flex gap-3">
            <a
              href="https://instagram.com/pexetattoo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row gap-2 sm:justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Stúdio Pexe Tattoo. Todos os direitos reservados.</span>
          <span>Feito com paixão pela arte.</span>
        </div>
      </div>
    </footer>
  );
}
