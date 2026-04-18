import { Scale, Briefcase, Heart, Building2, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  HeroSection,
  ServiceCard,
  CTASection,
} from '../components';
import styles from './Home.module.css';

export default function Home() {
  const services = [
    {
      icon: Scale,
      title: 'Litígios & Execuções',
      description: 'Atuação em litígios civis, comerciais, fiscais e consumerista em todas as instâncias.',
      link: '/servicos/litigios-execucoes'
    },
    {
      icon: Briefcase,
      title: 'Societário & Contratos',
      description: 'Assessoria em sociedades, associações, fundações e elaboração de contratos.',
      link: '/servicos/societario-contratos'
    },
    {
      icon: FileText,
      title: 'Falências & Recuperações',
      description: 'Atuação em falências, recuperações de empresas e reestruturações de dívidas.',
      link: '/servicos/falencias-recuperacoes'
    },
    {
      icon: Building2,
      title: 'Imobiliário & Leilões',
      description: 'Desenvolvimento de empreendimentos, transações imobiliárias e leilões.',
      link: '/servicos/imobiliario-leiloes'
    },
    {
      icon: Heart,
      title: 'Família & Sucessões',
      description: 'Planejamento sucessório, testamentos e litígios familiares com sensibilidade.',
      link: '/servicos/familia-sucessoes'
    }
  ];

  return (
    <div className={styles.home}>
      <HeroSection
        title="Boutique Jurídica em São Paulo"
        subtitle="Assessoria estratégica e personalizada para pessoas físicas, jurídicas e organizações civis em seus negócios e conflitos. Atuação nacional com expertise em diversos segmentos da economia."
        cta={{ text: 'Fale Comigo', action: 'contact' }}
      />

      {/* Seção de Áreas de Atuação */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Áreas de Atuação</h2>
          <p className={styles.sectionSubtitle}>
            Soluções jurídicas especializadas para suas necessidades
          </p>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className={styles.viewAllButtonContainer}>
            <Link to="/servicos" className={styles.viewAllButton}>
              <strong>Ver mais sobre os serviços</strong>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2>Sobre</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h3>Boutique Jurídica Especializada</h3>
              <p>
                O escritório Rafael Diovani atua como uma boutique jurídica que assessora pessoas físicas,
                jurídicas e organizações civis em seus negócios e conflitos. Com atuação desde 2016,
                desenvolvemos expertise em diversos segmentos da economia.
              </p>
              <p>
                Nossa filosofia é atuar de forma estratégica e personalizada em todos os assuntos.
                Compreender com detalhes o negócio do cliente ou o problema que o aflige é nosso
                principal objetivo, pois é o que realmente nos move no nosso trabalho.
              </p>
            </div>
            <div className={styles.aboutHighlights}>
              <h3>Nossa Proposta</h3>
              <ul>
                <li>✓ Assessoria em matérias específicas do direito</li>
                <li>✓ Conhecimento amplo da ciência jurídica</li>
                <li>✓ Entendimento do seu negócio</li>
                <li>✓ Atuação estratégica e personalizada</li>
                <li>✓ Atuação nacional com ênfase em São Paulo</li>
                <li>✓ Proximidade com o cliente sempre</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Pronto para resolver sua questão jurídica?"
        description="Entre em contato agora mesmo. Agendar uma consulta é o primeiro passo para encontrar a solução que você precisa."
        buttonText="Agendar Consulta"
        buttonAction="contact"
      />
    </div>
  );
}
