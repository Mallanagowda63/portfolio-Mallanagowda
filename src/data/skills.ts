import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++"]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    skills: ["React.js", "React Native", "TypeScript", "Redux Toolkit", "Context API", "Tailwind CSS", "Vite", "Responsive Design"]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MVC Architecture", "Prisma", "Mongoose"]
  },
  {
    id: "database",
    title: "Databases & Cloud Storage",
    skills: ["MongoDB", "MongoDB Atlas", "MySQL", "Firebase", "Redis"]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Infrastructure",
    skills: ["AWS", "EC2", "Docker", "Docker Compose", "Render", "Vercel", "Netlify", "Railway", "Google Cloud Run"]
  },
  {
    id: "tools",
    title: "Developer Tools & Analytics",
    skills: ["Git", "GitHub", "Postman", "Android Studio", "Expo", "VS Code", "Power BI", "Pandas"]
  }
];
