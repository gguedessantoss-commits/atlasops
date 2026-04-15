import { Card } from "@atlasops/ui";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    href: "#problem",
    label: "Problema",
  },
  {
    href: "#solution",
    label: "Solucao",
  },
  {
    href: "#in-action",
    label: "Na pratica",
  },
  {
    href: "#playbooks",
    label: "Fluxos",
  },
  {
    href: "#capabilities",
    label: "Capacidades",
  },
];

const heroStats = [
  {
    value: "1 centro de comando",
    label: "Operacao centralizada",
    description:
      "Incidentes, saude dos servicos, ownership e pressao de SLA ficam visiveis em uma unica superficie.",
  },
  {
    value: "B2B SaaS",
    label: "Multi-tenant por design",
    description:
      "Pensado para empresas com times distribuidos, multiplos workspaces e necessidade de governanca operacional.",
  },
  {
    value: "Visibilidade em tempo real",
    label: "Pronto para lideranca",
    description:
      "Lideres de operacao conseguem ver o que esta critico agora, quem responde por isso e onde o risco esta crescendo.",
  },
];

const productSignals = [
  "Centraliza incidentes, risco de SLA e saude dos servicos em um unico fluxo",
  "Foi desenhado para logistica, fulfillment, operacoes de suporte e times de plataforma",
  "Combina coordenacao operacional, auditabilidade e visibilidade executiva",
];

const painPoints = [
  {
    title: "O contexto fica espalhado",
    description:
      "Incidentes, alertas, planilhas e conversas vivem em lugares diferentes, entao o time perde tempo tentando montar o que esta acontecendo.",
  },
  {
    title: "A responsabilidade fica nebulosa",
    description:
      "Quando prioridade, severidade e responsabilidade nao estao claras, a resolucao desacelera e as escalacoes viram reacao em vez de coordenacao.",
  },
  {
    title: "A lideranca perde visibilidade",
    description:
      "Executivos e gestores de operacao muitas vezes nao tem uma visao ao vivo do risco de SLA, da postura operacional e do impacto dos incidentes ativos.",
  },
];

const workflow = [
  {
    title: "Detectar e centralizar",
    description:
      "O AtlasOps consolida incidentes operacionais, sinais de saude dos servicos e eventos criticos do negocio em uma unica superficie de comando.",
  },
  {
    title: "Priorizar pelo risco de negocio",
    description:
      "Cada item e ranqueado por severidade, status e tempo restante de SLA para que o time saiba o que precisa andar primeiro.",
  },
  {
    title: "Coordenar a resposta",
    description:
      "Os incidentes ganham owners claros, contexto de timeline e comentarios operacionais para que a resposta seja estruturada, nao improvisada.",
  },
  {
    title: "Auditar e reportar",
    description:
      "A lideranca recebe uma visao operacional compacta enquanto o time mantem uma trilha pesquisavel de acoes e decisoes importantes.",
  },
];

const audiences = [
  {
    title: "Gestores de operacao",
    description:
      "Precisam de uma visao ao vivo dos incidentes, do risco de throughput e da ownership da resposta em times distribuidos.",
    fit: "Melhor encaixe para logistica, fulfillment e operacoes de servico.",
  },
  {
    title: "Liderancas de suporte",
    description:
      "Precisam de escalacoes organizadas por severidade e SLA para que problemas com impacto no cliente nao se percam no ruido dos tickets.",
    fit: "Melhor encaixe para centrais de suporte e operacoes de atendimento.",
  },
  {
    title: "Times de NOC e command center",
    description:
      "Precisam de um quadro operacional compartilhado, com prioridade clara, saude dos sistemas e coordenacao durante incidentes ativos.",
    fit: "Melhor encaixe para confiabilidade e fluxos de comando.",
  },
  {
    title: "Times de plataforma e operacao digital",
    description:
      "Precisam conectar degradacao de servico com impacto no negocio e dar aos stakeholders uma narrativa operacional facil de ler.",
    fit: "Melhor encaixe para SaaS e negocios com alta dependencia de plataforma.",
  },
];

const capabilities = [
  {
    title: "Quadro de comando de incidentes",
    description:
      "Uma fila de incidentes ranqueada por severidade, impacto operacional e tempo restante antes do breach de SLA.",
  },
  {
    title: "Dashboard executivo",
    description:
      "Metricas orientadas para lideranca que transformam ruido operacional em um resumo claro de pressao, saude e risco.",
  },
  {
    title: "Visibilidade de SLA e prioridade",
    description:
      "Os times enxergam rapido o que esta perto de estourar, o que esta contido e onde a pressao de escalacao esta aumentando.",
  },
  {
    title: "Timeline e auditabilidade",
    description:
      "Todo evento importante pode ser registrado na timeline para que o produto apoie governanca, nao apenas monitoramento.",
  },
  {
    title: "Workspaces multi-tenant",
    description:
      "Clientes, regioes ou unidades de negocio diferentes podem operar dentro do proprio contexto controlado de workspace.",
  },
  {
    title: "Arquitetura pronta para automacoes",
    description:
      "A base do produto ja esta pronta para RBAC, Prisma, notificacoes e fluxos com background jobs.",
  },
];

const useCases = [
  "Coordenar interrupcoes de fulfillment ou logistica entre multiplos hubs",
  "Gerenciar escalacoes de suporte de alta prioridade com ownership claro de SLA",
  "Operar um command center para incidentes de plataforma e servicos degradados",
  "Dar a executivos uma visao confiavel, em tempo real, do risco operacional",
];

const demoGallery = [
  {
    eyebrow: "Visao executiva",
    title: "O centro de comando expoe o risco em um unico lugar.",
    description:
      "Lideranca e time operacional conseguem ver pressao aberta, tempo de SLA, postura de servico e contexto dos incidentes sem juntar informacao de varias ferramentas.",
    image: "/images/landing/atlasops-overview.png",
    href: "/dashboard",
    cta: "Abrir overview",
  },
  {
    eyebrow: "Fila de incidentes orientada por alertas",
    title: "Alertas criticos viram fluxos de resposta gerenciados.",
    description:
      "Alertas operacionais de alta severidade podem virar incidentes imediatamente, com owner, impacto no cliente, proxima acao e tempo visivel antes do proximo breach.",
    image: "/images/landing/atlasops-incidents.png",
    href: "/dashboard/incidents",
    cta: "Abrir incidentes",
  },
  {
    eyebrow: "Auditoria e governanca",
    title: "Cada escalacao deixa uma trilha operacional legivel.",
    description:
      "Playbooks, aprovacoes, digests automatizados e mudancas de resposta ficam ligados a uma timeline em que lideranca e operadores podem confiar.",
    image: "/images/landing/atlasops-audit.png",
    href: "/dashboard/audit",
    cta: "Abrir trilha de auditoria",
  },
  {
    eyebrow: "Time de comando e workstreams",
    title: "A plataforma mostra quem esta conduzindo a resposta.",
    description:
      "O AtlasOps nao e so monitoramento. Ele tambem mostra squads, owners, capacidade ativa e workstreams que levam a resposta adiante.",
    image: "/images/landing/atlasops-team.png",
    href: "/dashboard/team",
    cta: "Abrir visao do time",
  },
] as const;

const alertExamples = [
  {
    tone: "critical",
    label: "Alerta critico",
    title: "Atraso de sincronizacao de webhook em retries de parceiro",
    trigger:
      "Disparar quando os retries do parceiro seguirem subindo por 8 minutos e os acknowledgements do estado do pedido cairem abaixo do limite seguro.",
    response:
      "Criar um incidente critico, atribuir o incident commander, notificar a lideranca e anexar uma avaliacao de impacto para a operacao do parceiro.",
  },
  {
    tone: "warning",
    label: "Alerta de atencao",
    title: "Throughput regional caiu abaixo da baseline",
    trigger:
      "Disparar quando um hub regional cair abaixo da curva esperada de throughput matinal ou quando a latencia de roteamento se aproximar do risco de SLA.",
    response:
      "Abrir um incidente em observacao, encaminhar para o controle logistico e criar um workstream para acompanhar a recuperacao contra a baseline.",
  },
  {
    tone: "neutral",
    label: "Digest automatizado",
    title: "Pulso executivo durante resposta ativa",
    trigger:
      "Disparar a cada 30 minutos enquanto um incidente critico estiver aberto ou quando o caminho da resposta mudar de forma relevante.",
    response:
      "Gerar um digest curto com owners dos incidentes, tempo restante de SLA, workstreams atuais e qualquer impacto visivel para o cliente.",
  },
] as const;

const playbookIdeas = [
  {
    title: "Roteamento de incidente critico",
    description:
      "Criar regras que convertam alertas brutos em incidentes com severidade, ownership, contagem regressiva de SLA e proxima acao obrigatoria.",
  },
  {
    title: "Fluxos de aprovacao e comunicacao",
    description:
      "Exigir aprovacao de suporte ou operacao antes que comunicacoes para clientes, status publicos ou ramificacoes de escalacao entrem em vigor.",
  },
  {
    title: "Digests operacionais para lideranca",
    description:
      "Publicar atualizacoes recorrentes que resumem impacto no negocio, ownership da resposta e status dos workstreams sem expor o ruido do chat.",
  },
  {
    title: "Superficies de comando por workspace",
    description:
      "Criar ambientes operacionais separados por cliente, regiao ou unidade de negocio mantendo auditabilidade e ownership do time.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <Link className="brand" href="/">
          AtlasOps
        </Link>

        <nav className="site-nav" aria-label="Secoes do AtlasOps">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Link className="button button--ghost" href="/dashboard">
          Ver demo ao vivo
        </Link>
      </header>

      <section className="landing-hero">
        <div className="landing-hero__content">
          <span className="landing-pill">
            Comando operacional para times distribuidos
          </span>
          <h1>
            Mantenha incidentes, ownership e risco de SLA em uma unica
            superficie de comando.
          </h1>
          <p>
            AtlasOps e um SaaS multi-tenant para empresas que precisam detectar,
            priorizar, coordenar e auditar incidentes operacionais em ambientes
            de logistica, fulfillment, suporte e plataforma.
          </p>

          <div className="hero-checklist">
            <span>Gestao de incidentes</span>
            <span>Visibilidade de servicos</span>
            <span>Coordenacao de SLA</span>
            <span>Trilha de auditoria</span>
          </div>

          <div className="landing-actions">
            <Link className="button button--primary" href="/dashboard">
              Abrir dashboard
            </Link>
            <a className="button button--ghost" href="#solution">
              Entender o produto
            </a>
          </div>
        </div>

        <Card className="landing-preview">
          <span className="landing-preview__eyebrow">Definicao do produto</span>
          <strong>O que o AtlasOps e</strong>
          <p>
            Uma plataforma B2B para command centers e lideres de operacao que
            precisam de um lugar confiavel para gerenciar incidentes e monitorar
            risco de negocio.
          </p>
          <ul>
            {productSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="hero-stat-grid">
        {heroStats.map((stat) => (
          <Card className="hero-stat" key={stat.label}>
            <span className="hero-stat__label">{stat.label}</span>
            <strong className="hero-stat__value">{stat.value}</strong>
            <p>{stat.description}</p>
          </Card>
        ))}
      </section>

      <section className="section-shell" id="problem">
        <div className="section-heading">
          <span className="section-title__eyebrow">O problema</span>
          <h2>
            A operacao quebra quando o contexto critico esta espalhado por
            ferramentas demais.
          </h2>
          <p>
            O AtlasOps existe para times que nao podem operar com fluxos de
            resposta fragmentados. O produto cria uma verdade operacional unica
            sobre o que esta acontecendo, quem responde por isso e quanto risco
            de negocio esta em jogo.
          </p>
        </div>

        <div className="problem-grid">
          {painPoints.map((item, index) => (
            <Card className="problem-card" key={item.title}>
              <span className="problem-card__index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="solution">
        <div className="section-heading">
          <span className="section-title__eyebrow">A solucao</span>
          <h2>
            O AtlasOps entrega um modelo operacional repetivel para resposta a
            incidentes.
          </h2>
          <p>
            Em vez de tratar a operacao como atualizacoes espalhadas de status,
            o AtlasOps transforma a resposta em um fluxo estruturado, visivel
            tanto para o time da linha de frente quanto para a lideranca.
          </p>
        </div>

        <div className="workflow-grid">
          {workflow.map((step, index) => (
            <Card className="workflow-step" key={step.title}>
              <span className="workflow-step__number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="in-action">
        <div className="section-heading">
          <span className="section-title__eyebrow">Na pratica</span>
          <h2>
            Visoes reais do produto deixam o fluxo facil de entender de cara.
          </h2>
          <p>
            Essas telas mostram como o AtlasOps pode apresentar postura
            executiva, incidentes guiados por alertas, historico de auditoria e
            o time de comando por tras da resposta.
          </p>
        </div>

        <div className="demo-gallery">
          {demoGallery.map((item) => (
            <Card className="demo-gallery__card" key={item.title}>
              <div className="demo-gallery__image">
                <Image
                  alt={item.title}
                  className="demo-gallery__image-asset"
                  height={1200}
                  src={item.image}
                  width={1600}
                />
              </div>

              <div className="demo-gallery__content">
                <span className="landing-preview__eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link className="demo-gallery__link" href={item.href}>
                  {item.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="audience">
        <div className="section-heading">
          <span className="section-title__eyebrow">Publico-alvo</span>
          <h2>Construido para times que operam o mundo real sob pressao.</h2>
          <p>
            O AtlasOps nao e um dashboard generico. Ele e posicionado para
            ambientes operacionais em que SLA, estabilidade de servico e
            ownership da resposta afetam diretamente o negocio.
          </p>
        </div>

        <div className="audience-grid">
          {audiences.map((audience) => (
            <Card className="audience-card" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
              <span>{audience.fit}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="playbooks">
        <div className="section-heading">
          <span className="section-title__eyebrow">Fluxos e alertas</span>
          <h2>
            O AtlasOps pode orquestrar mais do que dashboards. Ele pode conduzir
            o proprio modelo operacional.
          </h2>
          <p>
            A plataforma foi desenhada para suportar ingestao de alertas,
            playbooks estruturados, digests automatizados e regras por workspace
            com cara de operacao real.
          </p>
        </div>

        <div className="playbook-layout">
          <Card className="alert-board">
            <span className="landing-preview__eyebrow">
              Exemplos de alertas
            </span>
            <h3>O que o sistema pode detectar e disparar</h3>

            <div className="alert-stack">
              {alertExamples.map((alert) => (
                <article
                  className={`alert-card alert-card--${alert.tone}`}
                  key={alert.title}
                >
                  <span className="alert-card__label">{alert.label}</span>
                  <h4>{alert.title}</h4>
                  <p>
                    <strong>Gatilho:</strong> {alert.trigger}
                  </p>
                  <p>
                    <strong>Resposta:</strong> {alert.response}
                  </p>
                </article>
              ))}
            </div>
          </Card>

          <div className="playbook-grid">
            {playbookIdeas.map((idea) => (
              <Card className="playbook-card" key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="capabilities">
        <div className="section-heading">
          <span className="section-title__eyebrow">Capacidades</span>
          <h2>
            Tudo gira em torno de clareza operacional e execucao controlada.
          </h2>
          <p>
            A superficie do produto foi desenhada para ajudar o time a enxergar,
            decidir, atribuir e comunicar rapidamente sem perder auditabilidade
            nem contexto.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <Card className="capability-card" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell section-shell--split" id="use-cases">
        <div className="section-heading">
          <span className="section-title__eyebrow">Onde ele se encaixa</span>
          <h2>
            O AtlasOps funciona melhor onde as operacoes do negocio sao
            distribuidas e sensiveis ao tempo.
          </h2>
          <p>
            O produto e especialmente crivel em ambientes em que disciplina de
            comando importa mais do que apenas volume de tickets.
          </p>
        </div>

        <div className="use-case-layout">
          <Card className="use-case-card">
            <span className="landing-preview__eyebrow">Cenarios comuns</span>
            <ul className="use-case-list">
              {useCases.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </Card>

          <Card className="cta-section">
            <span className="landing-preview__eyebrow">Demo ao vivo</span>
            <h2>
              Abra o dashboard e veja o produto por dentro de um workspace
              ativo.
            </h2>
            <p>
              A visao de dashboard mostra como o AtlasOps apresenta incidentes,
              saude dos servicos, sinais operacionais e contexto executivo em um
              unico lugar.
            </p>

            <div className="landing-actions">
              <Link className="button button--primary" href="/dashboard">
                Abrir dashboard
              </Link>
              <Link
                className="button button--ghost"
                href="/api/v1/workspace/snapshot"
              >
                Inspecionar API publica do workspace
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
