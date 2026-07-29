export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  liveDemo?: string;
  metric?: string;
  details?: string[];
  featured: boolean;
  image?: string;
};

export const featuredProjects: Project[] = [
  {
    id: "credit-default-risk",
    number: "01",
    title: "Credit Default Risk Platform",
    description:
      "Developed an end-to-end machine learning pipeline for preprocessing, feature engineering, model comparison, hyperparameter tuning, and evaluation. Selected XGBoost as the champion model with a holdout ROC-AUC of 0.7633, integrated SHAP explainability and a Groq-powered RAG copilot using ChromaDB, and containerized the FastAPI, Next.js, PostgreSQL, Redis, and Celery services using Docker Compose.",
    tags: [
      "Python",
      "XGBoost",
      "SHAP",
      "Optuna",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Groq",
      "ChromaDB",
      "Docker Compose",
    ],
    github: "https://github.com/johnadel112/credit-default-risk",
    metric: "Holdout ROC-AUC: 0.7633",
    details: [
      "Data preprocessing",
      "Feature engineering",
      "Model comparison",
      "Hyperparameter tuning",
      "Explainable predictions",
      "Individual and batch scoring",
      "Portfolio analytics",
      "Policy retrieval",
      "Applicant case summarization",
      "Inconsistency detection",
      "Automated analyst workflows",
      "Containerized services",
    ],
    featured: true,
  },
  {
    id: "threatlens-ai",
    number: "02",
    title: "ThreatLens AI",
    description:
      "Engineered a production-style full-stack security operations platform featuring rule-based threat detection, multi-agent AI investigations, incident correlation, and automated SOC report generation.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "LangGraph",
      "Docker",
      "Cybersecurity",
      "Agentic AI",
    ],
    github: "https://github.com/johnadel112/ThreatLens-AI",
    featured: true,
  },
  {
    id: "giu-nexus",
    number: "03",
    title: "GIU Nexus",
    description:
      "Built and deployed a MERN-based AI recruitment platform featuring JWT and role-based access control, role-specific dashboards, Hugging Face-powered skill extraction, job classification, personalized recommendations, and AI-assisted cover-letter generation.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "Hugging Face",
      "AI",
    ],
    github: "https://github.com/johnadel112/GIU-Nexus-SE-spring-26",
    liveDemo: "https://giu-nexus-frontend.vercel.app/",
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    id: "jacksaroo",
    number: "04",
    title: "Jacksaroo Game",
    description:
      "Developed a Java-based board game using JavaFX, implementing game logic, event handling, and an interactive user interface.",
    tags: ["Java", "JavaFX", "OOP", "Game Development"],
    github: "https://github.com/johnadel112",
    featured: false,
  },
];
