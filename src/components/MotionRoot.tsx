"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface MotionRootProps {
  children: React.ReactNode;
}

export default function MotionRoot({ children }: MotionRootProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set("[data-hero-item], [data-reveal], [data-reveal-card]", {
          opacity: 1,
          y: 0,
          clearProps: "transform",
        });
        return;
      }

      // Hero entrance sequence
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
      if (heroItems.length > 0) {
        gsap.from(heroItems, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      // Section headers & individual blocks reveal
      const revealBlocks = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealBlocks.forEach((block) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 88%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          clearProps: "transform",
        });
      });

      // Staggered card grids
      const cardGroups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]");
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll<HTMLElement>("[data-reveal-card]");
        if (cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
            y: 28,
            opacity: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          });
        }
      });
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="relative min-h-screen flex flex-col">
      {children}
    </div>
  );
}
