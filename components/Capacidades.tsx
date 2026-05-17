import styles from './Capacidades.module.css';

type Capacidade = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  orange?: boolean;
};

const ITEMS: Capacidade[] = [
  {
    num: '/01',
    title: 'Desenvolvimento de produto',
    desc: 'Sistemas web e mobile construídos do zero, com arquitetura pensada para evoluir por anos sem virar legado.',
    tags: ['Web apps', 'iOS / Android', 'SaaS multi-tenant', 'Painéis internos'],
    orange: true,
  },
  {
    num: '/02',
    title: 'Integração de APIs & sistemas',
    desc: 'Conectamos serviços externos, gateways de pagamento e ferramentas internas em uma única camada coerente — versionada e testada.',
    tags: ['REST / GraphQL', 'Webhooks', 'Gateways de pagamento', 'APIs de terceiros'],
  },
  {
    num: '/03',
    title: 'Deploy & infraestrutura',
    desc: 'Pipelines de CI/CD, infraestrutura como código, observabilidade e ambientes reproduzíveis em nuvem pública ou privada.',
    tags: ['AWS', 'Docker', 'VPS', 'GitHub Actions'],
  },
  {
    num: '/04',
    title: 'Manutenção',
    desc: 'Contratos contínuos de suporte com SLA — correções prioritárias, atualizações de dependências e roadmap de evolução compartilhado.',
    tags: ['SLA dedicado', 'Correções', 'Deploy contínuo', 'Roadmap'],
  },
  {
    num: '/05',
    title: 'Planejamento & fases',
    desc: 'Antes de uma linha de código: definição de escopo, divisão em fases de entrega, escolha de tecnologias e estimativas honestas.',
    tags: ['Escopo definido', 'Fases de entrega', 'Escolha de stack', 'Estimativa por fase'],
  },
];

export function Capacidades() {
  return (
    <section className="section" id="capacidades" aria-label="Capacidades">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">02 / Capacidades</div>
          <h2 className="section-title">
            Um único time responsável pelo <span className="em">ciclo inteiro</span> — do planejamento ao deploy contínuo.
          </h2>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((c) => (
            <article
              key={c.num}
              className={`${styles.cap} ${c.orange ? styles.orange : ''}`}
            >
              <div className={styles.num}>{c.num}</div>
              <div>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>
                <div className={styles.tags}>
                  {c.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
