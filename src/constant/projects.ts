export const projectsData = [
  {
    name: "File Compression Tool",
    description:
      "Engineered a cross-platform CLI tool supporting 4+ file formats with 100% offline execution capability across Windows and Linux environments. Integrated 3 distinct compression engines (Zstd, FFmpeg, Ghostscript), successfully achieving a 60–80% reduction in overall file size. Formulated a 4-level compression hierarchy featuring custom bitrate and DPI tuning, delivering a 30–50% improvement in size-to-quality ratio control. Developed an extension-independent file signature detection system, boosting processing accuracy and reliability by approximately 40%.",
    github_link: "https://github.com/01MASTERS/File-compressor",
    demo: "",
    tech: ["C++", "FFmpeg", "Ghostscript", "Zstd"],
  },
  {
    name: "ResumeIQ Hiring Assistant",
    description:
      "Built a full-stack candidate screening web app using Next.js (SSG/SSR) and TypeScript, connected to NestJS REST APIs and a MySQL database to ingest and index resumes. Implemented a resume ingestion pipeline that processed resumes across 5+ sections, extracting and normalizing candidate data into a structured MySQL schema. Engineered an AI/LLM-assisted matching pipeline using RAG with a vector store (FAISS) to improve candidate-job matching precision by 15% on internal tests. Built a containerized 4-microservice ecosystem using Docker.",
    github_link: "https://github.com/01MASTERS/ResumeIQ",
    demo: "",
    tech: ["Next.js", "TypeScript", "NestJS", "MySQL", "RAG", "FAISS", "Docker"],
  },
  {
    name: "WordleDoodle",
    description: "Real-time multiplayer word search game. Players join via shareable codes, scan a letter grid for hidden words in 8 directions, powered by a trie running in a Web Worker. A beautifully crafted, modern word-guessing game clone. It challenges players to guess a hidden word within a limited number of attempts, featuring smooth animations and an elegant user interface.",
    github_link: "https://github.com/01MASTERS/WordleDoodle",
    demo: "https://wordledoodle.netlify.app/",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Price Alert",
    description: "A modern, full-stack web application that tracks e-commerce product prices and sends instant Telegram alerts when your target price is hit. Features secure user accounts, automated scraping with Apify, and custom scheduling.",
    github_link: "https://github.com/01MASTERS/PRICE_ALERT",
    demo: "https://pricealertapp.netlify.app/",
    tech: ["React", "TypeScript", "Apify", "Telegram API"],
  },
  {
    name: "Cartlytics",
    description: "An end-to-end e-commerce analytics platform demonstrating a complete modern data pipeline: from generating synthetic datasets to serving them via a high-performance REST API and visualizing them in a responsive React dashboard.",
    github_link: "https://github.com/01MASTERS/Cartylytics",
    demo: "https://cartylytics.netlify.app/",
    tech: ["Docker", "MySQL", "Python", "Pandas", "FastAPI", "React", "Recharts"],
  },
  {
    name: "Chess Game",
    description: "A fully offline, feature-rich chess application built with pure HTML, CSS, and vanilla JavaScript. Features full FIDE rules, intuitive drag-and-drop movement, interactive move history, and session persistence.",
    github_link: "https://github.com/01MASTERS/Chess-Game",
    demo: "https://playnochess.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
