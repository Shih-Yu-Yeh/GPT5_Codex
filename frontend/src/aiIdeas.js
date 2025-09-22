const SIGNATURE_EXPERIENCES = [
  {
    id: 'immersive-script-lab',
    title: 'Immersive Script Lab',
    description:
      'Transform any character brief into a multi-branch cinematic script. Export storyboards, table reads, and voiceovers in seconds.',
    subscriptionPrompt: 'Unlock director mode to publish weekly mini-series and earn from fan subscriptions.'
  },
  {
    id: 'daily-ai-duel',
    title: 'Daily AI Duel',
    description:
      'Compete in time-boxed creative battles. Pitch products, slogans, or growth hacks while the AI coach scores every move.',
    subscriptionPrompt: 'Upgrade to challenge industry mentors and unlock trend analytics dashboards.'
  },
  {
    id: 'co-creation-hub',
    title: 'Co-Creation Hub',
    description:
      'Collaborate live with your team inside a shared AI canvas. Branch ideas, annotate insights, and merge the best concepts.',
    subscriptionPrompt: 'Pro members schedule branded co-creation lounges and automate recap summaries.'
  }
];

export function listSignatureExperiences() {
  return SIGNATURE_EXPERIENCES.map((experience) => ({ ...experience }));
}

export function craftIdeaFromSeed(seed) {
  if (!seed || typeof seed !== 'string') {
    throw new TypeError('Seed must be a non-empty string');
  }

  const normalised = seed.trim().toLowerCase();
  const base = normalised.replace(/[^a-z0-9]+/g, ' ').trim();
  const headline = base
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const toneIndex = (normalised.length + normalised.charCodeAt(0)) % SIGNATURE_EXPERIENCES.length;
  const tone = SIGNATURE_EXPERIENCES[toneIndex];

  return {
    id: `${tone.id}-${normalised.replace(/\s+/g, '-')}`,
    title: `${headline} Accelerator`,
    description: `An adaptive AI lane that blends ${tone.title.toLowerCase()} energy with your "${seed}" vision.`,
    subscriptionPrompt: `Subscribe to unlock ${tone.subscriptionPrompt.toLowerCase()}`
  };
}
