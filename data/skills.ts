export type SkillCategory = {
  id: string;
  title: string;
  icon: "code" | "globe" | "database" | "brain" | "wrench";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "code",
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    id: "web",
    title: "Web Development",
    icon: "globe",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
    ],
  },
  {
    id: "databases",
    title: "Databases and Vector Stores",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB"],
  },
  {
    id: "ai-ml",
    title: "Data, AI, and MLOps",
    icon: "brain",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "CatBoost",
      "LightGBM",
      "Optuna",
      "SHAP",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Groq API",
      "Embeddings",
      "Semantic Search",
      "ML Pipelines",
    ],
  },
  {
    id: "tools",
    title: "Tools and Deployment",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Postman",
      "Linux",
      "Jupyter Notebook",
      "Swagger/OpenAPI",
    ],
  },
];
