"""Unit tests for the hardware plan generator."""

import pathlib
import sys
import unittest

PROJECT_ROOT = pathlib.Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from backend.app.ai import HardwarePlanGenerator, generate_device_strategy


class HardwarePlanGeneratorTests(unittest.TestCase):
 codex/implement-ai-functionality-for-various-devices-wq5il3
    def test_generate_device_strategy_includes_user_focused_sections(self) -> None:
        payload = generate_device_strategy(
            "ESP32",
            attachments=["Thermal camera", "LoRa backhaul"],
        )
        self.assertEqual(payload["deviceKey"], "esp32-edge-node")
        self.assertIn("implementationRoadmap", payload)
        self.assertGreater(len(payload["implementationRoadmap"]), 0)
        self.assertIn("integrationLayers", payload)
        self.assertIn("securityWatchpoints", payload)
        self.assertIn("agents", payload)
        self.assertIn("businessAnalyst", payload["agents"])

    def test_generate_device_strategy_returns_agent_block(self) -> None:
        payload = generate_device_strategy(
            "Retro Gameboy",
            attachments=["Cartridge Digitiser", "Bluetooth Link"],
        )
        self.assertIn("agents", payload)
        self.assertIn("businessAnalyst", payload["agents"])
        self.assertIn("blueOceanOpportunity", payload["agents"]["businessAnalyst"])
        self.assertIn("attachments", payload)
        self.assertEqual(len(payload["attachments"]), 2)
        main

    def test_generator_is_deterministic_for_same_input(self) -> None:
        generator = HardwarePlanGenerator()
        first = generator.generate("IoT Setup", attachments=["Thermal sensor"])
        second = generator.generate("iot setup", attachments=["Thermal sensor"])
        self.assertEqual(first.device_key, second.device_key)
        self.assertEqual(first.differentiator, second.differentiator)

    def test_generator_resolves_aliases(self) -> None:
        generator = HardwarePlanGenerator()
        plan = generator.generate("電鍋")
        self.assertEqual(plan.device_key, "culinary-companion")

        codex/implement-ai-functionality-for-various-devices-wq5il3
    def test_generator_understands_camera_alias(self) -> None:
        generator = HardwarePlanGenerator()
        plan = generator.generate("Security Cam")
        self.assertEqual(plan.device_key, "vision-custodian")


        main
    def test_generator_rejects_invalid_attachments(self) -> None:
        generator = HardwarePlanGenerator()
        with self.assertRaises(TypeError):
            generator.generate("Router", attachments="not-a-list")

    def test_generate_device_strategy_requires_device(self) -> None:
        with self.assertRaises(TypeError):
            generate_device_strategy("")


if __name__ == "__main__":
    unittest.main()
