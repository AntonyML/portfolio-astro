// ─── Portfolio Data Types ────────────────────────────────────────────────────

export interface Social {
  logo: string;
  href: string;
}

export interface NavItem {
  text: string;
  href: string;
}

export interface Technology {
  text: string;
  logo: string;
}

// path de imagen que debe terminar en .webp
export type WebPPath = `${string}.webp`;

export interface Project {
  id: string;
  title: string;
  type: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: WebPPath;
  color: string;
  github: string;
  githubFront?: string;
  githubBack?: string;
  // Engineering Case Study fields
  challenge?: string;
  solution?: string;
  architecture?: string;
  testing?: string;
  management?: string;
  impact?: string;
  artifacts?: string[];
}

export interface Buttons {
  github: string;
  demo: string;
  back: string;
  hrefgithub: string;
}

export interface Experience {
  id: string;
  projectTitle: string;
  image: WebPPath;
  role: string;
  client: string;
  country: string;
  flag: string;
  origin: string;
  period: string;
  color: string;
  description: string;
  context: string;
  impact: string;
  highlights: string[];
  stack: string[];
  github?: string;
}
