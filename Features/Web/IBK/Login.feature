# language: pt
@web @ibkLogin
Funcionalidade: Login

  Cenário: Logar no Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    Então verifico que estou logado

  Cenário: Logout Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no perfil do usuário logado na tela de Home
    E clico no botão Sair no menu dropdown do perfil do usuário na tela de Home
    Então verifico que estou na tela de Login