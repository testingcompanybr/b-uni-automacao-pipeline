# language: pt
@mobile @mobileMultiacessoTransferencia
Funcionalidade: Multi acesso transferência aplicativo

  Cenário: Transferencia multiacesso no App
    Dado que estou na página Inicial do App
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    Quando preencho o campo CPF com o valor login gerado através do multi acesso na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "22@@xxFF" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
    E clico no botão OK na tela de Alteração de Credenciais do App
    E preencho o campo Código com o valor "112233" na tela de Alteração de Credenciais do App
    E clico no botão Continuar na tela de Alteração de Credenciais do App
    E preencho o campo Senha com o valor "22@@xxFF" na tela de Alteração de Credenciais do App
    E clico no botão Confirmar na tela de Alteração de Credenciais do App
    E clico no botão OK na tela de Alteração de PIN do App
    E preencho o campo Código com o valor "112233" na tela de Alteração de PIN do App
    E clico no botão Continuar na tela de Alteração de PIN do App
    E digito o PIN "112233" na tela de Alteração de PIN do App
    E clico no botão Continuar na tela de Alteração de PIN do App
    E que estou na tela de Home do App
    E clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Transferir na tela de Home do App
    E clico no botão Para b.uni na tela de Home do App
    E preencho o campo valor com "Bruno Cabral" na tela de Transferir do App
    E clico na conta filtrada com a descrição ", Bruno Cabral, 176.980.300-91" na tela de Transferir do App
    E preencho o campo valor com "200" na tela de Transferir do App
    E clico no botão Continuar na tela de Transferir do App
    E clico no botão Confirmar na tela de Transferir do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    E clico no botão Aprovar na tela de Aprovações do App
    E clico no botão Aprovar no pop-up Aprovar transação na tela de Aprovações do App 
    E digito o PIN "112233" na tela de Aprovações do App
    Então a mensagem Transferência enviada deve ser exibida na tela de Home do App