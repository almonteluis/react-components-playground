export default [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: {
      name: "TechCorp Solutions",
      logo: "/api/placeholder/64/64",
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA",
      },
      rating: 4.8,
      employees: "1000-5000",
    },
    jobType: "Full-time",
    salary: {
      min: 130000,
      max: 180000,
      currency: "USD",
      period: "yearly",
    },
    skills: ["React", "TypeScript", "Node.js", "AWS", "Redux"],
    experience: {
      minimum: 5,
      preferred: 7,
      level: "Senior",
      levelColor: "#d84315", // for senior badge
    },
    benefits: [
      "Health Insurance",
      "401(k) Matching",
      "Remote Work",
      "Unlimited PTO",
      "Stock Options",
    ],
    description:
      "We're seeking a Senior Frontend Developer to join our growing team. You'll be responsible for building scalable web applications and mentoring junior developers.",
    responsibilities: [
      "Lead frontend architecture decisions",
      "Build reusable component libraries",
      "Collaborate with UX designers",
      "Mentor junior developers",
      "Code review and technical documentation",
    ],
    remote: false,
    postedDate: "2024-01-15",
    applicationDeadline: "2024-02-15",
    isUrgentHiring: true,
    applicationLink: "https://techcorp.com/careers/senior-frontend",
    applicantCount: 12,
    applicationStatus: {
      isOpen: true,
      totalSpots: 2,
      remainingSpots: 1,
    },
  },
  {
    id: 2,
    position: "Data Scientist",
    company: {
      name: "DataMinds AI",
      logo: "/api/placeholder/64/64",
      location: {
        city: "Boston",
        state: "MA",
        country: "USA",
      },
      rating: 4.6,
      employees: "100-500",
    },
    jobType: "Full-time",
    salary: {
      min: 120000,
      max: 160000,
      currency: "USD",
      period: "yearly",
    },
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "PyTorch"],
    experience: {
      minimum: 3,
      preferred: 5,
      level: "Mid-Level",
      levelColor: "#f57c00", // for mid-level badge
    },
    benefits: [
      "Health Insurance",
      "Flexible Hours",
      "Education Stipend",
      "Gym Membership",
      "Annual Bonus",
    ],
    description:
      "Join our AI team to develop and deploy machine learning models that solve real-world problems. You'll work with cutting-edge technology and big data.",
    responsibilities: [
      "Develop ML models",
      "Data analysis and visualization",
      "Model deployment and monitoring",
      "Research new AI technologies",
      "Collaborate with engineering teams",
    ],
    remote: true,
    postedDate: "2024-01-18", // more recent date
    applicationDeadline: "2024-01-25", // urgent deadline
    isUrgentHiring: false,
    applicationLink: "https://dataminds.ai/careers/data-scientist",
    applicantCount: 0, // be the first to apply!
    applicationStatus: {
      isOpen: true,
      totalSpots: 3,
      remainingSpots: 3,
    },
  },
  {
    id: 3,
    position: "Junior Web Developer",
    company: {
      name: "StartupNow",
      logo: "/api/placeholder/64/64",
      location: {
        city: "Austin",
        state: "TX",
        country: "USA",
      },
      rating: 4.3,
      employees: "10-50",
    },
    jobType: "Full-time",
    salary: {
      min: 70000,
      max: 90000,
      currency: "USD",
      period: "yearly",
    },
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    experience: {
      minimum: 0,
      preferred: 1,
      level: "Junior",
      levelColor: "#2e7d32", // for junior badge
    },
    benefits: [
      "Health Insurance",
      "Flexible Hours",
      "Learning Budget",
      "Remote Work",
      "Casual Dress",
    ],
    description:
      "Great opportunity for a junior developer to join a fast-growing startup. You'll work directly with senior developers and learn modern web development practices.",
    responsibilities: [
      "Build website features",
      "Fix bugs and issues",
      "Write clean, maintainable code",
      "Participate in code reviews",
      "Learn new technologies",
    ],
    remote: true,
    postedDate: "2024-01-19", // very recent
    applicationDeadline: "2024-02-28",
    isUrgentHiring: false,
    applicationLink: "https://startupnow.com/careers/junior-dev",
    applicantCount: 5,
    applicationStatus: {
      isOpen: true,
      totalSpots: 2,
      remainingSpots: 2,
    },
  },
];
