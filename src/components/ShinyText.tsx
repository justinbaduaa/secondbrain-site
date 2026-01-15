"use client";

import styles from "./ShinyText.module.css";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShinyText({
  children,
  className = "",
}: ShinyTextProps) {
  return <span className={`${styles.shinyText} ${className}`}>{children}</span>;
}
