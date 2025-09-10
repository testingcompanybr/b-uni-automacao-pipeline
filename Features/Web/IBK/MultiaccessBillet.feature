# language: pt
@web @ibkMultiacessoBoleto
Funcionalidade: Multiacesso boleto

  Cenário: Pagar boleto multiacesso
    Dado que estou na página de Login
    Quando preencho o campo CPF com o login gerado através do multi acesso
    E preencho o campo Senha com o valor "22@@xxFF"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão Ok na tela de Criação de Senha
    E preencho o campo Código com o valor "112233" na tela de Criação de Senha
    E clico no botão Próximo na tela de Criação de Senha
    E preencho o campo Senha com o valor "22@@xxFF" na tela de Criação de Senha
    E clico no botão Confirmar na tela de Criação de Senha
    E clico no botão Ok na tela de Criação de PIN
    E preencho o campo Código com o valor "112233" na tela de Criação de PIN
    E clico no botão Próximo na tela de Criação de PIN
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Criação de PIN
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Criação de PIN
    E clico no botão de Pagar na tela de Home
    E clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento
    E preencho o campo Código do Boleto com o valor "23793381286008301352856000063307789840000150000" na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão Aprovar na tela de Detalhes da transação
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Detalhes da transação
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Detalhes da transação
    Então a tela Comprovante da transação deve ser apresentada