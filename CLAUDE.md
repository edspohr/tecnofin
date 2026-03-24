# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # Production build (must pass before any commit)
npm run lint      # ESLint check
```

## Stack

- **Next.js 15+ App Router** — all pages live under `app/`
- **Tailwind CSS v4** — theme tokens are defined in `app/globals.css` via `@theme {}`, NOT in a `tailwind.config.ts`. Use hex values or CSS variables (`var(--color-gold)`) in className when custom tokens aren't resolving.
- **Framer Motion** — all animated components require `"use client"` directive
- **MDX** via `next-mdx-remote` v6 (RSC API) — blog articles in `content/blog/*.mdx`

## Key Configuration

All contact info (phone, WhatsApp, email, LinkedIn) is centralized in **`/lib/config.ts`**. Never hardcode phone numbers elsewhere — always use `SITE_CONFIG` or `getWhatsAppUrl(context)`.

WhatsApp deep links use `wa.me/` format with pre-filled Spanish messages. Each page has a context key in `SITE_CONFIG.whatsapp.messages`.

## Architecture

### Page Structure

```
app/
├── page.tsx              # Homepage — imports from components/sections/
├── cartera-365/          # page.tsx + Cartera365Client.tsx
├── desarrollo/           # page.tsx + DesarrolloClient.tsx
├── nosotros/             # page.tsx + NosotrosClient.tsx
├── contacto/             # page.tsx + ContactoClient.tsx
├── calculadora/          # page.tsx + CalculadoraClient.tsx (fully client-side, no backend)
├── blog/
│   ├── page.tsx          # Blog index — reads all MDX via lib/blog.ts
│   └── [slug]/page.tsx   # Article — server-rendered MDX via next-mdx-remote/rsc
├── sitemap.ts            # Dynamic sitemap including blog articles
└── robots.ts
```

The pattern for pages that need interactivity: `page.tsx` exports metadata (server component) and renders a `*Client.tsx` child that has `"use client"`.

### Blog System

- Articles: `content/blog/*.mdx` with gray-matter frontmatter
- Utilities: `lib/blog.ts` — `getAllArticles()`, `getArticleBySlug()`, `getRelatedArticles()`
- MDX rendering: `components/blog/MDXContent.tsx` (server component using `MDXRemote` from `next-mdx-remote/rsc`)
- Custom MDX components are defined in `MDXContent.tsx` — styled `h1–h3`, `p`, `ul`, `blockquote`, etc.
- `<InlineWhatsAppCTA topic="..." />` is available inside MDX files for mid-article CTAs

### Global Layout

`app/layout.tsx` includes: `<Navbar />`, `<Footer />`, `<WhatsAppFloat />`, `<CookieConsent />`

`WhatsAppFloat` reads `usePathname()` to pick the right WhatsApp message context per page.

### SEO / Structured Data

- `components/seo/OrganizationSchema.tsx` — injected on homepage
- `components/seo/PersonSchema.tsx` — injected on `/nosotros`
- Article JSON-LD is inline in `app/blog/[slug]/page.tsx`

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| navy | `#0B1628` | Main background |
| navy-light | `#112240` | Cards, elevated surfaces |
| gold | `#F5A320` | Primary CTAs, headings, accents |
| cyan-brand | `#00D4FF` | Tech/AI visual accents |
| gray-soft | `#B0BEC5` | Body copy |

## Adding Blog Articles

Create `content/blog/[slug].mdx` with this frontmatter:

```mdx
---
title: "Title"
description: "Meta description ~155 chars"
date: "2025-03-01"
author: "Edison Santiago Saavedra"
category: "Gestión Crediticia"
tags: ["tag1", "tag2"]
---
```

## Before Launch Checklist

- Replace `+593XXXXXXXXX` in `/lib/config.ts` with Edison's real number
- Update LinkedIn URL in `/lib/config.ts`
- Replace photo placeholders (marked with `{/* TODO: Replace with real photo */}`)
- Add Google Analytics 4 / GTM snippet to `app/layout.tsx`
