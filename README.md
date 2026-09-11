# Portfolio

Personal site for Danish Ansari, built with Next.js 15, React 19, Tailwind CSS 4 and Framer Motion.

## Editing content

All copy lives in `lib/content.ts`: profile, stack, experience, open-source contributions and projects. Presentation components under `components/sections/` read from it and contain no copy of their own.

## Running locally

```bash
npm install
npm run dev
```

The activity graph calls the GitHub GraphQL API through a server action. Set `GITHUB_TOKEN` in `.env.local` to enable it; without a token the section degrades to a link to the GitHub profile.

## Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```
