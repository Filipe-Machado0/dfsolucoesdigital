export const serviceCategories = [
  { id: 'todos', label: 'Todos os Serviços' },
  { id: 'web', label: 'Sites & Landing Pages' },
  { id: 'trafego', label: 'Tráfego & Anúncios' },
  { id: 'marketing', label: 'Marketing & Conteúdo' },
];

export const services = [
  {
    id: 'landing-pages',
    category: 'web',
    title: 'Landing Pages de Alta Conversão',
    subtitle: 'Foco em Vendas e Captação de Contatos',
    shortDescription: 'Páginas diretas ao ponto, desenvolvidas estrategicamente para receber anúncios e transformar visitantes em conversas no WhatsApp ou leads qualificados.',
    badge: 'Essencial para Anúncios',
    gradient: 'from-cyan-400 to-blue-500',
    borderGlow: 'group-hover:border-cyan-400/80',
    icon: 'Layers',
    highlights: [
      'Estrutura voltada 100% para conversão',
      'Carregamento ultra-rápido para tráfego pago',
      'Integração direta com WhatsApp e formulários',
      'Design responsivo perfeito em smartphones'
    ],
    details: {
      overview: 'Se você investe em anúncios e manda as pessoas para um site confuso ou lento, você está desperdiçando oportunidades. Nossas Landing Pages são desenhadas com uma narrativa persuasiva clara: capturar a atenção, apresentar sua solução e levar o visitante a agir imediatamente.',
      targetAudience: [
        'Empresas que já anunciam ou querem começar a anunciar no Google ou Meta Ads.',
        'Negócios que precisam de uma página específica para um produto, serviço ou oferta especial.',
        'Profissionais liberais e empresas que precisam de agendamentos e orçamentos rápidos pelo WhatsApp.'
      ],
      deliverables: [
        'Planejamento de Copywriting persuasivo (títulos, benefícios, quebra de objeções e chamadas para ação)',
        'Design visual exclusivo e alinhado à identidade da sua marca (sem templates genéricos pré-fabricados)',
        'Desenvolvimento em tecnologia moderna, otimizado para carregar em menos de 2 segundos',
        'Configuração de tags de rastreamento (Pixel da Meta, Google Tag Manager e Google Analytics 4)',
        'Integração com WhatsApp comercial e botões de contato com mensagem personalizada',
        'Treinamento ou suporte para gerenciamento de contatos recebidos'
      ],
      process: [
        { step: '01. Diagnóstico & Briefing', text: 'Entendemos seu produto, seu público-alvo e qual é o principal objetivo da página.' },
        { step: '02. Estrutura & Redação', text: 'Criamos a narrativa de vendas com textos focados em reter o visitante e gerar desejo.' },
        { step: '03. Design & Programação', text: 'Desenvolvemos a interface visual moderna e codificamos a página com máxima velocidade.' },
        { step: '04. Testes & Publicação', text: 'Testamos formulários, botões no mobile e colocamos no ar integrada com seu domínio.' }
      ],
      commitment: 'Entregamos uma ferramenta profissional, rápida e testada contra as melhores práticas do mercado para que cada centavo investido em tráfego tenha o maior potencial de retorno.'
    },
    whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para o serviço de Criação de Landing Page de Alta Conversão com a DF Digital.'
  },
  {
    id: 'sites-institucionais',
    category: 'web',
    title: 'Sites Institucionais & Corporativos',
    subtitle: 'Autoridade de Marca e Apresentação Completa',
    shortDescription: 'Estrutura digital completa para empresas que buscam credibilidade imediata, apresentação detalhada de serviços e posicionamento sólido no Google.',
    badge: 'Autoridade & Credibilidade',
    gradient: 'from-blue-400 to-cyan-400',
    borderGlow: 'group-hover:border-blue-400/80',
    icon: 'Globe',
    highlights: [
      'Páginas institucionais (Quem Somos, Serviços, Contato)',
      'Estrutura preparada para SEO no Google',
      'Painel intuitivo para você mesmo atualizar textos',
      'Segurança SSL e hospedagem de alta performance'
    ],
    details: {
      overview: 'O site institucional é a sede oficial da sua empresa na internet. É o lugar onde clientes grandes, parceiros e novos compradores entram para verificar se o seu negócio é sério e profissional antes de fechar contrato.',
      targetAudience: [
        'Empresas consolidadas ou em expansão que precisam passar uma imagem sólida e corporativa.',
        'Prestadores de serviços, clínicas, escritórios e indústrias que vendem soluções de ticket médio/alto.',
        'Negócios que querem ser encontrados organicamente no Google quando buscam pelo seu segmento.'
      ],
      deliverables: [
        'Arquitetura completa de páginas: Início, Sobre a Empresa, Catálogo de Serviços, Casos/Portfólio e Contato',
        'Estruturação técnica de SEO (meta tags, títulos, sitemap e indexação no Google Search Console)',
        'Painel administrativo amigável para que sua equipe possa trocar textos, fotos e novidades sem depender de programador',
        'Certificado de segurança SSL ativo e código limpo e seguro',
        'Links para redes sociais, mapa do Google e múltiplos canais de atendimento'
      ],
      process: [
        { step: '01. Mapeamento de Conteúdo', text: 'Definimos a árvore de páginas e tudo o que precisa ser apresentado aos clientes.' },
        { step: '02. Identidade Visual Web', text: 'Desenhamos o protótipo visual alinhado à seriedade e autoridade da sua marca.' },
        { step: '03. Desenvolvimento Responsivo', text: 'Construção da plataforma com compatibilidade em computadores, tablets e smartphones.' },
        { step: '04. Homologação & Entrega', text: 'Revisão final com você, treinamento da plataforma e publicação oficial.' }
      ],
      commitment: 'Garantimos uma entrega com código de padrão profissional, sem lentidão e sem layouts defasados que prejudicam a percepção do seu negócio.'
    },
    whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para Desenvolvimento de Site Institucional com a DF Digital.'
  },
  {
    id: 'gestao-trafego',
    category: 'trafego',
    title: 'Gestão Profissional de Tráfego Pago',
    subtitle: 'Anúncios Estratégicos no Meta Ads e Google Ads',
    shortDescription: 'Criação e gestão técnica de campanhas para colocar sua empresa na frente de clientes que procuram ativamente pelo seu serviço ou produto.',
    badge: 'Mídia Orientada a Dados',
    gradient: 'from-cyan-300 to-sky-500',
    borderGlow: 'group-hover:border-cyan-300/80',
    icon: 'Target',
    highlights: [
      'Campanhas no Google Ads (Rede de Pesquisa & Maps)',
      'Campanhas no Meta Ads (Instagram & Facebook Ads)',
      'Otimização contínua de verba e testes de criativos',
      'Relatórios transparentes direto na sua conta de anúncios'
    ],
    details: {
      overview: 'Tráfego pago é a compra estratégica de atenção qualificada. Cuidamos do direcionamento, da segmentação, dos criativos e da leitura constante dos números para reduzir o custo de contato e atrair o público ideal para sua oferta.',
      targetAudience: [
        'Empresas que já possuem capacidade de atendimento comercial pronta para receber mensagens diárias.',
        'Negócios que dependem de indicações e querem ter um fluxo previsível de novas oportunidades.',
        'Empreendedores que buscam um parceiro estratégico para gerenciar orçamentos com responsabilidade.'
      ],
      deliverables: [
        'Estruturação profissional de Conta de Anúncios e Gerenciador de Negócios (Business Manager)',
        'Pesquisa aprofundada de palavras-chave com alta intenção de compra no Google',
        'Segmentação de públicos no Meta (públicos de interesse, geolocalização e remarketing)',
        'Orientação técnica e briefs para produção de fotos e vídeos que chamam a atenção',
        'Acompanhamento das principais métricas: Custo por Clique (CPC) e Custo por Lead/Contato (CPL)',
        'Reuniões de alinhamento e relatórios periódicos objetivos'
      ],
      process: [
        { step: '01. Auditoria & Alinhamento', text: 'Analisamos o histórico da conta, objetivos da empresa e capacidade de atendimento comercial.' },
        { step: '02. Setup de Rastreamento', text: 'Garantimos que o Pixel e as tags estejam medindo cada clique e envio de mensagem com precisão.' },
        { step: '03. Criação & Veiculação', text: 'Subimos as campanhas com testes controlados de públicos, textos e formatos visuais.' },
        { step: '04. Otimização Contínua', text: 'Ajustamos orçamentos para os canais e anúncios que geram o melhor custo por contato.' }
      ],
      commitment: 'Transparência total: o orçamento de mídia é pago diretamente por você às plataformas (Google/Meta), as contas permanecem no seu nome e nós atuamos na gestão estratégica e técnica.'
    },
    whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para Gestão Profissional de Tráfego Pago (Meta e Google Ads) com a DF Digital.'
  },
  {
    id: 'marketing-conteudo',
    category: 'marketing',
    title: 'Marketing Digital & Posicionamento de Redes',
    subtitle: 'Construção de Autoridade e Relação com Clientes',
    shortDescription: 'Estratégia visual e de conteúdo para redes sociais, transformando o perfil da sua empresa em uma vitrine atraente que gera confiança imediata.',
    badge: 'Branding & Percepção',
    gradient: 'from-sky-400 to-indigo-400',
    borderGlow: 'group-hover:border-sky-400/80',
    icon: 'TrendingUp',
    highlights: [
      'Alinhamento visual da marca no Instagram e LinkedIn',
      'Linha editorial focada nas dores e dúvidas do cliente',
      'Copywriting persuasivo para posts e carrosséis',
      'Bio, destaques e links estratégicos organizados'
    ],
    details: {
      overview: 'Quando um potencial cliente ouve falar da sua empresa ou vê um anúncio, o primeiro passo dele é checar seu perfil. Se encontrar um feed sem posicionamento, a percepção de valor diminui. Criamos um posicionamento que valida a autoridade da sua marca.',
      targetAudience: [
        'Empresas que não têm tempo para planejar posts consistentes e de alta qualidade.',
        'Marcas que querem se posicionar como referência no seu nicho de atuação.',
        'Profissionais que querem educar seu público para facilitar o fechamento de vendas de ticket alto.'
      ],
      deliverables: [
        'Definição da linha editorial com temas que atraem, educam e geram desejo',
        'Criação de design visual padronizado e profissional (carrosséis, estáticos e capas)',
        'Redação de legendas persuasivas com chamadas claras para interação ou contato',
        'Estruturação da Bio do Instagram e organização dos Destaques institucionais',
        'Planejamento de calendário mensal de publicações'
      ],
      process: [
        { step: '01. Diagnóstico de Marca', text: 'Analisamos o perfil atual, concorrentes e o tom de voz ideal para se comunicar com seu cliente.' },
        { step: '02. Planejamento Mensal', text: 'Apresentamos a grade de conteúdos antes da criação visual para validação conjunta.' },
        { step: '03. Criação & Redação', text: 'Desenvolvimento das peças visuais e redação de todos os textos informativos e comerciais.' },
        { step: '04. Análise de Resposta', text: 'Acompanhamos quais temas geraram mais engajamento e interesse real de novos contatos.' }
      ],
      commitment: 'Focamos em conteúdo com propósito comercial e fortalecimento de marca, gerando valor real para o seu público.'
    },
    whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para Marketing Digital e Posicionamento de Redes Sociais com a DF Digital.'
  },
  {
    id: 'otimizacao-manutencao',
    category: 'web',
    title: 'Otimização & Manutenção de Sites Existentes',
    subtitle: 'Velocidade, Segurança e Modernização',
    shortDescription: 'Seu site está lento, desatualizado ou com problemas no celular? Fazemos uma intervenção técnica para deixá-lo rápido, seguro e pronto para converter.',
    badge: 'Performance & Recuperação',
    gradient: 'from-cyan-400 to-sky-300',
    borderGlow: 'group-hover:border-cyan-400/80',
    icon: 'Cpu',
    highlights: [
      'Redução no tempo de carregamento (otimização de imagens e scripts)',
      'Correção de bugs de layout e adaptação mobile',
      'Atualizações de segurança, plugins e certificado SSL',
      'Suporte direto para ajustes pontuais de conteúdo'
    ],
    details: {
      overview: 'Sites construídos há alguns anos frequentemente acumulam lentidão, plugins pesados e falhas visuais em novos modelos de smartphones. Muitas vezes você não precisa de um site novo do zero, e sim de uma engenharia de otimização precisa.',
      targetAudience: [
        'Quem já investiu em um site mas percebeu que ele demora para abrir ou perde visitantes.',
        'Empresas que precisam de um suporte técnico confiável para manter o site no ar e atualizado.',
        'Negócios que querem melhorar a experiência do usuário e a indexação no Google.'
      ],
      deliverables: [
        'Diagnóstico completo de velocidade com ferramentas globais de benchmark',
        'Compressão de ativos, cache inteligente e minificação de arquivos de código',
        'Limpeza de vulnerabilidades, atualização de banco de dados e backup preventivo',
        'Ajustes de responsividade em telas de celulares menores e maiores',
        'Configuração de monitoramento de disponibilidade e suporte contínuo'
      ],
      process: [
        { step: '01. Diagnóstico Técnico', text: 'Avaliamos os gargalos de desempenho e necessidades da estrutura atual.' },
        { step: '02. Backup Preventivo', text: 'Garantimos cópia integral do site antes de qualquer alteração nos arquivos.' },
        { step: '03. Otimização em Ambiente Seguro', text: 'Executamos melhorias de código, compressão e correções pontuais.' },
        { step: '04. Teste Comparativo', text: 'Entregamos o comparativo do antes e depois de velocidade e estabilidade.' }
      ],
      commitment: 'Análise técnica honesta: avaliamos a viabilidade da sua estrutura para indicar a solução com melhor custo-benefício.'
    },
    whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para Otimização e Manutenção do meu site com a DF Digital.'
  }
];

export const workPhilosophy = [
  {
    icon: 'ShieldCheck',
    title: 'Estratégia Sob Medida',
    description: 'Cada negócio tem um público, um ticket médio e um momento específico. Desenhamos planejamentos personalizados para a realidade da sua empresa.'
  },
  {
    icon: 'Eye',
    title: 'Controle Total & Transparência',
    description: 'Suas contas de anúncios, acessos e códigos são 100% da sua empresa. Você acompanha métricas claras, sem relatórios confusos ou promessas irreais.'
  },
  {
    icon: 'Users2',
    title: 'Comunicação Ágil & Direta',
    description: 'Sem burocracias ou intermediários. Você dialoga diretamente com os especialistas que planejam e executam o seu projeto.'
  },
  {
    icon: 'TrendingUp',
    title: 'Buscando Sempre o Melhor Retorno',
    description: 'Acompanhamento de perto e testes contínuos de anúncios e páginas para buscar a máxima eficiência do seu investimento.'
  }
];

export const pillars = [
  {
    icon: 'Zap',
    title: 'Inovação',
    tagline: 'Tecnologia de Vanguarda',
    description: 'Desenvolvimento ágil, código moderno e arquitetura limpa para garantir que sua empresa tenha uma ferramenta estável e veloz.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Compromisso',
    tagline: 'Transparência & Prazos',
    description: 'Parceria de verdade. Comunicação clara, cumprimento rigoroso de prazos acordados e responsabilidade direta dos fundadores.'
  },
  {
    icon: 'Award',
    title: 'Resultados',
    tagline: 'Foco no Seu Modelo de Negócio',
    description: 'Não perseguimos métricas de vaidade. Nossas ações visam gerar novos contatos qualificados e fortalecer a reputação da sua marca.'
  }
];
