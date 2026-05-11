export type ServiceCategory =
  | "prevencao"
  | "estetica"
  | "reabilitacao"
  | "urgencia";

export type ServiceIcon =
  | "clipboard"
  | "sparkles"
  | "sun"
  | "shield"
  | "smile"
  | "alert";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  image: string;
  intro: string;
  whenIndicated: readonly string[];
  evaluation: readonly string[];
  benefits: readonly string[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  whatsappMessage: string;
  icon: ServiceIcon;
};

export const clinicConfig = {
  name: "Clínica Aurora Odontologia",
  logoInitials: "AO",
  tagline: "Odontologia cuidadosa para sua rotina",
  city: "São Paulo",
  state: "SP",
  address: "Rua Exemplo, 123 - Sala 45, Centro",
  phoneDisplay: "(11) 99999-9999",
  whatsappNumber: "5511999999999",
  websiteUrl: "https://www.clinicaaurora.com.br",
  instagram: "https://www.instagram.com/clinicaaurora",
  instagramHandle: "@clinicaaurora",
  email: "contato@clinicaaurora.com.br",
  businessHours: [
    "Segunda a sexta, 8h às 18h",
    "Sábado, 8h às 12h, com horários limitados"
  ],
  responsible: "Dra. Mariana Almeida",
  cro: "CRO-SP 00000",
  professionalDocuments: [
    {
      label: "Responsável técnico",
      value: "Dra. Mariana Almeida"
    },
    {
      label: "Registro profissional",
      value: "CRO-SP 00000"
    },
    {
      label: "Razão social",
      value: "Clínica Aurora Odontologia Ltda."
    }
  ],
  ethicalNotice:
    "Informações institucionais. Condutas, valores e prazos dependem de avaliação clínica individual, sem promessa de resultado garantido.",
  googleMapsUrl: "https://www.google.com/maps",
  mapsEmbedUrl: "",
  locationReferences: [
    "Próximo à estação Centro",
    "Estacionamentos conveniados na região",
    "Acesso por elevador no edifício comercial"
  ],
  defaultWhatsappMessage:
    "Olá, vim pelo site e gostaria de agendar uma consulta na Clínica Aurora Odontologia.",
  brand: {
    navy: "#0B1F3A",
    navySoft: "#153A5B",
    gold: "#C49A57",
    goldSoft: "#F4E8D2",
    offWhite: "#F7F9FC"
  },
  navigation: [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Agendamento", href: "/agendamento" },
    { label: "Contato", href: "/contato" }
  ],
  hero: {
    title: "Clínica odontológica em São Paulo com atendimento próximo e planejamento claro",
    subtitle:
      "Cuidado preventivo, estético e reabilitador em uma clínica compacta, organizada e focada em decisões bem explicadas.",
    imageSrc:
      "https://images.pexels.com/photos/5355903/pexels-photo-5355903.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt:
      "Equipe odontológica atendendo uma paciente em consultório moderno"
  },
  images: {
    hero:
      "https://images.pexels.com/photos/5355903/pexels-photo-5355903.jpeg?auto=compress&cs=tinysrgb&w=1600",
    clinic:
      "https://images.pexels.com/photos/6812534/pexels-photo-6812534.jpeg?auto=compress&cs=tinysrgb&w=1400",
    consultation:
      "https://images.pexels.com/photos/7803051/pexels-photo-7803051.jpeg?auto=compress&cs=tinysrgb&w=1400",
    treatment:
      "https://images.pexels.com/photos/6627363/pexels-photo-6627363.jpeg?auto=compress&cs=tinysrgb&w=1400"
  },
  stats: [
    {
      value: "CRO",
      label: "registro profissional editável"
    },
    {
      value: "8h-18h",
      label: "horário comercial"
    },
    {
      value: "Centro",
      label: "localização editável"
    },
    {
      value: "WhatsApp",
      label: "agendamento direto"
    }
  ],
  about: {
    story:
      "A Clínica Aurora Odontologia nasceu para atender pacientes que procuram uma experiência mais direta, discreta e bem acompanhada. A agenda é organizada para permitir escuta, avaliação cuidadosa e orientação objetiva antes de qualquer plano de tratamento.",
    structure:
      "O espaço foi pensado para consultas de rotina, planejamento clínico e procedimentos odontológicos com privacidade, biossegurança e fluxos simples.",
    humanCare:
      "A comunicação evita excesso de termos técnicos e prioriza explicar condutas, etapas, prazos e limites de cada caso com clareza.",
    ethics:
      "A clínica não trabalha com promessas de resultado, imagens de antes e depois ou indicação sem avaliação. Cada orientação depende de exame clínico e histórico individual."
  },
  trustItems: [
    {
      title: "Conduta explicada",
      description:
        "O paciente entende prioridades, alternativas e próximos passos antes de decidir."
    },
    {
      title: "Agenda responsável",
      description:
        "Horários organizados para reduzir pressa e manter previsibilidade no atendimento."
    },
    {
      title: "Ética profissional",
      description:
        "Comunicação sem promessas, sensacionalismo ou exposição indevida de casos."
    }
  ],
  bookingSteps: [
    {
      title: "Envie uma mensagem",
      description:
        "Escolha o assunto e mande uma mensagem breve pelo WhatsApp."
    },
    {
      title: "Receba orientação inicial",
      description:
        "A equipe informa horários, endereço e o que levar na primeira visita."
    },
    {
      title: "Faça a avaliação",
      description:
        "A consulta define diagnóstico, prioridades e possibilidades de cuidado."
    }
  ],
  services: [
    {
      slug: "avaliacao-odontologica",
      title: "Avaliação odontológica",
      shortTitle: "Avaliação",
      seoTitle: "Avaliação odontológica em São Paulo",
      category: "prevencao",
      categoryLabel: "Prevenção",
      description:
        "Consulta inicial para entender sua necessidade, revisar histórico e orientar próximos passos com transparência.",
      image:
        "https://images.pexels.com/photos/7803051/pexels-photo-7803051.jpeg?auto=compress&cs=tinysrgb&w=1200",
      intro:
        "A avaliação odontológica é o ponto de partida para qualquer cuidado responsável. Ela permite entender queixa, histórico, hábitos e prioridades antes de indicar um procedimento.",
      whenIndicated: [
        "Quando existe dor, desconforto, sangramento gengival ou sensibilidade.",
        "Antes de iniciar clareamento, implante, aparelho ou outro tratamento.",
        "Para revisar a saúde bucal mesmo sem sintomas aparentes."
      ],
      evaluation: [
        "Escuta da queixa e revisão das informações principais do paciente.",
        "Exame clínico e, quando necessário, solicitação de exames complementares.",
        "Explicação das prioridades e possibilidades de cuidado."
      ],
      benefits: [
        "Ajuda a tomar decisões com mais clareza.",
        "Permite identificar prioridades antes de procedimentos estéticos.",
        "Organiza o planejamento de acordo com rotina, necessidade e segurança."
      ],
      faqs: [
        {
          question: "A avaliação já inclui tratamento?",
          answer:
            "Não necessariamente. A consulta serve para diagnóstico, orientação e planejamento. Procedimentos dependem de indicação e agenda."
        },
        {
          question: "Preciso levar exames anteriores?",
          answer:
            "Se tiver radiografias, receitas ou histórico recente, leve para ajudar a avaliação."
        },
        {
          question: "É possível receber orçamento sem consulta?",
          answer:
            "Valores e condutas dependem de avaliação clínica, por isso o WhatsApp faz apenas a triagem inicial."
        }
      ],
      whatsappMessage:
        "Olá, vim pelo site e gostaria de agendar uma avaliação odontológica.",
      icon: "clipboard"
    },
    {
      slug: "limpeza",
      title: "Limpeza odontológica",
      shortTitle: "Limpeza",
      seoTitle: "Limpeza odontológica em São Paulo",
      category: "prevencao",
      categoryLabel: "Prevenção",
      description:
        "Profilaxia profissional e orientação de higiene para manutenção da saúde bucal.",
      image:
        "https://images.pexels.com/photos/6812534/pexels-photo-6812534.jpeg?auto=compress&cs=tinysrgb&w=1200",
      intro:
        "A limpeza odontológica, ou profilaxia, remove acúmulos que a escovação diária pode não alcançar e reforça a prevenção em consultas regulares.",
      whenIndicated: [
        "Para manutenção periódica da saúde bucal.",
        "Quando há placa, tártaro, manchas superficiais ou sangramento gengival.",
        "Antes de alguns procedimentos, quando indicado pela dentista."
      ],
      evaluation: [
        "Avaliação da gengiva, dentes e presença de cálculo dental.",
        "Definição da técnica adequada para o caso.",
        "Orientação personalizada de higiene após o atendimento."
      ],
      benefits: [
        "Contribui para prevenção e controle de inflamações gengivais.",
        "Ajuda a manter uma rotina de cuidado mais efetiva.",
        "Pode melhorar conforto e sensação de limpeza, conforme o caso."
      ],
      faqs: [
        {
          question: "Limpeza clareia os dentes?",
          answer:
            "A limpeza pode remover manchas superficiais, mas clareamento dental é um procedimento específico e depende de avaliação."
        },
        {
          question: "Com que frequência devo fazer limpeza?",
          answer:
            "A periodicidade varia conforme histórico, higiene, gengiva e necessidade individual."
        },
        {
          question: "Pode haver sensibilidade depois?",
          answer:
            "Alguns pacientes podem sentir sensibilidade temporária, especialmente quando há tártaro ou gengiva inflamada."
        }
      ],
      whatsappMessage:
        "Olá, vim pelo site e gostaria de agendar uma limpeza odontológica.",
      icon: "sparkles"
    },
    {
      slug: "clareamento",
      title: "Clareamento dental",
      shortTitle: "Clareamento",
      seoTitle: "Clareamento dental em São Paulo",
      category: "estetica",
      categoryLabel: "Estética",
      description:
        "Avaliação de opções de clareamento conforme cor, sensibilidade, rotina e saúde bucal.",
      image:
        "https://images.pexels.com/photos/6627363/pexels-photo-6627363.jpeg?auto=compress&cs=tinysrgb&w=1200",
      intro:
        "O clareamento dental é uma alternativa estética que precisa considerar condição dos dentes, gengivas, sensibilidade e expectativas realistas.",
      whenIndicated: [
        "Quando o paciente deseja avaliar melhora estética da cor dos dentes.",
        "Após avaliação de restaurações, manchas e sensibilidade.",
        "Quando a saúde bucal permite seguir um protocolo acompanhado."
      ],
      evaluation: [
        "Análise da cor inicial, restaurações e sinais de sensibilidade.",
        "Discussão sobre opções possíveis e cuidados durante o processo.",
        "Definição de protocolo somente quando houver indicação clínica."
      ],
      benefits: [
        "Permite planejamento estético com acompanhamento profissional.",
        "Ajuda a alinhar expectativa, rotina e limites do caso.",
        "Orienta cuidados para reduzir riscos de uso inadequado de produtos."
      ],
      faqs: [
        {
          question: "Todo mundo pode fazer clareamento?",
          answer:
            "Não. A indicação depende de avaliação dos dentes, gengivas, restaurações e sensibilidade."
        },
        {
          question: "O resultado é igual para todos?",
          answer:
            "Não. A resposta varia conforme características individuais e não deve ser prometida como garantia."
        },
        {
          question: "Clareamento causa sensibilidade?",
          answer:
            "Pode ocorrer sensibilidade temporária em alguns casos, por isso o acompanhamento é importante."
        }
      ],
      whatsappMessage:
        "Olá, vim pelo site e gostaria de saber sobre avaliação para clareamento dental.",
      icon: "sun"
    },
    {
      slug: "implante",
      title: "Implante dentário",
      shortTitle: "Implante",
      seoTitle: "Implante dentário em São Paulo",
      category: "reabilitacao",
      categoryLabel: "Reabilitação",
      description:
        "Planejamento de reabilitação com implantes quando há indicação clínica e exames compatíveis.",
      image:
        "https://images.pexels.com/photos/5355903/pexels-photo-5355903.jpeg?auto=compress&cs=tinysrgb&w=1200",
      intro:
        "O implante dentário pode fazer parte da reabilitação de espaços sem dentes, mas exige avaliação clínica, exames e planejamento individual.",
      whenIndicated: [
        "Na ausência de um ou mais dentes, após avaliação.",
        "Quando há condição óssea e gengival compatível ou possibilidade de preparo.",
        "Quando o paciente busca uma opção reabilitadora planejada."
      ],
      evaluation: [
        "Exame clínico e análise da região a ser reabilitada.",
        "Solicitação de exames de imagem quando necessário.",
        "Explicação de etapas, prazos, limites e alternativas possíveis."
      ],
      benefits: [
        "Pode contribuir para reabilitação funcional e estética em casos indicados.",
        "Permite planejamento individualizado da reposição dentária.",
        "Ajuda a comparar alternativas de tratamento de forma clara."
      ],
      faqs: [
        {
          question: "Posso saber se preciso de implante pelo WhatsApp?",
          answer:
            "O WhatsApp ajuda no agendamento, mas a indicação depende de avaliação clínica e exames."
        },
        {
          question: "O implante é feito no mesmo dia da avaliação?",
          answer:
            "Geralmente não. Primeiro é necessário avaliar, solicitar exames e planejar o caso."
        },
        {
          question: "Existe garantia de resultado?",
          answer:
            "Não se deve prometer resultado garantido. O planejamento reduz riscos, mas cada caso tem características próprias."
        }
      ],
      whatsappMessage:
        "Olá, vim pelo site e gostaria de agendar uma avaliação para implante dentário.",
      icon: "shield"
    },
    {
      slug: "aparelho",
      title: "Aparelho ortodôntico",
      shortTitle: "Aparelho",
      seoTitle: "Aparelho ortodôntico em São Paulo",
      category: "reabilitacao",
      categoryLabel: "Reabilitação",
      description:
        "Avaliação ortodôntica para alinhar função, mordida e estética com planejamento gradual.",
      image:
        "https://images.pexels.com/photos/5622003/pexels-photo-5622003.jpeg?auto=compress&cs=tinysrgb&w=1200",
      intro:
        "O tratamento com aparelho ortodôntico precisa avaliar mordida, posição dos dentes, hábitos e objetivos do paciente antes da indicação.",
      whenIndicated: [
        "Quando há desalinhamento dentário ou incômodo com a mordida.",
        "Antes de tratamentos reabilitadores ou estéticos em alguns casos.",
        "Quando existe indicação de acompanhamento ortodôntico."
      ],
      evaluation: [
        "Avaliação da mordida, alinhamento e histórico do paciente.",
        "Solicitação de documentação ortodôntica quando necessário.",
        "Explicação do tipo de acompanhamento e estimativa de etapas."
      ],
      benefits: [
        "Ajuda no planejamento de alinhamento e função mastigatória.",
        "Permite acompanhamento progressivo e ajustes periódicos.",
        "Pode melhorar organização estética do sorriso, conforme o caso."
      ],
      faqs: [
        {
          question: "Qual tipo de aparelho é indicado?",
          answer:
            "A indicação depende da avaliação, documentação e objetivos clínicos de cada paciente."
        },
        {
          question: "Quanto tempo dura o tratamento?",
          answer:
            "A duração varia conforme complexidade, resposta biológica e colaboração com o tratamento."
        },
        {
          question: "A avaliação já define todos os custos?",
          answer:
            "A avaliação inicial orienta possibilidades. O planejamento completo pode depender de documentação."
        }
      ],
      whatsappMessage:
        "Olá, vim pelo site e gostaria de agendar uma avaliação para aparelho ortodôntico.",
      icon: "smile"
    },
    {
      slug: "urgencia-odontologica",
      title: "Urgência odontológica",
      shortTitle: "Urgência",
      seoTitle: "Urgência odontológica em São Paulo",
      category: "urgencia",
      categoryLabel: "Urgência",
      description:
        "Orientação para dor, fraturas e situações que precisam de atenção rápida, conforme disponibilidade.",
      image:
        "https://images.pexels.com/photos/6812534/pexels-photo-6812534.jpeg?auto=compress&cs=tinysrgb&w=1200",
      intro:
        "A urgência odontológica envolve situações que precisam de orientação rápida para avaliação presencial, controle do desconforto e definição da conduta adequada.",
      whenIndicated: [
        "Dor intensa, inchaço, trauma ou fratura dental.",
        "Sangramento, inflamação ou incômodo que piora rapidamente.",
        "Queda de restauração, prótese ou aparelho causando ferimento."
      ],
      evaluation: [
        "Triagem inicial pelo WhatsApp sem coleta de dados sensíveis desnecessários.",
        "Orientação de disponibilidade e prioridade de atendimento.",
        "Consulta para identificar causa provável e conduta indicada."
      ],
      benefits: [
        "Ajuda a organizar atendimento em situações de desconforto.",
        "Permite orientação inicial sobre o que informar e como chegar.",
        "Reduz improvisos e direciona a avaliação clínica adequada."
      ],
      faqs: [
        {
          question: "A clínica atende urgência no mesmo dia?",
          answer:
            "Quando houver disponibilidade, sim. Envie mensagem para verificar horários e orientação inicial."
        },
        {
          question: "O que devo informar no WhatsApp?",
          answer:
            "Informe nome, melhor horário para contato, principal sintoma e desde quando começou, sem enviar dados sensíveis desnecessários."
        },
        {
          question: "Posso tomar medicação indicada por mensagem?",
          answer:
            "Condutas medicamentosas dependem de avaliação profissional e histórico individual."
        }
      ],
      whatsappMessage:
        "Olá, vim pelo site e preciso de orientação para uma urgência odontológica.",
      icon: "alert"
    }
  ]
} as const;

export const serviceCategories: Array<{
  value: ServiceCategory | "todos";
  label: string;
}> = [
  { value: "todos", label: "Todos" },
  { value: "prevencao", label: "Prevenção" },
  { value: "estetica", label: "Estética" },
  { value: "reabilitacao", label: "Reabilitação" },
  { value: "urgencia", label: "Urgência" }
];

export const featuredServiceSlugs = [
  "avaliacao-odontologica",
  "limpeza",
  "clareamento",
  "implante"
] as const;

export function getServiceBySlug(slug: string) {
  return clinicConfig.services.find((service) => service.slug === slug);
}

export function getFeaturedServices() {
  return clinicConfig.services.filter((service) =>
    featuredServiceSlugs.includes(
      service.slug as (typeof featuredServiceSlugs)[number]
    )
  );
}
