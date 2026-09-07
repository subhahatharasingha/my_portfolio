export interface SkillCategory {
  title: string;
  iconName: string; // Dynamic Lucide icon lookup name
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    iconName: "Monitor",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React"]
  },
  {
    title: "Backend",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "RESTful APIs", "Prisma"]
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: ["MySQL", "MongoDB", "Firebase", "Firestore"]
  },
  {
    title: "Mobile Development",
    iconName: "Smartphone",
    skills: ["Flutter", "Dart"]
  },
  {
    title: "DevOps & Cloud",
    iconName: "Cloud",
    skills: ["Docker", "Jenkins", "Terraform", "AWS"]
  },
  {
    title: "AI & Machine Learning",
    iconName: "Cpu",
    skills: ["Python", "TensorFlow / Keras", "OpenCV", "NumPy", "Scikit-learn"]
  },
  {
    title: "Blockchain",
    iconName: "Link",
    skills: ["Go", "Blockchain"]
  },
  {
    title: "Tools & Version Control",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "Visual Studio", "Visual Studio Code", "Android Studio", "IntelliJ IDEA"]
  }
];
