import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.cloud1} />
      <div className={styles.cloud2} />
      <div className={styles.glow} />
    </div>
  );
}
