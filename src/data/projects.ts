export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo?: string;
  featured: boolean;
  type?: string;
  status?: string;
  details?: string[];
}

export const projects: Project[] = [
  
  {
    title: "Centralized Doctor & Channeling Management System",
    description: "A centralized healthcare web application designed to connect patients, doctors, and hospitals for efficient appointment channeling and management.",
    image: "/images/projects/cdcm.png",
    technologies: ["Java", "Spring Boot", "MongoDB", "React.js", "Tailwind CSS", "JWT Security", "Cloudinary"],
    category: "Full Stack",
    github: "#",
    featured: true,
    type: "Group Project",
    status: "Ongoing",
    details: [
      "Developing a centralized healthcare web application connecting patients, doctors, and hospitals.",
      "Implementing role-based authentication and user management for patients, doctors, and hospitals.",
      "Building doctor search, profile management, appointment booking, cancellation, and rescheduling features with real-time availability.",
      "Enabling secure medical report and prescription uploads so doctors can review patient history before consultations.",
      "Integrating online payment processing, ratings and feedback, and notification services."
    ]
  },

  {
    title: "Traffic Fine Payment System",
    description: "A multi-platform traffic fine management and payment system that digitizes the process of issuing traffic fines, managing violations, and allowing drivers to view and settle fines online. The system consists of a Spring Boot backend, React-based web portals, and a Flutter mobile application.",
    image: "/images/projects/Traficfine.png",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "JWT",
      "Maven",
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Axios",
      "Flutter",
      "Dart",
      "PayHere Mobile SDK",
      "MySQL",
      "PayHere",
      "Text.lk SMS API"
    ],
    category: "Full Stack",
    github: "#",
    featured: false,
    type: "Group Project",
    status: "Completed / University Group Project",
    details: [
      "Developed a centralized traffic fine management system connecting traffic officers, drivers, and administrators.",
      "Built a Spring Boot REST API backend for authentication, fine management, payments, and notifications.",
      "Developed a React Admin Portal for managing fine categories, traffic officers, and revenue analytics.",
      "Developed a React Driver Web Portal for searching, viewing, and paying traffic fines.",
      "Developed a Flutter mobile application supporting both Traffic Officer and Driver workflows.",
      "Implemented JWT-based authentication and role-based authorization for Admin, Officer, and Driver users.",
      "Implemented traffic fine creation by officers through the mobile application.",
      "Integrated MySQL using Spring Data JPA/Hibernate for persistent data management.",
      "Integrated PayHere payment processing for online fine settlement.",
      "Integrated Text.lk SMS API to notify issuing officers after successful fine payments.",
      "Implemented RESTful API communication between the backend and web/mobile clients."
    ]
  },

  {
    title: "Recipe Mobile Application",
    description: "A Flutter-based mobile recipe application that helps users discover recipes, organize meals, and manage their favorite recipes.",
    image: "/images/projects/receipe.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Android Studio"],
    category: "Mobile",
    github: "#",
    featured: false,
    type: "Group Project (2 Members)",
    details: [
      "Built a Flutter-based recipe application with Firebase Authentication and Firestore.",
      "Implemented recipe search and category filtering.",
      "Implemented favorites and recipe detail features.",
      "Developed a meal planning module for organizing daily meals."
    ]
  },
  {
    title: "Real Estate Web Application",
    description: "A full-stack real estate web application for managing and discovering properties with role-based authentication and property management features.",
    image: "/images/projects/realstate.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Cloudinary", "JWT"],
    category: "Full Stack",
    github: "#",
    featured: true,
    type: "Individual Project",
    details: [
      "Developed a full-stack real estate web application with JWT-based role authentication and property management.",
      "Enabled users to search properties, view property details, contact owners, add favorites, and post properties for sale.",
      "Built an admin dashboard with CRUD operations for property management.",
      "Integrated Cloudinary for image storage.",
      "Implemented the MERN stack architecture."
    ]
  },

  {
    title: "DevOps CI/CD Pipeline",
    description: "An individual DevOps project focused on automating application build and deployment using CI/CD practices and infrastructure as code.",
    image: "/images/projects/devops-pipeline.svg",
    technologies: ["Jenkins", "Docker", "Terraform", "AWS EC2", "GitHub"],
    category: "DevOps",
    github: "#",
    featured: true,
    type: "Individual Project",
    details: [
      "Automated build and deployment using Jenkins and GitHub webhooks.",
      "Used Terraform to provision and manage AWS EC2 infrastructure as code.",
      "Managed environment variables and Dockerized the application for deployment on EC2."
    ]
  },
  
  {
    title: "QA & Test Automation Project",
    description: "An individual software quality assurance and test automation project focused on automated testing, CI integration, performance testing, security testing, and code quality analysis.",
    image: "/images/projects/qa-testing.svg",
    technologies: ["React.js", "Spring Boot", "JUnit", "Cucumber", "Selenium", "Postman", "REST Assured", "JMeter", "SonarQube", "Jira"],
    category: "Testing / QA",
    github: "#",
    featured: false,
    type: "Individual Project",
    details: [
      "Applied TDD and BDD approaches using JUnit and Cucumber in Spring Boot.",
      "Automated UI testing using Selenium.",
      "Developed automated API tests using Postman and REST Assured.",
      "Integrated automated tests into a CI pipeline.",
      "Performed load testing using JMeter.",
      "Conducted OWASP security testing.",
      "Performed code quality analysis using SonarQube."
    ]
  },
  {
    title: "Pet Adoption Platform",
    description: "A web and desktop pet adoption platform that allows users to discover pets and submit adoption requests while providing administrators with tools to manage pet listings.",
    image: "images/projects/petadoption.png",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
    category: "Full Stack",
    github: "#",
    featured: false,
    type: "Individual Project",
    details: [
      "Developed a pet adoption platform with role-based authentication.",
      "Implemented pet search and adoption request features.",
      "Built an admin dashboard with CRUD operations for pet management.",
      "Implemented image upload functionality.",
      "Designed REST APIs and a MySQL database.",
      "Integrated the React.js frontend with the backend services."
    ]
  },
  {
    title: "AI-Based Driver Drowsiness Detection System",
    description: "A real-time AI-based driver drowsiness detection system that uses computer vision and deep learning to monitor eye closure and yawning and provide visual and audible warnings when signs of driver fatigue are detected.",
    image: "/images/projects/drowsiness-detection.svg",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "MobileNetV2",
      "CNN",
      "Threading",
      "Git"
    ],
    category: "AI",
    github: "#",
    featured: false,
    type: "Individual AI / Computer Vision Project",
    details: [
      "Developed a real-time driver drowsiness detection system using computer vision and deep learning.",
      "Built a custom 3-layer CNN to classify eye states as open or closed.",
      "Used MobileNetV2 transfer learning for yawning detection.",
      "Implemented dataset preprocessing and train, validation, and test splitting.",
      "Used OpenCV Haar Cascade face detection and proportional eye-region extraction for real-time monitoring.",
      "Implemented temporal smoothing using prediction history to improve real-time drowsiness decisions.",
      "Detects continuous eye closure and repeated yawning based on configurable safety thresholds.",
      "Provides real-time visual feedback through an OpenCV interface.",
      "Implements an audible warning using a background thread to avoid blocking the video processing loop.",
      "Implemented model evaluation using accuracy, precision, recall, F1-score, confusion matrices, and learning curves.",
      "Added a webcam-based sanity checking tool for offline validation using captured frames."
    ]
  },
  
];

