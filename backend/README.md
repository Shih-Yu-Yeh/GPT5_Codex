# Backend Service

This directory contains a pure-Python HTTP service that powers the OmniDevice AI Fusion platform. The service exposes a
multi-agent endpoint, `/api/device-strategy`, which turns request payloads into deterministic hardware augmentation plans.

## Running Locally

```bash
python app/server.py
```

The server listens on `http://127.0.0.1:8000` by default. POST requests to `/api/device-strategy` should include JSON with a
`device` string and optional `attachments` array.

## Testing

```bash
python -m compileall app
python -m unittest discover tests
```

## Configuration

Copy `.env.example` to `.env` and populate connection strings when the service is extended with persistent storage or third-party
integrations.
