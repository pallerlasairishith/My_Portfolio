/**
 * Centralized Portfolio Data for PALLERLA SAIRISHITH
 * Easily customize personal info, skills, projects, and education here.
 */

export const personalInfo = {
  fullName: "PALLERLA SAIRISHITH",
  displayName: "SAIRISHITH",
  role: "Software / Frontend Developer",
  shortBio: "Passionate software and frontend developer focused on building clean, responsive and user-friendly digital experiences.",
  aboutText: [
    "I am a BTech student with a deep passion for software engineering and frontend development. I enjoy transforming complex problems into elegant, intuitive, and high-performance digital experiences.",
    "My focus centers around continuous learning, disciplined problem solving, and writing clean, maintainable code. Whether tackling algorithmic challenges or crafting interactive user interfaces, I am constantly exploring modern web technologies to build impactful projects."
  ],
  email: "pallerlasairishith@gmail.com",
  phone: "7993901895",
  location: "Jagtial, Telangana, India",
  googleMapsUrl: "https://www.google.com/maps/place/LL+Gardens/@18.7897894,78.9090571,18.81z/data=!4m15!1m8!3m7!1s0x3bcd13854e840771:0xd4c36c790c3cb895!2sJagtial,+Telangana!3b1!8m2!3d18.7894881!4d78.9120459!16zL20vMDgzcTJw!3m5!1s0x3bcd1395d161a8df:0x26916bafadd2ac6b!8m2!3d18.7902316!4d78.9086578!16s%2Fg%2F11g7nbbfdp?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
  githubUrl: "https://github.com/pallerlasairishith",
  linkedinUrl: "https://www.linkedin.com/in/sai-rishith-pallrela-2b529a372/",
  availability: "Open to Internships & Opportunities",
  profileImage: "/profile.jpg",
};

export const technicalSkills = [
  {
    name: "Python",
    category: "Programming & Logic",
    level: "Core Language",
    description: "Object-oriented programming, data manipulation, algorithm implementation, and backend scripting.",
    icon: "python", // mapped in component
    color: "#38bdf8",
  },
  {
    name: "JavaScript",
    category: "Web Development",
    level: "Modern ES6+",
    description: "Dynamic DOM manipulation, asynchronous programming, APIs, and modern frontend logic.",
    icon: "javascript",
    color: "#facc15",
  },
  {
    name: "HTML5",
    category: "Frontend Architecture",
    level: "Semantic Standard",
    description: "Accessible markup, SEO optimization, modern document structures, and clean web standards.",
    icon: "html",
    color: "#f97316",
  },
  {
    name: "CSS3",
    category: "Styling & UI",
    level: "Responsive Design",
    description: "Flexbox, CSS Grid, custom properties, animations, glassmorphism, and responsive layouts.",
    icon: "css",
    color: "#3b82f6",
  },
  {
    name: "SQL",
    category: "Databases",
    level: "Relational Queries",
    description: "Relational database schema design, complex querying, joins, indexing, and data integrity.",
    icon: "sql",
    color: "#a855f7",
  },
  {
    name: "DSA",
    category: "Computer Science",
    level: "Problem Solving",
    description: "Data Structures & Algorithms: arrays, trees, graphs, sorting, searching, and time complexity optimization.",
    icon: "dsa",
    color: "#10b981",
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Interactive Web Application",
    subtitle: "Featured Frontend Project",
    description: "A responsive, modern web application highlighting intuitive user flows, state management, and clean aesthetic components built with semantic HTML and modern CSS.",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/pallerlasairishith",
    liveUrl: "https://github.com/pallerlasairishith",
    featured: true,
    codeSnippet: `// Key feature implementation\nconst handleUserInteraction = (event) => {\n  updateState({ status: 'active', timestamp: Date.now() });\n  renderDynamicView();\n};`,
    isPlaceholder: true,
    note: "Easily replace with your project repository and live link in src/data/portfolioData.js"
  },
  {
    id: 2,
    title: "Algorithm Visualizer & DSA Suite",
    subtitle: "Computer Science & Logic",
    description: "Interactive visualization tool for core data structures and sorting algorithms, showcasing algorithmic efficiency, step-by-step state execution, and Big-O complexity analysis.",
    tags: ["Python", "DSA", "Algorithms", "Problem Solving"],
    githubUrl: "https://github.com/pallerlasairishith",
    liveUrl: "https://github.com/pallerlasairishith",
    featured: true,
    codeSnippet: `def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n    return -1`,
    isPlaceholder: true,
    note: "Easily replace with your project repository and live link in src/data/portfolioData.js"
  },
  {
    id: 3,
    title: "Database Management & Analytics System",
    subtitle: "Data & Backend Concept",
    description: "A relational database schema and query engine designed for efficient record management, transaction handling, relational analytics, and aggregated data reporting.",
    tags: ["SQL", "Database Design", "Python", "Data Integrity"],
    githubUrl: "https://github.com/pallerlasairishith",
    liveUrl: "https://github.com/pallerlasairishith",
    featured: false,
    codeSnippet: `SELECT user_id, COUNT(order_id) as total_orders\nFROM customer_records\nGROUP BY user_id\nHAVING total_orders > 5\nORDER BY total_orders DESC;`,
    isPlaceholder: true,
    note: "Easily replace with your project repository and live link in src/data/portfolioData.js"
  },
  {
    id: 4,
    title: "Developer Portfolio Platform",
    subtitle: "Modern Portfolio Architecture",
    description: "A high-performance personal portfolio engineered with React, responsive layouts, glassmorphic dark styling, accessibility standards, and SEO optimization.",
    tags: ["React", "JavaScript", "Glassmorphism", "CSS3"],
    githubUrl: "https://github.com/pallerlasairishith",
    liveUrl: "#home",
    featured: false,
    codeSnippet: `export default function Portfolio() {\n  return (\n    <main className="portfolio-container">\n      <HeroSection />\n      <ProjectsGrid />\n    </main>\n  );\n}`,
    isPlaceholder: false,
    note: "Current website codebase"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science / Engineering",
    institution: "[Your College / University Name]",
    institutionNote: "Editable in src/data/portfolioData.js",
    status: "Current Student",
    period: "Pursuing",
    location: "Telangana, India",
    highlights: [
      "Core curriculum in Data Structures, Algorithms, Object-Oriented Programming, and Database Systems.",
      "Active focus on hands-on software development, web technologies, and practical coding projects.",
      "Continuously building programming aptitude through continuous practice and problem solving."
    ]
  }
];

export const experienceData = {
  status: "Open for Opportunities",
  badge: "Ready for Internships",
  description: "Currently seeking frontend and software developer internship opportunities where I can apply my programming skills, collaborate with engineering teams, and deliver valuable user experiences.",
  interests: [
    "Frontend Engineering (React, JavaScript, Modern CSS)",
    "Software Development & Scripting (Python, OOP)",
    "Database Querying & Management (SQL)",
    "Problem Solving & Algorithm Design (DSA)"
  ],
  // Empty or placeholder list for easy future additions without inventing past employers
  timelinePlaceholders: [
    {
      title: "Upcoming Internship / Experience",
      organization: "Your Next Team / Company",
      type: "Internship / Full-time",
      period: "Future / Open",
      description: "Ready to contribute with diligence, quick adaptability, and a strong work ethic on real-world projects."
    }
  ]
};

export const codeSnippetHero = {
  filename: "developer.py",
  language: "python",
  code: `class Developer:
    def __init__(self):
        self.name = "PALLERLA SAIRISHITH"
        self.role = "Software / Frontend Developer"
        self.location = "Jagtial, Telangana, India"
        self.skills = ["Python", "HTML", "CSS", "JavaScript", "SQL", "DSA"]
        self.seeking = "Internships & Software Roles"

    def current_status(self):
        return "Building clean, performant, user-centric web apps."

sairishith = Developer()
print(sairishith.current_status())`
};
