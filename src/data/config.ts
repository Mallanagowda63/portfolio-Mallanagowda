import { PersonalConfig, EducationItem, CertificationItem } from '../types';
import profileImg from '../assets/profile.jpg';

export const personalConfig: PersonalConfig = {
  name: "Mallanagowda P",
  logoText: "MP",
  primaryTitle: "Full-Stack Developer | Cloud Engineer",
  supportingText: "Building scalable web applications, cloud-powered solutions, and production-ready software with modern technologies.",
  professionalSummary: "I build complete software solutions — from responsive frontend interfaces and scalable backend APIs to databases, containerized applications, and cloud deployment.",
  availabilityBadge: "Open to Full-Time Opportunities",
  email: "mallanagowdap99@gmail.com",
  phone: "+91 9901536003",
  location: "Bangalore, India",
  linkedin: "https://www.linkedin.com/in/mallanagowda-p-9236a32ba/",
  github: "https://github.com/Mallanagowda63",
  resumePdfUrl: "./resume.pdf",
  profileImage: profileImg,
  githubProfileUrl: "https://github.com/Mallanagowda63"
};

export const educationData: EducationItem = {
  degree: "Bachelor of Engineering in Cyber Security",
  institution: "Cambridge Institute of Technology North Campus, Bangalore",
  specialization: "Computer Science & Engineering (2023 – 2027)",
  expectedGraduation: "2027",
  cgpa: "8.7"
};

export const certificationData: CertificationItem = {
  title: "AWS Certified Cloud Practitioner Essentials",
  issuer: "Amazon Web Services"
};

export const certificationsList: CertificationItem[] = [
  {
    title: "AWS Certified Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)"
  },
  {
    title: "React Native for App Development",
    issuer: "Udemy"
  },
  {
    title: "Python Programming",
    issuer: "Udemy"
  },
  {
    title: "Data Analysis and Visualization",
    issuer: "Udemy"
  },
  {
    title: "Blockchain Essentials",
    issuer: "Great Learning"
  },
  {
    title: "Ethical Hacking Fundamentals",
    issuer: "Udemy"
  }
];
