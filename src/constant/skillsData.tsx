import React from "react";

import {
  FaGitAlt,
  FaGithub,
  FaMobile,
  FaPython,
  FaReact,
  FaTruckMoving,
  FaBookOpen,
  FaCodeBranch,
  FaRobot,
  FaSquareJs,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { GrOracle } from "react-icons/gr";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "C++", logoComponent: FaCodeBranch, color: "#00599C" },
      { title: "Java", logoComponent: FaCodeBranch, color: "#5382a1" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "C", logoComponent: FaCodeBranch, color: "#A8B9CC" },
      { title: "Kotlin", logoComponent: FaCodeBranch, color: "#7F52FF" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "PostgreSQL", logoComponent: SiMysql, color: "#336791" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
      { title: "SQL", logoComponent: GrOracle, color: "#F80000" },
      { title: "ChromaDB", logoComponent: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Core Subjects",
    data: [
      { title: "Data Structures & Algorithms", logoComponent: GiBrain, color: "#EE4C2C" },
      { title: "Object Oriented Programming", logoComponent: FaCodeBranch, color: "#1664C0" },
      { title: "DBMS", logoComponent: SiMongodb, color: "#47A248" },
      { title: "Operating Systems", logoComponent: FaCodeBranch, color: "#000000" },
      { title: "Computer Networks", logoComponent: FaCodeBranch, color: "#1A73E8" },
      { title: "System Design", logoComponent: FaCodeBranch, color: "#F55036" },
      { title: "REST APIs", logoComponent: MdApi, color: "#F55036" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "ReactJS", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "Spring Boot", logoComponent: SiExpress, color: "#6DB33F" },
      { title: "Node.js", logoComponent: FaMobile, color: "#339933" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      { title: "HTML/CSS", logoComponent: SiTailwindcss, color: "#E34F26" },
      { title: "Angular", logoComponent: FaReact, color: "#DD0031" },
      { title: "Django / FastAPI", logoComponent: FaPython, color: "#092E20" },
      { title: "JUnit 5", logoComponent: FaCodeBranch, color: "#25A162" },
    ],
  },
  {
    title: "AI, ML & LLMs",
    data: [
      { title: "PyTorch", logoComponent: GiBrain, color: "#EE4C2C" },
      { title: "LangChain", logoComponent: FaCodeBranch, color: "#1664C0" },
      { title: "Ollama", logoComponent: FaRobot, color: "#000000" },
      { title: "Groq / VAPI", logoComponent: MdApi, color: "#F55036" },
      { title: "Whisper / Gemini", logoComponent: FaBookOpen, color: "#1A73E8" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Git / GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Docker", logoComponent: FaTruckMoving, color: "#2496ED" },
      { title: "CI/CD & Jenkins", logoComponent: FaTruckMoving, color: "#D24939" },
      { title: "Bitbucket", logoComponent: FaCodeBranch, color: "#0052CC" },
      { title: "Jira / Confluence", logoComponent: FaCodeBranch, color: "#0052CC" },
      { title: "Supabase & Convex", logoComponent: SiFirebase, color: "#3ECF8E" },
      { title: "AWS EC2", logoComponent: SiVercel, color: "#FF9900" },
      { title: "Linux", logoComponent: FaCodeBranch, color: "#FCC624" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      { title: "Spinnaker", logoComponent: FaTruckMoving, color: "#0A4FCE" },
      { title: "IntelliJ IDEA / VS Code", logoComponent: FaCodeBranch, color: "#000000" },
    ],
  },
];
