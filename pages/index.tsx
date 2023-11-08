import { Inter } from "next/font/google";
import { About, HeroSection, Project } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Project />
    </div>
  );
}
