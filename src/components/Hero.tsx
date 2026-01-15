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

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("You've been added to the waitlist!");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message);
    }
  };

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
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              className={styles.button}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading"
                ? "joining..."
                : status === "success"
                ? "joined!"
                : "join the waitlist"}
            </button>
          </div>
          {message && (
            <div
              style={{
                marginTop: "1rem",
                color: status === "error" ? "#ff6b6b" : "#4ecdc4",
                fontSize: "0.9rem",
                textAlign: "center",
              }}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
