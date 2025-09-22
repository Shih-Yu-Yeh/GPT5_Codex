"""Minimal HTTP server exposing hardware AI orchestration endpoints."""

from __future__ import annotations

import json
import logging
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Iterable, Tuple

from .ai import generate_device_strategy

LOGGER = logging.getLogger("omnidevice.server")


class AIRequestHandler(BaseHTTPRequestHandler):
    """Handle HTTP requests for the AI orchestration API."""

    server_version = "OmniDevicePlatform/0.2"

    def log_message(self, format: str, *args) -> None:  # noqa: D401 - inherited signature
        """Route log messages through :mod:`logging` instead of stderr."""

        LOGGER.info("%s - - %s", self.client_address[0], format % args)

    def do_POST(self) -> None:  # noqa: N802 - required by BaseHTTPRequestHandler
        if self.path != "/api/device-strategy":
            self.send_error(HTTPStatus.NOT_FOUND, "Endpoint not found")
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        try:
            payload = self.rfile.read(content_length) if content_length > 0 else b"{}"
            data = json.loads(payload.decode("utf-8"))
        except json.JSONDecodeError:
            self.send_error(HTTPStatus.BAD_REQUEST, "Invalid JSON payload")
            return

        device = data.get("device")
        attachments = data.get("attachments")

        try:
            plan = generate_device_strategy(
                device=device,
                attachments=self._normalise_attachments(attachments),
            )
        except TypeError as error:
            self.send_error(HTTPStatus.BAD_REQUEST, str(error))
            return

        response = json.dumps(plan).encode("utf-8")
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(response)))
        self.end_headers()
        self.wfile.write(response)

    def _normalise_attachments(self, attachments: object) -> Iterable[str] | None:
        if attachments is None:
            return None
        if isinstance(attachments, list):
            return attachments
        raise TypeError("Attachments must be a list of strings")


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
