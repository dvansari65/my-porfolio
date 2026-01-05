"use client";

import { useEffect, useRef } from "react";

export function ScrollObserver() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Only run on client side
        if (typeof window === "undefined") return;

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

    return null;
}
