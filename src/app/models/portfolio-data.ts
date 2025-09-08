export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface projets {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  email: string;
  about: string;
  aboutMe: string;
  skills: Skill[];
  experiences: projets[];
  education: Education[];
  socialLinks: SocialLink[];
  languages: { name: string; level: string }[];
}