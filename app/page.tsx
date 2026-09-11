import CommandMenu from "@/components/CommandMenu";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Contributions from "@/components/sections/Contributions";
import Projects from "@/components/sections/Projects";
import Activity from "@/components/sections/Activity";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center px-5 py-12 sm:px-8 sm:py-20">
      <CommandMenu />
      <main className="flex w-full max-w-[680px] flex-col gap-14 sm:gap-20">
        <Hero />
        <Experience />
        <Contributions />
        <Projects />
        <Activity />
        <Footer />
      </main>
    </div>
  );
}
