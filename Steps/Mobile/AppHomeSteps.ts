import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import { World } from '../../Support/World';
import { HomeActions } from '../../Pages/Mobile/HomePageObject/HomeActions';
import { HomeElementsMap } from '../../Pages/Mobile/HomePageObject/HomeElementsMap';
import type { Browser } from 'webdriverio';
import { bySelector } from '../../Support/MobileUtils';

Given('que estou na tela de Home do App', async function (this: World) {
  //
});

When('clico no botão Pix na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.driver as Browser);
  await homeActions.clickBtnPix();
});

When('clico no botão Extrato na tela de Home do App', async function (this: World) {
  const homeActions = new HomeActions(this.driver as Browser);
  await homeActions.clickBtnExtract();
});

Then('verifico que estou logado no Aplicativo', async function (this: World) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(HomeElementsMap.logoBuni));

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

When('clico na foto de perfil do usuário logado na tela Inicial do App', async function (this: World) {
  const homeActions = new HomeActions(this.driver as Browser);
  await homeActions.clickBtnProfile();

  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(1500);
});