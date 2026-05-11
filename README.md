# Vitral — Landing Page

Landing page institucional da Vitral (software house brasileira). Construída em Next.js 15 (App Router) com foco em SEO server-rendered e Core Web Vitals.

## Stack

- Next.js 15 (App Router, React 19)
- TypeScript
- CSS Modules + globals.css
- `next/font/google` (Geist, Geist Mono, Instrument Serif)

## Scripts

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start          # serve build de produção
npm run lint
```

## Configuração

Variável opcional para definir o domínio canônico em produção:

```bash
NEXT_PUBLIC_SITE_URL=https://vitral.software
```

Sem ela, o default `https://vitral.software` é usado em metadata, sitemap e Open Graph.

## Notas

- Layout desktop-fixo (1440px), seguindo o design original. Responsividade mobile não está no escopo desta versão.
- Tema escuro fixo. Tokens de cor em `app/globals.css`.
- SEO: `<title>`, `description`, Open Graph, Twitter Card, JSON-LD (Organization), `sitemap.xml`, `robots.txt` e `opengraph-image` dinâmicos são gerados pelo App Router.
