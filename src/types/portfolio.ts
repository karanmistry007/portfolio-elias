// ─── Navigation Types ────────────────────────────────────────────────
export interface NavLink {
  name: string;
  link: string;
  active: boolean;
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
  icon: React.ReactNode;
  year: string;
  degree: string;
  link: string;
  institution: string;
  description: string;
}

export interface ExperienceItem {
  icon: React.ReactNode;
  year: string;
  image: string;
  position: string;
  link: string;
  company: string;
  description: string;
}

// ─── Component Props ─────────────────────────────────────────────────
export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

export interface NavbarProps {
  logoText: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  activeSection: string;
}

export interface SectionHeadingProps {
  message: string;
}

export interface ComingSoonProps {
  message?: string;
}

export interface ContactCardProps {
  icon: React.ReactNode;
  link: string;
  details: string;
}

export interface EducationCardProps {
  icon: React.ReactNode;
  year: string;
  image: string;
  degree: string;
  link?: string;
  institution: string;
  description: string;
}

export interface ExperienceCardProps {
  icon: React.ReactNode;
  year: string;
  image: string;
  position: string;
  link?: string;
  company: string;
  description: string;
}

export interface ProjectCardProps {
  image: string;
  techStack: string[];
  title: string;
  description: string;
  link?: string;
}

export interface SkillsCardProps {
  skill: string;
  description: string;
}
