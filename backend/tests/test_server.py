"""Integration-style tests for the handcrafted HTTP server."""

from __future__ import annotations

import json
import threading
import time
import unittest
import urllib.error
import urllib.request
from typing import Tuple

from backend.app.server import create_server


class _ServerContext:
    def __init__(self) -> None:
        self.server = create_server(("127.0.0.1", 0))
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)

    def __enter__(self) -> Tuple[str, int]:
        self.thread.start()
        time.sleep(0.1)
        return self.server.server_address

    def __exit__(self, exc_type, exc, tb) -> None:
        self.server.shutdown()
        self.thread.join(timeout=1)
        self.server.server_close()


class ServerTests(unittest.TestCase):
    def test_post_ideas_returns_payload(self) -> None:
        with _ServerContext() as (host, port):
            request = urllib.request.Request(
                url=f"http://{host}:{port}/api/ideas",
                data=json.dumps({"seed": "Ocean Retreat"}).encode("utf-8"),
                method="POST",
                headers={"Content-Type": "application/json"},
            )
            with urllib.request.urlopen(request, timeout=2) as response:
                self.assertEqual(response.status, 200)
                body = json.loads(response.read().decode("utf-8"))
                self.assertTrue(body["title"].endswith("Accelerator"))

    def test_post_invalid_path_returns_not_found(self) -> None:
        with _ServerContext() as (host, port):
            request = urllib.request.Request(
                url=f"http://{host}:{port}/not-found",
                data=b"{}",
                method="POST",
                headers={"Content-Type": "application/json"},
            )
            with self.assertRaises(urllib.error.HTTPError) as ctx:
                urllib.request.urlopen(request, timeout=2)
            self.assertEqual(ctx.exception.code, 404)


if __name__ == "__main__":
    unittest.main()
