// ─── Typed Data Layer ─────────────────────────────────────────────────────────
// All raw data lives in src/data/*.json — this module serialises it into
// strongly-typed exports consumed throughout the app.

import type { Project, Technology, Buttons, Experience, SkillCategory, Credentials } from '../types/portfolio';

import projectsRaw     from '../data/projects.json';
import technologiesRaw from '../data/technologies.json';
import buttonsRaw      from '../data/buttons.json';
import experienceRaw   from '../data/experience.json';
import skillsRaw       from '../data/skills.json';
import credentialsRaw  from '../data/credentials.json';

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects: Project[] = projectsRaw as Project[];

// ─── Technologies ────────────────────────────────────────────────────────────
export const technologies: Technology[] = technologiesRaw as Technology[];
// Lookup map: tech name → logo (class or URL)
export const techMap: Record<string, string> = Object.fromEntries(
   technologies.map((t) => [t.text, t.logo])
);
// ─── Buttons / Links ─────────────────────────────────────────────────────────
export const buttons: Buttons[] = buttonsRaw as Buttons[];

// ─── Work Experience ─────────────────────────────────────────────────────────
export const experience: Experience[] = experienceRaw as Experience[];

// ─── Skills & Credentials ───────────────────────────────────────────────────
export const skills: SkillCategory[] = skillsRaw as SkillCategory[];
export const credentials: Credentials = credentialsRaw as Credentials;
