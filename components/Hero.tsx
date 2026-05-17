import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero} aria-label="Apresentação Vitral">
      <div className="wrap">
        <div className={`mono ${styles.meta}`}>
          <span>[01] — Software sob medida</span>
          <span>Brasil / Remoto</span>
          <span>3 fundadores · time enxuto</span>
          <span className={styles.metaRight}>Fundada em 2026</span>
        </div>

        <h1 className={styles.title}>
          Sistemas <span className="em">completos</span>,<br />
          construídos como <span className={styles.accent}>infraestrutura</span><br />
          — não como entregas.
        </h1>

        <p className={`mono ${styles.kicker}`}>
          → Estúdio recém-fundado · primeiros projetos abertos para 2026
        </p>

        <div className={styles.foot}>
          <p className={styles.lede}>
            Projetamos, desenvolvemos, integramos e mantemos plataformas digitais para empresas que tratam software como núcleo do negócio. Do primeiro diagrama ao deploy em produção.
          </p>

          <div className={`${styles.stat} ${styles.statOrange}`}>
            <div className={styles.statNumber}>2026</div>
            <div className={styles.label}>primeiro ano · agenda aberta</div>
          </div>

          <div className={styles.ctas}>
            <a href="#contato" className="btn btn-primary">
              Começar um projeto <span className="arrow" aria-hidden="true"></span>
            </a>
            <a href="#time" className="btn btn-ghost">
              Conhecer o time
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
