# sifath.net

Personal website for Sifath Arora — built with [Astro](https://astro.build).

## Pages

- **Home** — Introduction and highlights
- **About** — Personal story, interests, and full resume
- **Blog** — Dentistry, education, advocacy, community, and personal posts
- **Book Reviews** — Books on science, health, and culture
- **Research** — Science projects and competitions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Adding content

Create a new `.md` file in the appropriate folder:

| Section | Folder |
|---------|--------|
| Blog | `src/content/blog/` |
| Book reviews | `src/content/books/` |
| Research | `src/content/research/` |

Example blog post frontmatter:

```markdown
---
title: "My Post Title"
description: "A short summary for the listing page."
date: 2025-12-01
category: dentistry
tags: ["dentistry", "health"]
---

Your content here...
```

Blog categories: `dentistry`, `advocacy`, `community`, `personal`, `education`

## Deploying to sifath.net

```bash
npm run build
```

Deploy the `dist/` folder to Netlify, Vercel, or Cloudflare Pages.
