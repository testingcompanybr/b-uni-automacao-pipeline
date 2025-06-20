# language: pt
@web @ibkCriacaoContaPessoaFisica
Funcionalidade: Criação Conta Pessoa Física

  Cenário: Conta PF - Criação De Conta PF
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    E preencho o campo Código de validação com o valor "112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Validação
    E marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Termos de Uso
    E marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Politica de Privacidade
    E preencho o campo Senha de acesso com o valor "@AAbbcc112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Credenciais
    E preencho o campo CEP com o valor "90250780" na tela de Abertura de Conta
    E preencho o campo Número com o valor "123456" na tela de Abertura de Conta
    E preencho o campo Complemento com o valor "Casa" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Endereço
    E começo o processo de verificação da IDWall na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Começar verificação na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Carregar um arquivo na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Carteira de Motorista - CNH na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Digital na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Entendi na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Pular na tela de Abertura de Conta na etapa de Identidade
    E faço o envio do documento CNH na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Enviar na tela de Abertura de Conta na etapa de Identidade
    E clico no botão Começar verificação na tela de Abertura de Conta na etapa de Identidade

  Cenário: Conta PF - Criação De Conta PF Com Dados Vazios Na Tela De Primeiros Passos
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "E-MAIL INVÁLIDO" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com CPF Incorreto
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor "628492600" na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "CPF INVÁLIDO" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com CPF Invalido
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor "62849260062" na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "CPF INVÁLIDO" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com CPF Vazio
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "CPF INVÁLIDO" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com Nome Vazio
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "PREENCHA TODOS OS CAMPOS" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com Nome Da Mãe Vazio
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "PREENCHA TODOS OS CAMPOS" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com E-mail Vazio
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "E-MAIL INVÁLIDO" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com Celular Vazio
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "NÚMERO DE CELULAR INVÁLIDO" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Com Data De Nascimento Vazia
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então a mensagem de erro "DATA INVÁLIDA" deve ser apresentada na tela de Abertura de Conta

  Cenário: Conta PF - Criação De Conta PF Não Informando Código SMS
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    Então o botão Continuar deve estar desabilitado na etapa de Validação

  Cenário: Conta PF - Criação De Conta PF Informando Código SMS Incorreto
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    E preencho o campo Código de validação com o valor "999999" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Validação
    Então a mensagem de erro "Token inválido" deve ser apresentada na tela de Abertura de Conta na etapa de Validação

  Cenário: Conta PF - Criação De Conta PF Não Informando Credenciais
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    E preencho o campo Código de validação com o valor "112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Validação
    E marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Termos de Uso
    E marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Politica de Privacidade
    Então o botão Continuar deve estar desabilitado na etapa de Credenciais

  Cenário: Conta PF - Criação De Conta PF Informando Senha Fora Do Padrão Exigido
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    E preencho o campo Código de validação com o valor "112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Validação
    E marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Termos de Uso
    E marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Politica de Privacidade
    E preencho o campo Senha de acesso com o valor "AAAAAA" na tela de Abertura de Conta
    Então o botão Continuar deve estar desabilitado na etapa de Credenciais

  Cenário: Conta PF - Criação De Conta PF Sem Informar CEP Na Tela De Endereço
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    E preencho o campo Código de validação com o valor "112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Validação
    E marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Termos de Uso
    E marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Politica de Privacidade
    E preencho o campo Senha de acesso com o valor "@AAbbcc112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Credenciais
    E preencho o campo Bairro com o valor "Santa Regina" na tela de Abertura de Conta
    E preencho o campo Logradouro com o valor "Rua Roma" na tela de Abertura de Conta
    E preencho o campo Número com o valor "123456" na tela de Abertura de Conta
    E preencho o campo Complemento com o valor "Casa" na tela de Abertura de Conta
    Então o botão Continuar deve estar desabilitado na etapa de Endereço

  Cenário: Criação De Conta PF Informando CEP Inválido Na Tela De Endereço
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    E preencho o campo Código de validação com o valor "112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Validação
    E marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Termos de Uso
    E marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Politica de Privacidade
    E preencho o campo Senha de acesso com o valor "@AAbbcc112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Credenciais
    E preencho o campo CEP com o valor "11111111" na tela de Abertura de Conta
    Então a mensagem de erro "Endereço não encontrado" deve ser apresentada na tela de Abertura de Conta na etapa de Endereço

  Cenário: Criação De Conta PF Informando CEP Incorreto Na Tela De Endereço
    Dado que estou na página de Login
    Quando clico no link Criar Conta
    E seleciono o tipo de conta Pessoa Física
    E clico no botão Continuar na tela de Tipo de Conta
    E preencho o campo CPF com o valor aleatório na tela de Abertura de Conta
    E preencho o campo Nome completo com o valor "Teste Automatizado" na tela de Abertura de Conta
    E preencho o campo Nome da mãe com o valor "Teste mae" na tela de Abertura de Conta
    E preencho o campo Email com o valor "teste@email.com" na tela de Abertura de Conta
    E preencho o campo Celular com o valor "11999999999" na tela de Abertura de Conta
    E preencho o campo Data de nascimento com o valor "01/10/1990" na tela de Abertura de Conta
    E preencho o campo Faturamento médio mensal com o valor "150000" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta
    E preencho o campo Código de validação com o valor "112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Validação
    E marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Termos de Uso
    E marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Politica de Privacidade
    E preencho o campo Senha de acesso com o valor "@AAbbcc112233" na tela de Abertura de Conta
    E clico no botão Continuar na tela de Abertura de Conta na etapa de Credenciais
    E preencho o campo CEP com o valor "54544564" na tela de Abertura de Conta
    Então a mensagem de erro "Endereço não encontrado" deve ser apresentada na tela de Abertura de Conta na etapa de Endereço