import { useParams, Link } from 'react-router-dom';
import { Scale, Briefcase, Heart, FileText, Home, ArrowLeft } from 'lucide-react';
import { CTASection } from '../components';
import styles from './ServiceDetail.module.css';

const serviceData = {
  'litigios-execucoes': {
    title: 'Litígios & Execuções',
    icon: Scale,
    shortDesc: 'Atuação em litígios civis, comerciais, fiscais e consumerista em todas as instâncias.',
    fullDesc: 'Atuamos em litígios civis, comerciais, fiscais e consumerista, sejam de pequena, média ou alta complexidade. Atuamos em todas instâncias e tribunais, com sustentações orais. Nossa atuação é sempre planejada para alcançar objetivos ajustados com o cliente.',
    problems: [
      'Litígios civis e comerciais complexos',
      'Questões fiscais com autoridades',
      'Defesa de direitos do consumidor',
      'Execução de sentenças',
      'Investigação de patrimônio ocultado'
    ],
    solutions: [
      'Planejamento estratégico de defesa',
      'Atuação em todas as instâncias',
      'Sustentações orais em tribunais',
      'Investigações detalhadas de patrimônio',
      'Proximidade contínua com o juízo'
    ],
    process: [
      'Análise completa do caso e documentação',
      'Estratégia personalizada com objetivos claros',
      'Propositura da ação ou defesa',
      'Acompanhamento contínuo do processo',
      'Execução até a sentença final'
    ]
  },
  'societario-contratos': {
    title: 'Societário & Contratos',
    icon: Briefcase,
    shortDesc: 'Assessoria em sociedades, associações, fundações e elaboração de contratos.',
    fullDesc: 'Atuamos com associativismo em todos os aspectos de união de pessoas com objetivos comuns. Sociedades, associações, fundações, cooperativas e consórcios possuem leis próprias e requerem formalizações específicas. Um contrato bem feito evita conflitos.',
    problems: [
      'Formação de sociedades e associações',
      'Conflitos entre sócios',
      'Contratos mal elaborados',
      'Falta de documentação adequada',
      'Restructuração societária'
    ],
    solutions: [
      'Formação correta de pessoas jurídicas',
      'Elaboração de contratos personalizados',
      'Revisão de documentação existente',
      'Mediação de conflitos societários',
      'Restructuração administrativa'
    ],
    process: [
      'Entendimento dos objetivos da associação',
      'Análise da legislação aplicável',
      'Elaboração de documentos adequados',
      'Registro e formalização',
      'Assessoria contínua'
    ]
  },
  'familia-sucessoes': {
    title: 'Família & Sucessões',
    icon: Heart,
    shortDesc: 'Planejamento sucessório, testamentos e litígios familiares com sensibilidade.',
    fullDesc: 'Atuamos em famílias e sucessões de forma preventiva, consensual ou litigiosa. Assessoramos e formalizamos disposições de última vontade por testamento, oferecendo planejamento sucessório. Compreendemos e respeitamos o conflito familiar.',
    problems: [
      'Planejamento de sucessão',
      'Questões hereditárias',
      'Divórcios e partilhas',
      'Conflitos familiares',
      'Definição de guarda e alimentos'
    ],
    solutions: [
      'Planejamento sucessório completo',
      'Elaboração de testamentos',
      'Mediação em acordos familiares',
      'Ações de divórcio e partilha',
      'Acordos sobre guarda e alimentos'
    ],
    process: [
      'Entendimento familiar e necessidades',
      'Planejamento personalizado',
      'Elaboração de documentos',
      'Negociação quando possível',
      'Ação judicial se necessário'
    ]
  },
  'falencias-recuperacoes': {
    title: 'Falências & Recuperações',
    icon: FileText,
    shortDesc: 'Atuação em falências, recuperações de empresas e reestruturações de dívidas.',
    fullDesc: 'Atuamos em falências e recuperações de empresas defendendo credores, devedores e exercendo administração judicial. Realizamos reestruturações de dívidas de forma administrativa, sem intervenção judicial.',
    problems: [
      'Empresas em dificuldade financeira',
      'Dívidas estruturais',
      'Recuperação judicial necessária',
      'Credores desprotegidos',
      'Falência iminente'
    ],
    solutions: [
      'Reestruturação administrativa de dívidas',
      'Recuperação judicial planejada',
      'Administração judicial profissional',
      'Proteção de créditos',
      'Planos de reestruturação com consultoria'
    ],
    process: [
      'Análise financeira completa',
      'Planejamento de recuperação',
      'Negociação com credores',
      'Propositura de recuperação ou falência',
      'Acompanhamento e administração'
    ]
  },
  'imobiliario-leiloes': {
    title: 'Imobiliário & Leilões',
    icon: Home,
    shortDesc: 'Desenvolvimento de empreendimentos, transações imobiliárias e leilões.',
    fullDesc: 'Atuamos no setor imobiliário assessorando clientes no desenvolvimento de empreendimentos, administração, aquisições e alienações de imóveis. Em registro público, promovemos regularizações imobiliárias.',
    problems: [
      'Desenvolvimento de empreendimentos',
      'Transações imobiliárias complexas',
      'Regularização de imóveis',
      'Questões de registro público',
      'Processos de leilão'
    ],
    solutions: [
      'Assessoria completa em empreendimentos',
      'Diligências detalhadas em transações',
      'Regularizações imobiliárias',
      'Contratos imobiliários personalizados',
      'Gestão de leilões'
    ],
    process: [
      'Análise do projeto/transação',
      'Diligências necessárias',
      'Assessoria legal completa',
      'Elaboração de documentos',
      'Finalização e registro'
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1>Serviço não encontrado</h1>
          <Link to="/servicos" className={styles.backLink}>
            <ArrowLeft size={20} />
            Voltar aos serviços
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className={styles.serviceDetail}>
      {/* Voltar */}
      <div className={styles.backNav}>
        <div className={styles.container}>
          <Link to="/servicos" className={styles.backLink}>
            <ArrowLeft size={18} />
            Voltar aos serviços
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroIcon}>
            <IconComponent size={64} />
          </div>
          <h1>{service.title}</h1>
          <p>{service.shortDesc}</p>
        </div>
      </section>

      {/* Descrição Completa */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Visão Geral</h2>
          <p className={styles.fullDescription}>{service.fullDesc}</p>
        </div>
      </section>

      {/* Problemas que resolvemos */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className={styles.container}>
          <h2>Problemas que Resolvemos</h2>
          <div className={styles.problemsList}>
            {service.problems.map((problem, index) => (
              <div key={index} className={styles.problemItem}>
                <div className={styles.problemCheckmark}>✓</div>
                <p>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Nossas Soluções</h2>
          <div className={styles.solutionsList}>
            {service.solutions.map((solution, index) => (
              <div key={index} className={styles.solutionItem}>
                <div className={styles.solutionNumber}>{index + 1}</div>
                <p>{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className={styles.container}>
          <h2>Nosso Processo</h2>
          <div className={styles.processList}>
            {service.process.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Precisando de orientação em ${service.title}?`}
        description="Entre em contato conosco para uma consulta e descubra como podemos ajudá-lo."
        buttonText="Agendar Consulta"
        buttonAction="contact"
      />
    </div>
  );
}
