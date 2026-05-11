import { Fragment } from 'react';
import styles from './Time.module.css';

type NamePart = { text: string; em?: boolean };
type Member = {
  num: string;
  area: string;
  name: NamePart[];
  role: string;
  focus: string;
  stack: string[];
  orange?: boolean;
};

const MEMBERS: Member[] = [
  {
    num: '/01',
    area: 'Engenharia de software',
    name: [{ text: 'Vitor ' }, { text: 'Henrique', em: true }],
    role: 'Engenheiro de software',
    focus: 'Backend & arquitetura',
    stack: ['PHP (Laravel) · TypeScript', 'PostgreSQL · Angular · React'],
    orange: true,
  },
  {
    num: '/02',
    area: 'Engenharia de software',
    name: [{ text: 'Rafael' }],
    role: 'Engenheiro de software',
    focus: 'Web design & frontend',
    stack: ['Angular · TypeScript · Python', 'Spring Boot · MQTT · Kafka'],
  },
  {
    num: '/03',
    area: 'Desenvolvimento mobile',
    name: [{ text: 'Luiz' }],
    role: 'Desenvolvedor mobile',
    focus: 'Integrações & mobile',
    stack: ['Flutter · React', 'Angular · Go'],
    orange: true,
  },
];

export function Time() {
  return (
    <section className="section" id="time" aria-label="Time">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">04 / Time</div>
          <h2 className="section-title">
            Três engenheiros, <span className="em">um time</span> — sem camadas, sem repasses, sem terceirização.
          </h2>
        </div>

        <div className={styles.grid}>
          {MEMBERS.map((m) => (
            <article key={m.num} className={`${styles.member} ${m.orange ? styles.orange : ''}`}>
              <div className={`mono ${styles.num}`}>{m.num} — {m.area}</div>
              <div className={styles.name}>
                {m.name.map((part, i) => (
                  <Fragment key={i}>
                    {part.em ? <span className="em">{part.text}</span> : part.text}
                  </Fragment>
                ))}
              </div>
              <div className={styles.role}>{m.role}</div>
              <ul className={styles.meta}>
                <li><span>Foco</span><span>{m.focus}</span></li>
                <li><span>Stack</span><span>{m.stack[0]}</span></li>
                <li><span>&nbsp;</span><span>{m.stack[1]}</span></li>
              </ul>
            </article>
          ))}
        </div>

        <p className={`mono ${styles.note}`}>
          {'// Vitral é um estúdio recém-fundado em 2026 — o primeiro projeto será operado pelos próprios fundadores, do diagrama ao deploy.'}
        </p>
      </div>
    </section>
  );
}
