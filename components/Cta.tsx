import styles from './Cta.module.css';

export function Cta() {
  return (
    <section className={styles.cta} id="contato" aria-label="Conversar com a equipe">
      <div className="wrap">
        <div className={styles.inner}>
          <div>
            <div className={`eyebrow ${styles.eyebrow}`}>06 / Conversar</div>
            <h2 className={styles.title}>
              Conte o problema.<br />
              Devolvemos uma proposta <span className="em">em até 2 dias úteis</span>.
            </h2>
            <a href="mailto:projetos@vitral.software" className={styles.btn}>
              <span className={styles.dot} aria-hidden="true"></span> Iniciar conversa
            </a>
          </div>

          <aside className={styles.card}>
            <div className={styles.lbl}>Direto com o time</div>
            <a href="mailto:projetos@vitral.software" className={styles.email}>
              projetos@vitral.software
            </a>
            <div className={styles.row}>
              <span>Resposta</span><span>até 2 dias úteis</span>
            </div>
            <div className={styles.row}>
              <span>Status</span><span>aceitando projetos</span>
            </div>
          </aside>
        </div>

        <div className={styles.wordmark} aria-hidden="true">Vitral</div>
      </div>
    </section>
  );
}
