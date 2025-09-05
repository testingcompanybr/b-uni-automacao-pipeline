# language: pt
@mobile @mobileSaldoDiario
Funcionalidade: Saldo diario aplicativo

  Contexto: Logar no app
    Dado que estou na página Inicial do App
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    Quando preencho o campo CPF com o valor "agua" na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "Pass123123*" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
 
  Cenário: Verificar saldo do dia depois de fazer uma transação no aplicativo
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "23793381286008301352856000063307789840000150000" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Aprovar na tela de Aprovações do App
    E clico no botão Aprovar no pop-up Aprovar transação na tela de Aprovações do App
    E digito o PIN "112233" na tela de Aprovações do App
    E aguardo a mensagem de transação realizada com sucesso sumir da tela de app
    E clico no botão Ver extrato na tela de Home do App
    E armazeno o valor do saldo dia na tela de Extrato do App
    E clico no botão de Início na tela de Extrato do App
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "23793381286008301352856000063307789840000150000" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Aprovar na tela de Aprovações do App
    E clico no botão Aprovar no pop-up Aprovar transação na tela de Aprovações do App
    E digito o PIN "112233" na tela de Aprovações do App
    E aguardo a mensagem de transação realizada com sucesso sumir da tela de app
    E clico no botão Ver extrato na tela de Home do App
    Então o saldo do dia deve estar diferente de anteriormente na tela de Extrato do App