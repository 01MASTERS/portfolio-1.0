import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Achievements,
} from "@/components/sections";
import { Background } from "@/components/common";
import { PreLoaderOverlay } from "@/components/common/PreLoaderOverlay";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <PreLoaderOverlay />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
