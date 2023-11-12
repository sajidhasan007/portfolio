import { Inter } from "next/font/google";
import {
  About,
  Contact,
  Experience,
  HeroSection,
  Project,
} from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}
