<h1 align="center">🎙️ VoiceFlow - Podcast Website Template </h1>

## Project Info

**VoiceFlow** is a **frontend-only** template that replicates the UI and interactions of a modern podcast host website (inspired by the Wavecast example). Built with **Next.js** and **TailwindCSS**, the project focuses on design, responsive layout, audio UI, and client-side interactions - **no backend, CMS, or production data layer included**.
Use it as a launchpad or UI prototype; integrate your own API, headless CMS, or server later.

<br>

<div align="center">

⁃ ᴄᴏɴᴛᴇɴᴛꜱ ⁃  
[Visual Tour](#visual-tour)
| [Features](#features)
| [Technologies](#technologies--libraries)
| [Quick Start](#quick-start)
| [Quick Start](#project-notes)


<div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=black" alt="react.js" />
    <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logoColor=white&logo=react&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="greensock" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

</div>


---

## Visual Tour

Place screenshots in `./public/screenshots/` and reference them here:

```md
<p align="center">
  <img src="./public/screenshots/homepage.png" alt="VoiceFlow homepage" />
</p>
```

(Replace with actual screenshots from your project.)

---

## Features

* Pixel-perfect UI inspired by a production podcast site (homepage, episodes listing, episode detail pages).
* Built-in audio player UI with play/pause, scrub, duration and episode metadata.
* Episode carousel / highlights (Swiper).
* Category / tag filters and search-ready layout.
* Host profile / about pages and social links.
* Responsive design (mobile → desktop).
* Lightweight UI animations and counters (react-countup, GSAP-like interactions where used).
* Toast notifications for small UI events (react-hot-toast).
* Accessible markup and SEO-ready Next.js structure (meta tags, open graph placeholders).
* Clean, reusable component structure suitable for extension.

---

## Technologies & Libraries

**Framework / Tooling**

* Next.js 16.1.6
* React 19.2.3
* Tailwind CSS 4 + `@tailwindcss/postcss`

**UI / Helpers**

* Swiper (carousel)
* react-countup (counters)
* react-hot-toast (toasts)
* react-icons / @iconify/react / bootstrap-icons / remixicon (icons)
* clsx, tailwind-merge (class utilities)
* FontAwesome brands (social icons)

**Dev tools**

* TypeScript
* Biome (lint & format)

*Note: This list is taken from the project's `package.json` and represents the libs bundled with the template.*

---

## Quick Start

### Prerequisites

* Node.js (recommended LTS)
* npm

### Clone & Install

```bash
git clone https://github.com/zyferlink/podcast-website-nextjs-app.git
cd podcast-website-nextjs-app
npm install
```

### Development

Start local dev server:

```bash
npm run dev
```

Open: `http://localhost:3000`

### Build / Production

```bash
npm run build
npm run start
```

### Lint & Format

```bash
npm run lint
npm run format
```

---

## Project Branches

* **main** — Production / stable UI
* **dev** — Active development, experimental features

(Adjust branch names/URLs in README to match your repo setup if different.)

---

## Project Notes

* **Frontend-only template:** No backend API or CMS included. To serve real episodes, wire a headless CMS, RSS parser, or custom API to the page components and data fetching methods.
* **Data fetching strategy:** Uses Next.js page routes and can be adapted to SSG, SSR, or client-side fetching depending on your deployment needs.
* **Customization tips:** Replace placeholder audio sources with your streaming URLs, add /public/assets for episode artwork, and update meta tags for SEO and social sharing.

---

If you want, I can:

* produce a trimmed `README.md` file content ready to paste into your repo, or
* generate example `episode` frontmatter and a small `data/` JSON schema to feed the UI.

Which one would you like next?
