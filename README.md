# GPT5 Codex AI Subscription Platform

This repository hosts the scaffold for an AI-driven subscription platform. It is organised as a monorepo with dedicated areas for the frontend experience, backend services, infrastructure tooling, and continuous integration.

## Repository Layout

- `frontend/` – Vanilla JavaScript frontend assets, local development scripts, and automated tests.
- `backend/` – Python-based HTTP service exposing the AI ideation API together with accompanying unit tests.
- `infra/` – Infrastructure assets, such as container orchestration and database bootstrap files.
- `.github/workflows/` – GitHub Actions workflows that lint and test the codebase on every push and pull request.

## Getting Started

### Prerequisites

- Node.js 18 or later.
- Python 3.11 or later.

### Frontend

```bash
cd frontend
npm install   # installs development dependencies (none by default, but creates a lockfile)
npm run dev   # start the static development server
npm run lint  # run lightweight syntax checks
npm test      # execute Node.js test suites
```

The frontend delivers a simple landing page that highlights the creative AI experiences offered by the platform. Utility modules drive the ideation content and are fully covered by unit tests.

### Backend

```bash
cd backend
python -m compileall app  # quick syntax validation
python -m unittest discover tests
python app/server.py      # start the HTTP API on http://127.0.0.1:8000
```

The backend exposes a `/api/ideas` endpoint that returns deterministic AI concept pitches based on incoming themes and tones. Logic is encapsulated within `app.ai` so it can be reused by additional services or asynchronous workers.

### Infrastructure

`infra/docker-compose.yml` provisions a local environment composed of the backend API, a static frontend server, and a PostgreSQL database seed. These services are placeholders intended to be replaced by production-ready deployments during later project phases.

## Continuous Integration

GitHub Actions automatically run the Python and Node.js lint/test suites defined above. The workflow is located at `.github/workflows/ci.yml` and is executed for pull requests and pushes to the default branch to maintain high code quality.

## Next Steps

1. Replace the handcrafted HTTP server with a production-ready framework such as FastAPI or NestJS once external dependencies can be installed.
2. Connect the backend to a persistent PostgreSQL instance using a migration tool (e.g., Alembic or Prisma).
3. Expand the frontend into a fully fledged application using a component framework like Next.js or Remix.
4. Enrich the AI module with real model integrations and add automated contract tests that validate the prompt/response workflow end-to-end.

