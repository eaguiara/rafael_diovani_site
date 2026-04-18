import { Star } from 'lucide-react';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ text, author, role }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={styles.star} />
        ))}
      </div>
      <p className={styles.text}>"{text}"</p>
      <p className={styles.author}>{author}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
