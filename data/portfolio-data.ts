// =============================================================================
// PORTFOLIO CONFIGURATION FILE
// =============================================================================
// Edit this file to customize your portfolio content.
// Every section, text, link, and image reference lives here.
// You never need to touch the components — just update this file.
// =============================================================================

// ---------------------------------------------------------------------------
// PERSONAL INFO
// ---------------------------------------------------------------------------
export const personalInfo = {
  name: "Ashish Bharti",                         // Your full name
  title: "Full Stack Developer",                // Your professional title
  tagline: "Building elegant solutions to complex problems", // Short tagline
  email: "ashishbhartijnv@gmail.com",            // Your email address
  phone: "+91-8765706507",                   // Your phone number
  location: "Hyderabad, IN",                // Your location
  // Profile image: place your photo in /public/images/ and update the path
  // To use a Google Drive image, share it publicly and use the direct URL format:
  // Profile image — served from /public/images/profile.png
  // To replace: drop your photo into public/images/ and update the filename here
  profileImage: "/images/profile.png",
  // Resume: place your PDF in /public/ and update the path
  resumeUrl: "https://drive.google.com/file/d/1c5eCQYd6gXwVkFy4KE3qQtwlZyt-9aZV/view?usp=drivesdk",
  bio: [
"I'm an MCA graduate and aspiring Full Stack Developer with a strong interest in building modern web applications and creating impactful digital solutions. I enjoy transforming ideas into responsive, user-friendly, and scalable applications.",

"My professional journey includes completing a Data Science internship, where I gained hands-on experience in data analysis, problem-solving, and working with real-world datasets. This experience strengthened my analytical thinking and broadened my understanding of technology beyond software development.",

"Currently, I'm focused on enhancing my full-stack development skills, particularly in React, JavaScript, and modern web technologies. I continuously learn through personal projects, coding challenges, and industry-recognized certifications to stay updated with the latest trends in software development."
],

careerGoals:
"My goal is to build a successful career as a Software Developer, contributing to innovative products, solving real-world challenges, and continuously growing my expertise in full-stack development, cloud technologies, and modern software engineering practices. I am actively seeking opportunities where I can learn, collaborate, and make meaningful contributions.",

interests: [
"Full Stack Development",
"React Development",
"Data Science",
"Artificial Intelligence",
"Open Source",
"Problem Solving",
"Web Technologies",
"Continuous Learning"
]

};

// ---------------------------------------------------------------------------
// SOCIAL LINKS
// ---------------------------------------------------------------------------
export const socialLinks = {
  github: "https://github.com/ErrorsAccheHai",        // Your GitHub profile
  linkedin: "https://linkedin.com/in/yourusername", // Your LinkedIn profile
  twitter: "https://twitter.com/24mcmc29",      // Your X / Twitter profile
  instagram: "https://instagram.com/arc_reactor01",  // Your Instagram profile
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const navLinks = [
  { label: "Home",            href: "#home" },
  { label: "About",           href: "#about" },
  { label: "Skills",          href: "#skills" },
  { label: "Projects",        href: "#projects" },
  { label: "Experience",      href: "#experience" },
  { label: "Certifications",  href: "#certifications" },
  { label: "Testimonials",    href: "#testimonials" },
  { label: "Contact",         href: "#contact" },
];

// ---------------------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------------------
// level: 0–100
export const skillCategories = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript",      level: 88 },
      { name: "Tailwind CSS",    level: 90 },
      { name: "Vue.js",          level: 75 },
      { name: "GraphQL",         level: 78 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js",     level: 87 },
      { name: "Python",      level: 82 },
      { name: "PostgreSQL",  level: 80 },
      { name: "MongoDB",     level: 76 },
      { name: "Redis",       level: 70 },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    skills: [
      { name: "Docker",       level: 80 },
      { name: "AWS",          level: 74 },
      { name: "CI/CD",        level: 78 },
      { name: "Kubernetes",   level: 62 },
      { name: "Terraform",    level: 60 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Team Leadership",    level: 90 },
      { name: "Problem Solving",    level: 95 },
      { name: "Communication",      level: 88 },
      { name: "Agile / Scrum",      level: 85 },
      { name: "Mentorship",         level: 80 },
    ],
  },
];

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------
export const education = [
{
degree: "Master of Computer Applications (MCA)",
institution: "University of Hyderabad",
year: "2024 – 2026",
gpa: "7",
description:
"Focused on software development, database management, data structures, web technologies, and computer applications. Completed academic projects and gained practical experience through a Data Science internship.",
},
{
degree: "Bachelor's of Computer Application(BCA)",
institution: "University of Allahabad",
year: "2021 – 2024",
gpa: "7.4",
description:
"Built a strong foundation in programming, computer fundamentals, algorithms, and software engineering principles.",
},
];


// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
// categories: "All" is added automatically — just list your own below
// image: place project screenshots in /public/images/projects/
export const projects = [
  {
    id: 1,
    title: "Drone Orthomosaic Building Detection",
    description:
      "End-to-end drone mapping workflow using WebODM photogrammetry and YOLOv8 for automated building detection on orthomosaic imagery. Generates geospatial insights from aerial drone data.",
    image: "/images/projects/drone-detection.jpg",
    tags: ["Python", "YOLOv8", "WebODM", "Docker", "Computer Vision"],
    category: "AI / ML",
    githubUrl: "https://github.com/ErrorsAccheHai/drone-orthomosaic-detection",
    liveUrl: "",
    featured: true,
  },

  {
    id: 2,
    title: "Smart Inventory Management System",
    description:
      "Centralized inventory management system for institutional assets with asset tracking, stock management, reporting, and administrative controls.",
    image: "/images/projects/inventory-management.jpg",
    tags: ["Spring Boot", "Java", "MySQL", "REST API"],
    category: "Web App",
    githubUrl: "https://github.com/ErrorsAccheHai/Inventory_Management_System",
    liveUrl: "",
    featured: true,
  },

  {
    id: 3,
    title: "Co-Live Platform",
    description:
      "A housing and roommate discovery platform that helps users find co-living spaces and manage accommodation listings through an intuitive interface.",
    image: "/images/projects/colive.jpg",
    tags: ["React", "Node.js", "JavaScript", "MongoDB"],
    category: "Web App",
    githubUrl: "https://github.com/ErrorsAccheHai/Co-live",
    liveUrl: "https://co-live.netlify.app",
    featured: true,
  },

  {
    id: 4,
    title: "Co-Live Backend",
    description:
      "Backend services powering the Co-Live platform, including authentication, property management APIs, and user management functionality.",
    image: "/images/projects/colive.jpg",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    category: "Backend",
    githubUrl: "https://github.com/ErrorsAccheHai/Colive-Backend",
    liveUrl: "",
    featured: false,
  },

  {
    id: 5,
    title: "Red Black Tree Visualizer",
    description:
      "Interactive educational web application that visualizes insertion, deletion, balancing operations, and color changes in Red-Black Trees.",
    image: "/images/projects/rbtree.jpg",
    tags: ["JavaScript", "Data Structures", "Algorithms", "Visualization"],
    category: "Education",
    githubUrl: "https://github.com/ErrorsAccheHai/RBTree-Visualizer",
    liveUrl: "https://rbtree-visualizer.netlify.app",
    featured: true,
  },

  {
    id: 6,
    title: "Image2PDF Converter",
    description:
      "Utility application for converting multiple images into a single PDF document with simple and efficient file management.",
    image: "/images/projects/image2pdf.jpg",
    tags: ["JavaScript", "PDF Processing", "Web Utility"],
    category: "Utility",
    githubUrl: "https://github.com/ErrorsAccheHai/IMAGE2PDF",
    liveUrl: "https://image2pdflite.netlify.app",
    featured: false,
  },

 /* {
    id: 7,
    title: "Flower Gallery",
    description:
      "Responsive image gallery showcasing modern HTML and CSS layouts with clean design principles and mobile-friendly interfaces.",
    image: "/images/projects/flowers.jpg",
    tags: ["HTML", "CSS", "Responsive Design"],
    category: "Frontend",
    githubUrl: "https://github.com/ErrorsAccheHai/flowers",
    liveUrl: "",
    featured: false,
  }, */
];

export const experience = [
{
id: 1,
type: "internship",
role: "Data Science Intern",
company: "Nighwan Technology",
location: "India",
period: "2026",
description:
"Worked on AI, computer vision, and geospatial analytics projects involving drone imagery, surveillance systems, and deep learning models. Developed end-to-end solutions from data processing to model deployment.",
highlights: [
"Built a Drone Orthomosaic Building Detection System using WebODM and YOLOv8",
"Developed an AI Surveillance System for intelligent monitoring and object detection",
"Applied computer vision techniques on aerial and video datasets",
"Worked with deep learning pipelines for real-world AI applications",
"Collaborated with mentors and researchers on production-oriented solutions",
],
technologies: [
"Python",
"YOLOv8",
"OpenCV",
"WebODM",
"Docker",
"Computer Vision",
"Machine Learning",
],
},

{
id: 2,
type: "project",
role: "Full Stack Developer",
company: "Smart Inventory Management System",
location: "Academic Project",
period: "2025 – 2026",
description:
"Developed a centralized inventory and asset management platform for institutions using the MERN stack. The system enables efficient asset tracking, inventory monitoring, and administrative management.",
highlights: [
"Built inventory and asset management modules",
"Implemented CRUD operations for inventory records",
"Developed REST APIs for data management",
"Designed responsive dashboards for administrators",
"Integrated MongoDB for scalable data storage",
],
technologies: [
"MongoDB",
"Express.js",
"React",
"Node.js",
"JavaScript",
],
},

{
id: 3,
type: "project",
role: "Full Stack Developer",
company: "Co-Live Platform",
location: "Personal Project",
period: "2025",
description:
"Built a platform for discovering co-living spaces and managing accommodation listings with authentication and user management features.",
highlights: [
"Developed frontend and backend modules",
"Implemented authentication and listing management",
"Designed responsive user interfaces",
],
technologies: [
"React",
"Node.js",
"MongoDB",
"JavaScript",
],
},

{
id: 4,
type: "project",
role: "Frontend Developer",
company: "RBTree Visualizer",
location: "Personal Project",
period: "2025",
description:
"Interactive educational application demonstrating Red-Black Tree balancing and operations through visual animations.",
highlights: [
"Visualized insertion and balancing operations",
"Simplified learning of complex data structures",
"Built interactive algorithm animations",
],
technologies: [
"JavaScript",
"HTML",
"CSS",
"Algorithms",
"Data Structures",
],
},
];


export const certifications = [
{
title: "Data Science Internship Certificate",
issuer: "Nighwan Technology",
date: "2026",
credentialUrl: "",
icon: "Brain",
},

{
title: "Frontend Developer (React)",
issuer: "HackerRank",
date: "2025",
credentialUrl: "",
icon: "Code",
},

{
title: "System Administrator Training",
issuer: "University Of Hyderabad",
date: "2025",
credentialUrl: "",
icon: "Server",
},
{
title: "Code Detox - Certificate of Participation",
issuer: "National Institute of Technology Tiruchirappalli (NIT Trichy)",
date: "2025",
credentialUrl: "",
icon: "Award",
},
];

export const achievements = [
{
title: "Data Science Intern",
description:
"Completed internship at Nighwan Technology, working on Drone Orthomosaic Building Detection and AI Surveillance System projects.",
icon: "Award",
year: "2026",
},

{
title: "AI & Computer Vision Projects",
description:
"Developed real-world computer vision solutions using YOLOv8, OpenCV, WebODM, and Python.",
icon: "Brain",
year: "2026",
},

{
title: "Open Source Contributor",
description:
"Published multiple public projects on GitHub covering AI/ML, MERN Stack, and Data Structure Visualization.",
icon: "Github",
year: "2025",
},

{
title: "MERN Stack Developer",
description:
"Built full-stack applications including Smart Inventory Management System and Co-Live Platform.",
icon: "Code",
year: "2025",
},
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "TechCorp Inc.",
    avatar: "/images/testimonials/avatar-1.jpg",  // Replace with real photo
    quote:
      "Alex is one of the most talented engineers I've worked with. Their ability to break down complex problems and deliver elegant solutions is remarkable. They elevated the entire team's standards.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Williams",
    title: "CTO",
    company: "StartupXYZ",
    avatar: "/images/testimonials/avatar-2.jpg",
    quote:
      "Hiring Alex was one of the best decisions we made as a company. They didn't just write great code — they brought a product mindset, asking the right questions and pushing back when needed.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Patel",
    title: "Senior Product Manager",
    company: "Digital Agency Co.",
    avatar: "/images/testimonials/avatar-3.jpg",
    quote:
      "Working with Alex was a pleasure. They translated complex technical concepts into clear language for stakeholders, always delivered on time, and went the extra mile to make the product shine.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    title: "Lead Engineer",
    company: "Google",
    avatar: "/images/testimonials/avatar-4.jpg",
    quote:
      "Alex's internship project was among the best I've seen in 10 years of mentoring. Their curiosity, code quality, and communication skills are exceptional. We tried hard to get them back full-time!",
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// TYPING ANIMATION STRINGS (Hero section)
// ---------------------------------------------------------------------------
// These strings cycle in the hero section typing animation
export const typingStrings = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "Open Source Contributor",
  "Problem Solver",
];

// ---------------------------------------------------------------------------
// SEO / METADATA
// ---------------------------------------------------------------------------
export const seoConfig = {
  title: "Ashish Bharti — Full Stack Developer",
  description:
    "Full Stack Developer specialising in React, Next.js, and Node.js. Explore my projects, experience, and skills.",
  keywords: "full stack developer, react developer, next.js, node.js, portfolio, web developer, typescript",
  ogImage: "/images/og-image.jpg",  // 1200×630 Open Graph image
  siteUrl: "https://yourportfolio.com",
};
