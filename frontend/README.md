# Frontend Shell

The frontend provides a static marketing experience for the GPT5 Codex platform. It highlights the signature AI features and allows visitors to generate teaser concepts using a deterministic client-side module.

## Available Scripts

```bash
npm run dev   # start a lightweight static server at http://127.0.0.1:3000
npm run lint  # syntax-check JavaScript sources using the Node.js parser
npm test      # execute automated tests with the built-in node:test runner
```

The project intentionally avoids third-party dependencies so it can run in restricted environments. When the platform is ready to evolve, replace the static setup with your framework of choice (Next.js, Remix, Astro, etc.) and hook it into the backend API.
