import styles from './Team.module.css';

export default function Team() {
  return (
    <div className={styles.team}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Nossa Equipe</h1>
          <p>Conheça o profissional responsável por sua defesa</p>
        </div>
      </section>

      {/* Equipe */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.chessboard}></div>
              </div>
              <h2>Rafael Diovani</h2>
              <p className={styles.role}>Advogado - Direito Civil, Trabalhista e Previdenciário</p>

              <div className={styles.credentials}>
                <h4>Credenciais</h4>
                <ul>
                  <li>OAB/SP - Número XXXXX</li>
                  <li>Graduado em Direito - USP</li>
                  <li>Especialista em Direito do Trabalho - PUC</li>
                  <li>Pós-Graduado em Direito Previdenciário - FGV</li>
                </ul>
              </div>

              <div className={styles.bio}>
                <h4>Sobre</h4>
                <p>
                  Rafael Diovani é um advogado dedicado à excelência profissional e ao sucesso de seus
                  clientes. Com mais de 15 anos de experiência prática, combina conhecimento jurídico
                  profundo com uma abordagem humanizada e acessível.
                </p>
                <p>
                  Especialista em três áreas principais do direito, oferece soluções personalizadas
                  para cada caso, sempre buscando o resultado mais favorável para seus clientes.
                </p>
              </div>

              <div className={styles.specialties}>
                <h4>Especialidades</h4>
                <div className={styles.specialtiesList}>
                  <span className={styles.specialty}>Litígios & Execuções</span>
                  <span className={styles.specialty}>Societário & Contratos</span>
                  <span className={styles.specialty}>Falências & Recuperações</span>
                  <span className={styles.specialty}>Imobiliário & Leilões</span>
                  <span className={styles.specialty}>Família & Sucessões</span>
                </div>
              </div>

              <div className={styles.contact}>
                <h4>Contato</h4>
                <p>
                  <strong>OAB/SP:</strong> 444.241
                </p>
                <p>
                  <strong>Telefone:</strong>{' '}
                  <a href="tel:+5511996990440">(11) 99699-0440</a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contato@rdadvogado.com.br">contato@rdadvogado.com.br</a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/5511996990440" target="_blank" rel="noopener noreferrer">
                    Clique para conversar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que trabalhar conosco */}
      <section className={styles.whyWork}>
        <div className={styles.container}>
          <h2>Por Que Trabalhar Comigo?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>🎓</div>
              <h3>Expertise Profunda</h3>
              <p>
                15+ anos de experiência e formação contínua em jurisprudência e legislação atualizada.
              </p>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>🤝</div>
              <h3>Atendimento Humanizado</h3>
              <p>
                Abordagem acessível que torna o processo jurídico menos intimidador e mais compreensível.
              </p>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>📊</div>
              <h3>Taxas Competitivas</h3>
              <p>
                Consultoria acessível sem comprometer a qualidade do serviço ou resultado esperado.
              </p>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>⚡</div>
              <h3>Agilidade</h3>
              <p>
                Resposta rápida a chamados e ação imediata quando necessário para proteger seus direitos.
              </p>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>🎯</div>
              <h3>Foco em Resultados</h3>
              <p>
                Estratégia personalizada e dedicada para alcançar os melhores resultados em seu caso.
              </p>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>🔒</div>
              <h3>Confidencialidade</h3>
              <p>
                Compromisso total com sigilo profissional e proteção de informações sensíveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
