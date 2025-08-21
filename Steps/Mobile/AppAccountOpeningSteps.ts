import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AccountOpeningActions } from '../../Pages/Mobile/AccountOpeningPageObject/AccountOpeningActions';

//PESSOA FISICA----------------------------------------------------------------------------------
When('preencho o campo CPF com o valor aleatório na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCPFRandom();
});

When('clico no botão Continuar na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.clickContinueButton();

  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(1500);
});

When('preencho o campo Email com o valor {string} na tela de Cadastrar do App', async function (this: World, email: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillEmail(email);
});

When('preencho o campo Celular com o valor {string} na tela de Cadastrar do App', async function (this: World, cellphone: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCellPhone(cellphone);
});

When('preencho o campo Código de validação com o valor {string} na tela de Cadastrar do App', async function (this: World, smscode: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillSMSCode(smscode);
});

When('preencho o campo Nome completo com o valor {string} na tela de Cadastrar do App', async function (this: World, name: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillName(name);
});

When('preencho o campo Data de nascimento com o valor {string} na tela de Cadastrar do App', async function (this: World, birthdate: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillBirthdate(birthdate);
});

When('preencho o campo Nome da mãe com o valor {string} na tela de Cadastrar do App', async function (this: World, mothername: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillMotherName(mothername);
});

When('marquei o checkbox Aceitar Termos de Uso na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.clickCheckBoxTerms();
});

When('marquei o checkbox Declaro que li e estou de acordo com a política de privacidade na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.clickCheckBoxPolicy();
});

When('preencho o campo Senha de acesso com o valor {string} na tela de Cadastrar do App', async function (this: World, password: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillPassword(password);
});

When('preencho o campo CEP com o valor {string} na tela de Cadastrar do App', async function (this: World, cep: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCEP(cep);

  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(5000);
});

When('preencho o campo Número com o valor {string} na tela de Cadastrar do App', async function (this: World, number: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillNumber(number);
});

When('preencho o campo Complemento com o valor {string} na tela de Cadastrar do App', async function (this: World, complement: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillComplement(complement);
});

When('clico no botão Iniciar Identificação na tela de Identificação do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.clickStartIdentificationButton();
});

//PESSOA JURIDICA----------------------------------------------------------------------------------
When('clico no botão Continuar na tela de Cadastrar Pessoa Juridica do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.clickContinueButton();

  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(1500);
});

When('preencho o campo CNPJ com o valor aleatório na tela de Cadastrar Pessoa Juridica do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCNPJRandom();
});

When('preencho o campo Email corporativo com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, email: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillEmail(email);
});

When('preencho o campo Celular corporativo com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, cellphone: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCellPhone(cellphone);
});

When('preencho o campo Código de validação com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, smscode: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillSMSCode(smscode);
});

When('preencho o campo Razão social com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, corporateReason: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCorporateReason(corporateReason);
});

When('preencho o campo Nome fantasia com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, fantasyName: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillFantasyName(fantasyName);
});

When('preencho o campo Inscrição estadual com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, stateRegistration: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillStateRegistration(stateRegistration);
});

When('preencho o campo Quando sua empresa foi aberta com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, corporationOpeningDate: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCorporationOpenDate(corporationOpeningDate);
});

When('preencho o campo Tipo empresa com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, corporationType: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCorporationType(corporationType);
});

When('preencho o campo CNAE com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, cnae: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCNAE(cnae);
});

When('preencho o campo Ramo de atuação com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, corporationCategory: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCorporationCategory(corporationCategory);
});

When('preencho o campo Faturamento mensal com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, income: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCorporationIncome(income);
});

When('preencho o campo CPF com o valor aleatório na tela de Cadastrar Pessoa Juridica do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCPFRandom();
});

When('preencho o campo Nome completo com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, name: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillName(name);
});

When('preencho o campo Data de nascimento com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, birthdate: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillBirthdate(birthdate);
});

When('preencho o campo Nome da mãe com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, mothername: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillMotherName(mothername);
});

When('preencho o campo Tipo represetante com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, representative: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillRepresentativeType(representative);
});

When('preencho o campo CEP residencial com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, representativeCEP: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillRepresentativeCEP(representativeCEP);
});

When('preencho o campo Número residencial com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, representativeNumber: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillRepresentativeNumber(representativeNumber);
});

When('preencho o campo Complemento residencial com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, representativeComplement: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillRepresentativeComplement(representativeComplement);
});

When('marquei o checkbox Aceitar Termos de Uso na tela de Cadastrar Pessoa Juridica do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.clickCheckBoxTerms();
});

When('marquei o checkbox Declaro que li e estou de acordo com a política de privacidade na tela de Cadastrar Pessoa Juridica do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.clickCheckBoxPolicy();
});

When('preencho o campo Senha de acesso com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, password: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillPassword(password);
});

When('preencho o campo CEP com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, cep: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillCEP(cep);
});

When('preencho o campo Número com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, number: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillNumber(number);
});

When('preencho o campo Complemento com o valor {string} na tela de Cadastrar Pessoa Juridica do App', async function (this: World, complement: string) {
  const accountOpeningActions = new AccountOpeningActions(this.mobileDriver!);
  await accountOpeningActions.fillComplement(complement);
});