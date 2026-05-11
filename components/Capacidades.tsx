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
    desc: 'Conectamos ERPs, CRMs, gateways de pagamento e ferramentas internas em uma única camada coerente — versionada e testada.',
    tags: ['REST / GraphQL', 'Webhooks', 'ERP & CRM', 'SAP / Totvs / Salesforce'],
  },
  {
    num: '/03',
    title: 'Deploy & infraestrutura',
    desc: 'Pipelines de CI/CD, infraestrutura como código, observabilidade e ambientes reproduzíveis em nuvem pública ou privada.',
    tags: ['AWS / GCP', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    num: '/04',
    title: 'Automação de processos',
    desc: 'Workflows que substituem planilhas e tarefas manuais por rotinas auditáveis — com humanos no controle, não no caminho.',
    tags: ['RPA', 'ETL', 'Workflows internos', 'LLM tooling'],
    orange: true,
  },
  {
    num: '/05',
    title: 'Manutenção & SRE',
    desc: 'Contratos contínuos de suporte com SLA, monitoramento 24/7, correções prioritárias e roadmap de evolução compartilhado.',
    tags: ['SLA dedicado', 'Observability', 'On-call', 'Pós-incidente'],
  },
  {
    num: '/06',
    title: 'Discovery & arquitetura',
    desc: 'Antes de uma linha de código: mapeamento do domínio, definição de escopo, escolha de tecnologias e estimativas honestas.',
    tags: ['Event storming', 'Domain modeling', 'RFC interno', 'Estimativa por fase'],
  },
];

export function Capacidades() {
  return (
    <section className="section" id="capacidades" aria-label="Capacidades">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">02 / Capacidades</div>
          <h2 className="section-title">
            Um único time responsável pelo <span className="em">ciclo inteiro</span> — da arquitetura ao deploy contínuo.
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
