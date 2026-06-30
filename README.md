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

## Deploying to Vercel (automatic)

Pushes to `main` trigger a GitHub Action that deploys to Vercel.

### One-time setup

1. **Create a Vercel project** at [vercel.com](https://vercel.com) and import `sifatharora/sifath-net` (or create an empty project named `sifath-net`).

2. **Create a Vercel token** at [vercel.com/account/tokens](https://vercel.com/account/tokens).

3. **Get your Org ID and Project ID** — in your project folder run:
   ```bash
   npx vercel link
   ```
   Then open `.vercel/project.json` and copy `orgId` and `projectId`.

4. **Add GitHub secrets** at `https://github.com/sifatharora/sifath-net/settings/secrets/actions`:
   - `VERCEL_TOKEN` — your Vercel token
   - `VERCEL_ORG_ID` — from `.vercel/project.json`
   - `VERCEL_PROJECT_ID` — from `.vercel/project.json`

After that, every push to `main` deploys automatically.
