# Frontend Shell

The frontend provides a responsive planning experience for the OmniDevice AI Fusion platform. It highlights signature hardware
playbooks and lets visitors generate deterministic integration plans using a deterministic client-side module that mirrors the
backend agents.

## Available Scripts

```bash
npm run dev   # start a lightweight static server at http://127.0.0.1:3000
npm run lint  # syntax-check JavaScript sources using the Node.js parser
npm test      # execute automated tests with the built-in node:test runner
```

The project intentionally avoids third-party dependencies so it can run in restricted environments. When the platform evolves,
replace the static setup with your framework of choice (Next.js, Remix, Astro, etc.) and hook it into the backend API.
