<div align="center">

# DetectViz Portfolio

個人作品集網站，展示 SRE、數據工程與可觀測性領域的專案經驗。

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdetectviz.com&style=flat-square)](https://detectviz.com)
[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Live Demo](https://detectviz.com) | [Architecture](docs/ARCHITECTURE.md) | [Deployment](docs/DEPLOYMENT.md)

</div>

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Astro, Preact |
| Styling | Tailwind CSS, Material Design 3 |
| Animation | AOS, GSAP |
| Deployment | GitHub Pages, Cloudflare |

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## Project Structure

```
src/
├── assets/        # Static assets (avatar, logo)
├── components/    # Astro components
│   ├── layout/    # Layout components (Navbar)
│   ├── sections/  # Page sections (Hero, Skills, Projects...)
│   └── ui/        # UI components (ThemeToggle, Carousel)
├── data/          # Data files (me.ts, projects.ts, skills.ts)
├── layouts/       # Page layouts
├── pages/         # Route pages
├── scripts/       # Client-side scripts
├── styles/        # Global styles (theme.css, global.css)
├── types/         # TypeScript types
└── utils/         # Utilities (i18n)
```

## Data Management

<details>
<summary><strong>Update personal info</strong></summary>

Edit `src/data/me.ts`

</details>

<details>
<summary><strong>Update projects</strong></summary>

Edit `src/data/projects.ts`

</details>

<details>
<summary><strong>Update skills</strong></summary>

Edit `src/data/skills.ts`

</details>

<details>
<summary><strong>Update translations</strong></summary>

Edit `src/data/zh-tw.json`

</details>

## Deployment

Push to `main` branch triggers automatic deployment via GitHub Actions.

```bash
git add .
git commit -m "feat: new feature"
git push origin main
```

## Documentation

| Document | Description |
|----------|-------------|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System architecture |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deployment guide |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Design system |
| [CHANGELOG.md](docs/CHANGELOG.md) | Change log |

## License

[MIT License](LICENSE)

---

<div align="center">

**[detectviz.com](https://detectviz.com)**

</div>
