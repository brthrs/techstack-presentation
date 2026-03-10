# Techstack Presentation

A techstack presentation built by [Brthrs](https://brthrs.nl).
Documents and showcases the chosen technologies with a browsable UI.


## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run typecheck` | Type-check with `tsc` |
| `npm run lint` | Lint with ESLint |

## Docker

```bash
docker build -t techstack-starter .
docker run -p 3000:3000 techstack-starter
```
