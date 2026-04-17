import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const whatsappNumber = '5511996990440';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=Olá Rafael! Gostaria de consultar sobre seus serviços jurídicos.`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      title="Conversar no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
