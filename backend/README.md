# Backend Service

This directory contains a pure-Python HTTP service that powers the GPT5 Codex AI subscription platform. The service exposes a single endpoint, `/api/ideas`, which turns request payloads into deterministic AI subscription concepts.

## Running Locally

```bash
python app/server.py
```

The server listens on `http://127.0.0.1:8000` by default. POST requests to `/api/ideas` should include JSON with a `seed` (or `theme`) and optional `tone` field.

## Testing

```bash
python -m compileall app
python -m unittest discover tests
```

## Configuration

Copy `.env.example` to `.env` and populate connection strings when the service is extended with persistent storage or third-party integrations.
