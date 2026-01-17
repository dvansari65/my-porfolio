"use client"
import Image from "next/image";
import { Download, Github, Mail, Phone, MapPin } from "lucide-react";
import { FloatingBubbles } from "@/components/FloatingBubbles";
import { ScrollObserver } from "@/components/ScrollObserver";

export default function Home() {
  const mainSkills = [
    "TypeScript", "JavaScript", "Rust", "Next.js", "React", "Node.js", "Anchor", "Docker"
  ];

  const projects = [
    {
      title: "RaffleDrop",
      description: "LuckyBid is a decentralized raffle marketplace where sellers list items and buyers enter with small fees for a chance to win. Once enough players join, Switchboard randomness picks a winner — the seller gets paid, and one lucky buyer gets the product at a fraction of the price.",
      tech: ["Rust", "Anchor", "Next.js", "TypeScript", "Solana", "Switchboard"],
      github: "https://github.com/dvansari65/RaffleDrop"
    },
    {
      title: "Decentralised Orderbook",
      description: "A modular Solana DEX with an on-chain orderbook, built with Anchor and Next.js, featuring real-time order matching, event queue, and off-chain indexing for high-performance trading.",
      tech: ["Rust", "Anchor", "Next.js", "TypeScript", "Solana", "Switchboard"],
      github: "https://github.com/dvansari65/dex_orderbook"
    },
    {
      title: "Chess DApp",
      description: "On-chain chess game powered by Solana smart contracts with real-time gameplay and state management using Anchor and Next.js.",
      tech: ["Solana", "Anchor", "Next.js", "Web3.js"],
      github: "https://github.com/dvansari65/chess-dapp"
    },
    {
      title: "Crashed",
      description: "A modern, real-time crash-style gambling game built on Solana with provably fair gaming mechanics. Time your exit before the multiplier crashes!",
      tech: ["Solana", "Anchor", "Next.js", "Web3.js"],
      github: "https://github.com/dvansari65/crashed"
    },
    {
      title: "CancelCourt",
      description: "A playful, on-chain protocol where users anonymously submit cases (trends, behaviors, influencers, brands) for the community to vote on—should it be canceled or redeemed? Built on Solana for Gen Z's love of social commentary, irony, and collective action.",
      tech: ["Solana", "Anchor", "Next.js", "Web3.js"],
      github: "https://github.com/dvansari65/cencelcourt"
    },

  ];

  const contributions = [
    {
      title: "txtx/Surfpool",
      description: "Contributed to txtx Surfpool which is solana local developement",
      fix: "Improved error handling",
      github: "https://github.com/txtx/surfpool/pull/489"
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center relative bg-slate-950">
      <ScrollObserver />

      {/* Left Border Line */}
      <div className="absolute left-[calc(50%-400px)] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>

      {/* Right Border Line */}
      <div className="absolute right-[calc(50%-400px)] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>

      {/* Main Content Container */}
      <div className="max-w-3xl w-full flex flex-col items-start px-4 md:px-8 py-8 pb-24 md:pb-32 overflow-hidden">
        <section className="w-full flex justify-start items-center gap-5 py-3">
          <div>
            <Image
              src="/assets/batman.webp"
              alt="Danish Ansari"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-xl md:text-2xl font-light">Danish Ansari</h1>
            <span className="text-gray-400 text-sm">
              Blockchain Developer & Full Stack Developer
            </span>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-green-400">Hire me</span>
              <a
                href="/assets/danish.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-md text-xs text-cyan-300 hover:text-cyan-100 hover:border-cyan-300/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 backdrop-blur-sm"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-start pb-10">
          <div className="mt-10 flex flex-col gap-3 fade-in-section">
            <h1 className="text-lg md:text-xl font-light text-slate-300">
              About
            </h1>
            <span className="text-gray-400 text-sm">
              {`[ learn >> build >> solve ]`}
            </span>
          </div>
          <div className="mt-4 text-sm text-gray-400 leading-relaxed fade-in-section">
            I am a Full Stack and Blockchain developer. I like to do tough things and this helps me
            build complex and robust applications. I mostly prefer Next.js, TypeScript and Prisma ORM
            stacks in development, and while building Solana dApps I use Anchor and Next.js. I started my
            coding journey on March 14, 2024 and have built multiple real world projects.
          </div>

          <div className="mt-10 w-full fade-in-section">
            <h1 className="text-lg md:text-xl font-light text-slate-300 mb-6">
              Skills
            </h1>

            {/* Main Languages & Frameworks */}
            <div className="mb-6">
              <h2 className="text-sm text-gray-400 mb-3 font-light">Main Languages & Frameworks</h2>
              <div className="flex flex-wrap gap-3">
                {mainSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-br from-cyan-900/30 to-cyan-950/40 border border-cyan-400/40 rounded-lg text-sm text-slate-200 hover:border-cyan-300/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-10 w-full fade-in-section">
            <h1 className="text-lg md:text-xl font-light text-slate-300 mb-6">
              Projects
            </h1>
            <div className="flex flex-col gap-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 rounded-lg p-5 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 backdrop-blur-sm fade-in-section"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base text-slate-200 font-medium">{project.title}</h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-cyan-500/20 rounded text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Contributions Section */}
          <div className="mt-10 w-full mb-10 fade-in-section">
            <h1 className="text-lg md:text-xl font-light text-slate-300 mb-6">
              Experience & Contributions
            </h1>
            <div className="flex flex-col gap-5">
              {contributions.map((contribution, index) => (
                <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 rounded-lg p-5 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 backdrop-blur-sm fade-in-section overflow-hidden"
              >
                {/* Subtle animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-cyan-400/10 rounded-tr-lg" />
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/5 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    {/* Animated indicator with pulse effect */}
                    <div className="relative mt-1 flex-shrink-0">
                      <div className="absolute w-3 h-3 rounded-full bg-cyan-400/20 animate-ping" />
                      <div className="w-2 h-2 rounded-full bg-cyan-400/60" />
                    </div>
                    
                    <p className="text-sm text-gray-300 leading-relaxed tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                      {contribution.description}
                    </p>
                  </div>
                  
                  <div className="ml-5 space-y-2">
                    <div className="flex items-start gap-2">
                      {/* Tag with improved typography */}
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-400/90 border border-cyan-500/15 tracking-wide">
                        Fix
                      </span>
                      <span className="text-xs text-gray-400 leading-relaxed tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                        {contribution.fix}
                      </span>
                    </div>
                    
                    {/* Enhanced PR link with icon */}
                    <div className="flex items-center gap-2 pt-1">
                      <svg 
                        className="w-3 h-3 text-cyan-400/70" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="text-xs text-cyan-400/70 font-medium tracking-wide">PR:</span>
                      <a 
                        className="relative text-xs text-green-300 hover:text-green-200 transition-colors duration-300 group/link"
                        href={contribution.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* Animated underline */}
                        <span className="relative">
                          {contribution.github.split('/').slice(-1)[0]}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-400/60 group-hover/link:w-full transition-all duration-300" />
                        </span>
                        {/* External link indicator */}
                        <svg 
                          className="inline-block w-3 h-3 ml-1.5 opacity-0 -translate-x-1 group-hover/link:opacity-70 group-hover/link:translate-x-0 transition-all duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-10 w-full mb-10 fade-in-section">
            <h1 className="text-xl font-light text-slate-300 mb-6">
              Get In Touch
            </h1>
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:danishansari@example.com"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <span>dvansari360@example.com</span>
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <span>+91 9146109114</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <MapPin size={18} className="text-cyan-400" />
                  </div>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FloatingBubbles />

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}