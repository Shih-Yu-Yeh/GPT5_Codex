const DEVICE_PLAYBOOKS = [
const DEVICE_PLAYBOOKS = [
  {
    id: 'iot-setup',
    aliases: ['iot', 'sensor', 'smart home', 'iot setup', 'industrial iot', '環控'],
    title: 'IoT Sensor Constellation',
    summary: 'Orchestrate diverse sensors into a context-aware automation fabric for facilities and smart living.',
    aiModules: ['Predictive maintenance insights', 'Edge anomaly surveillance', 'Energy optimisation coach'],
    blueOcean: 'Bundle predictive energy optimisation for mid-sized facilities without dedicated data science teams.',
    integrationLayers: ['Edge firmware connector', 'Hub message broker', 'Cloud learning service'],
    journey: ['Operations pulse home screen', 'Incident triage panel', 'Automation recipe builder'],
    securityWatchpoints: ['Mutual TLS device onboarding', 'Continuous firmware integrity scanning'],
    qaFocus: ['Edge-to-cloud latency benchmarks', 'Failover scenario drills', 'Automation rule regression pack']
  },
  {
    id: 'esp32-edge-node',
    aliases: ['esp32', 'esp-32', 'edge microcontroller', 'micropython node', 'embedded controller'],
    title: 'ESP32 Edge Insight Node',
    summary: 'Turn ESP32 hardware into intelligent edge endpoints with fleet awareness.',
    aiModules: ['Edge vision classifier', 'Adaptive sensor fusion', 'Fleet health telematics'],
    blueOcean: 'Provide maintenance teams with retrofit AI for brownfield sites without cloud lock-in.',
    integrationLayers: ['MicroPython skill pack', 'Model update scheduler', 'Fleet telemetry bridge'],
    journey: ['Provisioning checklist', 'Live edge insights console', 'OTA rollback centre'],
    securityWatchpoints: ['Secure boot enforcement', 'Signed model bundle validation'],
    qaFocus: ['Power draw regression bench', 'Offline failover drills', 'Firmware upgrade canary tests']
  },
  {
    id: 'modular-hub',
    aliases: ['hub', 'smart hub', 'home hub', '控制中心'],
    title: 'Modular Hub Orchestrator',
    summary: 'Elevate multi-protocol hubs into intent-driven household coordinators.',
    aiModules: ['Intent routing assistant', 'Routine generation engine', 'Household persona profiles'],
    blueOcean: 'Enable service providers to sell persona-aware automations with premium installation packages.',
    integrationLayers: ['Signal normalisation layer', 'Scene automation service', 'Insight timeline store'],
    journey: ['Household timeline overview', 'Routine composer', 'Agent negotiation log'],
    securityWatchpoints: ['Role-based access bridging', 'Signed automation exchange'],
    qaFocus: ['Protocol emulation harness', 'Routine conflict resolution tests', 'Mobile and voice parity checks']
  },
  {
    id: 'adaptive-router',
    aliases: ['router', 'wi-fi', 'wifi', 'network', '路由器'],
    title: 'Adaptive Network Guardian',
    summary: 'Transform routers into self-tuning perimeter guardians for homes and pop-up offices.',
    aiModules: ['Traffic shapeshifting AI', 'Threat pattern radar', 'Household policy coach'],
    blueOcean: 'Differentiate consumer routers with small-office grade defences that remain zero-touch for households.',
    integrationLayers: ['Telemetry pipeline', 'Policy inference engine', 'Admin insight portal'],
    journey: ['Trust health dashboard', 'Incident replay viewer', 'Policy suggestion wizard'],
    securityWatchpoints: ['Encrypted telemetry storage', 'Automatic patch orchestration'],
    qaFocus: ['Throughput stress tests', 'Threat scenario replay', 'Policy rollback verification']
  },
  {
    id: 'cinematic-overlay',
    aliases: ['television', 'tv', 'traditional television', 'broadcast', '電視'],
    title: 'Cinematic Companion Overlay',
    summary: 'Add shoppable, accessible, and social layers to broadcast-era televisions.',
    aiModules: ['Scene understanding overlay', 'Voice-activated concierge', 'Co-viewer synchronisation'],
    blueOcean: 'Target hospitality and elder-care markets that need accessible co-watching experiences.',
    integrationLayers: ['Video frame annotator', 'Voice command gateway', 'Second-screen sync service'],
    journey: ['Adaptive overlay controls', 'Companion device handoff', 'Viewing journal'],
    securityWatchpoints: ['Content rights watermarking', 'Household profile isolation'],
    qaFocus: ['Closed-caption accuracy review', 'Second-screen latency tests', 'Accessibility audit sweeps']
  },
  {
    id: 'heritage-radio',
    aliases: ['radio', 'am radio', 'fm radio', '收音機'],
    title: 'Heritage Radio Narrator',
    summary: 'Modernise analogue radios with AI translation, summarisation, and archiving.',
    aiModules: ['Live transcription and translation', 'Segment summariser', 'Personal audio archivist'],
    blueOcean: 'Serve community broadcasters seeking digital reach without replacing heritage equipment.',
    integrationLayers: ['Signal digitiser', 'Language intelligence service', 'Memory vault API'],
    journey: ['Real-time transcript ticker', 'Highlights digest', 'Archive explorer'],
    securityWatchpoints: ['Tamper-evident archive logs', 'Listener privacy controls'],
    qaFocus: ['Transcription accuracy scoring', 'Archive retrieval validation', 'Offline resilience drills']
  },
  {
    id: 'insight-recorder',
    aliases: ['recorder', 'voice recorder', 'recording pen', 'dictaphone', '錄音筆'],
    title: 'Insight Recorder Studio',
    summary: 'Turn pocket recorders into proactive note-taking and coaching assistants.',
    aiModules: ['Speaker diarisation coach', 'Action item extractor', 'Contextual memory recall'],
    blueOcean: 'Appeal to field researchers requiring offline-first knowledge capture with AI follow-ups.',
    integrationLayers: ['Audio ingestion agent', 'Insight synthesis engine', 'Cross-device sync core'],
    journey: ['Recording timeline', 'Insight storyboard', 'Follow-up request queue'],
    securityWatchpoints: ['Secure offline vault', 'Role-based sharing controls'],
    qaFocus: ['Battery impact measurement', 'Offline/online sync validation', 'Speaker accuracy sampling']
    id: 'cinematic-overlay',
    aliases: ['television', 'tv', 'traditional television', 'broadcast', '電視'],
    title: 'Cinematic Companion Overlay',
    summary: 'Add shoppable, accessible, and social layers to broadcast-era televisions.',
    aiModules: ['Scene understanding overlay', 'Voice-activated concierge', 'Co-viewer synchronisation'],
    blueOcean: 'Target hospitality and elder-care markets that need accessible co-watching experiences.',
    integrationLayers: ['Video frame annotator', 'Voice command gateway', 'Second-screen sync service'],
    journey: ['Adaptive overlay controls', 'Companion device handoff', 'Viewing journal'],
    securityWatchpoints: ['Content rights watermarking', 'Household profile isolation'],
    qaFocus: ['Closed-caption accuracy review', 'Second-screen latency tests', 'Accessibility audit sweeps']
  },
  {
    id: 'heritage-radio',
    aliases: ['radio', 'am radio', 'fm radio', '收音機'],
    title: 'Heritage Radio Narrator',
    summary: 'Modernise analogue radios with AI translation, summarisation, and archiving.',
    aiModules: ['Live transcription and translation', 'Segment summariser', 'Personal audio archivist'],
    blueOcean: 'Serve community broadcasters seeking digital reach without replacing heritage equipment.',
    integrationLayers: ['Signal digitiser', 'Language intelligence service', 'Memory vault API'],
    journey: ['Real-time transcript ticker', 'Highlights digest', 'Archive explorer'],
    securityWatchpoints: ['Tamper-evident archive logs', 'Listener privacy controls'],
    qaFocus: ['Transcription accuracy scoring', 'Archive retrieval validation', 'Offline resilience drills']
  },
  {
    id: 'insight-recorder',
    aliases: ['recorder', 'voice recorder', 'recording pen', 'dictaphone', '錄音筆'],
    title: 'Insight Recorder Studio',
    summary: 'Turn pocket recorders into proactive note-taking and coaching assistants.',
    aiModules: ['Speaker diarisation coach', 'Action item extractor', 'Contextual memory recall'],
    blueOcean: 'Appeal to field researchers requiring offline-first knowledge capture with AI follow-ups.',
    integrationLayers: ['Audio ingestion agent', 'Insight synthesis engine', 'Cross-device sync core'],
    journey: ['Recording timeline', 'Insight storyboard', 'Follow-up request queue'],
    securityWatchpoints: ['Secure offline vault', 'Role-based sharing controls'],
    qaFocus: ['Battery impact measurement', 'Offline/online sync validation', 'Speaker accuracy sampling']
  },
  {
    id: 'retro-console',
    aliases: ['gameboy', 'game boy', 'retro console', 'handheld', '掌上遊戲機'],
    title: 'Retro Console AI Mod Kit',
    summary: 'Add dynamic quests and creator monetisation layers to beloved handheld consoles.',
    aiModules: ['Procedural quest composer', 'Save-state storyteller', 'Skill coaching companion'],
    blueOcean: 'Unlock collectible communities by blending nostalgia with creator monetisation.',
    integrationLayers: ['Cartridge bridge firmware', 'Cloud storyline curator', 'Community challenge service'],
    journey: ['Quest selection overlay', 'Creator studio', 'Community leaderboard'],
    securityWatchpoints: ['Signed mod packages', 'Community content moderation'],
    qaFocus: ['Latency on original hardware', 'Compatibility regression per game', 'Moderation workflow rehearsal']
  },
  {
    id: 'vision-custodian',
    aliases: ['camera', 'security camera', 'smart cam', 'cam', '監視器'],
    title: 'Vision Custodian Cam',
    summary: 'Upgrade cameras with on-device analytics, incident storytelling, and privacy controls.',
    aiModules: ['Edge incident detection', 'Context-rich clip tagging', 'Privacy-preserving redaction'],
    blueOcean: 'Serve property managers needing AI assurance without constant cloud streaming.',
    integrationLayers: ['Edge inference runtime', 'Event timeline index', 'Escalation webhook relay'],
    journey: ['Camera health board', 'Incident storytelling feed', 'Privacy control studio'],
    securityWatchpoints: ['Zero trust stream access', 'Event retention governance'],
    qaFocus: ['Low-light inference suite', 'Network disruption recovery', 'Privacy redaction accuracy']
  },
  {
    id: 'climate-fan',
    aliases: ['fan', 'mechanical fan', 'electric fan', '風扇'],
    title: 'Climate Rhythm Conductor',
    summary: 'Elevate mechanical fans with ambient sensing and wellness routines.',
    aiModules: ['Comfort rhythm composer', 'Air quality insight', 'Sleep pattern coach'],
    blueOcean: 'Differentiate appliance OEMs with wellness subscriptions blending comfort analytics.',
    integrationLayers: ['Retrofit sensor halo', 'Pattern learning brain', 'Mobile guidance coach'],
    journey: ['Comfort goals setup', 'Ambient feedback ring', 'Sleep report gallery'],
    securityWatchpoints: ['Sensor tamper detection', 'Household data minimisation'],
    qaFocus: ['Noise profile regression', 'Sensor calibration loops', 'Wellness insight accuracy']
  },
  {
    id: 'culinary-companion',
    aliases: ['rice cooker', 'cooker', '電鍋', 'multicooker'],
    title: 'Culinary Ritual Companion',
    summary: 'Transform rice cookers into guided meal orchestration hubs.',
    aiModules: ['Grain intelligence advisor', 'Meal planning co-pilot', 'Family nutrition storyteller'],
    blueOcean: 'Serve multicultural households with personalised culinary rituals and subscription journeys.',
    integrationLayers: ['Ingredient knowledge graph', 'Steam cycle prediction model', 'Family profile service'],
    journey: ['Prep ritual walkthrough', 'Cooking progress theatre', 'Family table recap'],
    securityWatchpoints: ['Food preference privacy', 'Appliance safety watchdog'],
    qaFocus: ['Sensor temperature accuracy', 'Recipe outcome testing', 'Notification reliability']
  },
  {
    id: 'open-canvas',
    aliases: ['device', 'custom', 'hardware'],
    title: 'Custom Device Fusion',
    summary: 'Adaptable canvas for bespoke hardware mashups and integrations.',
    aiModules: ['Context fusion engine', 'Adaptive agent router', 'Outcome scoring analytics'],
    blueOcean: 'Offer integration studios a rapid blueprint generator for niche bundles.',
    integrationLayers: ['Signal ingestion mesh', 'Policy reasoning lattice', 'Experience stitching fabric'],
    journey: ['Persona alignment workshop', 'Modular journey designer', 'Adoption telemetry deck'],
    securityWatchpoints: ['Secrets lifecycle automation', 'Continuous compliance diffing'],
    qaFocus: ['Cross-device interoperability', 'Experience drift monitoring', 'Regression intelligence loop']
  }
];

function clonePlaybook(playbook) {
  return JSON.parse(JSON.stringify(playbook));
}

function normalise(value) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function findPlaybook(device) {
  const normalised = normalise(device);
  for (const playbook of DEVICE_PLAYBOOKS) {
    if (playbook.aliases.some((alias) => normalise(alias) === normalised)) {
      return playbook;
    }
  }
  for (const playbook of DEVICE_PLAYBOOKS) {
    if (playbook.aliases.some((alias) => normalised.includes(normalise(alias)))) {
      return playbook;
    }
  }
  return DEVICE_PLAYBOOKS.at(-1);
}

function prepareAttachments(attachments = []) {
  if (!Array.isArray(attachments)) {
    throw new TypeError('Attachments must be an array of strings');
  }

  const cleaned = attachments
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim())
    .filter(Boolean);

  const deduped = Array.from(new Set(cleaned.map((item) => item.toLowerCase())));
  return deduped.map((item) => item.replace(/\s+/g, ' '));
}

function craftAgentOutputs(playbook, attachments) {
  const businessAnalyst = {
    summary: playbook.summary,
    blueOceanOpportunity: playbook.blueOcean,
    audienceSegments: [
      `${playbook.title} adopters exploring subscription upgrades`,
      'Service providers co-creating AI bundles'
    ],
    validationSignal: `Market radar hash ${playbook.id.slice(0, 6)}`
  };

  if (attachments.length > 0) {
    businessAnalyst.audienceSegments.push(
      `Attachment enthusiasts seeking ${attachments.join(', ')} intelligence`
    );
  }

  const softwareArchitect = {
    integrationLayers: attachments.length
      ? [...playbook.integrationLayers, 'Attachment orchestration gateway']
      : [...playbook.integrationLayers],
    dataContracts: {
      telemetry: 'JSON envelopes with signed digests',
      control: 'Event-sourced intent messages'
    },
    scalabilityNotes: 'Design for bursty workloads with circuit breakers and local fallbacks.'
  };

  const uiUx = {
    journeyStages: attachments.length
      ? [...playbook.journey, 'Attachment experience set-up wizard']
      : [...playbook.journey],
    rwdGuidelines: 'Adaptive card layouts for mobile, tablet, and wall displays',
    accessibility: 'High contrast, caption-ready, and voice-first navigation options.'
  };

  const security = {
    threatModel: {
      surface: softwareArchitect.integrationLayers,
      watchpoints: attachments.length
        ? [...playbook.securityWatchpoints, 'Attachment firmware signing and provenance']
        : [...playbook.securityWatchpoints]
    },
    remediationWorkflow: 'Escalate findings to the PM with severity tags for engineering follow-up.'
  };

  const qualityAssurance = {
    testPlan: attachments.length
      ? [...playbook.qaFocus, 'Attachment compatibility matrix']
      : [...playbook.qaFocus],
    uiUxFocus: uiUx.journeyStages,
    backendFocus: softwareArchitect.integrationLayers,
    escalation: 'Report defects to the PM who will coordinate frontend and backend fixes.'
  };

  const productManager = {
    deliveryBacklog: [
      { milestone: 'Validate blue ocean thesis with stakeholder interviews', owner: 'Business Analyst' },
      { milestone: 'Prototype journey stages with UI/UX using RWD guidelines', owner: 'Frontend' },
      { milestone: 'Implement integration layers with backend and architect', owner: 'Backend' },
      { milestone: 'Run QA regression and security threat rehearsal', owner: 'QA & Security' }
    ],
    dependencies: ['Architecture informs security hardening', 'UI/UX prototypes feed QA accessibility audits'],
    nextReview: 'Schedule cross-agent sync once QA shares findings.'
  };

  if (attachments.length > 0) {
    productManager.deliveryBacklog.push({
      milestone: 'Expand backlog for attachment orchestration',
      owner: 'PM'
    });
  }

  return {
    businessAnalyst,
    productManager,
    softwareArchitect,
    uiUx,
    security,
    qualityAssurance
  };
}

export function listDevicePlaybooks() {
  return DEVICE_PLAYBOOKS.map((playbook) => clonePlaybook(playbook));
}

export function craftPlanForDevice(device, attachments = []) {
  if (!device || typeof device !== 'string') {
    throw new TypeError('Device must be a non-empty string');
  }

  const playbook = findPlaybook(device);
  const preparedAttachments = prepareAttachments(attachments);
  const agents = craftAgentOutputs(playbook, preparedAttachments);
  const roadmap = agents.productManager.deliveryBacklog.map((item) => item.milestone);

  return {
    id: playbook.id,
    deviceLabel: playbook.title,
    aiModules: [...playbook.aiModules],
    differentiator: `${playbook.title} gains ${playbook.aiModules[0].toLowerCase()} and ${playbook.aiModules[1].toLowerCase()} in one orchestrated package.${
      preparedAttachments.length ? ` Attachments add ${preparedAttachments.join(', ')}.` : ''
    }`,
    attachments: preparedAttachments,
    integrationLayers: [...agents.softwareArchitect.integrationLayers],
    experienceFlow: [...agents.uiUx.journeyStages],
    securityWatchpoints: [...agents.security.threatModel.watchpoints],
    qaFocus: [...agents.qualityAssurance.testPlan],
    implementationRoadmap: roadmap,
    agents
  };
}
