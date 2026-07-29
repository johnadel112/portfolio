export const siteConfig = {
  name: "John Adel Makram",
  initials: "JAM",
  title: "AI Engineering Intern | Software Developer | IT Security Student",
  description:
    "Computer Science student specializing in IT Security, with experience building machine learning pipelines, Retrieval-Augmented Generation systems, full-stack applications, and cybersecurity platforms.",
  about:
    "I am a Computer Science student at the German International University, majoring in IT Security. My interests include artificial intelligence, machine learning, backend engineering, cybersecurity, and building reliable full-stack systems.",
  email: "johnadel02@gmail.com",
  location: "New Cairo, Cairo, Egypt",
  graduation: "Expected Graduation: 2028",
  github: "https://github.com/johnadel112",
  linkedin: "https://www.linkedin.com/in/john-adel-a14377181",
  /** Place your photo at /public/profile.jpg and set this to true */
  hasProfileImage: false,
  profileImage: "/profile.jpg",
  /** Place your CV at /public/cv.pdf */
  cvPath: "/cv.pdf",
  education: {
    school: "German International University",
    degree: "Bachelor of Science in Computer Science",
    major: "Major in IT Security",
    period: "October 2024 – Expected 2028",
    gpa: "Cumulative GPA: 2.33, German grading scale, where 0.7 is the highest grade",
    coursework: [
      "Data Structures and Algorithms",
      "Databases",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Information Security",
      "Distributed Systems",
    ],
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
