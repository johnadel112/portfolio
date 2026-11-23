export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  metric?: string;
  details?: string[];
  featured: boolean;
  image?: string;
};

// In-progress coursework is described as such rather than as completed functionality.
export const featuredProjects: Project[] = [
  {
    id: "credit-default-risk",
    number: "01",
    title: "Credit Default Risk Platform",
    description: "Built an XGBoost-based credit default prediction system using the Home Credit dataset, with a Streamlit dashboard for individual predictions, risk segmentation, and SHAP explanations. Added an optional Groq-powered assistant and Docker deployment.",
    tags: ["Python", "XGBoost", "Streamlit", "SHAP", "Groq", "Docker", "Machine Learning"],
    github: "https://github.com/johnadel112/credit-default-risk",
    metric: "Test ROC-AUC: ~0.759",
    details: ["Data exploration and feature engineering", "Model comparison and tuning", "265 model features", "Low, medium, and high risk segmentation", "SHAP explainability", "Streamlit prediction dashboard", "Optional Groq assistant", "Docker packaging"],
    featured: true,
  },
  {
    id: "triplify",
    number: "02",
    title: "Triplify — Travel Planning & Booking",
    description: "Developing a full-stack travel planning and booking platform spanning flight and hotel search, bookings, trip itineraries, budgeting, and payments. The architecture uses Next.js, NestJS, and MongoDB Atlas, with authentication and role-based authorization.",
    tags: ["Next.js", "NestJS", "TypeScript", "MongoDB Atlas", "REST APIs", "RBAC", "Stripe"],
    github: "https://github.com/johnadel112/Triplify",
    details: ["Full-stack MVC-based architecture", "Authentication and account management", "Role-based authorization", "Flight and hotel booking workflows", "Itinerary planning and budgets", "Payment integration (project scope)", "In development"],
    featured: true,
  },
  {
    id: "cryptographic-treasury",
    number: "03",
    title: "Cryptographic Treasury Security System",
    description: "Developing a Python-based secure treasury demonstration with signed key exchange, encrypted communication, zero-knowledge login, threshold cryptography, and private voting. Includes a Streamlit dashboard for visualizing attack scenarios and defenses, with Wireshark analysis.",
    tags: ["Python", "Cryptography", "Streamlit", "Wireshark", "ECDH", "AES-GCM", "Zero-Knowledge"],
    github: "https://github.com/johnadel112/treasury-project",
    details: ["Secure authenticated communication", "Zero-knowledge authentication", "3-of-5 threshold vault access", "Privacy-preserving voting", "Deliberately weak vs. protected modes", "Streamlit demonstrations", "Wireshark traffic inspection", "In development"],
    featured: true,
  },
  {
    id: "owasp-juice-shop",
    number: "04",
    title: "OWASP Juice Shop — Security Assessment",
    description: "Web application penetration-testing coursework covering client-side vulnerabilities and a second server-side assessment phase. Used Burp Suite and Chrome DevTools to investigate issues and document reproduction steps, impact, and suggested mitigations.",
    tags: ["Burp Suite", "Chrome DevTools", "OWASP", "Web Security", "Penetration Testing"],
    details: ["Milestone 1: client-side vulnerability assessment", "Milestone 2: server-side testing scope", "HTTP request and response inspection", "Reproduction evidence and remediation advice", "Local OWASP Juice Shop test environment"],
    featured: true,
  },
  {
    id: "giu-nexus",
    number: "05",
    title: "GIU Nexus — AI Career Platform",
    description: "Built and deployed a MERN-based AI recruitment platform with JWT authentication, role-based dashboards, Hugging Face-powered skill extraction, job classification, recommendations, and AI-assisted cover letters.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "Hugging Face"],
    github: "https://github.com/johnadel112/GIU-Nexus-SE-spring-26-",
    liveDemo: "https://giu-nexus-frontend.vercel.app/",
    details: ["Role-based dashboards", "Authentication and authorization", "Skill extraction", "Job classification and recommendations", "AI-assisted cover-letter generation"],
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    id: "network-forensics",
    number: "06",
    title: "Network Forensics & Threat Investigation",
    description: "Investigating a simulated network capture for evidence of ARP spoofing, TCP SYN scans, and DNS tunneling. The assignment covers packet-level evidence, incident timelines, SHA-256 integrity checking, and recommended defenses.",
    tags: ["Wireshark", "Network Forensics", "ARP", "TCP/IP", "DNS", "SHA-256"],
    featured: false,
  },
  {
    id: "bookstore-architecture",
    number: "07",
    title: "Online Bookstore — Software Design & Architecture",
    description: "Software architecture coursework for an online bookstore, covering stakeholder requirements, UML sequence diagrams, BPMN workflows, and a planned component architecture with justified frontend and backend design choices.",
    tags: ["System Design", "UML", "BPMN", "Requirements Engineering", "Architecture"],
    featured: false,
  },
  {
    id: "jacksaroo",
    number: "08",
    title: "Jacksaroo Game",
    description: "Developed a Java-based board game using JavaFX, implementing game logic, event handling, and an interactive user interface.",
    tags: ["Java", "JavaFX", "OOP", "Game Development"],
    featured: false,
  },
];
