import { listSignatureExperiences, craftIdeaFromSeed } from './aiIdeas.js';

document.addEventListener('DOMContentLoaded', () => {
  const ideaList = document.getElementById('idea-list');
  const ctaButton = document.getElementById('cta-button');

  if (ideaList) {
    const experiences = listSignatureExperiences();
    for (const experience of experiences) {
      const card = document.createElement('article');
      card.className = 'idea-card';

      const title = document.createElement('h3');
      title.textContent = experience.title;

      const description = document.createElement('p');
      description.textContent = experience.description;

      const prompt = document.createElement('p');
      prompt.textContent = experience.subscriptionPrompt;
      prompt.setAttribute('data-role', 'subscription-prompt');

      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(prompt);
      ideaList.appendChild(card);
    }
  }

  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      const seed = window.prompt('What creative dream should we accelerate?');
      if (!seed) {
        return;
      }

      try {
        const idea = craftIdeaFromSeed(seed);
        const highlight = document.createElement('article');
        highlight.className = 'idea-card';
        highlight.setAttribute('data-role', 'generated-idea');

        const heading = document.createElement('h3');
        heading.textContent = idea.title;

        const description = document.createElement('p');
        description.textContent = idea.description;

        const prompt = document.createElement('p');
        prompt.textContent = idea.subscriptionPrompt;

        highlight.appendChild(heading);
        highlight.appendChild(description);
        highlight.appendChild(prompt);

        if (ideaList) {
          ideaList.prepend(highlight);
        }
      } catch (error) {
        window.alert(error.message);
      }
    });
  }
});
