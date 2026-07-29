export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  featured?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    id: "suez-canal-bank",
    role: "AI Engineering Intern",
    company: "Suez Canal Bank",
    period: "July 2026 – August 2026",
    description:
      "Gained hands-on experience in MLOps, Retrieval-Augmented Generation, large language models, agentic AI, vector databases, and explainable machine learning, applying these concepts to a credit risk decision-support platform using XGBoost, SHAP, Groq, and ChromaDB.",
    tags: [
      "MLOps",
      "RAG",
      "LLMs",
      "Agentic AI",
      "Vector Databases",
      "Explainable AI",
    ],
    featured: true,
  },
  {
    id: "b2b-consultancy",
    role: "Real Estate Intern",
    company: "B2B Consultancy",
    period: "August 2025 – September 2025",
    description:
      "Conducted market analysis, supported feasibility studies, and assisted with client communication and presentations.",
  },
  {
    id: "ict-igcse",
    role: "Teaching Assistant",
    company: "ICT IGCSE",
    period: "May 2024",
    description:
      "Supported curriculum development, marking, and student tutoring sessions for O-Level ICT.",
  },
];
