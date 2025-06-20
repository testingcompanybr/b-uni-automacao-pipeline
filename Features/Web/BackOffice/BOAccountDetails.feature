# language: pt
@web @backofficeDetalhesConta
Funcionalidade: BackOffice Detalhes da Conta
   
  Contexto: Logar no BackOffice
    Dado que estou na tela de Login do BackOffice
    Quando preencho o campo Email com o valor "lucas.graeff@testingcompany.com.br" na tela de Login do BackOffice
    E preencho o campo Senha com o valor "Pass123123@" na tela de Login do BackOffice
    E clico no botão Entrar na tela de Login do BackOffice
    E preencho o campo Código TOTP com o valor "112233" na tela de Autenticação do BackOffice

  Cenário: Remover todos os dispositivos cadastrados na conta
    Dado que estou na tela Home do Backoffice
    Quando clico no botão para mostrar os Filtros avançados
    E preencho o campo CPF ou CNPJ com o valor "17698030091" nos Filtros avançados
    E clico no botão Filtrar nos Filtros avançados
    E clico no botão para visualizar o registro filtrado
    E clico no botão Dispositivos na tela de Detalhes da Conta
    E removo todos os dispositivos cadastrados clicando no botão Remover na tela de Detalhes da Conta
    Então não deve haver mais nenhum dispositivo cadastrado referente a conta selecionada