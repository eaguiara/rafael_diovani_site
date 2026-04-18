import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Sobre Rafael Diovani</h1>
          <p>Profissional dedicado à excelência no exercício do direito</p>
        </div>
      </section>

      {/* História Profissional */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>História Profissional</h2>
          <div className={styles.content}>
            <p>
              Rafael Diovani é um advogado com atuação no mercado jurídico desde 2016, acumulando
              sólida experiência em diversos segmentos econômicos. Com histórico em direito imobiliário,
              agronegócio, mercado financeiro, industrial e comércio de bens e serviços.
            </p>
            <p>
              Oferece assessoria jurídica a empresários e empresas em diversos setores da economia.
              Também atua em casos de cunho pessoal e decorrentes da vida cotidiana, especialmente
              em litígios de consumo e no contexto familiar e sucessório.
            </p>
            <p>
              Inaugurou seu escritório após adquirir experiência em outras firmas de advocacia,
              permitindo extrair o melhor para desenvolver habilidades jurídicas, de mercado e vivência
              sobre a dinâmica de mercados e litígios diversos que se repetem cotidianamente com vários indivíduos.
            </p>
          </div>
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Formação Acadêmica</h2>
          <div className={styles.formationGrid}>
            <div className={styles.formationCard}>
              <h3>Graduação em Direito</h3>
              <p className={styles.institution}>Universidade Salesiana de Lorena - SP</p>
              <p className={styles.year}>Formação completa</p>
              <p>Formação jurídica sólida com visão ampla das ciências jurídicas.</p>
            </div>
            <div className={styles.formationCard}>
              <h3>Pós-Graduação em Direito Falimentar</h3>
              <p className={styles.institution}>Pontifícia Universidade Católica - PR</p>
              <p className={styles.year}>Especialização</p>
              <p>Expertise em falências, recuperações e reestruturações de dívidas.</p>
            </div>
            <div className={styles.formationCard}>
              <h3>Pós-Graduação em Direito Societário</h3>
              <p className={styles.institution}>IBMEC - SP</p>
              <p className={styles.year}>Cursando</p>
              <p>Aprimoramento em sociedades, associações e contratos complexos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className={styles.container}>
          <h2>Áreas de Especialização</h2>
          <div className={styles.specialties}>
            <div className={styles.specialty}>
              <h3>Litígios & Execuções</h3>
              <ul>
                <li>Litígios civis, comerciais e fiscais</li>
                <li>Ações consumeristas</li>
                <li>Execuções e investigação de patrimônio</li>
                <li>Atuação em todas as instâncias</li>
              </ul>
            </div>
            <div className={styles.specialty}>
              <h3>Societário & Contratos</h3>
              <ul>
                <li>Associativismo e formação de sociedades</li>
                <li>Associações, fundações e cooperativas</li>
                <li>Elaboração e revisão de contratos</li>
                <li>Estruturação de empreendimentos</li>
              </ul>
            </div>
            <div className={styles.specialty}>
              <h3>Falências & Recuperações</h3>
              <ul>
                <li>Falências e recuperações de empresas</li>
                <li>Administração judicial</li>
                <li>Reestruturação de dívidas</li>
                <li>Defesa de credores e devedores</li>
              </ul>
            </div>
            <div className={styles.specialty}>
              <h3>Imobiliário & Leilões</h3>
              <ul>
                <li>Desenvolvimento de empreendimentos</li>
                <li>Aquisição e alienação de imóveis</li>
                <li>Registro público e regularizações</li>
                <li>Leilões extrajudiciais</li>
              </ul>
            </div>
            <div className={styles.specialty}>
              <h3>Família & Sucessões</h3>
              <ul>
                <li>Planejamento sucessório e testamentos</li>
                <li>Divórcios e partilhas</li>
                <li>Guarda e alimentos</li>
                <li>Atuação preventiva e consensual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Nossa Filosofia de Atuação</h2>
          <div className={styles.differentials}>
            <div className={styles.differential}>
              <div className={styles.differentialNumber}>1</div>
              <h3>Atuação Estratégica</h3>
              <p>Planejamento cuidadoso de cada ação jurídica para alcançar objetivos ajustados com o cliente.</p>
            </div>
            <div className={styles.differential}>
              <div className={styles.differentialNumber}>2</div>
              <h3>Entendimento do Negócio</h3>
              <p>Conhecimento amplo sobre o segmento econômico para melhor atender suas necessidades.</p>
            </div>
            <div className={styles.differential}>
              <div className={styles.differentialNumber}>3</div>
              <h3>Personalização</h3>
              <p>Cada caso é único e merece atenção e estratégia específicas e customizadas.</p>
            </div>
            <div className={styles.differential}>
              <div className={styles.differentialNumber}>4</div>
              <h3>Assessoria Completa</h3>
              <p>Matérias específicas do direito com visão ampla da complexa ciência jurídica.</p>
            </div>
            <div className={styles.differential}>
              <div className={styles.differentialNumber}>5</div>
              <h3>Atuação Nacional</h3>
              <p>Com ênfase em São Paulo, atuamos em casos de abrangência nacional.</p>
            </div>
            <div className={styles.differential}>
              <div className={styles.differentialNumber}>6</div>
              <h3>Proximidade com o Cliente</h3>
              <p>Comunicação contínua, despachos acompanhados e transparência total no processo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
