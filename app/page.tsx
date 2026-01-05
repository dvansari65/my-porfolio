"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const mainSkills = [
    "TypeScript", "JavaScript", "Rust", "Next.js", "React", "Solana", "Anchor"
  ];
  
  const skills = [
    "Tailwind CSS", "HTML5", "CSS3",
    "Node.js", "Prisma ORM", "PostgreSQL", "MongoDB", "Express.js",
    "Web3.js", "Smart Contracts",
    "Git", "GitHub", "VS Code", "Vercel", "Docker"
  ];

  const projects = [
    {
      title: "RaffleDrop",
      description: "Decentralized voting application built with Solana blockchain using Anchor framework and Next.js for secure and transparent voting system.",
      tech: ["Solana", "Anchor", "Next.js", "TypeScript"],
      github: "https://github.com/dvansari65/voting-dapp"
    },
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
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/dvansari65/ecommerce"
    },
    {
      title: "Real-Time Chat App",
      description: "Modern chat application with real-time messaging, user authentication, and seamless communication features.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/dvansari65/chat-app"
    },
    {
      title: "YouTube Clone",
      description: "Video streaming platform clone with video upload, playback, user subscriptions, and content management features.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/dvansari65/youtube-clone"
    }
  ];

  const contributions = [
    {
      title: "Dyad Protocol",
      description: "Contributed to Dyad Protocol, a 15k+ star open-source repository for decentralized stablecoin infrastructure.",
      tech: ["Solidity", "Smart Contracts", "DeFi"],
      github: "https://github.com/DyadStablecoin/contracts"
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center overflow-auto relative bg-slate-950">
      {/* Left Border Line */}
      <div className="absolute left-[calc(50%-400px)] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
      
      {/* Right Border Line */}
      <div className="absolute right-[calc(50%-400px)] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
      
      {/* Main Content Container */}
      <div className="max-w-3xl w-full flex flex-col items-start px-8 py-8 pb-32">
        <section className="w-full flex justify-start items-center gap-5 py-3">
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
            <h1 className="text-white text-2xl font-light">Danish Ansari</h1>
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
            <h1 className="text-xl font-light text-slate-300">
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
            <h1 className="text-xl font-light text-slate-300 mb-6">
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

            {/* Other Skills */}
            <div>
              <h2 className="text-sm text-gray-400 mb-3 font-light">Other Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-lg text-xs text-slate-200 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-10 w-full fade-in-section">
            <h1 className="text-xl font-light text-slate-300 mb-6">
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
            <h1 className="text-xl font-light text-slate-300 mb-6">
              Experience & Contributions
            </h1>
            <div className="flex flex-col gap-5">
              {contributions.map((contribution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 rounded-lg p-5 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 backdrop-blur-sm fade-in-section"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base text-slate-200 font-medium">{contribution.title}</h3>
                    <a 
                      href={contribution.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                    {contribution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {contribution.tech.map((tech, techIndex) => (
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

      {/* Floating Water Bubble Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-50">
        {/* GitHub Bubble */}
        <a
          href="https://github.com/dvansari65"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-500 ease-out before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-cyan-400/10 before:to-transparent before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-[2px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-cyan-400/5 after:to-transparent animate-[float_3s_ease-in-out_infinite]"
          style={{ animationDelay: '0s' }}
        >
          <Github className="w-7 h-7 text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 relative z-10" />
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-md group-hover:bg-cyan-400/30 transition-all duration-500"></div>
        </a>

        {/* LinkedIn Bubble */}
        <a
          href="https://www.linkedin.com/in/danish-ansari-347a06299/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-md border border-blue-400/30 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500 ease-out before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-blue-400/10 before:to-transparent before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-[2px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-blue-400/5 after:to-transparent animate-[float_3s_ease-in-out_infinite]"
          style={{ animationDelay: '1s' }}
        >
          <Linkedin className="w-7 h-7 text-blue-300 group-hover:text-blue-100 transition-colors duration-300 relative z-10" />
          <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-md group-hover:bg-blue-400/30 transition-all duration-500"></div>
        </a>

        {/* Twitter Bubble */}
        <a
          href="https://twitter.com/danishansari65"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-md border border-sky-400/30 hover:scale-110 hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-500 ease-out before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-sky-400/10 before:to-transparent before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-[2px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-sky-400/5 after:to-transparent animate-[float_3s_ease-in-out_infinite]"
          style={{ animationDelay: '2s' }}
        >
          <Twitter className="w-7 h-7 text-sky-300 group-hover:text-sky-100 transition-colors duration-300 relative z-10" />
          <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-md group-hover:bg-sky-400/30 transition-all duration-500"></div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

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