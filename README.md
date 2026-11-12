# Arezoo Jafary — Portfolio

A Next.js and Tailwind portfolio for Arezoo Jafary, Product Designer. Visual language follows [designleader.se](https://www.designleader.se/): dark editorial layout, Manrope headlines, muted-to-white contrast, and a five-item navigation (Home, Projects, How I Build, About Me, Contact).

Content and links are taken from the resume served at `public/arezoo-jafary-resume.pdf`.

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to cPanel (static hosting)

The site builds to plain HTML/CSS/JS in `out/` — no Node.js needed on the server.

1. Set your domain once:
   ```bash
   cp .env.production.example .env.production   # then edit NEXT_PUBLIC_SITE_URL
   ```
2. Build and bundle:
   ```bash
   npm run zip        # builds out/ and packs it into site.zip
   ```
3. In cPanel → **File Manager** → `public_html`: upload `site.zip`, right-click → **Extract**,
   then delete `site.zip`. (Or upload the *contents* of `out/` directly.)
   Turn on **Show Hidden Files** in File Manager settings to confirm `.htaccess` is there.
4. Once SSL is active (cPanel → SSL/TLS Status → AutoSSL), uncomment the HTTPS block in
   `public/.htaccess`, rebuild, and re-upload.

`public/.htaccess` is copied into `out/` and handles the 404 page, old-URL redirects
(`/resume`, `/playbook`, `/partner`), correct content types, gzip, and caching.

To check the build locally before uploading: `npm run preview`.

### Images

Originals live in `assets/images/`. `npm run images` (runs automatically before `dev` and
`build`) writes resized WebP files to `public/_img/`, and `lib/image-loader.ts` points
`next/image` at them. To add or replace an image, drop it into `assets/images/` and reference
it by its path there (e.g. `/work/pico-ai.jpg`).

## SEO

- Per-page titles, descriptions, and canonical URLs (`lib/seo.tsx`)
- Open Graph / Twitter cards: a site card (`app/opengraph-image.tsx`) and one per case study (`app/work/[slug]/opengraph-image.tsx`)
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- Icons: `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.tsx`
- JSON-LD: `Person` on every page, `CreativeWork` on case studies

Project screenshots live in `assets/images/work/` and are referenced from `lib/data.ts` (`cover`).

## Pages

- `/` — Home and selected work
- `/projects` — All case studies
- `/how-i-build` — Design process
- `/about` — Background, education, skills, resume download
- `/contact` — Direct contact channels and socials
- `/work/coffee-subscription`, `/work/pico-ai`, `/work/yogian` — Case stories
