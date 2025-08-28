# language: pt
@web @ibkSaldoDiario
Funcionalidade: Saldo Diário

  Contexto: Logar no Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS

  Cenário: Verificar saldo do dia depois de fazer uma transação
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Ver Extrato na tela de Home
    E armazeno o saldo do dia
    E clico no botão de Início no menu lateral na tela de Extrato
    E clico no botão de Pagar na tela de Home
    E clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento
    E preencho o campo Código do Boleto com o valor "23793381286008301352856000063307789840000150000" na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão de Início no menu lateral na tela de Extrato
    E clico no botão de Ver Extrato na tela de Home
    Então o saldo do dia deve estar diferente de anteriormente