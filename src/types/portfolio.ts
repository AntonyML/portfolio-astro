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

export interface Project {
  id: string;
  title: string;
  type: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  color: string;
}

export interface Buttons {
  github: string;
  demo: string;
  back: string;
  hrefgithub: string;
}
