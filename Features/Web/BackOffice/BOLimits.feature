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
    Então a mensagem "Você atingiu o seu limite por período, ou o limite por transação é mais baixo que o valor desejado. Entre em contato com nossa Central de Atendimento caso queira alterar esse limite." deve ser exibida na tela de Pagar na etapa de Detalhes do pagamento

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

  Cenário: Transação de pix com limite excedido
    Dado que estou na tela Home do Backoffice
    Quando clico no botão para mostrar os Filtros avançados
    E preencho o campo CPF ou CNPJ com o valor "17698030091" nos Filtros avançados
    E clico no botão Filtrar nos Filtros avançados
    E clico no botão para visualizar o registro filtrado
    E clico no botão Limites transacionais na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "DIURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "DIURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "100" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "NOTURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "NOTURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "100" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E vou para a página de Login do IBK
    E preencho o campo CPF com o valor "agua"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão Entrar da tela de Selecionar Conta
    E clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Cobrar na tela de Pix
    E preencho o campo valor com "200" na tela Receber na etapa de Valor
    E clico no botão Continuar na tela Receber na etapa de Valor
    E preencho o campo Descrição com o valor "Teste cobranca pix" na tela Receber na etapa de Descrição
    E clico no botão Gerar QRcode na tela Receber na etapa de Descrição
    E clico no botão Copiar na tela Receber na etapa de QRcode Pix
    E clico no botão de Início no menu lateral na tela Receber na etapa de QRcode Pix
    E clico no perfil do usuário logado na tela de Home
    E clico no botão Sair no menu dropdown do perfil do usuário na tela de Home
    E preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Copia e cola na tela de Pix
    E colo o código pix copiado anteriormente na tela de Pix Copia e Cola na etapa de Pagar
    E clico no botão Continuar na tela de Pix Copia e Cola na etapa de Pagar
    E clico no botão Confirmar na tela de Pix Copia e Cola na etapa de Detalhes
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pix Copia e Cola na etapa de Detalhes
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pix Copia e Cola na etapa de Detalhes
    Então a mensagem "Você atingiu o seu limite por período, ou o limite por transação é mais baixo que o valor desejado. Entre em contato com nossa Central de Atendimento caso queira alterar esse limite." deve ser exibida na tela de Pix Copia e Cola na etapa de Detalhes

  Cenário: Transação de pix com limite não excedido
    Dado que estou na tela Home do Backoffice
    Quando clico no botão para mostrar os Filtros avançados
    E preencho o campo CPF ou CNPJ com o valor "17698030091" nos Filtros avançados
    E clico no botão Filtrar nos Filtros avançados
    E clico no botão para visualizar o registro filtrado
    E clico no botão Limites transacionais na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "DIURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "DIURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "500" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "NOTURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "PIX", "NOTURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "500" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E vou para a página de Login do IBK
    E preencho o campo CPF com o valor "agua"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão Entrar da tela de Selecionar Conta
    E clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Cobrar na tela de Pix
    E preencho o campo valor com "400" na tela Receber na etapa de Valor
    E clico no botão Continuar na tela Receber na etapa de Valor
    E preencho o campo Descrição com o valor "Teste cobranca pix" na tela Receber na etapa de Descrição
    E clico no botão Gerar QRcode na tela Receber na etapa de Descrição
    E clico no botão Copiar na tela Receber na etapa de QRcode Pix
    E clico no botão de Início no menu lateral na tela Receber na etapa de QRcode Pix
    E clico no perfil do usuário logado na tela de Home
    E clico no botão Sair no menu dropdown do perfil do usuário na tela de Home
    E preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Copia e cola na tela de Pix
    E colo o código pix copiado anteriormente na tela de Pix Copia e Cola na etapa de Pagar
    E clico no botão Continuar na tela de Pix Copia e Cola na etapa de Pagar
    E clico no botão Confirmar na tela de Pix Copia e Cola na etapa de Detalhes
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Pix Copia e Cola na etapa de Detalhes
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pix Copia e Cola na etapa de Detalhes
    Então a tela Comprovante da transação deve ser apresentada

  Cenário: Transação de TED com limite excedido
    Dado que estou na tela Home do Backoffice
    Quando clico no botão para mostrar os Filtros avançados
    E preencho o campo CPF ou CNPJ com o valor "17698030091" nos Filtros avançados
    E clico no botão Filtrar nos Filtros avançados
    E clico no botão para visualizar o registro filtrado
    E clico no botão Limites transacionais na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "DIURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "DIURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "100" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "NOTURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "NOTURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "100" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E vou para a página de Login do IBK
    E preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão de Transferir na tela de Home
    E clico no botão TED na tela de Transferência na etapa de Tipo de Transferência
    E preencho o campo Buscar por nome com o valor "Lucas Ricardo Graeff" na tela de Transferência na etapa de Conta para transferência
    E clico na conta filtrada na tela de Transferência na etapa de Conta para transferência
    E preencho o campo valor com "400" na tela de Transferência na etapa de Valor Solicitado
    E clico no botão Avançar na tela de Transferência na etapa de Valor Solicitado
    E clico no botão Confirmar na tela de Transferência na etapa de Confirmação
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação
    Então a mensagem "Você atingiu o seu limite por período, ou o limite por transação é mais baixo que o valor desejado. Entre em contato com nossa Central de Atendimento caso queira alterar esse limite." deve ser exibida na tela de Transferência na etapa de Confirmação

  Cenário: Transação de TED com limite não excedido
    Dado que estou na tela Home do Backoffice
    Quando clico no botão para mostrar os Filtros avançados
    E preencho o campo CPF ou CNPJ com o valor "17698030091" nos Filtros avançados
    E clico no botão Filtrar nos Filtros avançados
    E clico no botão para visualizar o registro filtrado
    E clico no botão Limites transacionais na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "DIURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "DIURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "500" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "NOTURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "TED", "NOTURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "500" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E vou para a página de Login do IBK
    E preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS
    E clico no botão de Transferir na tela de Home
    E clico no botão TED na tela de Transferência na etapa de Tipo de Transferência
    E preencho o campo Buscar por nome com o valor "Lucas Ricardo Graeff" na tela de Transferência na etapa de Conta para transferência
    E clico na conta filtrada na tela de Transferência na etapa de Conta para transferência
    E preencho o campo valor com "200" na tela de Transferência na etapa de Valor Solicitado
    E clico no botão Avançar na tela de Transferência na etapa de Valor Solicitado
    E clico no botão Confirmar na tela de Transferência na etapa de Confirmação
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação
    Então a tela Comprovante da transação deve ser apresentada