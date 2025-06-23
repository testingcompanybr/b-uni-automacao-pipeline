import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AccountOpeningActions } from '../../Pages/Mobile/AccountOpeningPageObject/AccountOpeningActions';
import type { Browser } from 'webdriverio';

When('preencho o campo CPF com o valor aleatório na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillCPFRandom();
});

When('clico no botão Continuar na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.clickContinueButton();
});

When('preencho o campo Email com o valor {string} na tela de Cadastrar do App', async function (this: World, email: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillEmail(email);
});

When('preencho o campo Celular com o valor {string} na tela de Cadastrar do App', async function (this: World, cellphone: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillCellPhone(cellphone);
});

When('preencho o campo Código de validação com o valor {string} na tela de Cadastrar do App', async function (this: World, smscode: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillSMSCode(smscode);
});

When('preencho o campo Nome completo com o valor {string} na tela de Cadastrar do App', async function (this: World, name: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillName(name);
});

When('preencho o campo Data de nascimento com o valor {string} na tela de Cadastrar do App', async function (this: World, birthdate: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillBirthdate(birthdate);
});

When('preencho o campo Nome da mãe com o valor {string} na tela de Cadastrar do App', async function (this: World, mothername: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillMotherName(mothername);
});

When('marquei o checkbox Aceitar Termos de Uso na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.clickCheckBoxTerms();
});

When('marquei o checkbox Declaro que li e estou de acordo com a política de privacidade na tela de Cadastrar do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.clickCheckBoxPolicy();
});

When('preencho o campo Senha de acesso com o valor {string} na tela de Cadastrar do App', async function (this: World, password: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillPassword(password);
});

When('preencho o campo CEP com o valor {string} na tela de Cadastrar do App', async function (this: World, cep: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillCEP(cep);
});

When('preencho o campo Número com o valor {string} na tela de Cadastrar do App', async function (this: World, number: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillNumber(number);
});

When('preencho o campo Complemento com o valor {string} na tela de Cadastrar do App', async function (this: World, complement: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.fillComplement(complement);
});

When('clico no botão Iniciar Identificação na tela de Identificação do App', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as Browser);
  await accountOpeningActions.clickStartIdentificationButton();
});