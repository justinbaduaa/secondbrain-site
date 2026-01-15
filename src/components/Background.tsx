import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.backgroundContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/background_dekstop.png"
        alt=""
        className={`${styles.backgroundImage} ${styles.desktopBg}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/background_phone.png"
        alt=""
        className={`${styles.backgroundImage} ${styles.phoneBg}`}
      />
      <div className={styles.overlay} />
    </div>
  );
}
