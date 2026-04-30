export const portfolioData = {
  profile: {
    name: "Saqeb Khan",
    title: "Senior Frontend Developer (React | Vue)",
    experience: "5+ Years",
    location: "Aurangabad, Maharashtra",
    email: "saqebk619@gmail.com",
    phone: "+91 87885 66695",
    linkedin: "https://linkedin.com/in/saqebkhan",
    github: "https://github.com/saqebkhan",
    summary: "Senior Frontend Developer with over 5 years of experience building high-performance, scalable web applications. Expert in React.js and Vue.js, with a strong focus on micro-frontend architecture, performance optimization, and crafting premium user experiences.",
    resumeUrl: "Saqeb Khan Updated resume.pdf"
  },
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Vue.js (2 & 3)", "Next.js", "Nuxt.js", "TypeScript"]
    },
    {
      category: "State Management",
      items: ["Redux Toolkit", "Vuex", "Pinia", "Context API"]
    },
    {
      category: "Tools & DevOps",
      items: ["Vite", "Webpack", "Azure DevOps", "Git/GitHub", "NPM/Yarn"]
    },
    {
      category: "UI & Styling",
      items: ["Tailwind CSS", "Bootstrap", "Vuetify", "Material UI", "Framer Motion"]
    },
    {
      category: "Core Concepts",
      items: ["Micro-frontends", "Module Federation", "WebSockets", "Performance Optimization", "Agile"]
    }
  ],
  projects: [
    {
      id: "payment-invoice",
      title: "Payment Invoice System",
      problem: "Managing high-volume invoices with real-time updates was causing rendering bottlenecks and data inconsistency.",
      solution: "Architected a scalable invoice management system using React and WebSockets for instantaneous updates. Implemented efficient data flow to handle large datasets without compromising UI responsiveness.",
      tech: ["React", "WebSocket", "REST API", "Tailwind CSS"],
      impact: "Reduced data load time by 40% and improved real-time synchronization efficiency.",
      features: ["Real-time invoice tracking", "Comment system with mentions", "Advanced filtering", "Rendering optimization"],
      links: {
        github: "#",
        demo: "#"
      },
      image: "assets/images/invoice-system.png"
    },
    {
      id: "cowmanager",
      title: "CowManager Platform",
      problem: "The legacy monolithic frontend was difficult to maintain and scale across multiple specialized teams.",
      solution: "Lead the transition to a Micro-frontend architecture using Module Federation. Migrated legacy Vue 2 components to Vue 3 Composition API for better performance and maintainability.",
      tech: ["Vue 3", "Micro-frontends", "Module Federation", "Storybook", "Azure DevOps"],
      impact: "Accelerated development cycles by 25% and enabled independent deployments for team-specific modules.",
      features: ["Micro-frontend architecture", "Shared UI library", "CI/CD integration", "Vue 2 to 3 migration"],
      links: {
        github: "#",
        demo: "https://www.cowmanager.com"
      },
      image: "assets/images/cowmanager.png"
    },
    {
      id: "souled-store",
      title: "The Souled Store 3D Feature",
      problem: "Static 2D previews were insufficient for high-end shoe customization, leading to lower user engagement.",
      solution: "Developed an interactive 3D shoe customization engine using .glb models. Integrated CMS-driven feature toggles for dynamic control over customization options.",
      tech: ["Vue.js 2", "3D Modeling (.glb)", "Vuex", "Coralogix"],
      impact: "Increased user engagement by 35% on customization pages and streamlined feature deployment.",
      features: [
        "Interactive 3D shoe customization using .glb models",
        "CMS-driven feature toggle system for dynamic control",
        "Managed complex UI workflows with Vuex",
        "Real-time error monitoring with Coralogix integration"
      ],
      links: {
        github: "#",
        demo: "https://www.thesouledstore.com"
      },
      image: "assets/images/souled-store.png"
    },
    {
      id: "ag-grid-optimization",
      title: "Xcelerate Data Platform",
      problem: "Handling massive datasets (100k+ rows) in data tables was causing browser lag and poor user experience.",
      solution: "Implemented high-performance data tables using AG Grid with dynamic column configuration and optimized rendering logic.",
      tech: ["React", "AG Grid", "Performance Tuning"],
      impact: "Achieved 60fps scrolling on tables with 100k+ rows and improved initial data visualization speed by 50%.",
      features: [
        "High-performance data tables using AG Grid",
        "Dynamic column configuration and optimized rendering",
        "Improved data visualization and interaction speed",
        "Reusable table components for scalability"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      image: "assets/images/xcelerate.png"
    },
    {
      id: "insurance-platform",
      title: "Insurance Platform (TATA AIG)",
      problem: "Legacy insurance workflows were non-responsive and prone to data entry errors due to lack of validation.",
      solution: "Developed a responsive UI using Vue.js and Vuetify. Built complex forms with robust validation logic to improve data accuracy and streamlined policy/audit workflows.",
      tech: ["Vue.js", "Vuetify", "REST API"],
      impact: "Improved data accuracy by 40% and enhanced user experience through structured UI logic.",
      features: [
        "Responsive UI development with Vuetify",
        "Complex form building with advanced validation",
        "Integration of backend APIs for policy and audit workflows",
        "Structured UI logic for improved UX"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      image: "assets/images/tata-aig.png"
    }
  ],
  experience: [
    {
      company: "Neosoft Technologies",
      role: "Senior Software Engineer",
      period: "OCT 2024 - Present",
      description: "Leading frontend initiatives for major e-commerce platforms, focusing on performance and interactive features.",
      highlights: [
        "Developed scalable e-commerce features using Vue.js 2 with REST API integration.",
        "Built interactive 3D shoe customization feature using .glb models to enhance user engagement.",
        "Managed application state using Vuex for complex UI workflows.",
        "Integrated Coralogix for real-time error monitoring and debugging.",
        "Developed CMS-driven feature toggle system for dynamic feature control."
      ]
    },
    {
      company: "Ariqt International",
      role: "SDE II",
      period: "FEB 2023 - JUL 2024",
      description: "Specialized in micro-frontend architectures and large-scale migrations.",
      highlights: [
        "Collaborated across multiple teams including Client App, Shell App, and shared UI library.",
        "Developed micro-frontend architecture using Module Federation.",
        "Built reusable UI components using Vue 3 (Composition API) and Storybook.",
        "Contributed to Vue 2 to Vue 3 migration improving maintainability.",
        "Integrated CI/CD pipelines using Azure DevOps."
      ]
    },
    {
      company: "Clixlogix Technologies",
      role: "Associate Software Engineer",
      period: "JUN 2022 - DEC 2022",
      description: "Focused on real-time systems and heavy data handling.",
      highlights: [
        "Developed scalable invoice management system with real-time updates using WebSocket.",
        "Integrated REST APIs for invoice creation, updates, and tracking.",
        "Built comment system with CRUD operations, mentions, and notifications.",
        "Improved UI responsiveness and reduced data load time.",
        "Optimized rendering for handling large datasets efficiently."
      ]
    },
    {
      company: "Iorta Technologies",
      role: "Software Engineer",
      period: "MAR 2022 - JUN 2022",
      description: "Developed enterprise insurance solutions with focus on accuracy and responsiveness.",
      highlights: [
        "Developed responsive UI using Vue.js and Vuetify.",
        "Built complex forms with validation improving data accuracy.",
        "Integrated backend APIs for policy and audit workflows.",
        "Improved user experience through structured UI logic."
      ]
    },
    {
      company: "Wissen Infotech",
      role: "Junior Software Engineer",
      period: "SEP 2021 - MAR 2022",
      description: "Specialized in high-performance data visualization and table components.",
      highlights: [
        "Built high-performance data tables using AG Grid handling large datasets.",
        "Developed reusable table components for scalability.",
        "Implemented dynamic column configuration and optimized rendering.",
        "Improved data visualization and interaction speed."
      ]
    }
  ]
};
