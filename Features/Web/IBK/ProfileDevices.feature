# language: pt
@web @ibkDispositivosCadastrados
Funcionalidade: Dispositivos Cadastrados

  # Contexto: Logar no Internet Banking
  #   Dado que estou na página de Login
  #   Quando preencho o campo CPF com o valor "cabrito"
  #   E preencho o campo Senha com o valor "Pass123123*"
  #   E clico no botão Entrar
  #   E preencho o campo Código com o valor "576439"
  #   E clico no botão Entrar da tela de Solicitar SMS

  # Cenário: Remover dispostivo logado
  #   Dado estou na página Home do Internet Banking
  #   Quando clico no botão de Perfil no menu lateral na tela de Home
  #   E clico em Dispostivos cadastrados na tela de Minha Conta
  #   E clico no botão Desconectar na linha do dispostivo conectado atualmente na tela de Dispositivos cadastrados
  #   E clico no botão OK no Aviso de desconexão do dispositivo desconectado atualmente
  #   Então verifico que estou na tela de Login