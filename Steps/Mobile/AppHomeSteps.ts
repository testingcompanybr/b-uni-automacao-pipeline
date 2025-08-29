import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import { World } from '../../Support/World';
import { HomeActions } from '../../Pages/Mobile/HomePageObject/HomeActions';
import { HomeElementsMap } from '../../Pages/Mobile/HomePageObject/HomeElementsMap';
import { bySelector } from '../../Support/MobileUtils';

Given('que estou na tela de Home do App', async function (this: World) {
  //
});

When('clico no botão Pix na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.mobileDriver!);
  await homeActions.clickBtnPix();
});

When('clico no botão Extrato na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.mobileDriver!);
  await homeActions.clickBtnExtract();
});

Then('verifico que estou logado no Aplicativo', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(HomeElementsMap.logoBuni));
  await element.waitForDisplayed({ timeout: 10000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

When('clico na foto de perfil do usuário logado na tela Inicial do App', async function (this: World) {
  const homeActions = new HomeActions(this.mobileDriver!);
  await homeActions.clickBtnProfile();
});

When('clico no botão Pagar na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.mobileDriver!);
  await homeActions.clickBtnPay();
});

When('clico no botão Pagar boleto na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.mobileDriver!);
  await homeActions.clickBtnPayWithBillet();
});

Then('a mensagem Transferência enviada deve ser exibida na tela de Home do App', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(HomeElementsMap.txtTransactionSent));
  await element.waitForDisplayed({ timeout: 10000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('a mensagem {string} deve ser exibida na tela de Home do App', async function (this: World, expectedMessage: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(HomeElementsMap.txtLimitReached));
  await element.waitForDisplayed({ timeout: 10000 });
  const actualText = await element.getText();
  expect(actualText).to.equal(expectedMessage);
});

When('clico no botão Transferir na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.mobileDriver!);
  await homeActions.clickBtnTransfer();
});

When('clico no botão TED na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.mobileDriver!);
  await homeActions.clickBtnTransferTED();
});