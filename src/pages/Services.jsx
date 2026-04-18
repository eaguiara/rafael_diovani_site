import { Link } from 'react-router-dom';
import { Scale, Briefcase, Heart, Home, Users, FileText } from 'lucide-react';
import { ServiceCard } from '../components';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      id: 'litigios-execucoes',
      icon: Scale,
      title: 'Litígios & Execuções',
      description: 'Atuação em litígios civis, comerciais, fiscais e consumerista em todas as instâncias.',
      shortDescription: 'Defesa e execução em diversos tipos de litígios'
    },
    {
      id: 'societario-contratos',
      icon: Briefcase,
      title: 'Societário & Contratos',
      description: 'Assessoria em sociedades, associações, fundações e elaboração de contratos.',
      shortDescription: 'Estruturação de negócios e documentação jurídica'
    },
    {
      id: 'falencias-recuperacoes',
      icon: FileText,
      title: 'Falências & Recuperações',
      description: 'Atuação em falências, recuperações de empresas e reestruturações de dívidas.',
      shortDescription: 'Proteção de créditos e administração judicial'
    },
    {
      id: 'familia-sucessoes',
      icon: Heart,
      title: 'Família & Sucessões',
      description: 'Planejamento sucessório, testamentos e litígios familiares com sensibilidade.',
      shortDescription: 'Solução em questões familiares e hereditárias'
    },
    {
      id: 'imobiliario-leiloes',
      icon: Home,
      title: 'Imobiliário & Leilões',
      description: 'Desenvolvimento de empreendimentos, transações imobiliárias e leilões.',
      shortDescription: 'Soluções para o setor imobiliário'
    }
  ];

  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Áreas de Atuação</h1>
          <p>Conheça nossas áreas de atuação e serviços especializados.</p>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <Link key={service.id} to={`/servicos/${service.id}`} className={styles.serviceLink}>
                <ServiceCard {...service} link={`/servicos/${service.id}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Por que contratar */}
      <section className={styles.whyHire}>
        <div className={styles.container}>
          <h2>Por Que Contratar Nossos Serviços?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>📋</div>
              <h3>Análise Completa</h3>
              <p>Análise aprofundada de seu caso para definir a melhor estratégia jurídica.</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>💼</div>
              <h3>Experiência Profunda</h3>
              <p>15+ anos de prática e 1000+ casos resolvidos com sucesso.</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3>Foco em Resultados</h3>
              <p>Objetivo claro: alcançar os melhores resultados para você.</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🤝</div>
              <h3>Comunicação Clara</h3>
              <p>Atualizações constantes e transparência total sobre seu processo.</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>⏱️</div>
              <h3>Agilidade</h3>
              <p>Respostas rápidas e ação imediata quando necessário.</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🔒</div>
              <h3>Sigilo Profissional</h3>
              <p>Confidencialidade total protegida pelo sigilo profissional do advogado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Pronto para começar?</h2>
          <p>Entre em contato agora mesmo para uma consulta inicial sem compromisso.</p>
          <a href="/contato" className={styles.ctaButton}>
            Solicitar Consulta
          </a>
        </div>
      </section>
    </div>
  );
}
