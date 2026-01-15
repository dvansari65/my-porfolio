"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import React, { useEffect, useRef } from "react";

export function FloatingBubbles() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pause animations when tab is not visible (saves CPU/GPU)
        const handleVisibilityChange = () => {
            if (containerRef.current) {
                if (document.hidden) {
                    containerRef.current.style.animationPlayState = 'paused';
                    containerRef.current.querySelectorAll('a').forEach(el => {
                        (el as HTMLElement).style.animationPlayState = 'paused';
                    });
                } else {
                    containerRef.current.style.animationPlayState = 'running';
                    containerRef.current.querySelectorAll('a').forEach(el => {
                        (el as HTMLElement).style.animationPlayState = 'running';
                    });
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                /* Use GPU-accelerated transform instead of multiple layers */
                .bubble-glow {
                    position: absolute;
                    inset: 0;
                    border-radius: 9999px;
                    opacity: 0;
                    transition: opacity 0.5s ease-out;
                    will-change: opacity;
                }
                
                .bubble-link:hover .bubble-glow {
                    opacity: 1;
                }
                
                /* Reduce repaints by containing layout changes */
                .bubble-container {
                    contain: layout style paint;
                }
            `}</style>

            <div
                ref={containerRef}
                className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6 z-50 bubble-container py-4 px-2 w-max max-w-full justify-center"
            >
                {/* GitHub Bubble */}
                <a
                    href="https://github.com/dvansari65"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bubble-link group relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 hover:scale-110 transition-transform duration-500 ease-out animate-[float_3s_ease-in-out_infinite] shrink-0"
                    style={{ animationDelay: '0s' }}
                >
                    <Github className="w-4 h-4 md:w-5 md:h-5 text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 relative z-10" />
                    <div
                        className="bubble-glow"
                        style={{
                            boxShadow: '0 0 40px rgba(34,211,238,0.6)',
                            background: 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)'
                        }}
                    ></div>
                </a>

                {/* LinkedIn Bubble */}
                <a
                    href="https://www.linkedin.com/in/danish-ansari-347a06299/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bubble-link group relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-md border border-blue-400/30 hover:scale-110 transition-transform duration-500 ease-out animate-[float_3s_ease-in-out_infinite] shrink-0"
                    style={{ animationDelay: '1s' }}
                >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-blue-300 group-hover:text-blue-100 transition-colors duration-300 relative z-10" />
                    <div
                        className="bubble-glow"
                        style={{
                            boxShadow: '0 0 40px rgba(59,130,246,0.6)',
                            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)'
                        }}
                    ></div>
                </a>

                {/* Twitter Bubble */}
                <a
                    href="https://twitter.com/danishansari65"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bubble-link group relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-md border border-sky-400/30 hover:scale-110 transition-transform duration-500 ease-out animate-[float_3s_ease-in-out_infinite] shrink-0"
                    style={{ animationDelay: '2s' }}
                >
                    <Twitter className="w-4 h-4 md:w-5 md:h-5 text-sky-300 group-hover:text-sky-100 transition-colors duration-300 relative z-10" />
                    <div
                        className="bubble-glow"
                        style={{
                            boxShadow: '0 0 40px rgba(56,189,248,0.6)',
                            background: 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)'
                        }}
                    ></div>
                </a>
            </div>
        </>
    );
}