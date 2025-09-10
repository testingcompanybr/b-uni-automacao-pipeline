import { Given, When, Then } from '@cucumber/cucumber';
import { LoginActions } from '../../../Pages/Web/IBK/LoginPageObject/LoginActions';
import { goToLoginPage } from '../../../Support/Utils';
import { World } from '../../../Support/World';
import { expect } from 'chai';
import { WebDriver } from 'selenium-webdriver';
import { waitFor } from '../../../Support/Utils';

Given('que estou na página de Login', async function (this: World) {
  await goToLoginPage(this.driver as WebDriver);
});

When('preencho o campo CPF com o valor {string}', async function (this: World, cpf: string) {
  const loginActions = new LoginActions(this.driver as WebDriver);
  await loginActions.fillCPF(cpf);
});

When('preencho o campo CNPJ com o valor {string}', async function (this: World, cnpj: string) {
  const loginActions = new LoginActions(this.driver as WebDriver);
  await loginActions.fillCPF(cnpj);
});

When('preencho o campo Senha com o valor {string}', async function (this: World, password: string) {
  const loginActions = new LoginActions(this.driver as WebDriver);
  await loginActions.fillPassword(password);
});

When('clico no botão Entrar', async function (this: World) {
  const loginActions = new LoginActions(this.driver as WebDriver);
  await loginActions.clickBtnEnter();
});

When('clico no link Criar Conta', async function (this: World) {
  const loginActions = new LoginActions(this.driver as WebDriver);
  await loginActions.clickBtnCreateAccount();
});

Then('verifico que estou na tela de Login', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, { type: 'urlIs', value: 'https://ibk.stg.ser.buni.digital/' }, 30000);
  expect(currentUrl).to.equal('https://ibk.stg.ser.buni.digital/');
});

When('vou para a página de Login do IBK', async function (this: World) {
  await goToLoginPage(this.driver as WebDriver);
});

When('preencho o campo CPF com o login gerado através do multi acesso', async function (this: World) {
  const loginActions = new LoginActions(this.driver as WebDriver);
  await loginActions.fillMultiaccessStoredLogin();
});