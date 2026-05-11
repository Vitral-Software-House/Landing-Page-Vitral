import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Rodapé">
      <div className="wrap">
        <div className={styles.inner}>
          <div>
            <div className={styles.brand}>
              <span className={styles.mark} aria-hidden="true"></span>
              <span className={styles.name}>Vitral</span>
            </div>
            <p className={styles.lede}>
              Estúdio de software brasileiro fundado em 2026 por Vitor, Rafael e Luiz.
            </p>
          </div>

          <div className={styles.col}>
            <h3>Capacidades</h3>
            <ul>
              <li><a href="#capacidades">Desenvolvimento</a></li>
              <li><a href="#capacidades">Integrações</a></li>
              <li><a href="#capacidades">Infraestrutura</a></li>
              <li><a href="#capacidades">Manutenção</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Empresa</h3>
            <ul>
              <li><a href="#time">Time</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Contato</h3>
            <ul>
              <li><a href="mailto:vitral.softwarehouse@gmail.com">vitral.softwarehouse@gmail.com</a></li>
              <li><span>Brasil · Remoto</span></li>
              <li><span>Fundada em 2026</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.base}>
          <span>© 2026 Vitral Software</span>
          <span>Estúdio independente</span>
          <span>Política de privacidade · Termos</span>
        </div>
      </div>
    </footer>
  );
}
