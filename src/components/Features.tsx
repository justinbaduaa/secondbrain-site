import styles from "./Features.module.css";

export default function Features() {
  const features = [
    {
      title: "Instant Reminder",
      text: "Remind me to call Mom at 5pm",
      icon: "🔔",
      type: "reminderIcon",
    },
    {
      title: "Calendar Event",
      text: "Dinner with Sarah tomorrow at 7",
      icon: "📅",
      type: "calendarIcon",
    },
    {
      title: "Quick Note",
      text: "Idea: Voice controlled coffee machine",
      icon: "📝",
      type: "noteIcon",
    },
    {
      title: "Draft Email",
      text: "Email John about the project update",
      icon: "✉️",
      type: "emailIcon",
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>One thought, executed instantly.</h2>
        <p className={styles.description}>
          No context switching. No navigating menus. SecondBrain turns your
          voice into clean, actionable cards waiting for your approval.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles[feature.type]}`}>
              {feature.icon}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.text}</p>

              <div className={styles.actions}>
                <span className={`${styles.actionBtn} ${styles.approve}`}>
                  Approve
                </span>
                <span className={styles.actionBtn}>Edit</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
