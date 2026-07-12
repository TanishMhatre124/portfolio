export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  headline: string;
  bio: string;
  philosophy: string;
  location: string;
  email: string;
  availability: string;
  responseTime: string;
  resumeUrl: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "email";
}

export interface NavItem {
  label: string;
  path: string;
  isRoute: boolean;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  description?: string;
  skills: SkillItem[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  specialization: string;
  studyDuration: string;
  expectedGraduation: string;
  cgpa: string;
  coursework: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export type ProjectCategory =
  | "AI"
  | "Machine Learning"
  | "Python"
  | "Data Engineering"
  | "Data Science"
  | "Frontend"
  | "Backend"
  | "Automation"
  | "Open Source"
  | "Research"
  | "Full Stack";

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  categories: ProjectCategory[];
  techStack: string[];
  highlights: string[];
  demoUrl: string | null;
  sourceUrl: string | null;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  workflow: string[];
  features: string[];
  challenges: ProjectSection[];
  results: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  issuedDate: string;
  verifyUrl: string | null;
  category: string;
}

export interface Achievement {
  id: string;
  role: string;
  organization: string;
  image: string;
  orgLogo: string;
  points: string[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  externalUrl: string | null;
  readTime: string;
}
