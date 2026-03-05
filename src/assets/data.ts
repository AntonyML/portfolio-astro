// ─── Typed Data Layer ─────────────────────────────────────────────────────────
// All raw data lives in src/data/*.json — this module serialises it into
// strongly-typed exports consumed throughout the app.

import type { Project, Technology, Buttons } from '../types/portfolio';

import projectsRaw    from '../data/projects.json';
import technologiesRaw from '../data/technologies.json';
import buttonsRaw     from '../data/buttons.json';

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects: Project[] = projectsRaw as Project[];

// ─── Technologies ────────────────────────────────────────────────────────────
export const technologies: Technology[] = technologiesRaw as Technology[];

// ─── Buttons / Links ─────────────────────────────────────────────────────────
export const buttons: Buttons[] = buttonsRaw as Buttons[];
