import { Given, When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { HomeActions } from '../../Pages/Mobile/HomePageObject/HomeActions';
import type { Browser } from 'webdriverio';

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