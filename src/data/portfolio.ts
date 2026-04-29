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
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
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
        demo: "#"
      },
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "souled-store",
      title: "The Souled Store 3D Feature",
      problem: "Static 2D previews were insufficient for high-end shoe customization, leading to lower user engagement.",
      solution: "Developed an interactive 3D shoe customization engine using .glb models. Integrated CMS-driven feature toggles for dynamic control over customization options.",
      tech: ["Vue.js 2", "3D Modeling (.glb)", "Vuex", "Coralogix"],
      impact: "Increased user engagement by 35% on customization pages and streamlined feature deployment.",
      features: ["Real-time 3D rendering", "Dynamic customization options", "Error monitoring integration", "Feature toggle system"],
      links: {
        github: "#",
        demo: "#"
      },
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "ag-grid-optimization",
      title: "Xcelerate Data Platform",
      problem: "Handling massive datasets (100k+ rows) in data tables was causing browser lag and poor user experience.",
      solution: "Implemented high-performance data tables using AG Grid with dynamic column configuration and optimized rendering logic.",
      tech: ["React", "AG Grid", "Performance Tuning"],
      impact: "Achieved 60fps scrolling on tables with 100k+ rows and improved initial data visualization speed by 50%.",
      features: ["Dynamic column configuration", "Server-side pagination", "Complex data visualization", "Reusable table components"],
      links: {
        github: "#",
        demo: "#"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ],
  experience: [
    {
      company: "Neosoft Technologies",
      role: "Senior Software Engineer",
      period: "OCT 2024 - Present",
      description: "Leading frontend initiatives for major e-commerce platforms, focusing on performance and interactive features.",
      highlights: [
        "Architected 3D customization features for high-traffic platforms.",
        "Implemented CMS-driven dynamic feature control.",
        "Optimized application state management using Vuex/Pinia."
      ]
    },
    {
      company: "Ariqt International",
      role: "SDE II",
      period: "FEB 2023 - JUL 2024",
      description: "Specialized in micro-frontend architectures and large-scale migrations.",
      highlights: [
        "Implemented Module Federation for scalable frontend growth.",
        "Managed complex Vue 2 to Vue 3 migrations.",
        "Established shared UI component libraries with Storybook."
      ]
    },
    {
      company: "Clixlogix Technologies",
      role: "Associate Software Engineer",
      period: "JUN 2022 - DEC 2024",
      description: "Focused on real-time systems and heavy data handling.",
      highlights: [
        "Developed WebSocket-based real-time notification systems.",
        "Optimized rendering for massive invoice datasets.",
        "Integrated complex REST APIs for financial workflows."
      ]
    }
  ]
};
