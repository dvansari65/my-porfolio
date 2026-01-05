"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

export function FloatingBubbles() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-50">
            {/* GitHub Bubble */}
            <a
                href="https://github.com/dvansari65"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-500 ease-out before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-cyan-400/10 before:to-transparent before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-[2px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-cyan-400/5 after:to-transparent animate-[float_3s_ease-in-out_infinite]"
                style={{ animationDelay: '0s', willChange: 'transform' }}
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
                style={{ animationDelay: '1s', willChange: 'transform' }}
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
                style={{ animationDelay: '2s', willChange: 'transform' }}
            >
                <Twitter className="w-7 h-7 text-sky-300 group-hover:text-sky-100 transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-md group-hover:bg-sky-400/30 transition-all duration-500"></div>
            </a>
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </div>
    );
}
