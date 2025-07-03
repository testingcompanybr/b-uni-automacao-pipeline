# language: pt
@web @ibkBoleto
Funcionalidade: Boleto

  Contexto: Logar no Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS

  Cenário: Pagar boleto
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Pagar na tela de Home
    E clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento
    E preencho o campo Código do Boleto com o valor "" na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Código de barras