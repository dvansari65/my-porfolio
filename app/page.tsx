import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pointer } from "lucide-react";

export default function Home() {
  const mainSkills = [
    "TypeScript", "JavaScript", "Rust", "Next.js", "React", "Solana", "Anchor"
  ];
  
  const skills = [
    // Frontend
    "Tailwind CSS", "HTML5", "CSS3",
    // Backend
    "Node.js", "Prisma ORM", "PostgreSQL", "MongoDB", "Express.js",
    // Blockchain
    "Web3.js", "Smart Contracts",
    // Tools & Others
    "Git", "GitHub", "VS Code", "Vercel", "Docker"
  ];

  return (
    <div className="w-full h-screen flex justify-center overflow-auto relative">
      {/* Left Border Line */}
      <div className="absolute left-[calc(50%-400px)] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
      
      {/* Right Border Line */}
      <div className="absolute right-[calc(50%-400px)] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
      
      {/* Main Content Container */}
      <div className="max-w-3xl w-full flex flex-col items-start px-8">
        <section className="w-full h-[25vh] flex justify-start items-end gap-5 py-3">
          <div>
            <Image
              src="/assets/batman.jpeg"
              alt="Danish Ansari"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="white Roboto">Danish Ansari</h1>
            <span className="text-gray-400">
              Blockchain Developer & Full Stack Developer
            </span>
            <span className="text-[12px] text-[rgb(60,242,75)]">Hire me</span>
          </div>
        </section>
        
        <section className="w-full overflow-auto flex flex-col items-start pb-10">
          <div className="mt-10 flex flex-col gap-3">
            <h1 className="text-[20px] Roboto font-light text-slate-300">
              About
            </h1>
            <span className="text-gray-400">
              {`[ learn >> build >> solve ]`}
            </span>
          </div>
          <div className="mt-4 about text-[14px] text-gray-400">
            I am Full Stack and Blockchain developer. I like to do tough things and this helps me out to 
            <br />
            build complex and robust applications. I mostly prefered NextJS , Typescript and prisma ORM 
            <br />
            stacks in developement and while building solana dapps i use Anchor and Nextjs. I started my
            <br />
            coding journey 14 march 2025 and build multiple real world projects. 
          </div>
          
          <div className="mt-10 w-full">
            <h1 className="text-[20px] Roboto font-light text-slate-300 mb-6">
              Skills
            </h1>
            
            {/* Main Languages & Frameworks */}
            <div className="mb-6">
              <h2 className="text-[14px] text-gray-400 mb-3 font-light">Main Languages & Frameworks</h2>
              <div className="flex flex-wrap gap-3">
                {mainSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-br from-cyan-900/30 to-cyan-950/40 
                             border border-cyan-400/40 rounded-lg text-[14px] text-slate-200
                             hover:border-cyan-300/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                             transition-all duration-300 cursor-default
                             backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div>
              <h2 className="text-[14px] text-gray-400 mb-3 font-light">Other Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                             border border-cyan-500/20 rounded-lg text-[13px] text-slate-200
                             hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]
                             transition-all duration-300 cursor-default
                             backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}