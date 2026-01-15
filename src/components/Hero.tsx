"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";
import ShinyText from "./ShinyText";

export default function Hero() {
  const [email, setEmail] = useState("");
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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

      // Form animation - fade in from below
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    alert(`Added ${email} to the waitlist! (Simulation)`);
    setEmail("");
  };

  return (
    <section ref={heroRef} className={styles.hero}>
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
        <img src="/brain.png" alt="Second Brain" className={styles.brain} />
      </div>

      <div ref={formRef} className={styles.bottomContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter your email address..."
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.button}>
              join the waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
