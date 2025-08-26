# language: pt
@hibrid @mobileLimites
Funcionalidade: Limites aplicativo

  Contexto: Logar no BackOffice
    Dado que acesso o BackOffice
    Quando preencho o campo Email com o valor "lucas.graeff@testingcompany.com.br" na tela de Login do BackOffice
    E preencho o campo Senha com o valor "Pass123123@" na tela de Login do BackOffice
    E clico no botão Entrar na tela de Login do BackOffice
    E preencho o campo Código TOTP com o valor "112233" na tela de Autenticação do BackOffice

  Cenário: Transação de boleto com limite excedido no aplicativo
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
    E encerro o navegador web
    E acesso o Aplicativo
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    E preencho o campo CPF com o valor "cabrito" na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "Pass123123*" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
    E que estou na tela de Home do App
    E clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "23793381286008301352856000063307789840000150000" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    Então a mensagem "Você atingiu o seu limite por período, ou o limite por transação é mais baixo que o valor desejado" deve ser exibida na tela de Home do App

  Cenário: Transação de boleto com limite não excedido no aplicativo
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
    E preencho campo Novo limite com o valor "100000" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "NOTURNO", "PERÍODO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "999999999" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E clico no botão Editar na linha que contém os valores "BOLETO", "NOTURNO", "TRANSAÇÃO" na tela de Detalhes da Conta
    E preencho campo Novo limite com o valor "100000" na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta
    E clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta
    E encerro o navegador web
    E acesso o Aplicativo
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    E preencho o campo CPF com o valor "cabrito" na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "Pass123123*" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
    E que estou na tela de Home do App
    E clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "36490000190001508760400000706457500000000009990" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    Então a tela de Comprovante do App deve ser exibida

  Cenário: Transação de TED com limite excedido no aplicativo
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
    E encerro o navegador web
    E acesso o Aplicativo
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    E preencho o campo CPF com o valor "cabrito" na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "Pass123123*" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
    E que estou na tela de Home do App
    E clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Transferir na tela de Home do App
    E clico no botão TED na tela de Home do App
    E preencho o campo Pesquisar usuários com o valor "Lucas Ricardo Graeff" na tela de Transferir do App
    E clico na conta filtrada com a descrição "Lucas Ricardo Graeff, BANCO COOPERATIVO SICREDI S.A. • 50592-748, 037.335.950-09" na tela de Transferir do App
    E preencho o campo valor com "150" na tela de Transferir do App
    E clico no botão Continuar na tela de Transferir do App
    E clico no botão Confirmar na tela de Transferir do App
    E clico no botão Continuar na tela de Transferir do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    Então a mensagem "Você atingiu o seu limite por período, ou o limite por transação é mais baixo que o valor desejado" deve ser exibida na tela de Home do App

  Cenário: Transação de TED com limite não excedido no aplicativo
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
    E encerro o navegador web
    E acesso o Aplicativo
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    E preencho o campo CPF com o valor "cabrito" na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "Pass123123*" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
    E que estou na tela de Home do App
    E clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Transferir na tela de Home do App
    E clico no botão TED na tela de Home do App
    E preencho o campo Pesquisar usuários com o valor "Lucas Ricardo Graeff" na tela de Transferir do App
    E clico na conta filtrada com a descrição "Lucas Ricardo Graeff, BANCO COOPERATIVO SICREDI S.A. • 50592-748, 037.335.950-09" na tela de Transferir do App
    E preencho o campo valor com "200" na tela de Transferir do App
    E clico no botão Continuar na tela de Transferir do App
    E clico no botão Confirmar na tela de Transferir do App
    E clico no botão Continuar na tela de Transferir do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    E clico no botão Ver Comprovante na tela de Tranferência confirmada do App
    Então a tela de Comprovante do App deve ser exibida