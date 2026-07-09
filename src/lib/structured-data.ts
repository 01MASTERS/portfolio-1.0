import { selfData, skillsData } from "@/constant";

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: selfData.workFor,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IIT Patna",
    },
    email: selfData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location.city,
      addressRegion: selfData.current_location.state,
      addressCountry: selfData.current_location.country,
    },
    sameAs: [
      `https://github.com/${selfData.socials_username.github}`,
      `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      `https://twitter.com/${selfData.socials_username.twitter}`,
      `https://instagram.com/${selfData.socials_username.instagram}`,
    ],
    url: "https://rittiksharma.vercel.app",
    description: selfData.bio,
    knowsAbout: skills,
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rittik Sharma - Portfolio",
    url: "https://rittiksharma.vercel.app",
    description:
      "Rittik Sharma's portfolio featuring projects in React, Next.js, and modern web development",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
    publisher: {
      "@type": "Person",
      name: selfData.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateProfilePageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: selfData.name,
      url: "https://rittiksharma.vercel.app",
      jobTitle: selfData.jobTitle,
      description: selfData.bio,
      sameAs: [
        `https://github.com/${selfData.socials_username.github}`,
        `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
        `https://twitter.com/${selfData.socials_username.twitter}`,
      ],
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };
}

export function generateFAQStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Rittik Sharma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rittik Sharma is a Full Stack Developer and AI Engineer from Patna, India. He is a Computer Science student at IIT Patna, currently interning at Vivriti Capital as a Software Developer. He specializes in building web applications with Next.js, React, and Python, and has built multiple AI-powered tools including TestIQ, VidyaMarg, and Curely.",
        },
      },
      {
        "@type": "Question",
        name: "What projects has Rittik Sharma built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rittik Sharma has built TestIQ (a CLI RAG pipeline for automated unit test generation using LangChain and ChromaDB), VidyaMarg (an AI learning path generator using LLaMA 3.1 70B), Curely (a real-time voice AI medical assistant using VAPI and Whisper), Orphia (an AI music generator using PyTorch RNN/LSTM), CppTestGenAI (a static analysis tool for C++ using CodeLlama), and Ideascribe (a collaborative note-taking app).",
        },
      },
      {
        "@type": "Question",
        name: "How to contact Rittik Sharma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Rittik Sharma via email at rittik.work1@gmail.com, through the contact form on his portfolio at rittiksharma.vercel.app, or connect with him on LinkedIn at linkedin.com/in/rittik-sharmax and GitHub at github.com/01MASTERS.",
        },
      },
      {
        "@type": "Question",
        name: "What is TestIQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TestIQ is a CLI RAG (Retrieval Augmented Generation) pipeline built by Rittik Sharma. It uses LangChain and ChromaDB to analyze codebases and automatically generate unit tests. It employs Tree-sitter for AST parsing and a self-correcting Ollama loop to validate output, achieving 60 passing tests across 4 build phases.",
        },
      },
    ],
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Rittik Sharma Resume",
    description:
      "Professional resume of Rittik Sharma - Student Developer specializing in Full-Stack Web Development",
    url: "https://rittiksharma.vercel.app/resume",
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      jobTitle: selfData.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: selfData.workFor,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location.city,
        addressRegion: selfData.current_location.state,
        addressCountry: selfData.current_location.country,
      },
      sameAs: [
        `https://github.com/${selfData.socials_username.github}`,
        `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      ],
    },
    dateModified: new Date().toISOString(),
    fileFormat: "application/pdf",
    contentUrl: "https://rittiksharma.vercel.app/docs/Rittik_Sharma_Resume.pdf",
    downloadUrl: "https://rittiksharma.vercel.app/docs/Rittik_Sharma_Resume.pdf",
    keywords: [
      "Software Developer",
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Student Developer",
      "Computer Science",
      "IIT Patna",
      "Patna",
      "India",
    ],
  };
}
