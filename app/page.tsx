import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

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

  const projects = [
    {
      title: "Voting DApp",
      description: "Decentralized voting application built with Solana blockchain using Anchor framework and Next.js for secure and transparent voting system.",
      tech: ["Solana", "Anchor", "Next.js", "TypeScript"],
      github: "https://github.com/dvansari65/voting-dapp"
    },
    {
      title: "Chess DApp",
      description: "On-chain chess game powered by Solana smart contracts with real-time gameplay and state management using Anchor and Next.js.",
      tech: ["Solana", "Anchor", "Next.js", "Web3.js"],
      github: "https://github.com/dvansari65/chess-dapp"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with Stripe payment integration, product management, and secure checkout system.",
      tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      github: "https://github.com/dvansari65/ecommerce"
    },
    {
      title: "Real-Time Chat App",
      description: "Modern chat application with real-time messaging, user authentication, and seamless communication features.",
      tech: ["Next.js", "WebSocket", "MongoDB", "Node.js"],
      github: "https://github.com/dvansari65/chat-app"
    },
    {
      title: "YouTube Clone",
      description: "Video streaming platform clone with video upload, playback, user subscriptions, and content management features.",
      tech: ["Next.js", "React", "MongoDB", "Express.js"],
      github: "https://github.com/dvansari65/youtube-clone"
    },
    {
      title: "Dyad Protocol Contribution",
      description: "Contributed to Dyad Protocol, a 15k+ star open-source repository for decentralized stablecoin infrastructure.",
      tech: ["Solidity", "Smart Contracts", "DeFi"],
      github: "https://github.com/DyadStablecoin/contracts"
    }
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

          {/* Projects Section */}
          <div className="mt-10 w-full">
            <h1 className="text-[20px] Roboto font-light text-slate-300 mb-6">
              Projects
            </h1>
            <div className="flex flex-col gap-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 
                           border border-cyan-500/20 rounded-lg p-5
                           hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]
                           transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[16px] text-slate-200 font-medium">{project.title}</h3>
                    <Link 
                      href={project.github}
                      target="_blank"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={20} />
                    </Link>
                  </div>
                  <p className="text-[13px] text-gray-400 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-cyan-500/20 
                                 rounded text-[11px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}