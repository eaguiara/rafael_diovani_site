import { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to a backend
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Descreva seu caso ou dúvida jurídica..."
          rows="6"
          required
        ></textarea>
      </div>

      <button type="submit" className={styles.button} disabled={submitted}>
        <Send size={18} />
        {submitted ? 'Mensagem enviada!' : 'Enviar Mensagem'}
      </button>

      {submitted && (
        <p className={styles.successMessage}>
          Obrigado! Sua mensagem foi recebida. Entraremos em contato em breve.
        </p>
      )}
    </form>
  );
}
