import styles from './Stack.module.css';

type StackItem = { name: string; v: string };
type Group = { title: string; items: StackItem[] };

const GROUPS: Group[] = [
  {
    title: 'Linguagens / Runtime',
    items: [
      { name: 'TypeScript', v: '5.x' },
      { name: 'Python', v: '3.12' },
      { name: 'Go', v: '1.22' },
      { name: 'Java', v: '21 LTS' },
      { name: 'PHP', v: '8.3' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Next.js', v: 'app router' },
      { name: 'Spring Boot', v: 'backend' },
      { name: 'Angular', v: 'frontend' },
      { name: 'Flutter', v: 'mobile' },
      { name: 'React', v: 'web' },
      { name: 'React Native', v: 'mobile' },
    ],
  },
  {
    title: 'Dados & infra',
    items: [
      { name: 'PostgreSQL', v: '16' },
      { name: 'MongoDB', v: 'documentos' },
      { name: 'MySQL', v: 'relacional' },
      { name: 'Docker', v: 'containers' },
      { name: 'RedPanda', v: 'streaming' },
      { name: 'VPS', v: 'infra' },
    ],
  },
];

export function Stack() {
  return (
    <section className="section" id="stack" aria-label="Stack tecnológica">
      <div className={`wrap ${styles.stack}`}>
        <div>
          <div className={`eyebrow ${styles.eyebrow}`}>05 / Stack</div>
          <h2 className={`section-title ${styles.title}`}>
            Tecnologias <span className="em">estáveis</span>, escolhidas por durabilidade.
          </h2>
          <p className={styles.lede}>
            Não perseguimos hype. Escolhemos ferramentas com comunidade ativa, contratos previsíveis e ciclos de manutenção longos.
          </p>
        </div>

        <div className={styles.groups}>
          {GROUPS.map((g) => (
            <div key={g.title} className={styles.group}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name}>
                    {it.name} <span className={styles.v}>{it.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
