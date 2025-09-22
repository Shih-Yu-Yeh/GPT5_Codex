"""Deterministic AI ideation helpers used by the backend service."""

from __future__ import annotations

from dataclasses import dataclass
from hashlib import sha256
from typing import Dict


@dataclass
class Idea:
    """Represents a single creative concept returned by the AI module."""

    title: str
    description: str
    subscription_prompt: str

    def as_payload(self) -> Dict[str, str]:
        """Return a serialisable representation."""

        return {
            "title": self.title,
            "description": self.description,
            "subscriptionPrompt": self.subscription_prompt,
        }


class IdeaGenerator:
    """Create deterministic ideas derived from user-provided seeds."""

    _tones = (
        {
            "name": "Immersive Script Lab",
            "flavour": "cinematic story weaving",
            "upsell": "story branches, audio casts, and episodic drops",
        },
        {
            "name": "Daily AI Duel",
            "flavour": "rapid-fire creative battles",
            "upsell": "competitive leaderboards and mentor critiques",
        },
        {
            "name": "Co-Creation Hub",
            "flavour": "collaborative ideation rituals",
            "upsell": "team workspaces and executive summaries",
        },
    )

    def _hash_seed(self, seed: str) -> int:
        digest = sha256(seed.encode("utf-8")).hexdigest()
        return int(digest, 16)

    def generate(self, seed: str, tone_preference: str | None = None) -> Idea:
        """Return a deterministic :class:`Idea` from the supplied seed."""

        if not seed or not isinstance(seed, str):
            raise TypeError("Seed must be a non-empty string")

        normalised = " ".join(seed.strip().split())
        fingerprint = self._hash_seed(normalised)
        tone_index = fingerprint % len(self._tones)

        if tone_preference:
            lowered = tone_preference.lower()
            for index, tone in enumerate(self._tones):
                if lowered in tone["name"].lower():
                    tone_index = index
                    break

        tone = self._tones[tone_index]
        headline = normalised.title()

        description = (
            f"An AI concierge that channels {tone['flavour']} to elevate your "
            f"\"{normalised}\" concept into a binge-worthy experience."
        )
        subscription_prompt = (
            "Subscribe to unlock "
            f"{tone['upsell']} tailored to your {headline} ambitions."
        )

        return Idea(
            title=f"{headline} Accelerator",
            description=description,
            subscription_prompt=subscription_prompt,
        )


DEFAULT_GENERATOR = IdeaGenerator()


def generate_subscription_idea(seed: str, tone: str | None = None) -> Dict[str, str]:
    """Public helper for modules that require JSON serialisable data."""

    idea = DEFAULT_GENERATOR.generate(seed=seed, tone_preference=tone)
    return idea.as_payload()
