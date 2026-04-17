import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon: Icon, title, description, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} className={styles.link}>
          Saiba mais →
        </a>
      )}
    </div>
  );
}
