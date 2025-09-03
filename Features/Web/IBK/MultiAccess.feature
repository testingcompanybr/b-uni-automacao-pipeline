# language: pt
@web @ibkMultiAcesso
Funcionalidade: Multi acesso

  Contexto: Logar no Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "agua"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS

  # Cenário: Criar Conta para multi acesso
  #   Dado estou na página Home do Internet Banking
  #   Quando clico no botão de Minha conta na tela de Home
  #   E clico no botão Multi acessos na tela de Minha conta
  #   E clico no botão Criar usuário na tela de Multi acessos
  #   E preencho o campo Nome com o valor "Teste Automacao" na tela de Conta multi acesso
  #   E preencho o campo Email com o valor "teste@email.com" na tela de Conta multi acesso
  #   E preencho o campo Celular com o valor "999252431" na tela de Conta multi acesso
  #   E clico no botão Continuar na tela de Conta multi acesso
  #   E preencho o campo Login com o valor "teste25" na tela de Credenciais multi acesso
  #   E preencho o campo Senha com o valor "22@@xxFF" na tela de Credenciais multi acesso
  #   E clico no botão Continuar na tela de Credenciais multi acesso
  #   E clico no botão Continuar na tela de Permissões multi acesso
  #   Então verifico se o usuário com login "teste25" foi criado na tela de Multi acessos

  Cenário: Criar Conta para multi acesso e apagar
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Minha conta na tela de Home
    E clico no botão Multi acessos na tela de Minha conta
    E clico no botão Criar usuário na tela de Multi acessos
    E preencho o campo Nome com o valor "Teste Automacao" na tela de Conta multi acesso
    E preencho o campo Email com o valor "teste@email.com" na tela de Conta multi acesso
    E preencho o campo Celular com o valor "999252431" na tela de Conta multi acesso
    E clico no botão Continuar na tela de Conta multi acesso
    E preencho o campo Login com o valor "teste40" na tela de Credenciais multi acesso
    E preencho o campo Senha com o valor "22@@xxFF" na tela de Credenciais multi acesso
    E clico no botão Continuar na tela de Credenciais multi acesso
    E clico no botão Continuar na tela de Permissões multi acesso
    E clico no card do usuário com login "teste40" na tela de Multi acessos
    E clico no botão Remover usuário na tela de Multi acessos
    E clico no botão Excluir na tela de Multi acessos
    Então o card do usuário com login "teste40" não deve mais estar visível na tela de Multi acessos