# language: pt
@mobile @mobileLogin
Funcionalidade: Login no aplicativo

  Cenário: Logar no app
    Dado que estou na página Inicial do App
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    Quando preencho o campo CPF com o valor "cabrito" na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "Pass123123*" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
    E clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    # Então verifico que estou logado no Aplicativo