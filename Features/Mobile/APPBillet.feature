# language: pt
@mobile @mobileBoleto
Funcionalidade: Boleto aplicativo

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

  Cenário: Pagar boleto base, sem multa, sem juros, sem desconto no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
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
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    Então a tela de Comprovante do App deve ser exibida

  Cenário: Pagar boleto com desconto no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "34198862666531252277792218900006890430000039322" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    Então o campo de Descontos deve ser exibido na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    E a tela de Comprovante do App deve ser exibida

  Cenário: Pagar boleto com multa e juros no App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "00190000090100159000700117369173390420000098888" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    Então o campo de Multa deve ser exibido na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    E a tela de Comprovante do App deve ser exibida

  Cenário: Pagar boleto com multa e vencido App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "23790124009217400000702005449802190400000191577" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    Então o campo Data de Vencimento deve ter a data anterior ao dia atual na tela de Pagar conta do App
    E o campo de Juros deve ser exibido na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    E a tela de Comprovante do App deve ser exibida

  Cenário: Pagar boleto com juros e vencimento App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "23790280009224200000504010356006191140000080300" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    Então o campo Data de Vencimento deve ter a data anterior ao dia atual na tela de Pagar conta do App
    E o campo de Multa deve ser exibido na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    E a tela de Comprovante do App deve ser exibida

  Cenário: Pagar boleto com valor máximo e mínimo App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "34191570070404695481642042200008290440000032202" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    Então o campo Valor mínimo deve ser exibido na tela de Pagar conta do App
    E preencho o campo Valor do boleto com o valor "50000" na tela de Pagar conta do App
    E o campo Valor mínimo não deve ser mais exibido na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    E a tela de Comprovante do App deve ser exibida

  Cenário: Pagar boleto com valor máximo e mínimo com juros App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "34191760070778639037250800740008190570000013900" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    Então o campo Valor mínimo deve ser exibido na tela de Pagar conta do App
    E o campo de Multa deve ser exibido na tela de Pagar conta do App
    E preencho o campo Valor do boleto com o valor "50000" na tela de Pagar conta do App
    E o campo Valor mínimo não deve ser mais exibido na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    E a tela de Comprovante do App deve ser exibida

  Cenário: Pagar boleto com valor máximo e mínimo com desconto App
    Dado que estou na tela de Home do App
    Quando clico em Próximo no dialogo de Acesso de localização do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android
    E clico no botão Pagar na tela de Home do App
    E clico no botão Pagar boleto na tela de Home do App
    E clico no botão OK no dialogo de Permissão de câmera do App
    E clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android
    E clico no botão Inserir Código Manualmente na câmera do dispositivo
    E preencho o campo Código do boleto com "00190000090283633605305416182177190730000009900" na tela de Pagar conta do App
    E clico no botão Continuar na tela de Pagar conta do App
    Então o campo de Descontos deve ser exibido na tela de Pagar conta do App
    E preencho o campo Valor do boleto com o valor "20" na tela de Pagar conta do App
    E o campo Valor mínimo deve ser exibido na tela de Pagar conta do App
    E preencho o campo Valor do boleto com o valor "50000" na tela de Pagar conta do App
    E o campo Valor mínimo não deve ser mais exibido na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E clico no botão Confirmar na tela de Pagar conta do App
    E digito o PIN "112233" na tela de Pagar conta do App
    E clico no botão Ver Comprovante na tela de Pagar conta do App
    E a tela de Comprovante do App deve ser exibida