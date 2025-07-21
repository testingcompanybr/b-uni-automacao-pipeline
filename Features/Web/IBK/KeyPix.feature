# language: pt
@web @ibkChavePix
Funcionalidade: Chave Pix

  Contexto: Logar no Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS

  # Cenário: Criação de Chave Pix aleatória e depois apagar
  #   Dado estou na página Home do Internet Banking
  #   Quando clico no botão de Pix no menu lateral na tela de Home
  #   E clico no botão Criar chave na tela de Pix
  #   E clico no botão Chave aleatória na tela de Nova Chave na etapa de Tipo de chave
  #   E clico no botão Avançar na tela de Nova Chave na etapa de Tipo de chave
  #   E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   Então deve haver uma "Chave aleatória" cadastrada na tela de Pix
  #   E clico no botão de 3 pontos da chave "Chave aleatória" na tela de Pix
  #   E clico no botão Apagar chave Pix na tela de Pix
  #   E a chave "Chave aleatória" deve ter sido excluida na tela de Pix

  # Cenário: Criação de Chave Pix CPF/CNPJ e depois apagar
  #   Dado estou na página Home do Internet Banking
  #   Quando clico no botão de Pix no menu lateral na tela de Home
  #   E clico no botão Criar chave na tela de Pix
  #   E clico no botão CPF CNPJ na tela de Nova Chave na etapa de Tipo de chave
  #   E clico no botão Avançar na tela de Nova Chave na etapa de Tipo de chave
  #   E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   Então deve haver uma "CPF/CNPJ" cadastrada na tela de Pix
  #   E clico no botão de 3 pontos da chave "CPF/CNPJ" na tela de Pix
  #   E clico no botão Apagar chave Pix na tela de Pix
  #   E a chave "CPF/CNPJ" deve ter sido excluida na tela de Pix

  # Cenário: Criação de Chave Pix aleatória
  #   Dado estou na página Home do Internet Banking
  #   Quando clico no botão de Pix no menu lateral na tela de Home
  #   E clico no botão Criar chave na tela de Pix
  #   E clico no botão Chave aleatória na tela de Nova Chave na etapa de Tipo de chave
  #   E clico no botão Avançar na tela de Nova Chave na etapa de Tipo de chave
  #   E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   Então deve haver uma "Chave aleatória" cadastrada na tela de Pix

  # Cenário: Criação de Chave Pix CPF/CNPJ
  #   Dado estou na página Home do Internet Banking
  #   Quando clico no botão de Pix no menu lateral na tela de Home
  #   E clico no botão Criar chave na tela de Pix
  #   E clico no botão CPF CNPJ na tela de Nova Chave na etapa de Tipo de chave
  #   E clico no botão Avançar na tela de Nova Chave na etapa de Tipo de chave
  #   E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
  #   Então deve haver uma "CPF/CNPJ" cadastrada na tela de Pix