# language: pt
@mobile @mobilePix
Funcionalidade: Pix aplicativo

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
 
  Cenário: Pix de Pessoa Fisíca validando extrato do remetente no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pix na tela de Home do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Próximo na tela de instruções do Pix do App
    E clico no botão Transferir na tela de Pix do App
    E preencho o campo Pesquisar usuários com o valor "Martin" na tela de Transferir Pix do App
    E clico na conta filtrada com a descrição "Martin, Chave:  924.103.828-43" na tela de Transferir Pix do App
    E preencho o campo valor com "1" na tela de Pague com Pix do App
    E clico no botão Continuar na tela de Pague com Pix do App
    E clico no botão Confirmar na tela de Confirmação de Pix do App
    E digito o PIN "112233" na tela de preenchimento do PIN do App
    E clico no botão Ver Comprovante na tela de Pix Confirmado do App
    E clico no botão Fechar na tela de Comprovante do App
    E clico no botão Extrato na tela de Home do App
    E clico na primeira transação que contenha o nome "MARTIN GAEL LOPES" na tela de Extrato do App
    Então o Tipo de Transação deve ser "Pix" na tela de Comprovante do App
    E a Instituição da Conta origem deve ser "B.UNI" na tela de Comprovante do App
    E o Nome da Conta origem deve ser "Bruno Cabral" na tela de Comprovante do App
    E a Agência da Conta origem deve ser "00019" na tela de Comprovante do App
    E a Conta da Conta origem deve ser "0000001033" na tela de Comprovante do App
    E a Instituição da Conta destino deve ser "SER FINANCE SCD S.A." na tela de Comprovante do App
    E o Nome da Conta destino deve ser "martin gael lopes" na tela de Comprovante do App
    E a Agência da Conta destino deve ser "1" na tela de Comprovante do App
    E a Conta da Conta destino deve ser "219" na tela de Comprovante do App
    E a Descrição deve ser "Para martin gael lopes" na tela de Comprovante do App
    E clico no botão Compartilhar na tela de Comprovante do App
    E clico no botão Imagem no pop-up de Compartilhar na tela de Comprovante do App

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
    # Então deve haver uma chave aleatória cadastrada na tela de Pix do App

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
    # Então deve haver uma CPF CNPJ cadastrada na tela de Pix do App