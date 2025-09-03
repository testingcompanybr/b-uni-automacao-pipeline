import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { World } from '../../../Support/World';
import { HomeActions } from '../../../Pages/Web/IBK/HomePageObject/HomeActions';
import { HomeElementsMap } from '../../../Pages/Web/IBK/HomePageObject/HomeElementsMap';
import { until, WebDriver } from 'selenium-webdriver';
import { waitFor } from '../../../Support/Utils';

Given('estou na página Home do Internet Banking', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, { type: 'urlIs', value: 'https://ibk.stg.ser.buni.digital/inicio' }, 30000);
  expect(currentUrl).to.equal('https://ibk.stg.ser.buni.digital/inicio');
});

Then('verifico que estou logado', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, { type: 'urlIs', value: 'https://ibk.stg.ser.buni.digital/inicio' }, 30000);
  expect(currentUrl).to.equal('https://ibk.stg.ser.buni.digital/inicio');
});

When('clico no botão de Visualizar Saldo em Conta na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnAccountBalanceEye();
});

When('clico no botão de Extrato no menu lateral na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnExtract();
});

When('clico no perfil do usuário logado na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnProfile();
});

When('clico no botão Sair no menu dropdown do perfil do usuário na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnProfileLogout();
});

Then('o Saldo disponível em conta deve ser exibido', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(HomeElementsMap.txtAccountBalance), 10000);
  const isVisible = await element.isDisplayed();

  expect(isVisible).to.be.true;
});

When('clico no botão de Pix no menu lateral na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnPix();
});

When('clico no botão de Receber na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnReceive();
});

When('clico no botão de Pagar na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnPay();
});

When('clico no botão de Transferir na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnTransfer();
});

When('clico no botão de Ver Extrato na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnSeeExtract();
});

When('clico no botão de PIX na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnPIX();
});

When('clico no botão de Minha conta na tela de Home', async function (this: World) {
  const homeActions = new HomeActions(this.driver as WebDriver);
  await homeActions.clickBtnMyAccount();
});