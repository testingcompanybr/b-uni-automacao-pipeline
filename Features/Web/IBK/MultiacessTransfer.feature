# language: pt
@web @ibkMultiacessoTransferencia
Funcionalidade: Multiacesso Transferência

  Cenário: Transferência multiacesso
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
    E clico no botão de Transferir na tela de Home
    E clico no botão PARA b.Uni na tela de Transferência na etapa de Tipo de Transferência
    E preencho o campo Buscar por nome com o valor "Bruno Cabral" na tela de Transferência na etapa de Conta para transferência
    E clico na conta filtrada na tela de Transferência na etapa de Conta para transferência
    E preencho o campo valor com "400" na tela de Transferência na etapa de Valor Solicitado
    E clico no botão Avançar na tela de Transferência na etapa de Valor Solicitado
    E clico no botão Confirmar na tela de Transferência na etapa de Confirmação
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação
    E clico no botão Aprovar na tela de Detalhes da transação
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Detalhes da transação
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Detalhes da transação
    Então a tela Comprovante da transação deve ser apresentada