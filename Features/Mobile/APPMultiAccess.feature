# language: pt
@mobile @mobileMultiacesso
Funcionalidade: Multi acesso aplicativo

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

  Cenário: Criar Conta para multi acesso aplicativo
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico na foto de perfil do usuário logado na tela Inicial do App
    E clico no botão Multi acesso na tela de Perfil do App
    E clico no botão Criar usuário na tela de Multi acessos do App
    E preencho o campo Nome completo com o valor "Teste Automacao" na tela de Multi acessos do App
    E preencho o campo Email completo com o valor "teste@email.com" na tela de Multi acessos do App
    E preencho o campo Celular com o valor "99925243121" na tela de Multi acessos do App
    E clico no botão Continuar na tela de Multi acessos do App
    E preencho o campo Login com o valor aleatório na tela de Multi acessos do App
    E preencho o campo Senha com o valor "22@@xxFF" na tela de Multi acessos do App
    E clico no botão Continuar na tela de Multi acessos do App
    E marco o checkbox Todos os acessos na tela de Multi acessos do App
    E clico no botão Continuar na tela de Multi acessos do App
    #Então verifico se o usuário com login "teste33" foi criado na tela de Multi acessos do App