import { When, Then } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PayBillActions } from '../../Pages/Mobile/PayBillPageObject/PayBillActions';
import { PayBillElementsMap } from '../../Pages/Mobile/PayBillPageObject/PayBillElementsMap';
import type { Browser } from 'webdriverio';
import { bySelector } from '../../Support/MobileUtils';
import { expect } from 'chai';

When('preencho o campo Código do boleto com {string} na tela de Pagar conta do App', async function (this: World, barCode: string) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.fillBilletCodeValue(barCode);
});

When('clico no botão Continuar na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.clickBtnContinue();

  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(3000);
});

When('clico no botão Confirmar na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.clickBtnConfirm();
});

When('digito o PIN {string} na tela de Pagar conta do App', async function (this: World, pinCode: string) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.fillPINCode(pinCode);

  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(5000);
});

When('clico no botão Ver Comprovante na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.clickBtnShowTransactionProof();

  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(2000);
});

Then('o campo de Descontos deve ser exibido na tela de Pagar conta do App', async function (this: World) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(PayBillElementsMap.labelDiscount));

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('o campo de Multa deve ser exibido na tela de Pagar conta do App', async function (this: World) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(PayBillElementsMap.labelFine));

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});