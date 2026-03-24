# Sitio Web de Tecnofin

Sitio web de marketing para Tecnofin — software financiero para cooperativas de crédito en Ecuador y LATAM.

## 🚀 Apartado Funcional

El sitio está diseñado para presentar los servicios y productos de Tecnofin, captar clientes potenciales y proveer contenido de valor. Cuenta con la siguiente estructura de páginas:

- **Inicio (`/`)**: Página de aterrizaje con la propuesta de valor principal.
- **Cartera 365 (`/cartera-365`)**: Landing page específica del producto estrella "Cartera 365".
- **Desarrollo a Medida (`/desarrollo`)**: Página para servicios de desarrollo de software personalizado.
- **Nosotros (`/nosotros`)**: Información sobre la empresa, el equipo y la misión de Tecnofin.
- **Contacto (`/contacto`)**: Formularios y medios directos para contactar a ventas o soporte.
- **Calculadora ROI (`/calculadora`)**: Herramienta interactiva para calcular el retorno de inversión del cliente.
- **Blog (`/blog`)**: Índice de artículos y publicaciones (`/blog/[slug]`) con contenido sobre gestión crediticia y tecnología financiera.

## 💻 Apartado Técnico

El proyecto está construido con tecnologías modernas enfocadas en el rendimiento, SEO y una excelente experiencia de desarrollador.

- **Framework**: Next.js 16+ (App Router)
- **Lenguaje**: TypeScript y React 19
- **Estilos**: Tailwind CSS v4 con PostCSS
- **Animaciones**: Framer Motion
- **Blog (CMS local)**: Archivos locales `.mdx` analizados con `gray-matter` y renderizados con `next-mdx-remote`. Soporta GitHub Flavored Markdown (`remark-gfm`).
- **SEO**: Generación de sitemap dinámico (`next-sitemap`), Componentes de Schema JSON-LD y estimación de tiempo de lectura (`reading-time`).
- **Despliegue**: Optimizado para Vercel. No requiere variables de entorno complejas para su funcionamiento base.

## 📦 Estructura del Proyecto

```text
app/                    # Páginas y enrutamiento (Next.js App Router)
├── page.tsx            # Página de Inicio
├── cartera-365/        # Página de producto
├── desarrollo/         # Página de desarrollo a medida
├── nosotros/           # Página sobre la empresa
├── contacto/           # Página de contacto
├── calculadora/        # Calculadora de ROI
├── blog/               # Índice del blog y artículos dinámicos [slug]
├── sitemap.ts          # Generador de sitemap XML dinámico
└── robots.ts           # Archivo robots.txt automático

components/
├── layout/             # Componentes estructurales (Navbar, Footer)
├── sections/           # Secciones principales de la página de inicio
├── blog/               # Componentes específicos para el blog
├── seo/                # Componentes para schema JSON-LD
└── ui/                 # Componentes de interfaz reutilizables (Botones, Badges, etc.)

content/blog/           # Artículos del blog en formato MDX
lib/
├── config.ts           # Configuración global del sitio, teléfonos, y URLs de WhatsApp
└── blog.ts             # Funciones de utilidad para procesar el blog
```

## ⚙️ Configuración

Para actualizar la información de contacto global, edita el archivo `/lib/config.ts`:
- Número telefónico (`phone` y `phoneDisplay`)
- Número y URL base de WhatsApp en `whatsapp.base`
- Dirección de correo electrónico
- URL de LinkedIn

### Integración con WhatsApp
Todos los enlaces de WhatsApp utilizan Deep Links `wa.me/`. Actualiza el número en `/lib/config.ts`:
- `phone`: Formato E.164 (sin el signo +).
- `whatsapp.base`: URL completa de wa.me.

## 📝 Agregando Artículos al Blog

Para crear un nuevo artículo, añade un archivo `.mdx` en la carpeta `/content/blog/` con el siguiente "frontmatter" estructural:

```mdx
---
title: "Título del Artículo"
description: "Meta descripción para SEO (max 155 caracteres)"
date: "2025-03-01"
author: "Edison Santiago Saavedra"
category: "Gestión Crediticia"
tags: ["etiqueta1", "etiqueta2"]
---

El contenido del artículo escrito en Markdown va aquí...
```

## 🚀 Despliegue (Vercel)

1. Haz push de los cambios hacia GitHub.
2. Conecta el repositorio a tu cuenta de Vercel.
3. Despliega — no se requieren variables de entorno para su funcionalidad básica.
4. Configura el dominio personalizado a `tecnofin.ec`.

## 📋 Pendientes antes del Lanzamiento (TODO)

- [x] Reemplazar la foto provisional de Edison en `FounderSection.tsx` y `NosotrosClient.tsx`.
- [x] Actualizar el número de teléfono en `/lib/config.ts`.
- [x] Actualizar la URL de LinkedIn en `/lib/config.ts`.
- [ ] Añadir la etiqueta de Google Analytics 4 (reemplazar el valor provisional en `layout.tsx`).
- [ ] Añadir logos reales de instituciones financieras (si están disponibles).
- [ ] Revisar y finalizar todos los textos con el cliente.
