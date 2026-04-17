import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { ContactForm } from '../components';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Entre em Contato</h1>
          <p>Estou à disposição para esclarecer suas dúvidas e avaliar seu caso</p>
        </div>
      </section>

      {/* Contato */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Formulário */}
            <div className={styles.formSection}>
              <h2>Envie uma Mensagem</h2>
              <ContactForm />
            </div>

            {/* Informações de Contato */}
            <div className={styles.infoSection}>
              <h2>Informações de Contato</h2>

              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <Phone size={24} />
                </div>
                <h3>Telefone</h3>
                <p>
                  <a href="tel:+5511996990440">(11) 99699-0440</a>
                </p>
                <p className={styles.label}>Segunda a sexta, 9h às 18h</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <Mail size={24} />
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:contato@rdadvogado.com.br">contato@rdadvogado.com.br</a>
                </p>
                <p className={styles.label}>Resposta em até 24 horas</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <MessageCircle size={24} />
                </div>
                <h3>WhatsApp</h3>
                <p>
                  <a href="https://wa.me/5511996990440" target="_blank" rel="noopener noreferrer">
                    Clique para conversar
                  </a>
                </p>
                <p className={styles.label}>Atendimento rápido e prático</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <MapPin size={24} />
                </div>
                <h3>Localização</h3>
                <p>São Paulo, SP</p>
                <p className={styles.label}>Atendimento também online</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className={styles.container}>
          <h2>Perguntas Frequentes</h2>

          <div className={styles.faqGrid}>

            <div className={styles.faqItem}>
              <h4>Como funciona o atendimento online?</h4>
              <p>
                Oferecemos atendimento via videoconferência, email e telefone para sua
                comodidade. Você não precisa sair de casa.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Qual é o prazo do processo?</h4>
              <p>
                O prazo varia conforme a complexidade do caso. Na consulta inicial estimamos
                o tempo necessário para resolver sua questão.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Vocês trabalham com qual tipo de honorários?</h4>
              <p>
                Trabalhamos com honorários por consultoria, procedimento ou resultado,
                conforme melhor se adeque ao seu caso.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>É possível atendimento em finais de semana?</h4>
              <p>
                Em casos urgentes, sim. Podemos agendar atendimento em finais de semana
                mediante prévia combinação.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Qual é o sigilo profissional?</h4>
              <p>
                Mantemos total confidencialidade de todas as informações fornecidas. O sigilo
                profissional é garantido por lei.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
