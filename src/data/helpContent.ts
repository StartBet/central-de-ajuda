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
    id: 'faq-pix-minimo-maximo',
    categoryId: 'depositos',
    question: 'Existe valor mínimo ou máximo para depósito via PIX?',
    answer:
      'Os limites podem variar por conta, método de pagamento e política de segurança. Confira o valor disponível na tela de depósito antes de gerar o PIX.',
  },
  {
    id: 'faq-pix-cpf-diferente',
    categoryId: 'depositos',
    question: 'O que acontece se eu pagar o PIX com outro CPF?',
    answer:
      'Pagamentos feitos por terceiros podem ficar pendentes ou ser recusados. Para evitar bloqueios, use uma conta bancária vinculada ao mesmo CPF cadastrado.',
  },
  {
    id: 'faq-deposito-comprovante',
    categoryId: 'depositos',
    question: 'Preciso guardar o comprovante do depósito?',
    answer:
      'Sim. O comprovante ajuda o suporte a localizar a transação caso o saldo não seja creditado automaticamente.',
  },
  {
    id: 'faq-documentos',
    categoryId: 'seguranca',
    question: 'Quais documentos posso enviar para validação?',
    answer:
      'Normalmente são aceitos documentos oficiais com foto e CPF. O arquivo precisa estar legível, atual e sem cortes.',
  },
  {
    id: 'faq-verificacao-pendente',
    categoryId: 'seguranca',
    question: 'Por que minha conta pode passar por verificação?',
    answer:
      'A verificação confirma identidade, titularidade de pagamento e segurança da conta. Isso é comum antes de saques, alterações sensíveis ou quando há divergência de dados.',
  },
  {
    id: 'faq-jogo-responsavel',
    categoryId: 'seguranca',
    question: 'Posso definir limites de jogo ou pausa na conta?',
    answer:
      'Recursos de jogo responsável podem incluir limites, pausa temporária e autoexclusão. Consulte a área da conta ou fale com o suporte para aplicar a opção adequada.',
  },
  {
    id: 'faq-chave-pix',
    categoryId: 'saques',
    question: 'Posso sacar para uma chave PIX de outra pessoa?',
    answer:
      'Não. Por segurança, o saque deve ser direcionado a uma chave PIX vinculada ao titular da conta StartBet.',
  },
  {
    id: 'faq-saque-analise',
    categoryId: 'saques',
    question: 'Por que meu saque está em análise?',
    answer:
      'Saques podem passar por conferência de dados, validação de titularidade e regras de segurança. O status pode ser acompanhado no histórico da carteira.',
  },
  {
    id: 'faq-saque-cancelado',
    categoryId: 'saques',
    question: 'Meu saque foi cancelado. O que devo conferir?',
    answer:
      'Verifique se a chave PIX pertence ao titular da conta, se os dados cadastrais estão corretos e se há algum bônus ativo com requisitos pendentes.',
  },
  {
    id: 'faq-recuperar-acesso',
    categoryId: 'conta-login',
    question: 'Não consigo acessar minha conta. O que fazer?',
    answer:
      'Use a recuperação de senha na tela de login e confirme se e-mail, telefone e CPF foram digitados corretamente. Se o acesso continuar bloqueado, acione o suporte.',
  },
  {
    id: 'faq-alterar-dados',
    categoryId: 'conta-login',
    question: 'Posso alterar meus dados cadastrais?',
    answer:
      'Alguns dados podem exigir validação do suporte por segurança. Mantenha telefone, e-mail e documentos atualizados para evitar falhas em saques e verificações.',
  },
  {
    id: 'faq-cancelar-aposta',
    categoryId: 'apostas',
    question: 'É possível cancelar uma aposta depois de confirmada?',
    answer:
      'Apostas confirmadas não podem ser canceladas manualmente. Em casos específicos, a plataforma pode anular seleções conforme regras oficiais.',
  },
  {
    id: 'faq-aposta-pendente',
    categoryId: 'apostas',
    question: 'Por que uma aposta fica pendente?',
    answer:
      'Uma aposta pode ficar pendente enquanto o evento não termina, enquanto o resultado oficial não é confirmado ou quando há revisão de mercado.',
  },
  {
    id: 'faq-odd-mudou',
    categoryId: 'apostas',
    question: 'Por que a odd mudou antes de confirmar a aposta?',
    answer:
      'Odds variam conforme movimentação do mercado, tempo de jogo e informações do evento. A aposta só usa a odd aceita no momento da confirmação.',
  },
  {
    id: 'faq-bonus-saque',
    categoryId: 'bonus',
    question: 'O bônus pode ser sacado diretamente?',
    answer:
      'Bônus promocionais seguem regras próprias. Confira os requisitos de aposta e elegibilidade antes de solicitar retirada.',
  },
  {
    id: 'faq-rollover',
    categoryId: 'bonus',
    question: 'O que é rollover em uma promoção?',
    answer:
      'Rollover é o requisito de apostas que precisa ser cumprido antes de liberar ganhos promocionais. Ele pode variar por campanha, prazo e tipo de jogo.',
  },
  {
    id: 'faq-bonus-expirou',
    categoryId: 'bonus',
    question: 'O que acontece se uma promoção expirar?',
    answer:
      'Quando o prazo termina, benefícios e requisitos pendentes podem ser encerrados conforme o regulamento da campanha.',
  },
];
