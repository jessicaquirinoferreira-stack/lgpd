export const WHATSAPP_PHONE = '21986100320';
export const WHATSAPP_PHONE_FORMATTED = '(21) 98610-0320';
export const WHATSAPP_DEFAULT_MESSAGE = 'Olá! Quero adquirir o material *Redação LGPD - O LGPD na Prática: Módulo Discursivas & Casos Práticos*';
export const WHATSAPP_LINK = `https://wa.me/55${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
export const LOGO_URL = 'https://i.postimg.cc/TYLDXtQj/Redacao-LGPD-Protecao-Dourada.png';

export interface AssistantFAQ {
  id: string;
  trigger: string;
  question: string;
  answer: string;
  whatsappPrompt?: string;
}

export const ASSISTANT_FAQS: AssistantFAQ[] = [
  {
    id: 'o_que_e',
    trigger: 'o que é',
    question: 'O que é o Redação LGPD?',
    answer: 'É um guia estratégico condensado focado 100% em como estruturar e redigir respostas discursivas e casos práticos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Inclui o Esqueleto Coringa em 3 Fases, Banco de Casos Resolvidos e Guia de Vocabulário Regulatório da ANPD.',
    whatsappPrompt: 'Olá! Gostaria de saber mais sobre o método do Redação LGPD.',
  },
  {
    id: 'bancas',
    trigger: 'banca',
    question: 'Serve para a banca do meu concurso?',
    answer: 'Sim! O esqueleto coringa é estruturado nos critérios unificados cobrados por bancas como Cebraspe, FGV, FCC, Vunesp e bancas regionais, além de certificações como EXIN CDPO e IAPP. Ele ensina a atender rigorosamente à grade de pontuação do espelho.',
    whatsappPrompt: 'Olá! Gostaria de saber como o material se aplica à banca do meu concurso.',
  },
  {
    id: 'preco',
    trigger: 'preço valor pagamento quanto custa condição',
    question: 'Qual o valor e formas de pagamento?',
    answer: 'Estamos liberando uma condição promocional exclusiva com desconto especial diretamente para quem entra em contato pelo WhatsApp! Você garante todos os bônus inclusos e liberação imediata no PIX ou Cartão. Clique no botão abaixo para consultar o valor promocional agora:',
    whatsappPrompt: 'Olá! Gostaria de consultar a condição promocional com desconto exclusivo do Redação LGPD.',
  },
  {
    id: 'como_recebo',
    trigger: 'receber envio prazo',
    question: 'Como e quando recebo o material?',
    answer: 'O envio é imediato! Assim que você fala com nosso especialista no WhatsApp e confirma o pagamento, o link exclusivo dos PDFs e bônus é enviado diretamente no seu WhatsApp e no seu e-mail.',
    whatsappPrompt: 'Olá! Gostaria de receber o material do Redação LGPD agora pelo WhatsApp.',
  },
  {
    id: 'garantia',
    trigger: 'garantia reembolso',
    question: 'Tem garantia de satisfação?',
    answer: 'Sim, você tem 7 dias de garantia incondicional com risco zero. Se o material não transformar sua capacidade de resposta, devolvemos 100% do valor sem burocracia.',
    whatsappPrompt: 'Olá! Gostaria de tirar uma dúvida sobre a garantia do Redação LGPD.',
  },
];

export interface CaseExample {
  id: string;
  title: string;
  banca: string;
  theme: string;
  situation: string;
  question?: string;
  badResponse: {
    score: string;
    text: string;
    critique: string[];
  };
  goodResponse: {
    score: string;
    text: string;
    keyPoints: string[];
    articlesCited: string[];
  };
}

export interface IntroductionTemplate {
  id: string;
  title: string;
  context: string;
  openingText: string;
  analysis: string;
  targetKeywords: string[];
}

export interface VocabItem {
  genericTerm: string;
  technicalTerm: string;
  whyItMatters: string;
  exampleInResponse: string;
}

export interface ChecklistItemData {
  id: string;
  category: 'enquadramento' | 'fundamentacao' | 'mitigacao' | 'formal';
  label: string;
  description: string;
  points: number;
}

export const CHECKLIST_ITEMS: ChecklistItemData[] = [
  {
    id: 'agentes',
    category: 'enquadramento',
    label: 'Qualificação precisa dos Agentes de Tratamento',
    description: 'Diferenciou expressamente Controlador e Operador (arts. 5º, VI e VII e 39), sem usar termos leigos como "empresa dona dos dados".',
    points: 1.5,
  },
  {
    id: 'natureza_dados',
    category: 'enquadramento',
    label: 'Classificação da Categoria dos Dados Envolvidos',
    description: 'Distinguiu dados pessoais comuns (art. 5º, I) de dados pessoais sensíveis (art. 5º, II) e dados de crianças/adolescentes (art. 14).',
    points: 1.5,
  },
  {
    id: 'base_legal',
    category: 'fundamentacao',
    label: 'Indicação Precisa da Base Legal Aplicável',
    description: 'Apontou o fundamento exato do art. 7º ou art. 11, evitando recorrer ao consentimento como solução genérica para relações de consumo ou trabalho.',
    points: 2.0,
  },
  {
    id: 'principios',
    category: 'fundamentacao',
    label: 'Subsunção aos Princípios da LGPD (Art. 6º)',
    description: 'Conectou o caso aos princípios cardeais: finalidade, adequação, necessidade (minimização), segurança e responsabilização/prestação de contas.',
    points: 1.5,
  },
  {
    id: 'incidente_anpd',
    category: 'mitigacao',
    label: 'Procedimento Formal de Comunicação à ANPD e Titulares (Art. 48)',
    description: 'Mencionou expressamente a obrigação de comunicar à Autoridade Nacional e aos titulares em prazo razoável quando houver risco ou dano relevante.',
    points: 2.0,
  },
  {
    id: 'governanca_mitigacao',
    category: 'mitigacao',
    label: 'Adoção de Medidas de Governança e Mitigação Imediata',
    description: 'Indicou atuação do Encarregado (DPO), elaboração/revisão de RIPD/LIA e medidas de segurança técnicas e administrativas (art. 46 e 50).',
    points: 1.5,
  },
];

export const INTRODUCTIONS_DATA: IntroductionTemplate[] = [
  {
    id: 'vazamento',
    title: 'Caso de Incidente de Segurança & Vazamento de Dados',
    context: 'Incidente cibernético com exfiltração de dados cadastrais e financeiros de clientes em plataforma de comércio eletrônico.',
    openingText: 'A situação narrada consubstancia incidente de segurança da informação ensejador de potencial risco e dano relevante aos titulares de dados, impondo ao agente na condição de Controlador (art. 5º, VI, da Lei nº 13.709/2018) a imediata deflagração do plano de resposta a incidentes e o cumprimento dos deveres dispostos no art. 48 da LGPD.',
    analysis: 'Enquadra imediatamente o fato como incidente de segurança, fixa a qualificação da entidade como Controladora e invoca de plano os arts. 5º, VI e 48, demonstrando domínio terminológico antes mesmo de adentrar nos quesitos secundários.',
    targetKeywords: ['incidente de segurança', 'Controlador (art. 5º, VI)', 'art. 48 da LGPD', 'dano relevante aos titulares'],
  },
  {
    id: 'ia_decisao',
    title: 'Inteligência Artificial & Decisões Automatizadas (Score/RH)',
    context: 'Uso de algoritmo de machine learning para triagem de candidatos em processo seletivo ou negativa automática de crédito.',
    openingText: 'O tratamento de dados pessoais realizado por meio de mecanismos decisórios exclusivamente automatizados encontra baliza estrita no art. 20 da Lei Geral de Proteção de Dados, cabendo assegurar ao titular o direito à revisão de tais provimentos, bem como o acesso a informações claras e adequadas acerca dos critérios e procedimentos utilizados, em estrita observância aos princípios da transparência e da não discriminação (art. 6º, VI e IX).',
    analysis: 'Vincula a tecnologia diretamente ao art. 20 e aos princípios fundantes da transparência e da não discriminação, superando a superficialidade de respostas que apenas alegam "direito de saber o motivo".',
    targetKeywords: ['decisões unicamente automatizadas', 'art. 20 da LGPD', 'revisão humana', 'não discriminação (art. 6º, IX)'],
  },
  {
    id: 'eliminacao_retencao',
    title: 'Exercício de Direitos do Titular vs. Retenção Legal',
    context: 'Ex-cliente solicita revogação de consentimento e eliminação integral de seus registros, enquanto a empresa necessita reter dados fiscais e contratuais.',
    openingText: 'Embora a revogação do consentimento e a eliminação dos dados constituam direitos fundamentais do titular disciplinados nos arts. 8º, § 5º, e 18, VI, da LGPD, tal pretensão não ostenta caráter absoluto, cedendo passo às hipóteses legítimas de conservação expressamente autorizadas pelo art. 16 do mesmo diploma, nomeadamente para o cumprimento de obrigação legal ou regulatória pelo controlador e para o exercício regular de direitos em processo judicial ou administrativo.',
    analysis: 'Demonstra raciocínio de ponderação jurídica clássica: reconhece a regra geral do direito do titular e imediatamente invoca a exceção técnica taxativa do art. 16, I e II, demonstrando precisão analítica que as bancas jurídicas exigem.',
    targetKeywords: ['direito de eliminação (art. 18)', 'relatividade dos direitos', 'conservação autorizada (art. 16)', 'cumprimento de obrigação legal'],
  },
];

export const VOCABULARY_LIST: VocabItem[] = [
  {
    genericTerm: 'A empresa dona dos dados',
    technicalTerm: 'Controlador (art. 5º, VI)',
    whyItMatters: 'A banca penaliza quem usa a expressão vulgar "dona dos dados", já que dados pertencem ao titular; a pessoa natural ou jurídica apenas exerce o controle das decisões de tratamento.',
    exampleInResponse: 'Na qualidade de controladora, compete à sociedade empresária fixar as finalidades do tratamento e responder perante a autoridade administrativa.',
  },
  {
    genericTerm: 'O terceiro contratado para processar os dados',
    technicalTerm: 'Operador (art. 5º, VII)',
    whyItMatters: 'Identifica com exatidão o desdobramento da cadeia de tratamento e a responsabilidade solidária mitigada nos termos do art. 39 e 42 da LGPD.',
    exampleInResponse: 'O prestador de serviços de nuvem qualifica-se como operador, devendo realizar o tratamento segundo as instruções lícitas do controlador.',
  },
  {
    genericTerm: 'O responsável pela proteção de dados',
    technicalTerm: 'Encarregado pelo Tratamento de Dados Pessoais (DPO - art. 41)',
    whyItMatters: 'Termo legal oficial da LGPD. As bancas valorizam a referência expressa às atribuições de canal de comunicação com titulares e com a ANPD.',
    exampleInResponse: 'A atuação célere do encarregado pelo tratamento é indispensável para orientar os colaboradores e intermediar a comunicação com a ANPD.',
  },
  {
    genericTerm: 'Relatório de risco ou impacto',
    technicalTerm: 'Relatório de Impacto à Proteção de Dados Pessoais (RIPD - art. 5º, XVII)',
    whyItMatters: 'Sigla e denominação legal obrigatórias para fundamentar medidas de salvaguarda quando o tratamento tem base no legítimo interesse ou envolve dados sensíveis.',
    exampleInResponse: 'Cumpre ao controlador elaborar o RIPD, contendo a descrição dos processos, a análise de riscos às liberdades civis e as medidas de mitigação.',
  },
  {
    genericTerm: 'Teste para usar a justificativa de interesse da empresa',
    technicalTerm: 'Teste de Ponderação do Legítimo Interesse (LIA - Legitimate Interests Assessment)',
    whyItMatters: 'Demonstra sofisticação regulatória prática reconhecida pela ANPD, avaliando finalidade, necessidade e balanceamento de direitos.',
    exampleInResponse: 'A adoção da base legal do art. 7º, IX, reclama a prévia realização do LIA, atestando a proporcionalidade entre o interesse legítimo e a legítima expectativa do titular.',
  },
  {
    genericTerm: 'Avisar a polícia ou o Procon sobre o vazamento',
    technicalTerm: 'Comunicação tempestiva de incidente à ANPD e aos titulares (art. 48)',
    whyItMatters: 'A obrigação primária regulatória é perante a ANPD e os próprios titulares quando houver risco de dano relevante, observada a Resolução CD/ANPD nº 15/2024.',
    exampleInResponse: 'Constatado o incidente apto a gerar risco relevante, impõe-se a notificação formal à ANPD e aos titulares afetados nos termos do art. 48.',
  },
];

export const MAIN_CASE_STUDY: CaseExample = {
  id: 'case_vazamento_saude',
  title: 'Estudo de Caso Prático: Clínica Médica & Ataque Ransomware',
  banca: 'Padrão FGV / Cebraspe / Concursos Jurídicos',
  theme: 'Vazamento de Dados Sensíveis, Responsabilidade Civil e Atuação da ANPD',
  situation: 'Uma renomada rede de clínicas de diagnóstico teve seus servidores invadidos por criminosos virtuais. Prontuários médicos, laudos de exames laboratoriais e dados de cartão de crédito de 12.000 pacientes foram sequestrados e colocados à venda em fóruns da dark web. A clínica omitiu o fato dos pacientes durante 45 dias, tentando negociar o resgate em sigilo. Indaga-se: (a) Qual a qualificação jurídica dos agentes e a natureza dos dados? (b) Quais as irregularidades cometidas sob a ótica da LGPD? (c) Quais as sanções e medidas cabíveis?',
  badResponse: {
    score: '3,5 / 10,0',
    critique: [
      'Não citou o art. 48 nem a obrigação formal de notificação à ANPD.',
      'Usou o termo genérico "a empresa errou feio" sem tipificar infração aos princípios da segurança e transparência (art. 6º, VI e VII).',
      'Confundiu a natureza dos dados, chamando prontuário médico apenas de "dados sigilosos", sem classificar como dados pessoais sensíveis (art. 5º, II).',
      'Deixou de indicar as sanções administrativas do art. 52 da LGPD.',
    ],
    text: 'A clínica errou ao esconder o caso por 45 dias para tentar pagar o resgate. Prontuário médico é algo muito íntimo e sigiloso, então a empresa é culpada pelo vazamento. Ela deveria ter avisado a polícia imediatamente e falado a verdade para as pessoas. Como ela não avisou, os clientes podem processar a clínica na justiça para pedir indenização por danos morais. A empresa dona dos dados também pode ser multada pelas autoridades de proteção de dados por não ter uma boa segurança no computador.',
  },
  goodResponse: {
    score: '10,0 / 10,0',
    keyPoints: [
      'Enquadramento técnico impecável: Controladora e dados pessoais sensíveis (art. 5º, II).',
      'Violação taxativa do art. 48 (dever de comunicar à ANPD e titulares em prazo razoável).',
      'Inobservância frontal dos princípios da segurança, prevenção e transparência (art. 6º, VI, VII e VIII).',
      'Aplicação das sanções do art. 52 (multa simples de até 2% do faturamento, publicização e suspensão do banco de dados).',
    ],
    articlesCited: ['Art. 5º, II e VI', 'Art. 6º, VI, VII e VIII', 'Art. 44', 'Art. 48', 'Art. 52'],
    text: `Em relação ao enquadramento jurídico, a rede de clínicas ostenta a condição de Controladora (art. 5º, VI, da Lei nº 13.709/2018), figurando como titular das decisões sobre o tratamento. Os laudos e prontuários médicos qualificam-se como dados pessoais sensíveis (art. 5º, II), regime que impõe padrão reforçado de segurança e restrição estrita às hipóteses do art. 11.

Sob a ótica material e procedimental da LGPD, a entidade incorreu em flagrantes ilicitudes:
1. Violação do dever de comunicação tempestiva (art. 48): a omissão por 45 dias afronta a exigência legal de notificação à ANPD e aos titulares em prazo razoável diante de incidente com risco de dano relevante;
2. Descumprimento dos princípios da segurança e da prevenção (art. 6º, VII e VIII, c/c art. 46): a inaptidão em resguardar os ativos digitais configura tratamento irregular (art. 44);
3. Quebra da boa-fé objetiva e da transparência (art. 6º, VI), ao negociar sigilosamente sem adotar as salvaguardas cabíveis para minorar os efeitos do dano aos pacientes.

No tocante às consequências jurídicas, a entidade sujeita-se:
(a) na esfera administrativa, às sanções aplicáveis pela ANPD discriminadas no art. 52, mormente advertência com prazo para medidas corretivas, multa simples de até 2% do faturamento limitada a R$ 50 milhões por infração, publicização da infração e suspensão temporária da atividade de tratamento; e
(b) na esfera civil, à obrigação de reparar os danos patrimoniais e extrapatrimoniais causados aos titulares nos moldes do art. 42 da LGPD.`,
  },
};

export const FAQ_ITEMS = [
  {
    q: 'É um curso longo em vídeo com dezenas de horas?',
    a: 'Não. O Redação LGPD foi desenhado especificamente como um guia estratégico e prático. É direto ao ponto: você recebe o Esqueleto Coringa, o Vocabulário Regulatório, os Modelos de Espelho e o Banco de Casos Resolvidos para estudar em poucas horas e aplicar imediatamente nas suas discursivas.',
  },
  {
    q: 'O método serve para qualquer banca examinadora (Cebraspe, FGV, FCC, Vunesp)?',
    a: 'Sim. As bancas examinadoras adotam critérios de correção convergentes: cobram a identificação dos agentes, a subsunção do caso concreto aos artigos da Lei nº 13.709/2018 e a citação das providências materiais (ANPD, RIPD, LIA, mitigação). O esqueleto coringa é universal e ajustável a qualquer edital de concurso ou exame profissional.',
  },
  {
    q: 'Tem modelos prontos de respostas e espelhos comentados?',
    a: 'Sim! Você recebe um banco estruturado com casos práticos e discursivas completas com espelhos de pontuação oficiais analisados linha por linha, mostrando exatamente o que a banca esperava e como redigir para atingir a nota máxima.',
  },
  {
    q: 'Serve para quem já estudou a parte teórica da lei?',
    a: 'Especialmente para quem já estudou a lei! A maioria dos candidatos que perdem pontos preciosos sabe o conteúdo do artigo, mas perde nota na estrutura textual, no uso de termos leigos ou na incapacidade de articular o fato com o dispositivo legal em 20 ou 30 linhas.',
  },
  {
    q: 'O material aborda as resoluções e regulamentos da ANPD?',
    a: 'Sim, o vocabulário e os casos incorporam as diretrizes normativas vigentes da ANPD, incluindo a regulamentação sobre comunicação de incidentes de segurança (Resolução CD/ANPD nº 15/2024), Encarregado (Resolução CD/ANPD nº 18/2024) e aplicação de sanções administrativas.',
  },
  {
    q: 'Como é feito o acesso após a confirmação?',
    a: 'O acesso é imediato! Assim que seu pedido é aprovado, você recebe instantaneamente em seu e-mail o link para download da área exclusiva com todo o material em formato PDF diagramado, editável e pronto para impressão.',
  },
  {
    q: 'E se o material não for o que eu esperava?',
    a: 'Você tem garantia incondicional de 7 dias. Se por qualquer motivo achar que o Redação LGPD não transformou a qualidade das suas respostas, basta enviar um único e-mail para receber 100% do seu dinheiro de volta, sem questionamentos.',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test_1',
    name: 'Dr. Lucas Silveira',
    role: 'Aprovado em Procuradoria Estadual (PGE)',
    location: 'Belo Horizonte / MG',
    comment: 'Eu dominava a teoria da LGPD de cabo a rabo, mas na prova simulada tirava 5,0 por falta de técnica de espelho. O Esqueleto Coringa do Redação LGPD destravou minha escrita. Na discursiva real da banca tirei 9,8 na questão de privacidade!',
    rating: 5,
    tag: 'Concurso PGE',
  },
  {
    id: 'test_2',
    name: 'Mariana Duarte',
    role: 'Certificada EXIN Privacy & Data Protection Practitioner',
    location: 'São Paulo / SP',
    comment: 'Para a prova de casos práticos e certificações, o glossário de vocabulário regulatório é ouro puro. A gente para de escrever como leigo e passa a usar os termos precisos que os auditores exigem.',
    rating: 5,
    tag: 'Certificação DPO',
  },
  {
    id: 'test_3',
    name: 'Carlos Eduardo Nogueira',
    role: 'Aprovado para Auditor Federal de Controle (TCU)',
    location: 'Brasília / DF',
    comment: 'O melhor é a objetividade: sem enrolação teórica de 50 horas. Em um final de semana assimilei o roteiro de introdução, desenvolvimento e mitigação. Vale cada centavo.',
    rating: 5,
    tag: 'Concurso TCU',
  },
];
