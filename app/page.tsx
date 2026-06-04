"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiRust, 
  SiTypescript, 
  SiNextdotjs, 
  SiReact, 
  SiRedis, 
  SiNodedotjs, 
  SiExpress,
  SiX,
  SiTelegram,
  SiGithub
} from "react-icons/si";
import { FaAws, FaLinkedin } from "react-icons/fa";
import { GitPullRequest, ExternalLink, ChevronDown, Github, Mail } from "lucide-react";
import FluxDiagram from "@/components/FluxDiagram";
import GithubGraph from "@/components/GithubGraph";

// A clean geometric SVG to represent Axum since there isn't a standard react-icon for it
const AxumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 22h20L12 2z" />
    <path d="M12 12l-4 8h8l-4-8z" fill="currentColor" />
  </svg>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState<"prs" | "projects">("prs");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const stack = [
    { icon: SiRust, name: "Rust" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiReact, name: "React" },
    { icon: SiRedis, name: "Redis" },
    { icon: FaAws, name: "AWS" },
    { icon: AxumIcon, name: "Axum" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
  ];

  const pullRequests = [
    { name: "solana-foundation/surfpool #489", url: "https://github.com/solana-foundation/surfpool/pull/489" },
    { name: "ava-labs/firewood #2029", url: "https://github.com/ava-labs/firewood/pull/2029" },
    { name: "solana-foundation/surfpool #586", url: "https://github.com/solana-foundation/surfpool/pull/586" },
    { name: "anza-xyz/wincode #206", url: "https://github.com/anza-xyz/wincode/pull/206" },
  ];

  const projects = [
    {
      name: "Velox",
      url: "https://dexfrontend-murex.vercel.app/",
      github: "https://github.com/dvansari65/dex_orderbook",
      description: "A modular Solana DEX with an on-chain orderbook, built with Anchor and Next.js, featuring real-time order matching, event queue, and off-chain indexing for high-performance trading."
    },
    {
      name: "Predicta",
      url: "https://predicta-docs-8xjw17658-dvansari65s-projects.vercel.app/",
      github: "https://github.com/dvansari65/predicta",
      description: "A high-performance Rust library for predicting Solana transaction outcomes before submission—providing success probability, fee optimization, and runtime-aware insights under real network conditions."
    },
    {
      name: "Aegis",
      url: "https://aegis-murex-three.vercel.app/",
      github: "https://github.com/dvansari65/aegis",
      description: "An open Solana-native risk engine that detects stablecoin liquidity stress early, publishes a real-time stress score, and exposes on-chain emergency signals that DeFi protocols can integrate into their own circuit breakers."
    },
    {
      name: "Flux",
      url: "https://github.com/dvansari65/Flux",
      github: "https://github.com/dvansari65/Flux",
      description: "A cross-chain intent-based settlement protocol. It solves the critical problems of fragmented liquidity and complex bridging UX by allowing users to simply sign their intent, while a competitive off-chain solver network handles the heavy lifting, routing, and execution for optimal pricing.",
      isFlux: true
    },
    {
      name: "Kangarow",
      url: "https://auddfrontend.vercel.app/",
      github: "https://github.com/dvansari65/kangarow",
      description: "Production grade AUDD invoicing + escrow payments on Solana for freelancers and agencies.",
    },
    {
      name: "Raffledrop",
      url: "https://raffledrop.vercel.app/",
      github: "https://github.com/dvansari65/RaffleDrop",
      description: "RaffleDrop is a decentralized raffle marketplace where sellers list items and buyers enter with small fees for a chance to win. Once enough players join, Switchboard randomness picks a winner — the seller gets paid, and one lucky buyer gets the product at a fraction of the price.",
    }
  ];

  return (
    <div className="min-h-screen flex justify-center px-5 py-10 sm:px-6 sm:py-16 md:py-24">
      <main className="w-full max-w-2xl flex flex-col gap-10 sm:gap-16">
        
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Profile Section */}
          <section className="flex flex-col items-start">
          <div className="w-20 h-20 sm:w-28 sm:h-28 relative mb-3 sm:mb-4">
            <Image
              src="/assets/luffy.jpg"
              alt="Profile Image"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1 sm:mb-2">
            dvansari65
          </h1>
          
          <div className="text-[15px] sm:text-[17px] font-medium opacity-90 mb-4 sm:mb-6 tracking-wide">
            Full Stack Software Engineer
          </div>
          
          <p className="text-[14px] sm:text-[16px] leading-relaxed opacity-85">
            Specialized in Rust, distributed systems, and Web3 infrastructure. I build high-performance backend architectures, robust payment systems, and DeFi trading protocols. Proven track record of contributing to core open-source repositories and pushing the boundaries of cross-chain execution and on-chain liquidity.
          </p>
        </section>

        {/* Stack Section */}
        <section className="flex flex-col items-start">
          <h2 className="text-[13px] sm:text-sm font-medium tracking-wide mb-5 sm:mb-6 opacity-70 uppercase">
            Stack
          </h2>
          <div className="flex flex-wrap gap-5 sm:gap-8 items-center">
            {stack.map((tech) => (
              <div 
                key={tech.name} 
                className="text-[#1A1A19] opacity-80"
                title={tech.name}
              >
                <tech.icon className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
            ))}
          </div>
          </section>
        </div>
        
        {/* Experience Section */}
        <section className="flex flex-col items-start w-full">
          <h2 className="text-[13px] sm:text-sm font-medium tracking-wide mb-6 sm:mb-8 opacity-70 uppercase">
            Experience
          </h2>
          
          <div className="flex flex-col gap-8 sm:gap-10 w-full border-l border-[rgba(26,26,25,0.1)] ml-2 pl-6 sm:pl-8 py-1">
            
            <div className="relative">
              <div className="absolute -left-[28.5px] sm:-left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[#1A1A19] ring-4 ring-[#FBFBFB]" />
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#1A1A19] flex items-center flex-wrap">
                Founder 
                <a href="https://finalzone-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 font-normal ml-1.5 transition-opacity inline-flex items-center gap-1">
                  @finalZone <ExternalLink className="w-3 h-3" />
                </a>
              </h3>
              <div className="text-[13px] opacity-60 mt-0.5">May 2026 - Present</div>
            </div>

            <div className="relative">
              <div className="absolute -left-[28.5px] sm:-left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[rgba(26,26,25,0.2)] ring-4 ring-[#FBFBFB]" />
              <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1A1A19]">Cohort Student <span className="opacity-60 font-normal ml-1">@SolanaTurbin3</span></h3>
              <div className="text-[13px] opacity-60 mt-0.5">March 2026</div>
              <p className="text-[14px] opacity-80 mt-2.5 leading-relaxed pr-4 sm:pr-0">
                Part of builder, advanced SVM, and accel cohorts. Explored Solana's architecture deeply, understanding the runtime, Sealevel parallelization, and low-level mechanics of the chain.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[28.5px] sm:-left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[rgba(26,26,25,0.2)] ring-4 ring-[#FBFBFB]" />
              <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1A1A19]">Freelance Crypto Researcher</h3>
              <div className="text-[13px] opacity-60 mt-0.5">Dec 2025</div>
              <p className="text-[14px] opacity-80 mt-2.5 leading-relaxed pr-4 sm:pr-0">
                Conducted deep-dive research into EVM-based ecosystems. Mapped inbound and outbound bridging architectures, analyzed RPC endpoints, evaluated network limitations, and audited mainnet readiness across emerging chains.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[28.5px] sm:-left-[36.5px] top-1.5 w-2 h-2 rounded-full bg-[rgba(26,26,25,0.2)] ring-4 ring-[#FBFBFB]" />
              <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1A1A19] flex items-center flex-wrap">
                Software Engineer 
                <a href="https://onbord-pouch.vercel.app" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 font-normal ml-1.5 transition-opacity inline-flex items-center gap-1">
                  @onBoardPouch <ExternalLink className="w-3 h-3" />
                </a>
              </h3>
              <div className="text-[13px] opacity-60 mt-0.5">2023 - 2024</div>
              <p className="text-[14px] opacity-80 mt-2.5 leading-relaxed pr-4 sm:pr-0">
                Developed secure Solana smart contracts and built robust, scalable backend systems to handle high-throughput on-chain interactions.
              </p>
            </div>

          </div>
        </section>

        {/* Featured Work Section */}
        <section className="flex flex-col items-start w-full">
          <h2 className="text-[13px] sm:text-sm font-medium tracking-wide mb-5 sm:mb-6 opacity-70 uppercase">
            Featured Work
          </h2>
          
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => setActiveTab("prs")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "prs" 
                ? "bg-[#1A1A19] text-[#FBFBFB]" 
                : "bg-[rgba(26,26,25,0.05)] text-[#1A1A19] hover:bg-[rgba(26,26,25,0.1)]"
              }`}
            >
              Pull requests
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "projects" 
                ? "bg-[#1A1A19] text-[#FBFBFB]" 
                : "bg-[rgba(26,26,25,0.05)] text-[#1A1A19] hover:bg-[rgba(26,26,25,0.1)]"
              }`}
            >
              Projects
            </button>
          </div>

          <div className="w-full">
            <AnimatePresence mode="wait">
              {activeTab === "prs" ? (
                <motion.div
                  key="prs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-3 sm:gap-4 w-full"
                >
                  {pullRequests.map((pr, idx) => (
                    <a 
                      key={idx} 
                      href={pr.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 border border-[rgba(26,26,25,0.1)] rounded-lg hover:border-[rgba(26,26,25,0.3)] transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <GitPullRequest className="w-4 h-4 opacity-50" />
                        <span className="text-[14px] sm:text-[15px] font-medium opacity-90 group-hover:opacity-100">{pr.name}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </a>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-3 sm:gap-4 w-full"
                >
                  {projects.map((proj, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col border border-[rgba(26,26,25,0.1)] rounded-lg overflow-hidden"
                    >
                      <button 
                        onClick={() => setExpandedProject(expandedProject === proj.name ? null : proj.name)}
                        className="flex items-center justify-between p-4 w-full text-left hover:bg-[rgba(26,26,25,0.02)] transition-colors duration-300"
                      >
                        <span className="text-[14px] sm:text-[15px] font-medium opacity-90">{proj.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 opacity-50 transition-transform duration-300 ${expandedProject === proj.name ? "rotate-180" : ""}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedProject === proj.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-[rgba(26,26,25,0.05)]"
                          >
                            <div className="p-4 sm:p-5 bg-[rgba(26,26,25,0.01)] flex flex-col gap-4">
                              {proj.isFlux ? (
                                <div className="w-full flex flex-col gap-4">
                                  <p className="text-[14px] sm:text-[15px] leading-relaxed opacity-80 mb-2">
                                    {proj.description}
                                  </p>
                                  <FluxDiagram />
                                </div>
                              ) : (
                                <p className="text-[14px] sm:text-[15px] leading-relaxed opacity-80">
                                  {proj.description}
                                </p>
                              )}
                              <div className="flex items-center gap-6 mt-2">
                                <a 
                                  href={proj.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity w-fit"
                                >
                                  View Project <ExternalLink className="w-3 h-3" />
                                </a>
                                {proj.github && (
                                  <a 
                                    href={proj.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity w-fit"
                                  >
                                    View Code <Github className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contributions Section */}
        <section className="flex flex-col items-start w-full">
          <h2 className="text-[13px] sm:text-sm font-medium tracking-wide mb-5 sm:mb-6 opacity-70 uppercase">
            Contributions
          </h2>
          <GithubGraph />
        </section>

        {/* Contact Section */}
        <section className="flex flex-col items-start w-full pb-10">
          <h2 className="text-[13px] sm:text-sm font-medium tracking-wide mb-5 sm:mb-6 opacity-70 uppercase">
            Connect
          </h2>
          
          <div className="flex gap-6 sm:gap-8 items-center flex-wrap">
            <a href="mailto:dvansari360@gmail.com" className="text-[#1A1A19] opacity-70 hover:opacity-100 transition-transform hover:scale-110" title="Email">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/danish-ansari-347a06299/" target="_blank" rel="noopener noreferrer" className="text-[#1A1A19] opacity-70 hover:opacity-100 transition-transform hover:scale-110" title="LinkedIn">
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://github.com/dvansari65" target="_blank" rel="noopener noreferrer" className="text-[#1A1A19] opacity-70 hover:opacity-100 transition-transform hover:scale-110" title="GitHub">
              <SiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://x.com/danisshhh_h" target="_blank" rel="noopener noreferrer" className="text-[#1A1A19] opacity-70 hover:opacity-100 transition-transform hover:scale-110" title="X (Twitter)">
              <SiX className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://t.me/danisshhh_h" target="_blank" rel="noopener noreferrer" className="text-[#1A1A19] opacity-70 hover:opacity-100 transition-transform hover:scale-110" title="Telegram">
              <SiTelegram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </section>
        
      </main>
    </div>
  );
}