"use client";

import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    // Add logic to send email to backend or API
    alert(`Added ${email} to the waitlist! (Simulation)`);
    setEmail("");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Your Second Brain,
          <br />
          Just a Thought Away.
        </h1>
        <p className={styles.subtitle}>
          Automate the small tasks that usually break your flow—like setting
          reminders, sending drafts, or saving notes—just by using your voice.
        </p>

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
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
