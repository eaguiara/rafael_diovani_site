import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';
import naturezaImg from '../assets/natureza.png';

export default function HeroSection({ title, subtitle, cta, image = null }) {
  const navigate = useNavigate();

  const handleCTA = () => {
    if (cta?.action === 'contact') {
      navigate('/contato');
    } else if (cta?.action === 'whatsapp') {
      window.open('https://wa.me/5511999999999', '_blank');
    }
  };

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${naturezaImg})` }}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {cta && (
            <button className={styles.button} onClick={handleCTA}>
              <MessageCircle size={20} />
              {cta.text || 'Fale Comigo'}
            </button>
          )}
        </div>
        {image && (
          <div className={styles.imageContainer}>
            <img src={image} alt="Hero" />
          </div>
        )}
      </div>
    </section>
  );
}
