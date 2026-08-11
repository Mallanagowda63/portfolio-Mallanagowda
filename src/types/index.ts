export interface Skill {
  name: string;
  iconName?: string;
  isPopular?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  date: string;
  description: string[];
  technologies: string[];
}

export interface ArchitectureStep {
  label: string;
  sublabel?: string;
  type: 'client' | 'api' | 'service' | 'db' | 'infra' | 'deploy';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  projectFocus: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  architectureUrl?: string;
  statusBadge?: string;
  
  // Modal detail content
  overview: string;
  problem: string;
  solution: string;
  architectureFlow: ArchitectureStep[];
  contribution: string[];
  challenges: string[];
  outcome: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  specialization: string;
  expectedGraduation: string;
  cgpa: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  credentialUrl?: string;
}

export interface PersonalConfig {
  name: string;
  logoText: string;
  primaryTitle: string;
  supportingText: string;
  professionalSummary: string;
  availabilityBadge: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumePdfUrl: string;
  profileImage?: string;
  githubProfileUrl: string;
}
