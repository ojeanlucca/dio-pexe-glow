# Plano: Landing Page — Stúdio Pexe Tattoo

## Escopo
Criar uma landing page moderna, responsiva e de alta conversão para o estúdio de tatuagem/piercing "Stúdio Pexe Tattoo", com estética Dark Mode urbana e detalhes em **verde-limão neon** (#a3e635 / #84cc16).

---

## Paleta e Design System

### Cores
- **Fundo**: preto profundo — `oklch(0.05 0 0)` → token `--background`
- **Superfícies/cards**: grafite escuro — `oklch(0.18 0.01 260)` → `--card`
- **Texto principal**: branco suave — `oklch(0.95 0.005 260)` → `--foreground`
- **Texto secundário**: cinza médio — `oklch(0.65 0.02 260)` → `--muted-foreground`
- **Cor primária / neon**: verde-limão — `oklch(0.82 0.22 130)` → `--primary`
- **Neon glow**: `oklch(0.82 0.22 130 / 40%)` para sombras e efeitos
- **Bordas**: branco com 10% opacidade

### Tipografia
- Headings: fonte bold/display, tracking apertado
- Body: fonte clean sans-serif legível
- Tamanhos escaláveis (clamp) para responsividade

### Efeitos
- Botões primários com gradiente sutil verde-limão + sombra glow
- Hover nos cards: elevação + brilho neon na borda
- Transições suaves (`transition-all duration-300`)

---

## Seções da Landing Page

### 1. Header / Navegação
- Logo "Pexe Tattoo" à esquerda
- Links de navegação: Início, Sobre, Depoimentos, Contato
- Botão CTA "Agende sua Tattoo" — estilo neon
- Responsivo: menu hambúrguer em mobile

### 2. Hero
- Título grande: "Stúdio Pexe Tattoo — A arte que você carrega para sempre"
- Subtítulo com descrição do estúdio
- Botões CTA duplos: "Agende Agora" (primário) + "Veja Nosso Portfólio" (outline neon)
- Background: preto profundo com textura/padrão sutil (gradiente radial ou noise)
- Destaques visuais: linhas/elementos neon decorativos

### 3. Sobre o Estúdio
- Layout com texto + imagem placeholder
- Título "Sobre o Estúdio"
- Parágrafo descrevendo a filosofia do estúdio
- Destaques em cards: "Higiene", "Experiência", "Arte Única" com ícones Lucide
- Animação de entrada suave ao scroll

### 4. Depoimentos
- Título "O que nossos clientes dizem"
- 3 cards de depoimentos com:
  - Nome do cliente
  - Estrelas de avaliação
  - Texto do depoimento
  - Avatar placeholder
- Efeito hover: card sobe e borda ganha brilho neon

### 5. Contato / Onde nos Encontrar
- Título "Agende sua Sessão"
- Informações: endereço, WhatsApp, horário de funcionamento
- Botão "Falar no WhatsApp" — estilo neon grande
- Botão secundário "Como Chegar via Google Maps" — outline
- Layout com destaque visual (borda neon)

### 6. Footer
- Logo + copyright
- Links rápidos
- Redes sociais (ícones)
- Crédito sutil

---

## Estrutura de Arquivos

```
src/
  routes/
    index.tsx          → Landing page (compõe todas as seções)
  components/
    Header.tsx         → Navegação fixa
    HeroSection.tsx    → Hero com CTAs
    AboutSection.tsx   → Sobre + diferenciais
    TestimonialsSection.tsx → Depoimentos
    ContactSection.tsx → Contato + WhatsApp + Maps
    Footer.tsx         → Rodapé
```

---

## Dependências
Nenhuma nova necessária. Usar:
- `lucide-react` (já instalado) para ícones
- `framer-motion` (já não está instalado, avaliar se necessário — para micro-interações simples, Tailwind transitions são suficientes)
- Tailwind CSS v4 (já configurado)

---

## SEO & Metadados
- Título: "Stúdio Pexe Tattoo — Tatuagem & Piercing | [Cidade]"
- Meta description com keywords de tatuagem e local
- OG tags para compartilhamento social
- viewport responsivo (já presente)

---

## Responsividade
- Mobile-first
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hero: texto centralizado em mobile, lado a lado em desktop
- Cards: 1 coluna mobile, 2-3 colunas desktop
- Navegação: hambúrguer em < md
