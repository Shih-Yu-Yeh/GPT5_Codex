import test from 'node:test';
import assert from 'node:assert/strict';
import { craftIdeaFromSeed, listSignatureExperiences } from '../src/aiIdeas.js';

test('listSignatureExperiences returns immutable copies', () => {
  const experiences = listSignatureExperiences();
  assert.equal(experiences.length, 3);
  experiences[0].title = 'mutated';

  const fresh = listSignatureExperiences();
  assert.notEqual(fresh[0].title, 'mutated');
});

test('craftIdeaFromSeed enforces a non-empty string input', () => {
  assert.throws(() => craftIdeaFromSeed(''), /Seed must be a non-empty string/);
  assert.throws(() => craftIdeaFromSeed(), /Seed must be a non-empty string/);
});

test('craftIdeaFromSeed produces deterministic identifiers', () => {
  const first = craftIdeaFromSeed('Galactic Tea Bar');
  const second = craftIdeaFromSeed('galactic tea bar');
  assert.equal(first.id, second.id);
  assert.match(first.title, /Galactic Tea Bar/);
});

test('craftIdeaFromSeed blends tone specific messaging', () => {
  const idea = craftIdeaFromSeed('Quantum Fitness Studio');
  assert.ok(idea.description.includes('quantum fitness studio'.replace(/\s+/g, ' ')) === false, 'description is humanised');
  assert.ok(idea.subscriptionPrompt.startsWith('Subscribe to unlock'));
});
