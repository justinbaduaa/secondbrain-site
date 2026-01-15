import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.backgroundContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/backgroundv2.png" alt="" className={styles.backgroundImage} />
      <div className={styles.overlay} />
    </div>
  );
}
