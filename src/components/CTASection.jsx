import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './CTASection.module.css';

export default function CTASection({ title, description, buttonText = 'Fale Comigo', buttonAction = null }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (buttonAction === 'contact') {
      navigate('/contato');
    } else if (buttonAction === 'whatsapp') {
      window.open('https://wa.me/5511999999999', '_blank');
    } else if (buttonAction) {
      buttonAction();
    }
  };

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <button className={styles.button} onClick={handleClick}>
          <MessageCircle size={20} />
          {buttonText}
        </button>
      </div>
    </section>
  );
}
