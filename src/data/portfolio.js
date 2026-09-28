// Central content store. Every value here traces back to
// Janhavi's fresher resume (plus, for the AI Nivaran feature list and tech
// stack, the public README at github.com/jaannviparab-codess/ai-nivaran).
// Update this file to update the site.

export const profile = {
  name: 'Janhavi Prashant Parab',
  firstName: 'Janhavi',
  role: 'Python Developer | AI & Automation Enthusiast',
  subrole: 'B.Sc. IT Graduate',
  location: 'Mumbai, Maharashtra',
  email: 'jaannviparab@gmail.com',
  phone: '8779150297',
  phoneDisplay: '+91 87791 50297',
  github: 'https://github.com/jaannviparab-codess',
  githubDisplay: 'github.com/jaannviparab-codess',
  linkedin: null,
  resumeUrl: '/resume/Janhavi_Prashant_Parab_Fresher_Resume.pdf',
  resumeFileName: 'Janhavi_Prashant_Parab_Fresher_Resume.pdf',
  summary:
    'B.Sc. Information Technology graduate (CGPA 9.10, 2026), hands-on with Python, APIs and API integration, backend development using Django and Flask, and SQLite databases, with web/UI development using HTML and CSS. Currently learning Data Science, Artificial Intelligence and Machine Learning, with a strong interest in building practical software, automation and AI-driven solutions through real projects.',
  heroSupport:
    "I'm a B.Sc. IT graduate who enjoys turning ideas into working software — from Python backends and APIs to full projects like AI Nivaran. Currently deepening my skills in Data Science, AI and Machine Learning.",
}

export const stats = [
  { label: 'CGPA', value: '9.10' },
  { label: 'Graduated', value: '2026' },
  { label: 'Featured Projects', value: '2' },
  { label: 'Job Simulations', value: '2' },
]

export const softSkills = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Time Management',
  'Adaptability',
]

export const languages = ['English', 'Marathi', 'Hindi']

export const skillGroups = [
  {
    category: 'Programming',
    icon: 'code',
    items: ['Python'],
  },
  {
    category: 'Backend & Web',
    icon: 'server',
    items: [
      'Django',
      'Flask',
      'HTML',
      'CSS',
      'Web Development',
      'Backend Development',
      'APIs',
      'API Integration',
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    items: ['SQLite', 'Database Management'],
  },
  {
    category: 'AI & Data (Currently Learning)',
    icon: 'sparkles',
    items: ['Data Science', 'Artificial Intelligence', 'Machine Learning'],
  },
  {
    category: 'Tools',
    icon: 'wrench',
    items: [
      'VS Code',
      'Git',
      'GitHub',
      'Claude (AI-assisted development)',
      'MS Office',
      'PowerPoint',
      'Canva',
    ],
  },
]

export const featuredProject = {
  name: 'AI Nivaran',
  tagline: 'AI-Powered Civic Issue Reporting Platform',
  description:
    'A civic-tech web platform that lets citizens report public infrastructure problems — potholes, garbage, broken streetlights and more — with AI-assisted classification and a transparent priority score, then track every report through to resolution.',
  live: 'https://ai-nivaran.vercel.app/',
  github: 'https://github.com/jaannviparab-codess/ai-nivaran',
  features: [
    'AI-assisted issue classification, severity estimation, duplicate detection and a transparent 0–100 priority score',
    'Photo/camera and voice-based reporting (Web Speech API) in English, Hindi and Marathi',
    'Public issue map with category, severity and status filters plus a heatmap view',
    'Resolution timeline with before/after photo comparison and citizen verification',
    'Community hub and a public analytics dashboard',
    'User registration & sign-in, with a clearly-labeled Demo Mode that runs with simulated data — no setup required',
  ],
  technologies: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'FastAPI',
    'PostgreSQL',
    'SQLAlchemy',
    'Celery',
    'Redis',
  ],
}

export const otherProjects = [
  {
    name: 'Automated Wheelchair',
    tag: 'Academic Project · Hardware',
    date: 'April 2026',
    description:
      'A functional automated wheelchair prototype built with Arduino, ultrasonic sensors and motor drivers, with a Bluetooth module for wireless control, programmed in C/C++.',
    technologies: [
      'Arduino',
      'Ultrasonic Sensors',
      'Motor Drivers',
      'Bluetooth',
      'C/C++',
    ],
  },
]

export const jobSimulations = [
  {
    provider: 'Forage',
    title: 'Deloitte Data Analytics Job Simulation',
    description:
      'Performed data cleaning, analysis and visualization, and translated insights into business recommendations.',
  },
  {
    provider: 'Forage',
    title: 'TATA GenAI Powered Data Analytics Job Simulation',
    description:
      'Conducted exploratory data analysis and risk profiling, AI-based delinquency prediction, and data storytelling.',
  },
]

export const education = {
  degree: 'B.Sc. in Information Technology',
  cgpa: '9.10',
  status: 'Completed 2026',
}

export const certifications = [
  {
    name: 'Advanced Excel',
    date: 'September 2025',
  },
]

export const currentlyLearning = [
  {
    name: 'Data Science',
    note: 'Building a foundation in data cleaning, analysis and visualization.',
  },
  {
    name: 'Artificial Intelligence',
    note: 'Exploring AI-driven automation and practical, real-world applications.',
  },
  {
    name: 'Machine Learning',
    note: 'Learning core ML concepts to support AI-powered project work.',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
