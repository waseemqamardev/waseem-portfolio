# Waseem Qamar — Portfolio

Professional Flutter developer portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and a lightweight **React Three Fiber** orb (with CSS fallback if WebGL is unavailable).

## Local setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start local dev server     |
| `npm run build`   | Typecheck + production build |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run Oxlint                 |

## Content you can edit

All personal details, experience, projects, and social links live in one file:

- [`src/data/site.ts`](src/data/site.ts)

Profile photo (optional): place a portrait at `public/images/profile.jpg`. Until then, a monogram placeholder is shown.

Project images live under `public/images/projects/`.

## Deploy to Vercel

1. Push this repo to GitHub (or import the folder in the Vercel dashboard).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Leave `VITE_BASE_PATH` unset (default `/`).
5. Deploy. Your site will be on a `*.vercel.app` URL (or your custom domain).

No environment secrets are required.

## Deploy to GitHub Pages

### Option A — User/organization site (`username.github.io`)

1. Create a repo named `username.github.io`.
2. Build with default base:

```bash
npm run build
```

3. Publish the `dist` folder (GitHub Actions or `gh-pages` branch). Base path stays `/`.

### Option B — Project site (`username.github.io/repo-name`)

1. Set the Vite base path to your repository name when building:

```bash
# PowerShell
$env:VITE_BASE_PATH="/your-repo-name/"; npm run build

# bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```

2. In `vite.config.ts`, `base` already reads `process.env.VITE_BASE_PATH`.
3. Enable GitHub Pages: **Settings → Pages → Deploy from a branch** (or use Actions).
4. Point Pages at the branch/folder that contains the built `dist` contents.

Example GitHub Action (`.github/workflows/deploy.yml`) you can add:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          VITE_BASE_PATH: /your-repo-name/
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Replace `/your-repo-name/` with your actual repository name (leading and trailing slashes).

## Notes

- Social / contact links: edit `site.social` and contact fields in `src/data/site.ts`.
- Contact uses `mailto:` — no backend or fake form success state.
- Animations respect `prefers-reduced-motion`.
- This project does not push or deploy for you; run the steps above when you are ready.
