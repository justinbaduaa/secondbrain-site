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
          Gaels, tap into <span className={styles.highlight}>your</span>
          <br />
          second brain...
        </h1>
      </div>

      <div className={styles.brainContainer}>
        <div className={styles.brainGlow} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brain.png" alt="Second Brain" className={styles.brain} />
      </div>

      <div className={styles.bottomContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Visual replacement for QR code in a web context is often the input field itself */}
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
        {/* Optional: Add QR code if user strictly wants it, but usually web LP replaces QR with form. 
             If I strictly duplicate the poster, I'd put a QR code. 
             But "website to look like this" usually means adapt the design. 
             I'll stick to the form for now as it's more useful, but style the button to match the text.
         */}
      </div>
    </section>
  );
}
