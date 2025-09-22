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
}
