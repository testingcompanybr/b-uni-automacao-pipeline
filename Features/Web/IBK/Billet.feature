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

  # Cenário: Pagar boleto base, sem multa, sem juros, sem desconto
  #   Dado estou na página Home do Internet Banking
  #   Quando clico no botão de Pagar na tela de Home
  #   E clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento
  #   E preencho o campo Código do Boleto com o valor "23793381286008301352856000063307789840000150000" na tela de Pagar na etapa de Código de barras
  #   E clico no botão Avançar na tela de Pagar na etapa de Código de barras
  #   E clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento
  #   E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
  #   E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
  #   Então a tela Comprovante da transação deve ser apresentada

  Cenário: Pagar boleto com desconto
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Pagar na tela de Home
    E clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento
    E preencho o campo Código do Boleto com o valor "34198862666531252277792218900006890430000039322" na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Código de barras
    Então o campo de Descontos deve ser exibido na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E a tela Comprovante da transação deve ser apresentada