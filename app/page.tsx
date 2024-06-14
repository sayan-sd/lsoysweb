import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Contact from "../components/Contact";
import { CardHoverEffect } from "@/components/HoverEffectCards";
import PreLoader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <PreLoader />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
        <Clients />
        <CardHoverEffect />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}