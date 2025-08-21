# language: pt
@web @ibkSaldoEmConta
Funcionalidade: Saldo em Conta

  Contexto: Logar no Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS

  Cenário: Verificar Saldo Da Conta
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Visualizar Saldo em Conta na tela de Home
    Então o Saldo disponível em conta deve ser exibido

  Cenário: Verificar Extrato Da Conta
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Ver Extrato na tela de Home
    Então verifico que estou na tela de Extrato