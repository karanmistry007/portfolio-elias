// ─── Navigation Types ────────────────────────────────────────────────
export interface NavLink {
  name: string;
  link: string;
}

export interface SocialLink {
  name: string;
  link: string;
  icon: React.ReactNode;
}

// ─── Contact Types ───────────────────────────────────────────────────
export interface ContactDetail {
  icon: React.ReactNode;
  link: string;
  details: string;
}

// ─── Skills Types ────────────────────────────────────────────────────
export interface SkillItem {
  skill: string;
  description: string;
}

// ─── Projects Types ──────────────────────────────────────────────────
export interface ProjectDetail {
  image: string;
  techStack: string[];
  title: string;
  description: string;
  link?: string;
}

// ─── Resume Types ────────────────────────────────────────────────────
export interface EducationItem {
  image: string;
  year: string;
  degree: string;
  link: string;
  institution: string;
  description: string;
}

export interface ExperienceItem {
  year: string;
  image: string;
  position: string;
  link: string;
  company: string;
  description: string;
}
