import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Scale size={32} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTextMain}>Rafael Diovani</span>
            <span className={styles.logoSubtext}>Advogado</span>
          </div>
        </Link>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className={styles.navLink}>
            Início
          </Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className={styles.navLink}>
            Sobre
          </Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)} className={styles.navLink}>
            Serviços
          </Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className={styles.navLink}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
