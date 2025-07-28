# language: pt
@web @backofficeLimites
Funcionalidade: BackOffice Limites
   
  Contexto: Logar no BackOffice
    Dado que estou na tela de Login do BackOffice
    Quando preencho o campo Email com o valor "lucas.graeff@testingcompany.com.br" na tela de Login do BackOffice
    E preencho o campo Senha com o valor "Pass123123@" na tela de Login do BackOffice
    E clico no botão Entrar na tela de Login do BackOffice
    E preencho o campo Código TOTP com o valor "112233" na tela de Autenticação do BackOffice

  Cenário: Transação de boleto com limite excedido
    Dado que estou na tela Home do Backoffice
    Quando clico no botão para mostrar os Filtros avançados
    E preencho o campo CPF ou CNPJ com o valor "17698030091" nos Filtros avançados
    E clico no botão Filtrar nos Filtros avançados
    E clico no botão para visualizar o registro filtrado
    E clico no botão Limites transacionais na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "DIURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "DIURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "5000" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "NOTURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "NOTURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "5000" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E vou para a página de Login do IBK
    E preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão de Pagar na tela de Home
    E clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento
    E preencho o campo Código do Boleto com o valor "23793381286008301352856000063307789840000150000" na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    Então a mensagem "Você atingiu o seu limite por período, ou o limite por transação é mais baixo que o valor desejado" deve ser exibida na tela de Pagar na etapa de Detalhes do pagamento

  Cenário: Transação de boleto com limite não excedido
    Dado que estou na tela Home do Backoffice
    Quando clico no botão para mostrar os Filtros avançados
    E preencho o campo CPF ou CNPJ com o valor "17698030091" nos Filtros avançados
    E clico no botão Filtrar nos Filtros avançados
    E clico no botão para visualizar o registro filtrado
    E clico no botão Limites transacionais na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "DIURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "DIURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "500000" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "NOTURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "NOTURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "500000" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E vou para a página de Login do IBK
    E preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão de Pagar na tela de Home
    E clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento
    E preencho o campo Código do Boleto com o valor "23793381286008301352856000063307789840000150000" na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Código de barras
    E clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento
    Então a tela Comprovante da transação deve ser apresentada