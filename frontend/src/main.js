import { listDevicePlaybooks, craftPlanForDevice } from './aiIdeas.js';

document.addEventListener('DOMContentLoaded', () => {
  const playbookGrid = document.getElementById('playbook-grid');
  const form = document.getElementById('plan-form');
  const deviceInput = document.getElementById('device-input');
  const attachmentsInput = document.getElementById('attachments-input');
  const planOutput = document.getElementById('plan-output');

  if (playbookGrid) {
    const playbooks = listDevicePlaybooks();
    for (const playbook of playbooks) {
      const card = document.createElement('article');
      card.className = 'playbook-card';

      const title = document.createElement('h3');
      title.textContent = playbook.title;

      const summary = document.createElement('p');
      summary.textContent = playbook.summary;

      const modules = document.createElement('ul');
      modules.className = 'playbook-card__modules';
      for (const module of playbook.aiModules) {
        const item = document.createElement('li');
        item.textContent = module;
        modules.appendChild(item);
      }

      const blueOcean = document.createElement('p');
      blueOcean.className = 'playbook-card__blue-ocean';
      blueOcean.textContent = playbook.blueOcean;

      card.appendChild(title);
      card.appendChild(summary);
      card.appendChild(modules);
      card.appendChild(blueOcean);
      playbookGrid.appendChild(card);
    }
  }

  if (form && deviceInput && planOutput) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const device = deviceInput.value.trim();
      const attachmentsRaw = attachmentsInput ? attachmentsInput.value : '';
      const attachments = attachmentsRaw
        ? attachmentsRaw
            .split(',')
            .map((value) => value.trim())
            .filter(Boolean)
        : [];

      if (!device) {
        window.alert('Please describe your hardware device.');
        return;
      }

      try {
        const plan = craftPlanForDevice(device, attachments);
        renderPlan(planOutput, plan);
      } catch (error) {
        window.alert(error.message);
      }
    });
  }
});

function renderPlan(container, plan) {
  container.innerHTML = '';
  const article = document.createElement('article');
  article.className = 'plan-card';
  article.setAttribute('data-role', 'generated-plan');

  const heading = document.createElement('h3');
  heading.textContent = `${plan.deviceLabel} AI Expansion`;

  const differentiator = document.createElement('p');
  differentiator.textContent = plan.differentiator;

 codex/implement-ai-functionality-for-various-devices-wq5il3
  const modulesSection = createListSection('Core AI Modules', plan.aiModules, 'plan-card__modules');

  const attachmentsSection =
    plan.attachments.length > 0
      ? createListSection('Attachment Enhancements', plan.attachments, 'plan-card__attachments')
      : null;

  const integrationSection = createListSection(
    'Integration Layers',
    plan.integrationLayers,
    'plan-card__list'
  );
  const journeySection = createListSection(
    'Experience Flow',
    plan.experienceFlow,
    'plan-card__list'
  );
  const securitySection = createListSection(
    'Security Watchpoints',
    plan.securityWatchpoints,
    'plan-card__list'
  );
  const qaSection = createListSection('QA Focus', plan.qaFocus, 'plan-card__list');
  const roadmapSection = createListSection(
    'Implementation Roadmap',
    plan.implementationRoadmap,
    'plan-card__roadmap',
    'ol'
  );

  article.appendChild(heading);
  article.appendChild(differentiator);
  article.appendChild(modulesSection.title);
  article.appendChild(modulesSection.list);
  if (attachmentsSection) {
    article.appendChild(attachmentsSection.title);
    article.appendChild(attachmentsSection.list);
  }
  article.appendChild(integrationSection.title);
  article.appendChild(integrationSection.list);
  article.appendChild(journeySection.title);
  article.appendChild(journeySection.list);
  article.appendChild(securitySection.title);
  article.appendChild(securitySection.list);
  article.appendChild(qaSection.title);
  article.appendChild(qaSection.list);
  article.appendChild(roadmapSection.title);
  article.appendChild(roadmapSection.list);
  container.appendChild(article);
}

function createListSection(titleText, items, listClassName, listTag = 'ul') {
  const title = document.createElement('h4');
  title.textContent = titleText;

  const list = document.createElement(listTag);
  list.className = listClassName;
  for (const itemText of items) {
    const item = document.createElement('li');
    item.textContent = itemText;
    list.appendChild(item);
  }

  return { title, list };

  const modulesTitle = document.createElement('h4');
  modulesTitle.textContent = 'Core AI Modules';

  const modulesList = document.createElement('ul');
  modulesList.className = 'plan-card__modules';
  for (const module of plan.aiModules) {
    const item = document.createElement('li');
    item.textContent = module;
    modulesList.appendChild(item);
  }

  if (plan.attachments.length > 0) {
    const attachmentsTitle = document.createElement('h4');
    attachmentsTitle.textContent = 'Attachment Enhancements';
    const attachmentsList = document.createElement('ul');
    attachmentsList.className = 'plan-card__attachments';
    for (const attachment of plan.attachments) {
      const item = document.createElement('li');
      item.textContent = attachment;
      attachmentsList.appendChild(item);
    }
    article.appendChild(attachmentsTitle);
    article.appendChild(attachmentsList);
  }

  const agentsTitle = document.createElement('h4');
  agentsTitle.textContent = 'Agent Collaboration';

  const agentsContainer = document.createElement('div');
  agentsContainer.className = 'plan-card__agents';
  for (const [agentName, agentOutput] of Object.entries(plan.agents)) {
    const agentSection = document.createElement('section');
    agentSection.className = 'plan-card__agent';

    const agentHeading = document.createElement('h5');
    agentHeading.textContent = formatAgentLabel(agentName);

    const agentSummary = document.createElement('p');
    if (agentOutput.summary) {
      agentSummary.textContent = agentOutput.summary;
    } else if (agentOutput.milestone) {
      agentSummary.textContent = agentOutput.milestone;
    } else if (Array.isArray(agentOutput.deliveryBacklog)) {
      agentSummary.textContent = agentOutput.deliveryBacklog[0].milestone;
    } else {
      agentSummary.textContent = 'Agent insights ready for review.';
    }

    const detailsList = document.createElement('ul');
    detailsList.className = 'plan-card__details';
    for (const [key, value] of Object.entries(agentOutput)) {
      const item = document.createElement('li');
      item.innerHTML = `<strong>${formatAgentDetailKey(key)}:</strong> ${formatDetailValue(value)}`;
      detailsList.appendChild(item);
    }

    agentSection.appendChild(agentHeading);
    agentSection.appendChild(agentSummary);
    agentSection.appendChild(detailsList);
    agentsContainer.appendChild(agentSection);
  }

  article.appendChild(heading);
  article.appendChild(differentiator);
  article.appendChild(modulesTitle);
  article.appendChild(modulesList);
  article.appendChild(agentsTitle);
  article.appendChild(agentsContainer);
  container.appendChild(article);
}

function formatAgentLabel(agentName) {
  return agentName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (character) => character.toUpperCase())
    .trim();
}

function formatAgentDetailKey(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (character) => character.toUpperCase())
    .trim();
}

function formatDetailValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (typeof value === 'object' && value !== null) {
    return Object.entries(value)
      .map(([entryKey, entryValue]) => `${formatAgentDetailKey(entryKey)}: ${formatDetailValue(entryValue)}`)
      .join('; ');
  }

  return String(value);
        main
}
