import test from 'node:test';
import assert from 'node:assert/strict';
import { craftPlanForDevice, listDevicePlaybooks } from '../src/aiIdeas.js';

test('listDevicePlaybooks returns immutable copies', () => {
  const playbooks = listDevicePlaybooks();
 codex/implement-ai-functionality-for-various-devices-wq5il3
  assert.ok(playbooks.length >= 11);
=======
  assert.ok(playbooks.length >= 9);
 main
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

 codex/implement-ai-functionality-for-various-devices-wq5il3
test('craftPlanForDevice surfaces user-facing roadmap sections', () => {
  const plan = craftPlanForDevice('ESP32', ['Thermal camera']);
  assert.equal(plan.id, 'esp32-edge-node');
  assert.ok(plan.integrationLayers.some((layer) => layer.includes('Model update')));
  assert.ok(plan.securityWatchpoints.some((item) => item.toLowerCase().includes('secure')));
  assert.ok(plan.implementationRoadmap.length > 0);

test('craftPlanForDevice wires agent contributions', () => {
  const plan = craftPlanForDevice('Mechanical Fan', ['Aroma diffuser']);
  assert.ok(plan.agents.businessAnalyst.blueOceanOpportunity.includes('subscription'));
  assert.ok(plan.agents.security.threatModel.watchpoints.some((item) => item.includes('Attachment')));
 main
  assert.ok(Array.isArray(plan.attachments));
});
