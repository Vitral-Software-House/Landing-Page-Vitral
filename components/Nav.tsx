'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Navegação principal">
      <div className={`wrap ${styles.inner}`}>
        <a href="#" className={styles.logo} aria-label="Vitral — página inicial">
          <span className={styles.mark} aria-hidden="true"></span>
          <span className={styles.name}>Vitral</span>
          <span className={`mono ${styles.tagline}`}>SOFTWARE/HOUSE — EST. 2026</span>
        </a>
        <ul className={styles.menu}>
          <li><a href="#capacidades">Capacidades</a></li>
          <li><a href="#processo">Processo</a></li>
          <li><a href="#time">Time</a></li>
          <li><a href="#stack">Stack</a></li>
        </ul>
        <a href="#contato" className={styles.cta}>
          <span className={styles.dot} aria-hidden="true"></span> Falar com a equipe
        </a>
      </div>
    </nav>
  );
}
