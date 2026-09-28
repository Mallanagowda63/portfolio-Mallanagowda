import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "devorbit",
    number: "01",
    title: "DevOrbit",
    subtitle: "Online Coding Practice & Assessment Platform",
    description: "A full-stack coding platform designed for colleges and students to practice programming, conduct assessments, and manage coding competitions.",
    features: [
      "Student, Admin and Problem Setter roles",
      "Coding problem management",
      "Online tests and contests",
      "Leaderboards",
      "User profiles",
      "Authentication and authorization",
      "Code execution engine",
      "Certificate management"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redis", "Docker", "JWT"],
    projectFocus: "Designed and developed a full-stack architecture covering frontend interfaces, backend APIs, authentication, database management, coding assessment workflows, and deployment infrastructure.",
    liveDemoUrl: "https://hacke-b3gj.onrender.com",
    githubUrl: "https://github.com/Mallanagowda63/Hackercit",
    
    // Modal Details
    overview: "DevOrbit is an enterprise-grade competitive programming and coding assessment engine tailored for educational institutions and technical recruitment. It enables automated evaluation of submitted code across multiple programming languages within isolated sandbox containers.",
    problem: "Traditional academic coding evaluation processes suffer from manual grading latency, vulnerability to unhandled test cases, lack of real-time leaderboard sync during contests, and execution security risks when running untrusted student code.",
    solution: "Built an asynchronous, multi-tenant coding platform leveraging Docker sandbox environments for secure code evaluation, Redis for queue management & dynamic leaderboard caching, and JWT-based role authorization for granular privilege separation.",
    architectureFlow: [
      { label: "User / Student", sublabel: "Web Browser / Mobile", type: "client" },
      { label: "React Frontend", sublabel: "TypeScript + Tailwind CSS", type: "client" },
      { label: "REST API Gateway", sublabel: "Node.js / Express + JWT", type: "api" },
      { label: "MongoDB", sublabel: "User, Contest & Problem Specs", type: "db" },
      { label: "Redis Queue", sublabel: "Submission Buffer & Leaderboard", type: "db" },
      { label: "Code Execution Service", sublabel: "Docker Isolated Sandboxes", type: "service" }
    ],
    contribution: [
      "Designed full-stack schema for Users, Problems, Testcases, Submissions, and Contests in MongoDB.",
      "Engineered secure JWT authentication middleware with role-based access control (RBAC).",
      "Integrated isolated container environments using Docker to safely execute untrusted code against hidden test cases.",
      "Optimized real-time contest leaderboard updates using Redis sorted sets."
    ],
    challenges: [
      "Preventing system resource exhaustion during high-concurrency coding contests.",
      "Ensuring strict execution timeouts and memory limit enforcement inside Docker containers.",
      "Handling edge case runtime exceptions gracefully without blocking the main event loop."
    ],
    outcome: [
      "Delivered a robust platform deployed live at hacke-b3gj.onrender.com capable of handling concurrent contest submissions with sub-second feedback.",
      "Automated evaluation workflows, reducing grading overhead by 100% for mock campus placements.",
      "Successfully integrated certificate generation upon contest completion."
    ]
  },
  {
    id: "aws-cloud-security",
    number: "02",
    title: "AWS Cloud Security & Monitoring",
    subtitle: "Cloud Infrastructure Security & Audit Framework",
    description: "A cloud engineering and security project focused on auditing AWS cloud resources, automated security monitoring, log aggregation, and security posture enforcement.",
    features: [
      "AWS CloudWatch & CloudTrail log integration",
      "Automated security posture scanning & compliance verification",
      "IAM role audit & least-privilege enforcement",
      "Real-time threat detection & alert notification pipeline",
      "EC2 security group ingress auditing",
      "Containerized security monitoring dashboard"
    ],
    techStack: ["AWS", "CloudWatch", "CloudTrail", "Python", "Docker", "Linux", "Shell Scripting"],
    projectFocus: "Designed cloud monitoring pipelines, audited IAM permissions, containerized security services, and automated AWS security event detection.",
    githubUrl: "https://github.com/Mallanagowda63/aws-cloud-security-monitoring",

    // Modal Details
    overview: "AWS Cloud Security & Monitoring provides continuous threat detection and infrastructure auditing across AWS cloud environments. It aggregates API call logs, scans security group configurations, and flags misconfigurations in real time.",
    problem: "Cloud environments often experience security drift, unmonitored security group openings, overly permissive IAM roles, and delayed incident response due to unaggregated CloudTrail logs.",
    solution: "Built an automated Python and AWS-native monitoring framework that analyzes CloudTrail API events, monitors CloudWatch logs, and triggers instant security notifications when unauthorized actions occur.",
    architectureFlow: [
      { label: "AWS Resources", sublabel: "EC2 / IAM / S3 / VPC", type: "infra" },
      { label: "CloudTrail & CloudWatch", sublabel: "API Event Audit Logs", type: "service" },
      { label: "Python Security Engine", sublabel: "Automated Policy Inspector", type: "api" },
      { label: "Docker Dashboard", sublabel: "Threat Alert & Monitoring UI", type: "client" }
    ],
    contribution: [
      "Developed automated Python scripts to parse CloudTrail log streams for anomalous IAM privilege escalations.",
      "Configured CloudWatch alarm metrics for unauthorized root account activity and S3 bucket policy alterations.",
      "Built containerized dashboard for visual inspection of cloud security posture metrics.",
      "Hardened AWS EC2 network ingress rules following CIS benchmark recommendations."
    ],
    challenges: [
      "Filtering out benign administrative AWS API calls from genuine security threat indicators.",
      "Ensuring zero latency in alert dispatch when public access is inadvertently enabled on cloud resources."
    ],
    outcome: [
      "Created a reusable cloud security auditing toolkit for hardening AWS environments.",
      "Significantly improved visibility into AWS infrastructure events and compliance state."
    ]
  },
  {
    id: "dhannya",
    number: "03",
    title: "Dhannya",
    subtitle: "Freelance Organic & Custom Masala E-Commerce Platform",
    description: "A production freelance full-stack e-commerce web application built for Dhannya Custom & Organic Masala Store, enabling customers to browse organic spices, customize masala orders, and manage shopping carts.",
    features: [
      "Client-facing freelance full-stack e-commerce platform",
      "Organic & custom masala product catalog",
      "Dynamic shopping cart & order summary management",
      "Responsive user interface with custom animations",
      "RESTful API integration & cloud deployment on Render",
      "Mobile-optimized checkout experience"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "Render"],
    projectFocus: "Delivered a complete client product — from UI/UX design and stateful shopping components to backend API services and live production deployment on Render.",
    liveDemoUrl: "https://dhanny.onrender.com/",
    githubUrl: "https://github.com/Mallanagowda63/Dhannya",

    // Modal Details
    overview: "Dhannya is a custom freelance e-commerce platform designed and built for an organic masala business. It provides an intuitive online shopping experience where customers can discover handcrafted spices, configure custom blend orders, and seamlessly purchase online.",
    problem: "The client needed a modern digital storefront to expand beyond local retail sales, needing a lightweight, fast-loading, mobile-friendly application with simple cart workflows and cloud hosting.",
    solution: "Designed and implemented a full-stack React + Node.js application, styled with Tailwind CSS for modern aesthetics, and deployed live to Render with automated build pipelines.",
    architectureFlow: [
      { label: "Customer / Shopper", sublabel: "Mobile / Desktop Browser", type: "client" },
      { label: "React Frontend", sublabel: "Tailwind CSS + State Management", type: "client" },
      { label: "Express Backend API", sublabel: "Product & Order Routes", type: "api" },
      { label: "Render Cloud Hosting", sublabel: "Production Deployment", type: "deploy" }
    ],
    contribution: [
      "Engineered end-to-end full-stack web application as a freelance engineer.",
      "Designed clean UI/UX components tailored for organic food branding.",
      "Implemented client-side shopping cart persistence and dynamic price calculation.",
      "Configured cloud deployment on Render with automated continuous deployment from GitHub."
    ],
    challenges: [
      "Optimizing initial page load speeds and asset sizes for mobile shoppers on cellular networks.",
      "Ensuring clean cross-device layout consistency across smartphones, tablets, and laptops."
    ],
    outcome: [
      "Successfully launched live web application at dhanny.onrender.com.",
      "Provided client with a functional digital storefront to receive online orders."
    ]
  },
  {
    id: "local-ai",
    number: "04",
    title: "LocalAI",
    subtitle: "Privacy-First Local AI Assistant & LLM Platform",
    statusBadge: "IN PROGRESS",
    description: "An offline, privacy-focused AI platform designed to execute open-source Large Language Models (LLMs) locally on consumer hardware with zero cloud dependency.",
    features: [
      "Offline LLM inference engine & local model execution",
      "Privacy-first architecture — zero data sent to external servers",
      "RAG (Retrieval-Augmented Generation) document search",
      "Interactive chat interface with session history",
      "Docker containerized execution runtime & API gateway",
      "Local vector database embedding storage"
    ],
    techStack: ["Python", "TypeScript", "React", "FastAPI", "Docker", "Ollama", "ChromaDB", "Tailwind CSS"],
    projectFocus: "Architecting local AI inference pipelines, vector document embeddings (RAG), containerized execution runtime, and privacy-centric user interfaces.",
    githubUrl: "https://github.com/Mallanagowda63",

    // Modal Details
    overview: "LocalAI is an open-source, privacy-preserving AI assistant designed for developers and power users who require confidential LLM capabilities on local infrastructure without cloud telemetry or data leakage.",
    problem: "Cloud AI services present privacy risks, API latency, recurring token subscription costs, and bandwidth dependencies when analyzing confidential documents or personal codebase files.",
    solution: "Building a local RAG and LLM orchestration engine using Ollama/FastAPI backend, ChromaDB vector embeddings, and a responsive React desktop/web frontend for offline AI workflows.",
    architectureFlow: [
      { label: "User / Developer", sublabel: "Local Web / Desktop App", type: "client" },
      { label: "React Frontend", sublabel: "TypeScript + Tailwind UI", type: "client" },
      { label: "FastAPI Gateway", sublabel: "Python Async API Server", type: "api" },
      { label: "ChromaDB Vector Store", sublabel: "RAG Document Embeddings", type: "db" },
      { label: "Ollama / Llama Engine", sublabel: "Local Hardware LLM Runtime", type: "service" }
    ],
    contribution: [
      "Designing asynchronous FastAPI endpoints for streaming local model responses via Server-Sent Events (SSE).",
      "Implementing local document chunking and vector storage using ChromaDB for RAG context retrieval.",
      "Packaging local model execution scripts into multi-platform Docker containers."
    ],
    challenges: [
      "Optimizing local model quantization (GGUF/4-bit) for low memory footprint on standard workstations.",
      "Managing dynamic prompt context windows during multi-turn conversational interactions."
    ],
    outcome: [
      "Under active development to provide a robust, completely offline alternative to cloud AI services.",
      "Achieved sub-second initial token generation latency on local GPU/CPU hardware."
    ]
  },
  {
    id: "influencer-hub",
    number: "05",
    title: "Influencer Hub",
    subtitle: "Micro-Influencer Collaboration & Campaign Management Platform",
    description: "A scalable influencer collaboration platform enabling businesses to discover micro-influencers based on niche, engagement metrics, and audience reach.",
    features: [
      "Niche & engagement-based micro-influencer discovery",
      "Firebase backend infrastructure for authentication & real-time updates",
      "Secure CRUD operations & campaign management workflows",
      "Dynamic filtering system for campaign targeting",
      "Git version control & production deployment"
    ],
    techStack: ["React.js", "Node.js", "Firebase", "Express.js", "REST APIs"],
    projectFocus: "Designed scalable collaboration workflows, real-time Firebase backend infrastructure, and dynamic metric filtering systems.",
    githubUrl: "https://github.com/Mallanagowda63/influencer",

    // Modal Details
    overview: "Influencer Hub bridges businesses and micro-influencers by providing structured campaign management, real-time engagement analytics, and secure collaboration tools.",
    problem: "Small businesses struggle to identify relevant micro-influencers efficiently due to fragmented social metrics and manual outreach overhead.",
    solution: "Built a full-stack platform leveraging Firebase real-time database and React UI to streamline influencer discovery, campaign tracking, and performance analysis.",
    architectureFlow: [
      { label: "Business User", sublabel: "Campaign Dashboard", type: "client" },
      { label: "React App", sublabel: "Stateful Component UI", type: "client" },
      { label: "Node.js API", sublabel: "RESTful Service Layer", type: "api" },
      { label: "Firebase DB", sublabel: "Real-time Authentication & Store", type: "db" }
    ],
    contribution: [
      "Configured Firebase backend infrastructure for authentication, secure data handling, and real-time updates.",
      "Implemented secure CRUD operations, campaign management workflows, and dynamic filtering systems.",
      "Deployed and tested applications using modern development workflows and Git version control."
    ],
    challenges: [
      "Synchronizing real-time campaign status changes across concurrent business dashboard sessions.",
      "Structuring non-relational Firebase document trees for multi-attribute influencer filtering."
    ],
    outcome: [
      "Successfully launched collaboration engine supporting seamless micro-influencer campaign creation.",
      "Reduced influencer discovery and campaign setup time significantly."
    ]
  },
  {
    id: "udm-tms",
    number: "06",
    title: "UDM & TMS (Indian Railways)",
    subtitle: "Railway Ticket & User Management System",
    description: "A full-stack railway ticket and user management system developed using React Native and Node.js with RESTful API integration.",
    features: [
      "Full-stack railway ticketing & user management workflows",
      "React Native cross-platform mobile interface",
      "RESTful API integration & Node.js backend",
      "MongoDB database operations & authentication systems",
      "Optimized ticket booking & user profile screens"
    ],
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    projectFocus: "Engineered cross-platform mobile screens, optimized backend ticketing APIs, and managed MongoDB database operations.",
    githubUrl: "https://github.com/Mallanagowda63",

    // Modal Details
    overview: "UDM & TMS simplifies railway ticket management and user administration through a high-performance cross-platform mobile application connected to robust REST APIs.",
    problem: "Legacy ticket booking interfaces often suffer from complex navigation, high latency during peak user traffic, and poor mobile responsiveness.",
    solution: "Designed a lightweight React Native mobile interface backed by a stateless Express.js REST API and MongoDB cluster for high-throughput ticket transactions.",
    architectureFlow: [
      { label: "Railway Passenger", sublabel: "React Native Mobile App", type: "client" },
      { label: "Express REST API", sublabel: "Ticketing & Auth Gateway", type: "api" },
      { label: "MongoDB Database", sublabel: "User Profiles & Ticket Ledger", type: "db" }
    ],
    contribution: [
      "Developed full-stack railway ticket and user management system using React Native and Node.js.",
      "Designed mobile screens and optimized backend APIs for efficient ticket booking and user workflows.",
      "Implemented MongoDB database operations, authentication systems, and API communication."
    ],
    challenges: [
      "Ensuring atomic database transactions during simultaneous ticket seat reservations.",
      "Maintaining UI responsiveness on lower-spec mobile devices during search queries."
    ],
    outcome: [
      "Delivered a seamless ticket management mobile prototype with sub-second booking confirmation.",
      "Verified API reliability under simulated concurrent user booking loads."
    ]
  },
  {
    id: "project-idea-hub",
    number: "07",
    title: "Project Idea Hub",
    subtitle: "Academic & Real-World Project Discovery Platform",
    description: "A platform helping students discover innovative academic and real-world project ideas using recommendation algorithms and category-based filtering systems.",
    features: [
      "Recommendation & category-based project filtering",
      "Reusable frontend UI components & responsive design",
      "Integrated backend APIs for dynamic project management",
      "Optimized rendering techniques & API debugging"
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    projectFocus: "Built recommendation filtering logic, engineered reusable frontend modules, and managed deployment workflows.",
    githubUrl: "https://github.com/Mallanagowda63",

    // Modal Details
    overview: "Project Idea Hub assists computer science students in identifying high-impact capstone and portfolio project topics by categorizing technical requirements and domain complexity.",
    problem: "Students struggle to find structured, vetted project ideas tailored to their skill level and technical domain interests.",
    solution: "Created a centralized discovery hub with category filters (Full-Stack, Cloud, AI, Security) and submission management workflows.",
    architectureFlow: [
      { label: "Student User", sublabel: "Web Browser UI", type: "client" },
      { label: "React Frontend", sublabel: "Category Filter Components", type: "client" },
      { label: "Node.js Server", sublabel: "Idea Recommendation Engine", type: "api" },
      { label: "MongoDB Atlas", sublabel: "Idea Specs & Feedback Store", type: "db" }
    ],
    contribution: [
      "Built a platform helping students discover innovative academic and real-world project ideas.",
      "Engineered reusable frontend components and integrated backend APIs for dynamic project management.",
      "Enhanced application usability through modern UI architecture and optimized rendering techniques."
    ],
    challenges: [
      "Designing category tagging hierarchies that accurately match diverse engineering sub-fields.",
      "Maintaining fast search performance as the repository of project ideas grows."
    ],
    outcome: [
      "Provided an intuitive project discovery tool actively utilized by student peers for capstone selection.",
      "Streamlined project topic evaluation and tech stack planning."
    ]
  },
  {
    id: "matchmaking-app",
    number: "08",
    title: "Real-Time Matchmaking Mobile App",
    subtitle: "Social Networking Mobile Application",
    description: "A real-time social networking mobile application built with React Native, featuring Firebase authentication, mobile-first UI components, and secure profile management.",
    features: [
      "Real-time social networking & user matchmaking",
      "Firebase authentication & secure profile management",
      "Mobile-first responsive UI components & smooth navigation",
      "Efficient component rendering & performance optimization"
    ],
    techStack: ["React Native", "Firebase", "JavaScript", "Mobile UI"],
    projectFocus: "Developed mobile-first UI components, integrated Firebase real-time auth, and optimized mobile loading speeds.",
    githubUrl: "https://github.com/Mallanagowda63",

    // Modal Details
    overview: "A cross-platform mobile application facilitating real-time social matchmaking based on shared user interests, location preferences, and activity feeds.",
    problem: "Mobile social applications require low latency state updates, low memory consumption, and smooth gesture transitions.",
    solution: "Utilized React Native with Firebase Realtime Database to deliver instant profile updates, dynamic navigation stacks, and efficient memory management.",
    architectureFlow: [
      { label: "Mobile User", sublabel: "iOS / Android React Native", type: "client" },
      { label: "Firebase Auth", sublabel: "User Identity & Profiles", type: "api" },
      { label: "Firebase Realtime DB", sublabel: "Matchmaking & Messaging", type: "db" }
    ],
    contribution: [
      "Developed a real-time social networking mobile application with Firebase authentication.",
      "Integrated backend services, navigation systems, and secure user profile management features.",
      "Reduced application loading time and improved mobile responsiveness through efficient component rendering."
    ],
    challenges: [
      "Managing complex mobile navigation transitions smoothly across nested tab and stack navigators.",
      "Preventing unneeded re-renders when Firebase subscription listeners receive high-frequency data updates."
    ],
    outcome: [
      "Achieved 60fps gesture animations and rapid initial app startup times.",
      "Delivered a complete cross-platform mobile social experience."
    ]
  }
];
