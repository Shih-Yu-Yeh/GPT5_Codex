"""Hardware-centric AI orchestration helpers used by the backend service."""
"""Hardware-centric AI orchestration helpers used by the backend service."""

from __future__ import annotations

from dataclasses import dataclass, field
from dataclasses import dataclass, field
from hashlib import sha256
from typing import Dict, Iterable, List, Sequence


@dataclass(frozen=True)
class Blueprint:
    """Represents the base knowledge for a supported hardware family."""

    key: str
    aliases: Sequence[str]
    device_label: str
    summary: str
    ai_modules: Sequence[str]
    blue_ocean: Sequence[str]
    integration_layers: Sequence[str]
    experience_flow: Sequence[str]
    security_watchpoints: Sequence[str]
    qa_focus: Sequence[str]


BLUEPRINTS: Sequence[Blueprint] = (
    Blueprint(
        key="iot-setup",
        aliases=("iot", "sensor", "smart home", "iot setup", "industrial iot", "環控"),
        device_label="IoT Sensor Constellation",
        summary="Orchestrates diverse sensors into a context-aware automation fabric.",
        ai_modules=(
            "Predictive maintenance insights",
            "Edge anomaly surveillance",
            "Energy optimisation coach",
        ),
        blue_ocean=(
            "Bundle predictive energy optimisation for mid-sized facilities that lack dedicated data science teams."
        ),
        integration_layers=(
            "Edge firmware connector",
            "Hub message broker",
            "Cloud learning service",
        ),
        experience_flow=(
            "Operations pulse home screen",
            "Incident triage panel",
            "Automation recipe builder",
        ),
        security_watchpoints=(
            "Mutual TLS device onboarding",
            "Continuous firmware integrity scanning",
        ),
        qa_focus=(
            "Edge-to-cloud latency benchmarks",
            "Failover scenario drills",
            "Automation rule regression pack",
        ),
    ),
    Blueprint(
        key="esp32-edge-node",
        aliases=(
            "esp32",
            "esp-32",
            "edge microcontroller",
            "micropython node",
            "embedded controller",
        ),
        device_label="ESP32 Edge Insight Node",
        summary="Turns ESP32 hardware into an intelligent edge endpoint with fleet awareness.",
        ai_modules=(
            "Edge vision classifier",
            "Adaptive sensor fusion",
            "Fleet health telematics",
        ),
        blue_ocean=(
            "Provide maintenance teams with retrofit AI for brownfield sites without cloud lock-in.",
        ),
        integration_layers=(
            "MicroPython skill pack",
            "Model update scheduler",
            "Fleet telemetry bridge",
        ),
        experience_flow=(
            "Provisioning checklist",
            "Live edge insights console",
            "OTA rollback centre",
        ),
        security_watchpoints=(
            "Secure boot enforcement",
            "Signed model bundle validation",
        ),
        qa_focus=(
            "Power draw regression bench",
            "Offline failover drills",
            "Firmware upgrade canary tests",
        ),
    ),
    Blueprint(
        key="modular-hub",
        aliases=("hub", "smart hub", "home hub", "控制中心"),
        device_label="Modular Hub Orchestrator",
        summary="Elevates multi-protocol hubs into intent-driven household coordinators.",
        ai_modules=(
            "Intent routing assistant",
            "Routine generation engine",
            "Household persona profiles",
        ),
        blue_ocean=(
            "Enable service providers to sell persona-aware automations with premium installation packages."
        ),
        integration_layers=(
            "Signal normalisation layer",
            "Scene automation service",
            "Insight timeline store",
        ),
        experience_flow=(
            "Household timeline overview",
            "Routine composer",
            "Agent negotiation log",
        ),
        security_watchpoints=(
            "Role-based access bridging",
            "Signed automation exchange",
        ),
        qa_focus=(
            "Protocol emulation harness",
            "Routine conflict resolution tests",
            "Mobile and voice parity checks",
        ),
    ),
    Blueprint(
        key="adaptive-router",
        aliases=("router", "wi-fi", "wifi", "network", "路由器"),
        device_label="Adaptive Network Guardian",
        summary="Transforms routers into self-tuning perimeter guardians for homes and pop-up offices.",
        ai_modules=(
            "Traffic shapeshifting AI",
            "Threat pattern radar",
            "Household policy coach",
        ),
        blue_ocean=(
            "Differentiate consumer routers with small-office grade defences that remain zero-touch for households."
        ),
        integration_layers=(
            "Telemetry pipeline",
            "Policy inference engine",
            "Admin insight portal",
        ),
        experience_flow=(
            "Trust health dashboard",
            "Incident replay viewer",
            "Policy suggestion wizard",
        ),
        security_watchpoints=(
            "Encrypted telemetry storage",
            "Automatic patch orchestration",
        ),
        qa_focus=(
            "Throughput stress tests",
            "Threat scenario replay",
            "Policy rollback verification",
        ),
    ),
    Blueprint(
        key="cinematic-overlay",
        aliases=("television", "tv", "traditional television", "broadcast", "電視"),
        device_label="Cinematic Companion Overlay",
        summary="Adds shoppable, accessible, and social layers to broadcast-era televisions.",
        ai_modules=(
            "Scene understanding overlay",
            "Voice-activated concierge",
            "Co-viewer synchronisation",
        ),
        blue_ocean=(
            "Target hospitality and elder-care markets that need accessible co-watching experiences."
        ),
        integration_layers=(
            "Video frame annotator",
            "Voice command gateway",
            "Second-screen sync service",
        ),
        experience_flow=(
            "Adaptive overlay controls",
            "Companion device handoff",
            "Viewing journal",
        ),
        security_watchpoints=(
            "Content rights watermarking",
            "Household profile isolation",
        ),
        qa_focus=(
            "Closed-caption accuracy review",
            "Second-screen latency tests",
            "Accessibility audit sweeps",
        ),
    ),
    Blueprint(
        key="heritage-radio",
        aliases=("radio", "am radio", "fm radio", "收音機"),
        device_label="Heritage Radio Narrator",
        summary="Modernises analogue radios with AI translation, summarisation, and archiving.",
        ai_modules=(
            "Live transcription and translation",
            "Segment summariser",
            "Personal audio archivist",
        ),
        blue_ocean=(
            "Serve community broadcasters seeking digital reach without replacing heritage equipment."
        ),
        integration_layers=(
            "Signal digitiser",
            "Language intelligence service",
            "Memory vault API",
        ),
        experience_flow=(
            "Real-time transcript ticker",
            "Highlights digest",
            "Archive explorer",
        ),
        security_watchpoints=(
            "Tamper-evident archive logs",
            "Listener privacy controls",
        ),
        qa_focus=(
            "Transcription accuracy scoring",
            "Archive retrieval validation",
            "Offline resilience drills",
        ),
    ),
    Blueprint(
        key="insight-recorder",
        aliases=("recorder", "voice recorder", "recording pen", "dictaphone", "錄音筆"),
        device_label="Insight Recorder Studio",
        summary="Turns pocket recorders into proactive note-taking and coaching assistants.",
        ai_modules=(
            "Speaker diarisation coach",
            "Action item extractor",
            "Contextual memory recall",
        ),
        blue_ocean=(
            "Appeal to field researchers that require offline-first knowledge capture with AI follow-ups."
        ),
        integration_layers=(
            "Audio ingestion agent",
            "Insight synthesis engine",
            "Cross-device sync core",
        ),
        experience_flow=(
            "Recording timeline",
            "Insight storyboard",
            "Follow-up request queue",
        ),
        security_watchpoints=(
            "Secure offline vault",
            "Role-based sharing controls",
        ),
        qa_focus=(
            "Battery impact measurement",
            "Offline/online sync validation",
            "Speaker accuracy sampling",
        ),
    ),
    Blueprint(
        key="retro-console",
        aliases=("gameboy", "game boy", "retro console", "handheld", "掌上遊戲機"),
        device_label="Retro Console AI Mod Kit",
        summary="Adds dynamic quests and community layers to beloved handheld consoles.",
        ai_modules=(
            "Procedural quest composer",
            "Save-state storyteller",
            "Skill coaching companion",
        ),
        blue_ocean=(
            "Unlock collectible communities by blending nostalgia with creator monetisation opportunities."
        ),
        integration_layers=(
            "Cartridge bridge firmware",
            "Cloud storyline curator",
            "Community challenge service",
        ),
        experience_flow=(
            "Quest selection overlay",
            "Creator studio",
            "Community leaderboard",
        ),
        security_watchpoints=(
            "Signed mod packages",
            "Community content moderation",
        ),
        qa_focus=(
            "Latency on original hardware",
            "Compatibility regression per game",
            "Moderation workflow rehearsal",
        ),
    ),
    Blueprint(
        key="vision-custodian",
        aliases=("camera", "security camera", "smart cam", "cam", "監視器"),
        device_label="Vision Custodian Cam",
        summary="Upgrades cameras with on-device analytics, incident storytelling, and privacy controls.",
        ai_modules=(
            "Edge incident detection",
            "Context-rich clip tagging",
            "Privacy-preserving redaction",
        ),
        blue_ocean=(
            "Serve property managers needing AI assurance without constant cloud streaming.",
        ),
        integration_layers=(
            "Edge inference runtime",
            "Event timeline index",
            "Escalation webhook relay",
        ),
        experience_flow=(
            "Camera health board",
            "Incident storytelling feed",
            "Privacy control studio",
        ),
        security_watchpoints=(
            "Zero trust stream access",
            "Event retention governance",
        ),
        qa_focus=(
            "Low-light inference suite",
            "Network disruption recovery",
            "Privacy redaction accuracy",
        ),
    ),
    Blueprint(
        key="climate-fan",
        aliases=("fan", "mechanical fan", "electric fan", "風扇"),
        device_label="Climate Rhythm Conductor",
        summary="Elevates mechanical fans with ambient sensing and wellness routines.",
        ai_modules=(
            "Comfort rhythm composer",
            "Air quality insight",
            "Sleep pattern coach",
        ),
        blue_ocean=(
            "Differentiate appliance OEMs with wellness subscriptions that blend comfort analytics and coaching."
        ),
        integration_layers=(
            "Retrofit sensor halo",
            "Pattern learning brain",
            "Mobile guidance coach",
        ),
        experience_flow=(
            "Comfort goals setup",
            "Ambient feedback ring",
            "Sleep report gallery",
        ),
        security_watchpoints=(
            "Sensor tamper detection",
            "Household data minimisation",
        ),
        qa_focus=(
            "Noise profile regression",
            "Sensor calibration loops",
            "Wellness insight accuracy",
        ),
    ),
    Blueprint(
        key="culinary-companion",
        aliases=("rice cooker", "cooker", "電鍋", "multicooker"),
        device_label="Culinary Ritual Companion",
        summary="Transforms rice cookers into guided meal orchestration hubs.",
        ai_modules=(
            "Grain intelligence advisor",
            "Meal planning co-pilot",
            "Family nutrition storyteller",
        ),
        blue_ocean=(
            "Serve multicultural households with personalised culinary rituals and subscription meal journeys."
        ),
        integration_layers=(
            "Ingredient knowledge graph",
            "Steam cycle prediction model",
            "Family profile service",
        ),
        experience_flow=(
            "Prep ritual walkthrough",
            "Cooking progress theatre",
            "Family table recap",
        ),
        security_watchpoints=(
            "Food preference privacy",
            "Appliance safety watchdog",
        ),
        qa_focus=(
            "Sensor temperature accuracy",
            "Recipe outcome testing",
            "Notification reliability",
        ),
    ),
    Blueprint(
        key="open-canvas",
        aliases=("device", "custom", "hardware"),
        device_label="Custom Device Fusion",
        summary="A flexible canvas that adapts to bespoke hardware mashups.",
        ai_modules=(
            "Context fusion engine",
            "Adaptive agent router",
            "Outcome scoring analytics",
        ),
        blue_ocean=(
            "Offer integration studios a rapid blueprint generator for niche hardware bundles."
        ),
        integration_layers=(
            "Signal ingestion mesh",
            "Policy reasoning lattice",
            "Experience stitching fabric",
        ),
        experience_flow=(
            "Persona alignment workshop",
            "Modular journey designer",
            "Adoption telemetry deck",
        ),
        security_watchpoints=(
            "Secrets lifecycle automation",
            "Continuous compliance diffing",
        ),
        qa_focus=(
            "Cross-device interoperability",
            "Experience drift monitoring",
            "Regression intelligence loop",
        ),
    ),
)


@dataclass
class AgentOutputs:
    """Container for the orchestrated agent contributions."""

    business_analyst: Dict[str, object]
    software_architect: Dict[str, object]
    ui_ux: Dict[str, object]
    security: Dict[str, object]
    quality_assurance: Dict[str, object]
    product_manager: Dict[str, object] | None = None

    def as_payload(self) -> Dict[str, Dict[str, object]]:
        payload = {
            "businessAnalyst": self.business_analyst,
            "softwareArchitect": self.software_architect,
            "uiUx": self.ui_ux,
            "security": self.security,
            "qualityAssurance": self.quality_assurance,
        }
        if self.product_manager is not None:
            payload["productManager"] = self.product_manager
        return payload


@dataclass
class HardwarePlan:
    """Represents a complete AI augmentation plan for a device."""

    device_key: str
    device_label: str
    ai_modules: Sequence[str]
    differentiator: str
    attachments: Sequence[str] = field(default_factory=list)
    integration_layers: Sequence[str] = field(default_factory=tuple)
    experience_flow: Sequence[str] = field(default_factory=tuple)
    security_watchpoints: Sequence[str] = field(default_factory=tuple)
    qa_focus: Sequence[str] = field(default_factory=tuple)
    implementation_roadmap: Sequence[str] = field(default_factory=tuple)
    agents: AgentOutputs | None = None

    def as_payload(self) -> Dict[str, object]:
        payload: Dict[str, object] = {
            "deviceKey": self.device_key,
            "deviceLabel": self.device_label,
            "aiModules": list(self.ai_modules),
            "differentiator": self.differentiator,
            "attachments": list(self.attachments),
            "integrationLayers": list(self.integration_layers),
            "experienceFlow": list(self.experience_flow),
            "securityWatchpoints": list(self.security_watchpoints),
            "qaFocus": list(self.qa_focus),
            "implementationRoadmap": list(self.implementation_roadmap),
        }
        if self.agents:
            payload["agents"] = self.agents.as_payload()
        return payload


class BusinessAnalystAgent:
    """Evaluates market context and blue ocean angles for a blueprint."""

    def assess(self, blueprint: Blueprint, attachments: Sequence[str]) -> Dict[str, object]:
        digest = sha256(blueprint.key.encode("utf-8")).hexdigest()
        audience_segments = [
            f"Segment {index + 1}: {blueprint.device_label} adopters exploring subscription upgrades"
            for index in range(2)
        ]
        if attachments:
            audience_segments.append(
                "Attachment enthusiasts seeking AI augmentation for "
                + ", ".join(attachments)
            )

        return {
            "summary": blueprint.summary,
            "blueOceanOpportunity": blueprint.blue_ocean,
            "audienceSegments": audience_segments,
            "validationSignal": f"Market radar hash {digest[:8]}",
        }


class SoftwareArchitectAgent:
    """Designs the end-to-end topology for the augmented device."""

    def compose(self, blueprint: Blueprint, attachments: Sequence[str]) -> Dict[str, object]:
        layered_stack = list(blueprint.integration_layers)
        if attachments:
            layered_stack.append("Attachment orchestration gateway")

        return {
            "integrationLayers": layered_stack,
            "dataContracts": {
                "telemetry": "JSON envelopes with signed digests",
                "control": "Event-sourced intent messages",
            },
            "scalabilityNotes": "Design for bursty workloads with circuit breakers and local fallbacks.",
        }


class UIUXAgent:
    """Curates the cross-device experience blueprint."""

    def craft(self, blueprint: Blueprint, attachments: Sequence[str]) -> Dict[str, object]:
        journey = list(blueprint.experience_flow)
        responsive_behaviour = (
            "Adaptive card layouts for mobile, tablet, and wall displays"
        )
        if attachments:
            journey.append("Attachment experience set-up wizard")

        return {
            "journeyStages": journey,
            "rwdGuidelines": responsive_behaviour,
            "accessibility": "High contrast, caption-ready, and voice-first navigation options.",
        }


class SecurityEngineerAgent:
    """Reviews blueprints for potential security gaps."""

    def review(
        self, blueprint: Blueprint, attachments: Sequence[str], architecture: Dict[str, object]
    ) -> Dict[str, object]:
        watchpoints = list(blueprint.security_watchpoints)
        if attachments:
            watchpoints.append("Attachment firmware signing and provenance")

        return {
            "threatModel": {
                "surface": architecture["integrationLayers"],
                "watchpoints": watchpoints,
            },
            "remediationWorkflow": "Escalate findings to the PM with severity tags for engineering follow-up.",
        }


class QualityAssuranceAgent:
    """Plans cross-functional verification cycles."""

    def plan(
        self,
        blueprint: Blueprint,
        attachments: Sequence[str],
        ui_ux: Dict[str, object],
        architecture: Dict[str, object],
    ) -> Dict[str, object]:
        validation_gates = list(blueprint.qa_focus)
        if attachments:
            validation_gates.append("Attachment compatibility matrix")

        return {
            "testPlan": validation_gates,
            "uiUxFocus": ui_ux["journeyStages"],
            "backendFocus": architecture["integrationLayers"],
            "escalation": "Report defects to the PM who will coordinate frontend and backend fixes.",
            "testPlan": validation_gates,
            "uiUxFocus": ui_ux["journeyStages"],
            "backendFocus": architecture["integrationLayers"],
            "escalation": "Report defects to the PM who will coordinate frontend and backend fixes.",
        }


class ProductManagerAgent:
    """Aligns agent output into an actionable delivery plan."""

    def orchestrate(
        self,
        blueprint: Blueprint,
        attachments: Sequence[str],
        agent_outputs: Dict[str, Dict[str, object]],
    ) -> Dict[str, object]:
        backlog = [
            {
                "milestone": "Validate blue ocean thesis with stakeholder interviews",
                "owner": "Business Analyst",
            },
            {
                "milestone": "Prototype journey stages with UI/UX using RWD guidelines",
                "owner": "Frontend",
            },
            {
                "milestone": "Implement integration layers with backend and architect",
                "owner": "Backend",
            },
            {
                "milestone": "Run QA regression and security threat rehearsal",
                "owner": "QA & Security",
            },
        ]
        if attachments:
            backlog.append(
                {
                    "milestone": "Expand backlog for attachment orchestration",
                    "owner": "PM",
                }
            )

        dependencies = [
            "Architecture informs security hardening",
            "UI/UX prototypes feed QA accessibility audits",
        ]

        return {
            "deliveryBacklog": backlog,
            "dependencies": dependencies,
            "nextReview": "Schedule cross-agent sync once QA shares findings.",
        }


class HardwarePlanGenerator:
    """Create deterministic hardware augmentation plans derived from device seeds."""

    def __init__(self) -> None:
        self._business_analyst = BusinessAnalystAgent()
        self._product_manager = ProductManagerAgent()
        self._architect = SoftwareArchitectAgent()
        self._ui_ux = UIUXAgent()
        self._security = SecurityEngineerAgent()
        self._qa = QualityAssuranceAgent()

    def _normalise(self, value: str) -> str:
        return " ".join(value.strip().lower().split())
class ProductManagerAgent:
    """Aligns agent output into an actionable delivery plan."""

    def orchestrate(
        self,
        blueprint: Blueprint,
        attachments: Sequence[str],
        agent_outputs: Dict[str, Dict[str, object]],
    ) -> Dict[str, object]:
        backlog = [
            {
                "milestone": "Validate blue ocean thesis with stakeholder interviews",
                "owner": "Business Analyst",
            },
            {
                "milestone": "Prototype journey stages with UI/UX using RWD guidelines",
                "owner": "Frontend",
            },
            {
                "milestone": "Implement integration layers with backend and architect",
                "owner": "Backend",
            },
            {
                "milestone": "Run QA regression and security threat rehearsal",
                "owner": "QA & Security",
            },
        ]
        if attachments:
            backlog.append(
                {
                    "milestone": "Expand backlog for attachment orchestration",
                    "owner": "PM",
                }
            )

        dependencies = [
            "Architecture informs security hardening",
            "UI/UX prototypes feed QA accessibility audits",
        ]

        return {
            "deliveryBacklog": backlog,
            "dependencies": dependencies,
            "nextReview": "Schedule cross-agent sync once QA shares findings.",
        }


class HardwarePlanGenerator:
    """Create deterministic hardware augmentation plans derived from device seeds."""

    def __init__(self) -> None:
        self._business_analyst = BusinessAnalystAgent()
        self._product_manager = ProductManagerAgent()
        self._architect = SoftwareArchitectAgent()
        self._ui_ux = UIUXAgent()
        self._security = SecurityEngineerAgent()
        self._qa = QualityAssuranceAgent()

    def _normalise(self, value: str) -> str:
        return " ".join(value.strip().lower().split())

    def _select_blueprint(self, device: str) -> Blueprint:
        normalised = self._normalise(device)
        for blueprint in BLUEPRINTS:
            if any(normalised == self._normalise(alias) for alias in blueprint.aliases):
                return blueprint
        for blueprint in BLUEPRINTS:
            if any(self._normalise(alias) in normalised for alias in blueprint.aliases):
                return blueprint
        return BLUEPRINTS[-1]

    def _prepare_attachments(self, attachments: Iterable[str] | None) -> List[str]:
        if attachments is None:
            return []
        if not isinstance(attachments, Iterable) or isinstance(attachments, (str, bytes)):
            raise TypeError("Attachments must be an iterable of strings")

        deduped: Dict[str, str] = {}
        for attachment in attachments:
            if not isinstance(attachment, str):
                raise TypeError("Attachments must be an iterable of strings")
            original = " ".join(attachment.strip().split())
            if not original:
                continue
            key = self._normalise(original)
            deduped.setdefault(key, original)

        unique_sorted = [deduped[key] for key in sorted(deduped, key=str)]
        return unique_sorted

    def _craft_differentiator(
        self, blueprint: Blueprint, attachments: Sequence[str]
    ) -> str:
        base = (
            f"{blueprint.device_label} gains {blueprint.ai_modules[0].lower()} and "
            f"{blueprint.ai_modules[1].lower()} in one orchestrated package."
        )
        if attachments:
            base += " Attachments add " + ", ".join(attachment.lower() for attachment in attachments) + "."
        return base

    def generate(
        self, device: str, attachments: Iterable[str] | None = None
    ) -> HardwarePlan:
        if not device or not isinstance(device, str):
            raise TypeError("Device must be a non-empty string")

        blueprint = self._select_blueprint(device)
        prepared_attachments = self._prepare_attachments(attachments)

        analyst = self._business_analyst.assess(blueprint, prepared_attachments)
        architect = self._architect.compose(blueprint, prepared_attachments)
        ui_ux = self._ui_ux.craft(blueprint, prepared_attachments)
        security = self._security.review(blueprint, prepared_attachments, architect)
        qa = self._qa.plan(blueprint, prepared_attachments, ui_ux, architect)
        agent_outputs = AgentOutputs(
            business_analyst=analyst,
            software_architect=architect,
            ui_ux=ui_ux,
            security=security,
            quality_assurance=qa,
        )
        product_manager = self._product_manager.orchestrate(
            blueprint,
            prepared_attachments,
            agent_outputs.as_payload(),
        )
        agent_outputs.product_manager = product_manager

        roadmap_steps = [
            item.get("milestone", "")
            for item in product_manager.get("deliveryBacklog", [])
            if isinstance(item, dict) and item.get("milestone")
        ]

        plan = HardwarePlan(
            device_key=blueprint.key,
            device_label=blueprint.device_label,
            ai_modules=blueprint.ai_modules,
            differentiator=self._craft_differentiator(blueprint, prepared_attachments),
            attachments=prepared_attachments,
            integration_layers=architect["integrationLayers"],
            experience_flow=ui_ux["journeyStages"],
            security_watchpoints=security["threatModel"]["watchpoints"],
            qa_focus=qa["testPlan"],
            implementation_roadmap=roadmap_steps,
            agents=agent_outputs,
        )
        return plan


def generate_device_strategy(
    device: str, attachments: Iterable[str] | None = None
) -> Dict[str, object]:
    """Public helper that returns a JSON-serialisable plan."""

    plan = HardwarePlanGenerator().generate(device=device, attachments=attachments)
    return plan.as_payload()
    plan = HardwarePlanGenerator().generate(device=device, attachments=attachments)
    return plan.as_payload()
