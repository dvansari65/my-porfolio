"use client"
import Image from "next/image";
import { Download, Github, Mail, Phone, MapPin, ExternalLink, Briefcase, Calendar, Code2, Zap } from "lucide-react";
import { FloatingBubbles } from "@/components/FloatingBubbles";
import { ScrollObserver } from "@/components/ScrollObserver";
import { title } from "process";
import Link from "next/link";

export default function Home() {
  const coreSkills = [
    "TypeScript", "Rust", "React", "Next.js", "Anchor", "Solana", "Node.js", "Docker"
  ];

  const projects = [
    {
      title: "RaffleDrop",
      description: "RaffleDrop is a decentralized raffle marketplace where sellers list items and buyers enter with small fees for a chance to win. Once enough players join, Switchboard randomness picks a winner — the seller gets paid, and one lucky buyer gets the product at a fraction of the price.",
      github: "https://github.com/dvansari65/RaffleDrop",
      image: "/assets/raffledrop.png",
      tags: ["Solana", "Anchor", "Next.js"]
    },
    {
      title: "Decentralised Orderbook",
      description: "A modular Solana DEX with an on-chain orderbook, built with Anchor and Next.js, featuring real-time order matching, event queue, and off-chain indexing for high-performance trading.",
      github: "https://github.com/dvansari65/dex_orderbook",
      image: "/assets/dex_orderbook.svg",
      tags: ["Solana", "Anchor", "TypeScript"]
    },
    {
      title: "Indexer",
      description: "A DEX orderbook indexer is a backend service that listens to smart contract events and converts on-chain order and trade data into a structured database. It maintains a real-time orderbook and provides fast APIs for efficient frontend queries.",
      github: "https://github.com/dvansari65/dex_orderbook",
      image: "/assets/indexer.png",
      tags: ["Socket.io", "Typescript", "Prisma"]
    },
    {
      title: "Crashed",
      description: "A modern, real-time crash-style gambling game built on Solana with provably fair gaming mechanics. Time your exit before the multiplier crashes!",
      github: "https://github.com/dvansari65/crashed",
      image: "/assets/crashed.png",
      tags: ["Solana", "Anchor", "Next.js"]
    },
    {
      title: "CancelCourt",
      description: "A playful, on-chain protocol where users anonymously submit cases (trends, behaviors, influencers, brands) for the community to vote on—should it be canceled or redeemed? Built on Solana for Gen Z's love of social commentary, irony, and collective action.",
      github: "https://github.com/dvansari65/cencelcourt",
      image: "",
      tags: ["Solana", "Anchor", "React"]
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

  const experience = [
    {
      role: "Blockchain Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Building decentralized applications on Solana, focusing on DeFi protocols, NFT marketplaces, and on-chain gaming experiences.",
      highlights: ["Smart contract development", "Full-stack dApp architecture", "Protocol design"]
    }
  ];

  return (
    <div className="w-full h-screen p-5">
      <div className="flex flex-col items-center overflow-y gap-5">
        {/* Header Section */}
        <section className="w-full max-w-3xl p-2 flex justify-start">
          <div className="flex items-start gap-4">
            <Image
              className="rounded-[3px] shrink-0"
              src="/assets/luffy.jpg"
              width={80}
              height={80}
              alt="avatar"
            />

            <div className="flex flex-col justify-start min-h-[64px]">
              <span className="text-4xl font-winky animate-fade-up text-secondary">
                Danish Ansari
              </span>

              <div className="h-[32px]">
                <div className="text-primary font-winky text-2xl animate-fade-in-stable">
                  Solana Full Stack Developer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full max-w-3xl animate-fade-up">
          <div className="relative border border-secondary/20 rounded-lg p-6
                bg-gradient-to-br from-secondary/5 to-transparent
                hover:border-accent/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                <Code2 className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-primary mb-3">About</h2>
                <p className="text-secondary/90 leading-relaxed">
                  Full-stack developer specializing in Solana blockchain development. 
                  I build scalable, performant decentralized applications with a focus on 
                  user experience and clean architecture. Passionate about DeFi, on-chain gaming, 
                  and pushing the boundaries of what's possible on Solana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full max-w-3xl animate-fade-up mt-6">
          <div className="mb-8">
            <h2 className="text-3xl font-medium text-primary mb-3 pb-3 border-b border-secondary/30">
              Core Skills
            </h2>
            <p className="text-secondary text-lg">
              Specialized in modern web3 development with expertise across the full stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreSkills.map((skill, index) => (
              <div
                key={skill}
                className="group relative p-4 border border-secondary/20 rounded-lg 
                 bg-gradient-to-br from-secondary/5 to-transparent
                 hover:border-accent/30 hover:from-secondary/10 
                 transition-all duration-300 cursor-pointer
                 hover:shadow-xl hover:shadow-accent/5 
                 hover:scale-[1.02] hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-primary text-xl font-medium mb-1">
                    {skill}
                  </div>
                  <div className="h-1 w-8 bg-accent/50 mx-auto rounded-full 
                       group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full max-w-3xl animate-fade-up mt-8">
          <div className="mb-8">
            <h2 className="text-3xl font-medium text-primary mb-3 pb-3 border-b border-secondary/30">
              Experience
            </h2>
          </div>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="group relative border border-secondary/20 rounded-lg p-6
                  bg-gradient-to-br from-secondary/5 to-transparent
                  hover:border-accent/30 hover:from-secondary/10
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20
                        group-hover:bg-accent/15 transition-colors duration-300">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-medium text-primary group-hover:text-accent 
                             transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-secondary/80 text-sm">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full 
                           bg-secondary/10 border border-secondary/20 text-xs text-secondary">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-secondary/80 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-full
                            bg-accent/10 text-accent border border-accent/20
                            group-hover:bg-accent/15 transition-colors duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full max-w-3xl mt-8">
          <h2 className="text-3xl font-medium text-primary mb-6 pb-3 border-b border-secondary/30">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative border border-secondary/20 rounded-lg overflow-hidden
                bg-gradient-to-br from-secondary/5 to-transparent
                hover:border-accent/30 transition-all duration-300
                hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex flex-col sm:flex-row gap-6 p-5">

                  <div
                    className="
                      relative
                      w-full sm:w-64
                      aspect-[16/10]
                      shrink-0
                      rounded-md
                      border border-secondary/10
                      bg-secondary/5
                      overflow-hidden
                    "
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 256px"
                        className="
                          w-full h-full
                          object-contain
                          group-hover:scale-105
                          transition-transform duration-500
                        "
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-secondary/40 text-sm">
                        No preview
                      </div>
                    )}

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t from-black/20 to-transparent
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-xl font-medium text-primary group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>

                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 p-2 rounded-md border border-secondary/20
                          hover:border-accent/50 hover:bg-accent/5 transition-all"
                        >
                          <Github className="w-4 h-4 text-secondary group-hover:text-accent" />
                        </Link>
                      </div>

                      <p className="text-secondary/80 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full
                          bg-secondary/10 text-secondary
                          border border-secondary/20
                          group-hover:border-accent/30 group-hover:text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent/0 via-accent to-accent/0 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Contributions Section */}
        <section className="w-full max-w-3xl animate-fade-up mt-8">
          <div className="mb-8">
            <h2 className="text-3xl font-medium text-primary mb-3 pb-3 border-b border-secondary/30">
              Open Source Contributions
            </h2>
            <p className="text-secondary text-lg">
              Contributing to the Solana ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {contributions.map((contribution, index) => (
              <div
                key={index}
                className="group relative border border-secondary/20 rounded-lg 
                 bg-gradient-to-br from-secondary/5 to-transparent
                 hover:border-accent/30 hover:from-secondary/10
                 transition-all duration-300
                 hover:shadow-lg hover:shadow-accent/5
                 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-primary group-hover:text-accent 
                         transition-colors duration-300 mb-1">
                      {contribution.title}
                    </h3>
                    <p className="text-secondary/80 text-sm mb-2">
                      {contribution.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs 
                         rounded-full bg-accent/10 text-accent border border-accent/20">
                      <ExternalLink className="w-3 h-3" />
                      {contribution.fix}
                    </span>
                  </div>
                  <Link
                    href={contribution.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 rounded-md border border-secondary/20 
                         hover:border-accent/50 hover:bg-accent/5
                         transition-all duration-200 group/icon"
                    aria-label={`View ${contribution.title} contribution`}
                  >
                    <Github className="w-4 h-4 text-secondary group-hover/icon:text-accent 
                           transition-colors" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full max-w-3xl animate-fade-up mt-8 mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-medium text-primary mb-3 pb-3 border-b border-secondary/30">
              Get In Touch
            </h2>
            <p className="text-secondary text-lg">
              Let's build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="mailto:your.email@example.com"
              className="group relative border border-secondary/20 rounded-lg p-5
                bg-gradient-to-br from-secondary/5 to-transparent
                hover:border-accent/30 hover:from-secondary/10
                transition-all duration-300
                hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20
                      group-hover:bg-accent/15 group-hover:scale-110
                      transition-all duration-300">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-secondary/60 mb-1">Email</div>
                  <div className="text-primary font-medium group-hover:text-accent 
                       transition-colors duration-300">
                    dvansari360@gmail.com
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="https://github.com/dvansari65"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-secondary/20 rounded-lg p-5
                bg-gradient-to-br from-secondary/5 to-transparent
                hover:border-accent/30 hover:from-secondary/10
                transition-all duration-300
                hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20
                      group-hover:bg-accent/15 group-hover:scale-110
                      transition-all duration-300">
                  <Github className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-secondary/60 mb-1">GitHub</div>
                  <div className="text-primary font-medium group-hover:text-accent 
                       transition-colors duration-300">
                    @dvansari65
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-6 p-6 border border-accent/20 rounded-lg 
                bg-gradient-to-br from-accent/5 to-transparent
                relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full 
                  blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative flex items-start gap-3">
              <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-primary font-medium mb-2">Available for Work</h3>
                <p className="text-secondary/80 text-sm leading-relaxed">
                  I'm currently open to freelance projects and full-time opportunities 
                  in the web3 space. Let's discuss how we can work together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}