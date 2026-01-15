import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Twitter
          </a>
          <a href="#" className={styles.link}>
            LinkedIn
          </a>
          <a href="mailto:hello@secondbrain.app" className={styles.link}>
            Contact
          </a>
        </div>
        <p>© {new Date().getFullYear()} SecondBrain. All rights reserved.</p>
      </div>
    </footer>
  );
}
