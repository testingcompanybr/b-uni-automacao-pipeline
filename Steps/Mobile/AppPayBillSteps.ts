import { When, Then } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PayBillActions } from '../../Pages/Mobile/PayBillPageObject/PayBillActions';
import { PayBillElementsMap } from '../../Pages/Mobile/PayBillPageObject/PayBillElementsMap';
import { bySelector } from '../../Support/MobileUtils';
import { expect } from 'chai';

When('preencho o campo Código do boleto com {string} na tela de Pagar conta do App', async function (this: World, barCode: string) {
  const payBillActions = new PayBillActions(this.mobileDriver!);
  await payBillActions.fillBilletCodeValue(barCode);
});

When('clico no botão Continuar na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.mobileDriver!);
  await payBillActions.clickBtnContinue();
});

When('clico no botão Confirmar na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.mobileDriver!);
  await payBillActions.clickBtnConfirm();
});

When('digito o PIN {string} na tela de Pagar conta do App', async function (this: World, pinCode: string) {
  const payBillActions = new PayBillActions(this.mobileDriver!);
  await payBillActions.fillPINCode(pinCode);
});

When('clico no botão Ver Comprovante na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.mobileDriver!);
  await payBillActions.clickBtnShowTransactionProof();
});

Then('o campo de Descontos deve ser exibido na tela de Pagar conta do App', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(PayBillElementsMap.labelDiscount));
  await element.waitForDisplayed({ timeout: 30000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('o campo de Multa deve ser exibido na tela de Pagar conta do App', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(PayBillElementsMap.labelFine));
  await element.waitForDisplayed({ timeout: 30000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('o campo Data de Vencimento deve ter a data anterior ao dia atual na tela de Pagar conta do App', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(PayBillElementsMap.txtDate));
  await element.waitForDisplayed({ timeout: 30000 });
  const dateText = await element.getText();
  const [day, month, year] = dateText.split('/');
  const dueDate = new Date(Number(year), Number(month) - 1, Number(day));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  expect(dueDate.getTime()).to.be.lessThan(today.getTime());
});

Then('o campo de Juros deve ser exibido na tela de Pagar conta do App', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(PayBillElementsMap.labelFess));
  await element.waitForDisplayed({ timeout: 30000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('o campo Valor mínimo deve ser exibido na tela de Pagar conta do App', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(PayBillElementsMap.labelMinValue));
  await element.waitForDisplayed({ timeout: 30000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('preencho o campo Valor do boleto com o valor {string} na tela de Pagar conta do App', async function (this: World, billetValue: string) {
  const payBillActions = new PayBillActions(this.mobileDriver!);
  await payBillActions.fillBilletValue(billetValue);
});

Then('o campo Valor mínimo não deve ser mais exibido na tela de Pagar conta do App', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(PayBillElementsMap.labelMinValue));
  await element.waitForDisplayed({ timeout: 30000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.false;
});