# rhythm0-site

Personal portfolio site for Siyuan Qi / `rhythm0`.

This project presents a hybrid identity: software engineer, creative technologist, and artist. The site combines technical portfolio content with music, painting, calligraphy, photography, and a small reflective "garden" section.

## What the Site Contains

- `Hero`: positioning statement and personal introduction
- `Projects`: selected engineering work across distributed systems, AI, data, and cloud
- `Experience`: industry, research, and teaching experience
- `Music`: artist note and track links under the `rhythm0` alias
- `Painting`, `Calligraphy`, `Photography`: visual portfolio sections
- `Garden`: a closing space for quotes and creative process fragments

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```text
app/                 App entry and layout
components/          Reusable UI sections and cards
data/                Portfolio content for navigation, projects, gallery, experience
lib/                 Small utilities and development self-checks
styles/              Global styles
types/               Shared TypeScript types
public/              Static assets
```

## Content Model

Most editable content lives in `data/`:

- [data/navItems.ts](/Users/qisiyuan/Desktop/rhythm0-site/data/navItems.ts:1)
- [data/projects.ts](/Users/qisiyuan/Desktop/rhythm0-site/data/projects.ts:1)
- [data/experience.ts](/Users/qisiyuan/Desktop/rhythm0-site/data/experience.ts:1)
- [data/gallery.ts](/Users/qisiyuan/Desktop/rhythm0-site/data/gallery.ts:1)

The page composition lives in [app/page.tsx](/Users/qisiyuan/Desktop/rhythm0-site/app/page.tsx:1), with section-specific UI in `components/`.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Notes

- The site uses `next/font/google` for typography.
- Some lightweight runtime self-checks are executed in development from [lib/test.ts](/Users/qisiyuan/Desktop/rhythm0-site/lib/test.ts:1).
- The current content includes placeholders in parts of the gallery and can be replaced with real media later.
