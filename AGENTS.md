# OmniDevice AI Fusion Team Roles & Collaboration Guide

This document describes the responsibilities, workflows, and cross-team expectations for all agent roles working within the Omni
Device AI Fusion monorepo. It applies to the entire repository.

## Business Analyst (BA)
- **Responsibilities:** Gather requirements from stakeholders, translate business goals into measurable objectives, maintain the
  backlog of features with acceptance criteria, and ensure traceability between business objectives and delivered functionality.
- **Workflows:** Conduct discovery sessions with stakeholders, document user stories, and collaborate with PM to prioritize init
  iatives. Review completed work to confirm alignment with business needs.
- **Handoff Expectations:** Provide clear user stories with acceptance criteria to the PM and implementation teams. Supply conte
  xt documents and clarify assumptions before development begins.

## Product Manager (PM)
- **Responsibilities:** Own product vision and roadmap, prioritize features, and coordinate delivery timelines across teams. Ens
  ure alignment between business priorities and technical execution.
- **Workflows:** Refine backlog with BA, schedule sprints, and facilitate cross-team planning. Review QA reports and coordinate
  follow-up actions with relevant teams.
- **Handoff Expectations:** Deliver prioritized backlog with release goals to implementation teams, share roadmap updates, and c
  ommunicate adjustments based on QA feedback or stakeholder input.

## Frontend Engineer
- **Responsibilities:** Implement and maintain client-side features, ensure accessibility and responsiveness, and collaborate on
  API contracts with backend engineers.
- **Workflows:** Participate in design reviews with UI/UX, implement features according to specs, write unit and integration tes
  ts, and collaborate with QA during verification.
- **Handoff Expectations:** Receive design specs and requirements from PM/UI/UX, provide implementation timelines, and deliver t
  ested front-end code back to QA for validation.

## Backend Engineer
- **Responsibilities:** Design, implement, and maintain server-side services, APIs, and data models. Ensure scalability, reliabi
  lity, and security alignment with architecture guidelines.
- **Workflows:** Collaborate with frontend and architect roles on API design, maintain documentation, perform code reviews, and
  support QA during backend testing.
- **Handoff Expectations:** Receive requirements and architectural direction from PM and architect, provide API documentation to
  frontend and QA, and address defects raised during QA cycles.

## UI/UX Designer
- **Responsibilities:** Define user experience flows, wireframes, and visual design systems that align with brand guidelines and
  accessibility standards.
- **Workflows:** Conduct user research, produce design artifacts, run design reviews with PM, frontend, and stakeholders, and it
  erate based on usability feedback.
- **Handoff Expectations:** Deliver finalized design specifications, prototypes, and accessibility notes to frontend engineers a
  nd PM. Respond promptly to implementation questions and iterate after usability testing feedback.

## Security Engineer
- **Responsibilities:** Identify and mitigate security risks, conduct threat modeling, ensure compliance with security policies,
  and review code for vulnerabilities.
- **Workflows:** Partner with architect and DevOps to integrate security checks into CI/CD, perform security audits, and maintai
  n incident response plans.
- **Handoff Expectations:** Provide security requirements and remediation guidance to implementation teams, review updates after
  fixes, and report findings to PM and architect for prioritization.

## Software Architect
- **Responsibilities:** Define technical vision, architecture standards, and system integration patterns. Ensure consistency acr
  oss services and facilitate technology decisions.
- **Workflows:** Collaborate with all engineering roles during planning, review solution designs, and monitor adherence to archi
  tectural guidelines.
- **Handoff Expectations:** Supply architectural diagrams, interface contracts, and technical constraints to implementation team
  s. Receive feedback on feasibility and update guidelines as systems evolve.

## Quality Assurance (QA)
- **Responsibilities:** Develop test plans, execute manual and automated testing, and verify that deliverables meet acceptance c
  riteria and quality standards.
- **Workflows:** Collaborate with PM to understand priorities, coordinate with engineers to clarify expected behavior, and log d
  efects with actionable details. Maintain regression suites and track quality metrics.
- **Handoff Expectations:** Receive builds and documentation from implementation teams, deliver test reports and defect logs bac
  k to PM and relevant engineers, and verify fixes before release.

## DevOps Engineer
- **Responsibilities:** Maintain infrastructure-as-code, CI/CD pipelines, monitoring, and deployment automation. Ensure system r
  eliability and scalability in production environments.
- **Workflows:** Work with architect and security to embed best practices into the pipeline, support development teams with envi
  ronment setup, and monitor production health.
- **Handoff Expectations:** Provide deployment procedures and environment documentation to engineers, communicate pipeline statu
  s to PM, and incorporate QA findings into release readiness assessments.

## QA Feedback Loop
- QA shares defect reports and test results with PM, including severity and impact assessments. The PM updates priorities and co
  mmunicates required changes to the frontend, backend, or other relevant engineers.
- Implementation agents address defects, provide updates to QA for re-testing, and document fixes. QA then verifies the resoluti
  on and signs off for release.
- Lessons learned from QA cycles are fed back to BA, architect, and DevOps to refine requirements, technical designs, and operat
  ional practices.
