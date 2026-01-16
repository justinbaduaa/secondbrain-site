"use client";

import { useState, useEffect } from "react";
import styles from "./ProductSection.module.css";

export default function ProductSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const [isVideoZoomed, setIsVideoZoomed] = useState(false);

  useEffect(() => {
    // Fetch waitlist count
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (data.count !== undefined) {
          setCount(data.count);
        }
      })
      .catch((err) => console.error("Failed to fetch count:", err));
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
      setCount((prev) => (prev ? prev + 1 : 1));
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <div className={styles.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brain logo pink.png" alt="" className={styles.logo} />
              <span className={styles.logoText}>secondbrain</span>
            </div>

            <h2 className={styles.title}>
              Stop worrying about the{" "}
              <span className={styles.highlight}>little things</span>...
            </h2>

            <p className={styles.subtitle}>
              We're four{" "}
              <span className={styles.queens}>Queen's</span> students who
              believe we can work more immersively{" "}
              <strong className={styles.emphasis}>without</strong> letting the
              little stuff pile up.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Enter your email"
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
                    ? "Joining..."
                    : status === "success"
                    ? "Joined Waitlist"
                    : "Join waitlist"}
                </button>
              </div>
              {message && (
                <div
                  style={{
                    marginTop: "0.5rem",
                    color: status === "error" ? "#ef4444" : "#10b981",
                    fontSize: "0.9rem",
                  }}
                >
                  {message}
                </div>
              )}
              {count !== null && (
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "0.5rem",
                  }}
                >
                  Join{" "}
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(count + 100)}{" "}
                  others on the waitlist
                </p>
              )}
            </form>
          </div>

          <div className={styles.rightColumn}>
            <div
              className={styles.videoContainer}
              onClick={() => setIsVideoZoomed(true)}
              style={{ cursor: "pointer" }}
            >
              <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                poster="/background_dekstop.png"
              >
                <source
                  src="/Demo Video for secondbrain.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Video Zoom Modal */}
      {isVideoZoomed && (
        <div
          className={styles.videoModal}
          onClick={() => setIsVideoZoomed(false)}
        >
          <div
            className={styles.videoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsVideoZoomed(false)}
            >
              ×
            </button>
            <video
              className={styles.videoZoomed}
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/Demo Video for secondbrain.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
