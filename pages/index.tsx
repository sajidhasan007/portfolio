import { Inter } from "next/font/google";
import { About, HeroSection } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
    </div>
  );
}
