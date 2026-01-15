"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";
import ShinyText from "./ShinyText";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - fade in and slide up
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Brain container animation - fade in with scale
      gsap.fromTo(
        brainRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
      );

      // Brain floating animation - gentle up and down
      const brainImg = brainRef.current?.querySelector(`.${styles.brain}`);
      if (brainImg) {
        gsap.to(brainImg, {
          y: -15,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.logoContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brain logo pink.png" alt="" className={styles.brainLogo} />
        <span className={styles.logoText}>secondbrain</span>
      </div>
      <div className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.title}>
          Gaels, tap into <span className={styles.highlight}>your</span>
          <br />
          second brain...
        </h1>
      </div>

      <div ref={brainRef} className={styles.brainContainer}>
        <div className={styles.brainGlow} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brain.png"
          alt="Second Brain"
          className={styles.brain}
          draggable={false}
        />
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>scroll to join waitlist</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
