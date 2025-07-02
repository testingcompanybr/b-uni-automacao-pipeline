import { Given, When, Then } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { LoginActions } from '../../Pages/Mobile/LoginPageObject/LoginActions';
import { LoginElementsMap } from '../../Pages/Mobile/LoginPageObject/LoginElementsMap';
import type { Browser } from 'webdriverio';
import { expect } from 'chai';
import { bySelector } from '../../Support/MobileUtils';

Given('que estou na página Inicial do App', async function (this: World) {
  //
});

When('clico no botão Entrar na tela Inicial do App', async function (this: World) {
  const loginActions = new LoginActions(this.driver as Browser);
  await loginActions.clickEnterButton();
});

When('clico no botão Criar Conta na tela Inicial do App', async function (this: World) {
  const loginActions = new LoginActions(this.driver as Browser);
  await loginActions.clickCreateAccountButton();
});

Then('verifico que estou estou na tela Inicial de Entrar do App', async function (this: World) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(LoginElementsMap.txtWelcome));

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});