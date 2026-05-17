import styles from './Processo.module.css';

type Step = {
  num: string;
  title: string;
  desc: string;
  duration: string;
  pricing: string;
  orange?: boolean;
};

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Planejamento',
    desc: 'Imersão técnica e de produto: entendemos o domínio, riscos, integrações existentes e definimos as fases e o que precisa estar de pé no mês um.',
    duration: '1 semana',
    pricing: 'fixo',
  },
  {
    num: '02',
    title: 'Estruturação',
    desc: 'Decisões técnicas registradas em documento — banco, modelo de dados, autenticação, contratos de API e plano de deploy. Domínio e hospedagem ficam por conta do cliente.',
    duration: '1 semana',
    pricing: 'incluso',
  },
  {
    num: '03',
    title: 'Construção',
    desc: 'Sprints de duas semanas com entregas fechadas ao fim de cada ciclo. Cada sprint termina com build, demo e código revisado em conjunto.',
    duration: 'variável',
    pricing: 'por sprint',
    orange: true,
  },
  {
    num: '04',
    title: 'Operação',
    desc: 'Manutenção de código e deploy ficam disponíveis como contrato opcional — o cliente decide se quer suporte contínuo com a Vitral ou gerenciar com time próprio.',
    duration: 'opcional',
    pricing: 'escolha do cliente',
  },
];

export function Processo() {
  return (
    <section className={`section ${styles.process}`} id="processo" aria-label="Processo">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">03 / Processo</div>
          <h2 className="section-title">
            Quatro fases, sem <span className="em">surpresa</span> no orçamento — e sem entregas que envelhecem antes de chegar à produção.
          </h2>
        </div>

        <div className={styles.grid}>
          {STEPS.map((s) => (
            <article key={s.num} className={`${styles.step} ${s.orange ? styles.orange : ''}`}>
              <div className={styles.num}>{s.num}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.meta}>
                <span>{s.duration}</span>
                <span>{s.pricing}</span>
              </div>
            </article>
          ))}
        </div>

        <p className={`mono ${styles.note}`}>
          {'// Todos os projetos começam com um documento técnico assinado em conjunto — escopo, premissas, riscos conhecidos e o que está fora.'}
        </p>
      </div>
    </section>
  );
}
