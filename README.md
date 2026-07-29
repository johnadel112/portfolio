# John Adel Makram — Portfolio

A modern, responsive single-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Fixed navigation with active-section highlighting and accessible mobile menu
- Hero, About & Education, Experience timeline, Featured projects with detail modals, Skills cards, Contact form, Footer
- Premium dark theme (deep navy + electric teal accents)
- Subtle Framer Motion animations with `prefers-reduced-motion` support
- SEO + Open Graph metadata and custom JAM favicon
- Static data files — no backend or database
- Vercel-ready static deployment

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## Getting Started

### Prerequisites

- Node.js 18.18+ (recommended: 20+)
- npm

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
app/
  layout.tsx          # Fonts, SEO metadata, shell
  page.tsx            # Home page composition
  globals.css         # Theme tokens & utilities
  icon.tsx            # JAM favicon
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  ProjectCard.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
  SectionHeading.tsx
  Motion.tsx
data/
  site.ts             # Personal info, nav, education
  experience.ts
  projects.ts
  skills.ts
public/
  profile.jpg         # Your portrait (optional)
  cv.pdf              # Your CV (optional)
  projects/           # Optional project screenshots
```

## Replacing the Profile Image

1. Add your portrait as `public/profile.jpg` (JPEG or PNG; JPG recommended).
2. Open `data/site.ts` and set:

```ts
hasProfileImage: true,
profileImage: "/profile.jpg",
```

3. Restart the dev server if it is already running.

Until a photo is provided, the hero shows an initials (**JAM**) fallback with the graduation badge.

Optional: place project screenshots under `public/projects/` and wire paths in `data/projects.ts` via the `image` field when you extend the card UI.

## Replacing the CV

1. Export your resume as PDF.
2. Save it as `public/cv.pdf`.
3. The **Download CV** button already points to `/cv.pdf` (`siteConfig.cvPath`).

If the file is missing, the download link will 404 until you add it.

## Updating Content

Edit the static files under `data/`:

- `site.ts` — name, title, about, social links, education
- `experience.ts` — timeline entries
- `projects.ts` — featured and other projects
- `skills.ts` — skill categories

Presentation components consume this data; keep copy changes in the data layer.

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts, then `vercel --prod` for production.

### Option B — GitHub + Vercel Dashboard

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework Preset: **Next.js** (auto-detected).
5. Build Command: `next build` (default).
6. Output: leave default.
7. Click **Deploy**.

No environment variables are required for the default static portfolio.

After deploy, update `metadataBase` / Open Graph URLs in `app/layout.tsx` to your real Vercel (or custom) domain.

## Accessibility Notes

- Semantic landmarks (`header`, `main`, `footer`, `nav`, `section`)
- Visible `:focus-visible` rings
- Keyboard-accessible nav, buttons, and project modals (Escape to close)
- Descriptive link labels and image alt text
- Strong contrast on the dark theme

## License

Personal portfolio for John Adel Makram. All rights reserved.
