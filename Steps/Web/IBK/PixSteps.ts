import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { World } from '../../../Support/World';
import { By, until, WebDriver } from 'selenium-webdriver';
import { PixActions } from '../../../Pages/Web/IBK/PixPageObject/PixActions';
import { sleep } from '../../../Support/Utils';

When('clico no botão Transferir na tela de Pix', async function (this: World) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnTransfer();
});

When('clico no botão Criar chave na tela de Pix', async function (this: World) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnCreateKey();
});

When('clico no botão Cobrar na tela de Pix', async function (this: World) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnCharge();
});

When('clico no botão Copia e cola na tela de Pix', async function (this: World) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnCopyPaste();
});

Then('deve haver uma {string} cadastrada na tela de Pix', async function (this: World, keyLabel: string) {
  const actual_driver = this.driver as WebDriver;
  const elementLocator = By.xpath(`//p[contains(@class, 'pix__body__label') and text()='${keyLabel}']`);
  await actual_driver.wait(until.elementLocated(elementLocator), 5000);
  const isDisplayed = await actual_driver.findElement(elementLocator).isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('clico no botão de 3 pontos da chave {string} na tela de Pix', async function (this: World, keyLabel: string) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnPixKeyOptions(keyLabel);
  await sleep(1000);
});

Then('clico no botão Apagar chave Pix na tela de Pix', async function (this: World) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnDeleteKeyPix();
  await sleep(4000);
});

Then('a chave {string} deve ter sido excluida na tela de Pix', async function (this: World, keyLabel: string) {
  const actual_driver = this.driver as WebDriver;
  const elementLocator = By.xpath(`//p[contains(@class, 'pix__body__label') and text()='${keyLabel}']`);
  const elements = await actual_driver.findElements(elementLocator);
  expect(elements.length).to.equal(0);
});