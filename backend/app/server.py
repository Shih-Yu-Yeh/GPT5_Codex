"""Minimal HTTP server exposing AI ideation endpoints."""

from __future__ import annotations

import json
import logging
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Tuple

from .ai import generate_subscription_idea

LOGGER = logging.getLogger("gpt5_codex.server")


class AIRequestHandler(BaseHTTPRequestHandler):
    """Handle HTTP requests for the AI ideation API."""

    server_version = "GPT5Codex/0.1"

    def log_message(self, format: str, *args) -> None:  # noqa: D401 - inherited signature
        """Route log messages through :mod:`logging` instead of stderr."""

        LOGGER.info("%s - - %s", self.client_address[0], format % args)

    def do_POST(self) -> None:  # noqa: N802 - required by BaseHTTPRequestHandler
        if self.path != "/api/ideas":
            self.send_error(HTTPStatus.NOT_FOUND, "Endpoint not found")
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        try:
            payload = self.rfile.read(content_length) if content_length > 0 else b"{}"
            data = json.loads(payload.decode("utf-8"))
        except json.JSONDecodeError:
            self.send_error(HTTPStatus.BAD_REQUEST, "Invalid JSON payload")
            return

        seed = data.get("seed") or data.get("theme")
        tone = data.get("tone")

        try:
            idea = generate_subscription_idea(seed, tone)
        except TypeError as error:
            self.send_error(HTTPStatus.BAD_REQUEST, str(error))
            return

        response = json.dumps(idea).encode("utf-8")
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(response)))
        self.end_headers()
        self.wfile.write(response)


def create_server(address: Tuple[str, int] | None = None) -> ThreadingHTTPServer:
    """Create a configured HTTP server instance."""

    host, port = address or ("127.0.0.1", 8000)
    server = ThreadingHTTPServer((host, port), AIRequestHandler)
    LOGGER.info("Starting AI server on http://%s:%s", host, server.server_port)
    return server


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    server = create_server()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        LOGGER.info("Shutting down server")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
