import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, FloatingWhatsApp } from './components';
import {
  Home,
  About,
  Services,
  ServiceDetail,
  Contact
} from './pages';
import './styles/global.css';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
