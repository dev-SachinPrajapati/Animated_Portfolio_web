'use client'
// import FloatingNav  from "@/components/ui/floating-navbar";
import { navItems } from "@/data/index";
// import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
// import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";

import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() => import('@/components/ui/floating-navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });
const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Approach = dynamic(() => import('@/components/Approach'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
