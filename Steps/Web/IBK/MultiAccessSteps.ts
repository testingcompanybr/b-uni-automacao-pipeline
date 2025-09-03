import { When, Then } from '@cucumber/cucumber';
import { MultiAccessActions } from '../../../Pages/Web/IBK/MultiAccessPageObject/MultiAccessActions';
import { MultiAccessElementsMap } from '../../../Pages/Web/IBK/MultiAccessPageObject/MultiAccessElementsMap';
import { World } from '../../../Support/World';
import { until, WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';
import { sleep } from '../../../Support/Utils';

When('clico no botão Criar usuário na tela de Multi acessos', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.clickBtnCreateUser();
});

When('preencho o campo Nome com o valor {string} na tela de Conta multi acesso', async function (this: World, name: string) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.fillName(name);
});

When('preencho o campo Email com o valor {string} na tela de Conta multi acesso', async function (this: World, email: string) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.fillEmail(email);
});

When('preencho o campo Celular com o valor {string} na tela de Conta multi acesso', async function (this: World, cellphone: string) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.fillCellphone(cellphone);
});

When('clico no botão Continuar na tela de Conta multi acesso', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.clickBtnContinue();
});

When('preencho o campo Login com o valor {string} na tela de Credenciais multi acesso', async function (this: World, login: string) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.fillLogin(login);
});

When('preencho o campo Senha com o valor {string} na tela de Credenciais multi acesso', async function (this: World, password: string) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.fillPassword(password);
});

When('clico no botão Continuar na tela de Credenciais multi acesso', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.clickBtnContinue();
});

When('clico no botão Continuar na tela de Permissões multi acesso', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.clickBtnContinue();
});

Then('verifico se o usuário com login {string} foi criado na tela de Multi acessos', async function (this: World, login: string) {
  const driver = this.driver as WebDriver;
  const locator = MultiAccessElementsMap.cardByLogin(login);

  await driver.wait(until.elementLocated(locator), 10000);

  const elements = await driver.findElements(locator);
  expect(elements.length, `Card com login '${login}' não foi encontrado`).to.be.greaterThan(0);
});

When('clico no card do usuário com login {string} na tela de Multi acessos', async function (this: World, login: string) {
  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.clickUserCardByLogin(login);
});

When('clico no botão Remover usuário na tela de Multi acessos', async function (this: World) {
  await sleep(1000);

  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.clickBtnRemoveUser();
});

Then('o card do usuário com login {string} não deve mais estar visível na tela de Multi acessos', async function (this: World, login: string) {
  const driver = this.driver as WebDriver;
  const locator = MultiAccessElementsMap.cardByLogin(login);

  await driver.wait(async () => {
    const elements = await driver.findElements(locator);
    return elements.length === 0;
  }, 10000, `O card com login '${login}' ainda está visível na tela`);

  const elements = await driver.findElements(locator);
  expect(elements.length, `Card com login '${login}' ainda existe`).to.equal(0);
});

When('clico no botão Excluir na tela de Multi acessos', async function (this: World) {
  await sleep(1000);

  const multiAccessActions = new MultiAccessActions(this.driver as WebDriver);
  await multiAccessActions.clickBtnDelete();
});