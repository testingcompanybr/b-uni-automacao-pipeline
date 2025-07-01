# language: pt
@web @ibkPix
Funcionalidade: Pix

  Contexto: Logar no Internet Banking
    Dado que estou na página de Login
    Quando preencho o campo CPF com o valor "cabrito"
    E preencho o campo Senha com o valor "Pass123123*"
    E clico no botão Entrar
    E preencho o campo Código com o valor "576439"
    E clico no botão Entrar da tela de Solicitar SMS

  Cenário: Pix de Pessoa Fisíca validando extrato do remetente
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Transferir na tela de Pix
    E preencho o campo Buscar por nome com o valor "Martin" na tela de Transferir Via Pix
    E clico na conta filtrada na tela de Transferir Via Pix na etapa de Contatos
    E preencho o campo valor com "1" na tela Transferir Via Pix na etapa de Valor
    E clico no botão Avançar na tela Transferir Via Pix na etapa de Valor
    E preencho o campo descrição com o valor "teste" Transferir Via Pix na etapa de Descrição
    E clico no botão Avançar na tela Transferir Via Pix na etapa de Descrição
    E clico no botão Confirmar na tela de Transferir Via Pix na etapa de Confirmar
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Transferir Via Pix na etapa de Confirmar
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Transferir Via Pix na etapa de Confirmar
    E clico no botão de Extrato no menu lateral na tela de Home
    E clico na última movimentação para abrir o comprovante na tela de Extrato
    Então verifico que estou na tela de Comprovante
    E o Tipo de transação deve ser "PIX" na tela de Comprovante
    E o Valor deve ser "R$ 0,01" na tela de Comprovante
    E o Nome da Conta de origem deve ser "Bruno Cabral" na tela de Comprovante
    E a Instituição da Conta de origem deve ser "B.UNI" na tela de Comprovante
    E o Nome da Conta de destino deve ser "martin gael lopes" na tela de Comprovante
    E a Instituição da Conta de destino deve ser "SER FINANCE SCD S.A." na tela de Comprovante
    E a Agência da Conta de destino deve ser "0001" na tela de Comprovante
    E a Conta da Conta de destino deve ser "219" na tela de Comprovante
    E a Descrição da transferência deve ser "teste" na tela de Comprovante
    E clico no botão Compartilhar na tela de Comprovante
    E clico no botão Enviar por email no modal de Comprovante da transação na tela de Comprovante
    E a mensagem "Comprovante enviado por email" deve ser apresentada na tela de Comprovante

  Cenário: Criação de Chave Pix aleatória
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Criar chave na tela de Pix
    E clico no botão Chave aleatória na tela de Nova Chave na etapa de Tipo de chave
    E clico no botão Avançar na tela de Nova Chave na etapa de Tipo de chave
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
    Então deve haver uma "Chave aleatória" cadastrada na tela de Pix
    E clico no botão de 3 pontos da chave "Chave aleatória" na tela de Pix
    E clico no botão Apagar chave Pix na tela de Pix
    E a chave "Chave aleatória" deve ter sido excluida na tela de Pix

  Cenário: Criação de Chave Pix CPF/CNPJ
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Criar chave na tela de Pix
    E clico no botão CPF CNPJ na tela de Nova Chave na etapa de Tipo de chave
    E clico no botão Avançar na tela de Nova Chave na etapa de Tipo de chave
    E digito o PIN "112233" no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
    E clico no botão Confirmar no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação
    Então deve haver uma "CPF/CNPJ" cadastrada na tela de Pix
    E clico no botão de 3 pontos da chave "CPF/CNPJ" na tela de Pix
    E clico no botão Apagar chave Pix na tela de Pix
    E a chave "CPF/CNPJ" deve ter sido excluida na tela de Pix

  Cenário: Tranferência Pix Copia e Cola
    Dado estou na página Home do Internet Banking
    Quando clico no botão de Pix no menu lateral na tela de Home
    E clico no botão Cobrar na tela de Pix
    E preencho o campo valor com "1" na tela Receber na etapa de Valor
    E clico no botão Continuar na tela Receber na etapa de Valor
    E preencho o campo Descrição com o valor "Teste cobranca pix" na tela Receber na etapa de Descrição
    E clico no botão Gerar QRcode na tela Receber na etapa de Descrição
    E clico no botão Copiar na tela Receber na etapa de QRcode Pix
    E clico no botão de Início no menu lateral na tela Receber na etapa de QRcode Pix
    E clico no perfil do usuário logado na tela de Home
    E clico no botão Sair no menu dropdown do perfil do usuário na tela de Home
    E preencho o campo CPF com o valor "agua"
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