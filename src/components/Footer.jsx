import { MessageCircle, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Rafael Diovani</h3>
            <p>Advogado especializado em Direito Civil, Trabalhista e Previdenciário.</p>
            <p className={styles.tagline}>Defendendo seus direitos com excelência.</p>
          </div>

          <div className={styles.section}>
            <h4>Contato Rápido</h4>
            <div className={styles.contact}>
              <a href="tel:+5511996990440" className={styles.contactLink}>
                <Phone size={18} />
                <span>(11) 99699-0440</span>
              </a>
              <a href="mailto:contato@rdadvogado.com.br" className={styles.contactLink}>
                <Mail size={18} />
                <span>contato@rdadvogado.com.br</span>
              </a>
              <a href="https://wa.me/5511996990440" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Navegação</h4>
            <div className={styles.links}>
              <a href="/">Início</a>
              <a href="/sobre">Sobre</a>
              <a href="/servicos">Serviços</a>
              <a href="/contato">Contato</a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Rafael Diovani - Advogado. Todos os direitos reservados.</p>
          <p className={styles.disclaimer}>
            Este website é meramente informativo e não constitui aconselhamento jurídico.
          </p>
        </div>
      </div>
    </footer>
  );
}
