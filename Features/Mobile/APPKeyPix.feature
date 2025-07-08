# language: pt
@mobile @mobileKeyPix
Funcionalidade: Chave Pix aplicativo

  Contexto: Logar no app
    Dado que estou na página Inicial do App
    E clico em Permitir no dialogo de notificações do Android
    E clico no botão Entrar na tela Inicial do App
    Quando preencho o campo CPF com o valor "cabrito" na tela de Login do App
    E clico no botão Continuar na tela de Login do App
    E preencho o campo Senha com o valor "Pass123123*" na tela de Login do App
    E clico no botão Entrar na tela de Login do App
    E clico no botão Agora não no dialogo do FaceID na tela de Login do App
    E preencho o campo Código com o valor "576439" na tela de Autorização do App
    E clico no botão Entrar na tela de Login do App na tela de Autorização do App
 
  Cenário: Criação de Chave Pix aleatória e depois apagar no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pix na tela de Home do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão + na tela de Pix do App
    E clico no botão Chave aleatória na tela de Tipo de Chave do App
    E clico no botão Continuar na tela de Tipo de Chave do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    Então deve haver uma chave "Chave aleatória" cadastrada na tela de Pix do App
    E clico no botão de 3 pontos da chave pix na tela de Pix do App
    E clico no botão Apagar chave Pix na tela de Pix do App
    E a chave "Chave aleatória" deve ter sido excluida na tela de Pix do App

  Cenário: Criação de Chave Pix CPF/CNPJ e depois apagar no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pix na tela de Home do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão + na tela de Pix do App
    E clico no botão CPF CNPJ com o valor "176.980.300-91" na tela de Tipo de Chave do App
    E clico no botão Continuar na tela de Tipo de Chave do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    Então deve haver uma chave "CPF/CNPJ" cadastrada na tela de Pix do App
    E clico no botão de 3 pontos da chave pix na tela de Pix do App
    E clico no botão Apagar chave Pix na tela de Pix do App
    E a chave "CPF/CNPJ" deve ter sido excluida na tela de Pix do App

  Cenário: Criação de Chave Pix aleatória no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pix na tela de Home do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão + na tela de Pix do App
    E clico no botão Chave aleatória na tela de Tipo de Chave do App
    E clico no botão Continuar na tela de Tipo de Chave do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    Então deve haver uma chave "Chave aleatória" cadastrada na tela de Pix do App

  Cenário: Criação de Chave Pix CPF/CNPJ no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pix na tela de Home do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão + na tela de Pix do App
    E clico no botão CPF CNPJ com o valor "176.980.300-91" na tela de Tipo de Chave do App
    E clico no botão Continuar na tela de Tipo de Chave do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    Então deve haver uma chave "CPF/CNPJ" cadastrada na tela de Pix do App