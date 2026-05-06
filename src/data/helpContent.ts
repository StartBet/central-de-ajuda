import type { FaqItem, HelpArticle, HelpCategory } from '../types/help-center';

export const categories: HelpCategory[] = [
  {
    id: 'depositos',
    title: 'Depósitos',
    description: 'PIX, confirmação de pagamento e limites explicados de um jeito simples.',
    icon: 'wallet',
  },
  {
    id: 'saques',
    title: 'Saques',
    description: 'Prazos, validações e acompanhamento para sacar sem complicar.',
    icon: 'banknote',
  },
  {
    id: 'conta-login',
    title: 'Conta e Login',
    description: 'Cadastro, senha, dados pessoais e configurações da sua conta.',
    icon: 'user',
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    description: 'Validação de identidade, proteção da conta e jogo responsável.',
    icon: 'shield',
  },
  {
    id: 'bonus',
    title: 'Bônus e Promoções',
    description: 'Regras, ativação e acompanhamento de campanhas com transparência.',
    icon: 'gift',
  },
  {
    id: 'apostas',
    title: 'Apostas',
    description: 'Como apostar, consultar bilhetes e entender resultados com clareza.',
    icon: 'ticket',
  },
];

export const articles: HelpArticle[] = [
  {
    id: 'como-depositar-pix',
    categoryId: 'depositos',
    title: 'Como faço um depósito via PIX?',
    excerpt: 'Veja o caminho para gerar o PIX e acompanhar o saldo na conta.',
    tags: ['pix', 'pagamento', 'saldo', 'depósito'],
    status: 'popular',
    content: [
      'Acesse sua carteira, escolha Depósito e selecione PIX como forma de pagamento.',
      'Informe o valor desejado, gere o código PIX e conclua o pagamento no aplicativo do seu banco.',
      'Depois da confirmação bancária, o saldo aparece automaticamente na sua conta StartBet.',
    ],
  },
  {
    id: 'deposito-nao-caiu',
    categoryId: 'depositos',
    title: 'Meu depósito ainda não caiu. O que fazer?',
    excerpt: 'Entenda os prazos e o que conferir antes de falar com o suporte.',
    tags: ['pix', 'prazo', 'comprovante', 'saldo'],
    status: 'updated',
    content: [
      'Depósitos via PIX costumam ser processados em poucos minutos, mas podem depender da confirmação do banco emissor.',
      'Confira se o pagamento foi feito com o mesmo CPF cadastrado na StartBet.',
      'Se o prazo passar do esperado, envie o comprovante pelo atendimento. A gente verifica com você.',
    ],
  },
  {
    id: 'prazo-saque',
    categoryId: 'saques',
    title: 'Qual é o prazo para receber um saque?',
    excerpt: 'Veja como funciona a análise e o envio do valor para sua chave PIX.',
    tags: ['saque', 'pix', 'prazo', 'análise'],
    status: 'popular',
    content: [
      'Depois de solicitar um saque, o pedido passa por validações de segurança.',
      'Pedidos aprovados são enviados para a chave PIX cadastrada na conta.',
      'Você pode acompanhar o status pela área de movimentações da carteira.',
    ],
  },
  {
    id: 'alterar-senha',
    categoryId: 'conta-login',
    title: 'Como alterar ou recuperar minha senha?',
    excerpt: 'Redefina sua senha com segurança caso tenha esquecido o acesso.',
    tags: ['senha', 'login', 'acesso', 'conta'],
    content: [
      'Na tela de login, selecione a opção de recuperação de senha.',
      'Informe o e-mail ou telefone cadastrado e siga as instruções enviadas.',
      'Crie uma senha forte e evite reutilizar combinações usadas em outros serviços.',
    ],
  },
  {
    id: 'validacao-identidade',
    categoryId: 'seguranca',
    title: 'Por que preciso validar minha identidade?',
    excerpt: 'Entenda como a verificação protege sua conta e mantém tudo em ordem.',
    tags: ['kyc', 'documentos', 'identidade', 'segurança'],
    status: 'new',
    content: [
      'A validação confirma que os dados da conta pertencem ao titular cadastrado.',
      'Esse processo ajuda a proteger seus pagamentos, saques e histórico de apostas.',
      'Envie imagens legíveis e dados atualizados para evitar reprovações.',
    ],
  },
  {
    id: 'ativar-bonus',
    categoryId: 'bonus',
    title: 'Como ativar um bônus promocional?',
    excerpt: 'Veja onde encontrar campanhas e quais regras conferir antes de participar.',
    tags: ['bônus', 'promoção', 'campanha', 'rollover'],
    content: [
      'Acesse a área de promoções para visualizar campanhas disponíveis para sua conta.',
      'Leia as regras, prazos e requisitos antes de ativar o bônus.',
      'Depois de ativado, acompanhe o progresso pela carteira ou pela página da promoção.',
    ],
  },
  {
    id: 'consultar-bilhete',
    categoryId: 'apostas',
    title: 'Onde consulto meus bilhetes de aposta?',
    excerpt: 'Aprenda a acompanhar apostas abertas, encerradas e valores liquidados.',
    tags: ['bilhete', 'aposta', 'resultado', 'histórico'],
    content: [
      'Entre na área Minhas Apostas para consultar bilhetes em aberto e encerrados.',
      'Cada bilhete exibe seleção, odd, valor apostado, possível retorno e status atual.',
      'Resultados finais aparecem após a liquidação oficial do evento.',
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    id: 'faq-documentos',
    categoryId: 'seguranca',
    question: 'Quais documentos posso enviar para validação?',
    answer:
      'Normalmente são aceitos documentos oficiais com foto e CPF. O arquivo precisa estar legível, atual e sem cortes.',
  },
  {
    id: 'faq-chave-pix',
    categoryId: 'saques',
    question: 'Posso sacar para uma chave PIX de outra pessoa?',
    answer:
      'Não. Por segurança, o saque deve ser direcionado a uma chave PIX vinculada ao titular da conta StartBet.',
  },
  {
    id: 'faq-cancelar-aposta',
    categoryId: 'apostas',
    question: 'É possível cancelar uma aposta depois de confirmada?',
    answer:
      'Apostas confirmadas não podem ser canceladas manualmente. Em casos específicos, a plataforma pode anular seleções conforme regras oficiais.',
  },
  {
    id: 'faq-bonus-saque',
    categoryId: 'bonus',
    question: 'O bônus pode ser sacado diretamente?',
    answer:
      'Bônus promocionais seguem regras próprias. Confira os requisitos de aposta e elegibilidade antes de solicitar retirada.',
  },
];
