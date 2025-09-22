"""Unit tests for the deterministic AI idea generator."""

import unittest

from backend.app.ai import IdeaGenerator, generate_subscription_idea


class IdeaGeneratorTests(unittest.TestCase):
    def test_generate_subscription_idea_returns_expected_keys(self) -> None:
        payload = generate_subscription_idea("Solar Arcade")
        self.assertEqual(set(payload.keys()), {"title", "description", "subscriptionPrompt"})

    def test_generator_is_deterministic_for_same_seed(self) -> None:
        generator = IdeaGenerator()
        first = generator.generate("Metaverse Retreat")
        second = generator.generate("Metaverse Retreat")
        self.assertEqual(first.title, second.title)
        self.assertEqual(first.description, second.description)

    def test_generator_respects_tone_hint(self) -> None:
        generator = IdeaGenerator()
        idea = generator.generate("Neuro Garden", tone_preference="Co-Creation")
        self.assertIn("collaborative", idea.description.lower())


if __name__ == "__main__":
    unittest.main()
