# language: pt
@web @backofficeLogin
Funcionalidade: BackOffice Login
   
  Cenário: Logar no BackOffice
    Dado que estou na tela de Login do BackOffice
    Quando preencho o campo Email com o valor "lucas.graeff@testingcompany.com.br" na tela de Login do BackOffice
    E preencho o campo Senha com o valor "Pass123123@" na tela de Login do BackOffice
    E clico no botão Entrar na tela de Login do BackOffice
    E preencho o campo Código TOTP com o valor "112233" na tela de Autenticação do BackOffice
    Então verifico que estou logado na Home do BackOffice