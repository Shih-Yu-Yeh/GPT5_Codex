import test from 'node:test';
import assert from 'node:assert/strict';
import { craftPlanForDevice, listDevicePlaybooks } from '../src/aiIdeas.js';

test('listDevicePlaybooks returns immutable copies', () => {
  const playbooks = listDevicePlaybooks();
  assert.ok(playbooks.length >= 9);
  playbooks[0].title = 'mutated';

  const fresh = listDevicePlaybooks();
  assert.notEqual(fresh[0].title, 'mutated');
});

test('craftPlanForDevice enforces a non-empty string input', () => {
  assert.throws(() => craftPlanForDevice(''), /Device must be a non-empty string/);
  assert.throws(() => craftPlanForDevice(), /Device must be a non-empty string/);
});

test('craftPlanForDevice produces deterministic identifiers', () => {
  const first = craftPlanForDevice('Retro Gameboy', ['Link cable']);
  const second = craftPlanForDevice('retro gameboy', ['Link cable']);
  assert.equal(first.id, second.id);
  assert.equal(first.differentiator, second.differentiator);
});

test('craftPlanForDevice wires agent contributions', () => {
  const plan = craftPlanForDevice('Mechanical Fan', ['Aroma diffuser']);
  assert.ok(plan.agents.businessAnalyst.blueOceanOpportunity.includes('subscription'));
  assert.ok(plan.agents.security.threatModel.watchpoints.some((item) => item.includes('Attachment')));
  assert.ok(Array.isArray(plan.attachments));
});

test('craftPlanForDevice retains attachment casing while deduping', () => {
  const plan = craftPlanForDevice('Mechanical Fan', [
    'Quick Start Guide',
    'quick start guide',
    'QUICK START GUIDE',
    'Maintenance LOG'
  ]);

  assert.deepEqual(plan.attachments, ['Quick Start Guide', 'Maintenance LOG']);
});
