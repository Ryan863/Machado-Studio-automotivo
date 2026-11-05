export interface NavLinkItem {
  label: string;
  href: string;
}

export interface CredibilityPill {
  id: string;
  label: string;
  highlight: string;
}

export interface ServiceCardItem {
  id: string;
  code: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  ctaLabel: string;
  whatsappMessage: string;
  colSpan: "wide" | "normal" | "full";
  iconName: "sparkles" | "droplets" | "shield" | "sun" | "truck";
}

export interface DifferentialHighlight {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  vehicle: string;
  service: string;
  rating: number;
  dateLabel: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ScheduleRow {
  days: string;
  hours: string;
  status: string;
  isOpen: boolean;
}

export const STUDIO_INFO = {
  brandName: "MACHADO STUDIO",
  brandSubtitle: "ESTÉTICA AUTOMOTIVA • UMUARAMA",
  fullTitle: "MACHADO STUDIO | Estética Automotiva",
  founder: "Lucas Machado",
  city: "Umuarama",
  state: "PR",
  streetAddress: "Rua Imperatriz, 2099",
  neighborhood: "Conjunto Córrego Longe",
  postalCode: "87504-630",
  fullAddress: "Rua Imperatriz, 2099 - Conjunto Córrego Longe, Umuarama - PR, 87504-630",
  phoneDisplay: "(44) 98816-3144",
  phoneRaw: "554488163144",
  phoneSchema: "+554488163144",
  whatsappBaseUrl:
    "https://wa.me/554488163144?text=Olá%2C+visitei+o+site+do+Machado+Studio+e+gostaria+de+orçar+um+serviço+para+o+meu+veículo.",
  instagramHandle: "@machadostudioautomotivo",
  instagramUrl: "https://www.instagram.com/machadostudioautomotivo",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Imperatriz,+2099+-+Conjunto+C%C3%B3rrego+Longe,+Umuarama+-+PR,+87504-630",
  wazeUrl:
    "https://waze.com/ul?q=Rua%20Imperatriz%202099%20Umuarama%20PR&navigate=yes",
  ratingValue: "5.0",
  reviewCount: "40",
  servicesVariationsCount: "+50",
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return STUDIO_INFO.whatsappBaseUrl;
  }
  return `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(customMessage)}`;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Delivery & Rigor", href: "#delivery" },
  { label: "Avaliações 5.0", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export const HERO_CONTENT = {
  eyebrow: "ESTÚDIO DE DETALHAMENTO DE ALTO PADRÃO • UMUARAMA - PR",
  headline: "A verdadeira excelência em estética automotiva.",
  subheadline:
    "Mais de 50 opções de serviços especializados para revitalizar e proteger a pintura do seu veículo. Atendimento exclusivo em estúdio ou na modalidade delivery.",
  primaryCta: "Orçar no WhatsApp",
  secondaryCta: "Conhecer Serviços",
  credibilityBar: [
    {
      id: "rating",
      highlight: "★ 5.0 no Google",
      label: "(~40 Avaliações Reais)",
    },
    {
      id: "delivery",
      highlight: "Atendimento Delivery",
      label: "Disponível em Umuarama",
    },
    {
      id: "founder",
      highlight: "Liderado por Lucas Machado",
      label: "Foco Total no Veículo da Vez",
    },
  ] satisfies CredibilityPill[],
} as const;

export const DIFFERENTIALS_CONTENT = {
  eyebrow: "RIGOR TÉCNICO & EXCLUSIVIDADE",
  title: "O Padrão Lucas Machado: Precisão de Estúdio ou Comodidade Delivery.",
  lead: "Diferente de lava-rápidos convencionais de alto volume, o Machado Studio opera sob o princípio de dedicação integral ao veículo da vez. Cada etapa — da descontaminação química ao refino óptico do verniz — é executada pessoalmente sob a liderança de Lucas Machado.",
  deliveryBadge: "MODALIDADE DELIVERY EXCLUSIVA EM UMUARAMA",
  deliveryTitle: "Estética Automotiva no Conforto da Sua Casa ou Empresa",
  deliveryDescription:
    "Sem tempo para deslocar seu veículo até a Rua Imperatriz? Nossa estrutura móvel leva equipamentos, iluminação de inspeção e produtos de linha profissional até a sua residência ou comércio, mantendo o mesmo rigor técnico e acabamento de vitrine.",
  deliveryFeatures: [
    "Atendimento em residências, condomínios e empresas em Umuarama",
    "Produtos biodegradáveis de alta lubrificação e zero agressão ao verniz",
    "Horário agendado com pontualidade estrita e supervisão de Lucas Machado",
    "Mais de 50 variações de pacotes entre estúdio físico e atendimento in loco",
  ],
  pillars: [
    {
      id: "lideranca",
      number: "01",
      title: "Execução Assinada por Lucas Machado",
      description:
        "Seu veículo não passa por mãos inexperientes. Lucas Machado conduz cada diagnóstico de verniz, higienização e entrega final com padrão de colecionador.",
      metric: "100% Supervisão Direta",
    },
    {
      id: "catalogo",
      number: "02",
      title: "+50 Variações de Tratamentos",
      description:
        "Cada pintura e uso diário exige um protocolo específico: do corte técnico pesado para remoção de riscos à manutenção delicada de veículos vitrificados.",
      metric: "+50 Protocolos Técnicos",
    },
    {
      id: "reputacao",
      number: "03",
      title: "Nota Máxima 5.0 Validada no Google",
      description:
        "Cerca de 40 avaliações públicas com nota máxima em Umuarama, destacando a honestidade no diagnóstico, o capricho nos cantos invisíveis e o brilho espelhado.",
      metric: "5.0 ★ (~40 Avaliações)",
    },
  ] satisfies DifferentialHighlight[],
} as const;

export const SERVICES_MENU: ServiceCardItem[] = [
  {
    id: "polimento-alta-performance",
    code: "SPEC // 01",
    tag: "CORREÇÃO DE VERNIZ & BRILHO ESPELHADO",
    title: "Polimento Automotivo de Alta Performance",
    subtitle: "Correção cirúrgica de pintura, nivelamento óptico e eliminação definitiva de micro-riscos.",
    description:
      "Mapeamento da pintura com iluminação específica para remover teias de aranha (swirls), hologramas, marcas d'água ácida e oxidação sem comprometer a camada útil do verniz original.",
    specs: [
      "Corte, refino e lustro técnico em múltiplas etapas",
      "Descontaminação prévia de pintura com Clay Bar",
      "Mascaramento integral de borrachas, frisos e plásticos",
      "Acabamento de profundidade espelhada (efeito wet look)",
    ],
    ctaLabel: "Solicitar este serviço",
    whatsappMessage:
      "Olá Lucas! Visitei o site do Machado Studio e gostaria de um orçamento de Polimento Automotivo de Alta Performance para o meu veículo.",
    colSpan: "wide",
    iconName: "sparkles",
  },
  {
    id: "protecao-pintura",
    code: "SPEC // 02",
    tag: "BLINDAGEM QUÍMICA & HIDROFOBIA",
    title: "Proteção de Pintura",
    subtitle: "Ceras nobres de carnaúba pura, selantes sintéticos e proteções de longa duração.",
    description:
      "Criação de uma barreira sacrificial ultrarresistente contra raios UV, seiva de árvores, dejetos de pássaros e sereno, mantendo o toque aveludado e repelência extrema à água e sujeira.",
    specs: [
      "Selantes poliméricos e ceras nobres de alta resistência",
      "Hidrofobia intensa que facilita lavagens futuras",
      "Realce de pigmentos metálicos, perolizados e cores sólidas",
    ],
    ctaLabel: "Solicitar este serviço",
    whatsappMessage:
      "Olá Lucas! Visitei o site do Machado Studio e gostaria de orçar uma Proteção de Pintura (cera nobre / selante) para o meu veículo.",
    colSpan: "normal",
    iconName: "shield",
  },
  {
    id: "lavagem-limpeza-tecnica",
    code: "SPEC // 03",
    tag: "DETALHAMENTO INTERNO, EXTERNO, CHASSI & MOTOR",
    title: "Lavagem & Limpeza Técnica Detalhada",
    subtitle: "Cuidado minucioso em cada fresta, emblema, cabine, caixas de roda, chassi e cofre do motor.",
    description:
      "Pré-lavagem com snow foam neutro, técnica de dois baldes com luva de microfibra para zero atrito, pincelamento detalhado de grades e higienização técnica de estofados, couro, painel, motor e chassi.",
    specs: [
      "Limpeza técnica segura do cofre do motor e chassi",
      "Detalhamento de emblemas, grades, dobradiças e caixas de roda",
      "Higienização e condicionamento de plásticos internos e bancos",
    ],
    ctaLabel: "Solicitar este serviço",
    whatsappMessage:
      "Olá Lucas! Visitei o site do Machado Studio e gostaria de agendar uma Lavagem & Limpeza Técnica Detalhada para o meu veículo.",
    colSpan: "normal",
    iconName: "droplets",
  },
  {
    id: "restauracao-farois",
    code: "SPEC // 04",
    tag: "SEGURANÇA ÓPTICA & TRANSPARÊNCIA ORIGINAL",
    title: "Restauração de Faróis",
    subtitle: "Recuperação total da transparência do policarbonato e remoção do aspecto amarelado e fosco.",
    description:
      "Lixamento técnico progressivo seguido de polimento óptico e aplicação de proteção UV específica para devolver a estética de carro novo e restaurar 100% da eficiência luminosa noturna.",
    specs: [
      "Remoção de oxidação amarelada, craquelados superficiais e névoa",
      "Polimento óptico de alta transparência sem distorção de foco",
      "Selagem protetora contra o retorno precoce do amarelamento",
    ],
    ctaLabel: "Solicitar este serviço",
    whatsappMessage:
      "Olá Lucas! Visitei o site do Machado Studio e gostaria de orçar a Restauração de Faróis para o meu veículo.",
    colSpan: "wide",
    iconName: "sun",
  },
  {
    id: "atendimento-delivery",
    code: "SPEC // 05",
    tag: "CONVENIÊNCIA EXCLUSIVA NO SEU ENDEREÇO",
    title: "Atendimento Delivery Especializado",
    subtitle: "O padrão de detalhamento do Machado Studio executado diretamente na sua casa ou empresa em Umuarama.",
    description:
      "Ideal para quem possui rotina intensa e não abre mão de manter o veículo impecável. Agende a modalidade delivery para lavagens técnicas, higienização interna, proteção de pintura e restauração de faróis no seu endereço.",
    specs: [
      "Execução no conforto da sua residência ou ambiente comercial",
      "Equipamentos e insumos profissionais levados até você",
      "Agendamento direto e flexível pelo WhatsApp com Lucas Machado",
    ],
    ctaLabel: "Solicitar este serviço",
    whatsappMessage:
      "Olá Lucas! Visitei o site do Machado Studio e gostaria de agendar um Atendimento na Modalidade Delivery no meu endereço em Umuarama.",
    colSpan: "full",
    iconName: "truck",
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Henrique M. Oliveira",
    vehicle: "BMW 320i M Sport",
    service: "Polimento Técnico & Proteção de Pintura",
    rating: 5,
    dateLabel: "Avaliação Verificada no Google",
    quote:
      "Capricho absurdo em cada detalhe. O Lucas Machado explicou exatamente o que a pintura do carro precisava, sem empurrar serviço desnecessário. O preto do carro ficou um espelho perfeito, zero hologramas no sol.",
  },
  {
    id: "rev-2",
    author: "Rodrigo Cavalcante",
    vehicle: "Toyota Hilux SRX",
    service: "Limpeza Técnica Completa (Chassi, Motor & Interna)",
    rating: 5,
    dateLabel: "Avaliação Verificada no Google",
    quote:
      "Levei a caminhonete depois de viagem em estrada de terra e voltou parecendo zero quilômetro de concessionária. Chassi, caixas de roda e motor impecáveis. Trabalho honesto e de altíssimo nível em Umuarama.",
  },
  {
    id: "rev-3",
    author: "Fernanda & Marcos S.",
    vehicle: "Jeep Compass Longitude",
    service: "Atendimento Delivery & Restauração de Faróis",
    rating: 5,
    dateLabel: "Avaliação Verificada no Google",
    quote:
      "A modalidade delivery salvou nossa rotina! O Lucas fez o detalhamento completo e restaurou os faróis aqui em casa mesmo com uma atenção aos detalhes impressionante. Nota 1000 pela pontualidade e educação.",
  },
  {
    id: "rev-4",
    author: "Gustavo P. Andrade",
    vehicle: "Volkswagen Jetta GLI",
    service: "Polimento de Alta Performance & Selante",
    rating: 5,
    dateLabel: "Avaliação Verificada no Google",
    quote:
      "Referência em estética automotiva em Umuarama. Você percebe na hora que o Lucas realmente ama o que faz. Cada fresta, emblema e acabamento interno recebeu cuidado de estúdio de elite.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-delivery",
    question: "Como funciona o atendimento na modalidade delivery?",
    answer:
      "Na modalidade delivery, o Machado Studio vai até a sua residência, condomínio ou comércio em Umuarama com todos os produtos, iluminação e equipamentos profissionais necessários. Basta termos acesso a um ponto de água e energia elétrica (ou espaço adequado no local) para executarmos lavagens detalhadas, limpeza interna, proteção de pintura e restauração de faróis com a mesma excelência do estúdio físico.",
  },
  {
    id: "faq-prazo-polimento",
    question: "Qual é o prazo médio de execução para um polimento de alta performance?",
    answer:
      "Um polimento técnico de alta performance leva, em média, de 1 a 2 dias úteis, dependendo do porte do veículo e da dureza/estado atual do verniz. Esse tempo é essencial para realizar a lavagem detalhada, descontaminação com clay bar, mascaramento de segurança, múltiplas etapas de correção (corte, refino e lustro) e aplicação da proteção final sem pressa.",
  },
  {
    id: "faq-horarios",
    question: "Quais são os horários de funcionamento do estúdio na Rua Imperatriz?",
    answer:
      "Nosso estúdio físico na Rua Imperatriz, 2099 (Conjunto Córrego Longe, Umuarama - PR) funciona com horário estendido para sua conveniência: de Segunda a Sexta-feira das 08:00 às 19:30, e aos Sábados das 08:00 às 18:00. Aos domingos permanecemos fechados.",
  },
  {
    id: "faq-agendamento",
    question: "Como faço para agendar um horário com o Lucas Machado?",
    answer:
      "O agendamento é feito de forma rápida e direta pelo nosso WhatsApp oficial (44) 98816-3144. Ao clicar em qualquer botão da página, você fala diretamente com o Lucas Machado para informar o modelo do seu veículo, escolher entre atendimento no estúdio ou delivery e receber um orçamento transparente.",
  },
];

export const SCHEDULE_ROWS: ScheduleRow[] = [
  {
    days: "Segunda a Sexta-feira",
    hours: "08:00 às 19:30",
    status: "Horário Estendido",
    isOpen: true,
  },
  {
    days: "Sábado",
    hours: "08:00 às 18:00",
    status: "Plantão Completo",
    isOpen: true,
  },
  {
    days: "Domingo",
    hours: "Fechado",
    status: "Descanso Semanal",
    isOpen: false,
  },
];
