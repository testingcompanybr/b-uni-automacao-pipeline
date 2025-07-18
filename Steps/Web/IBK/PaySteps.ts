import { When, Then } from '@cucumber/cucumber';
import { PayActions } from '../../../Pages/Web/IBK/PayPageObject/PayActions';
import { PayElementsMap } from '../../../Pages/Web/IBK/PayPageObject/PayElementsMap';
import { World } from '../../../Support/World';
import { until, WebDriver } from 'selenium-webdriver';
import { sleep } from '../../../Support/Utils';
import { expect } from 'chai';

When('clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnPayBillet();
});

When('preencho o campo Código do Boleto com o valor {string} na tela de Pagar na etapa de Código de barras', async function (this: World, barcode: string) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.fillBarCodeField(barcode);
});

When('clico no botão Avançar na tela de Pagar na etapa de Código de barras', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnAdvance();
  await sleep(3000);
});

When('clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnAdvance();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World, pin: string) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnConfirmPopUp();
  await sleep(5000);
});

Then('o campo de Descontos deve ser exibido na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(PayElementsMap.labelDiscount), 10000);
  const isVisible = await element.isDisplayed();

  expect(isVisible).to.be.true;
});

Then('o campo de Juros deve ser exibido na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(PayElementsMap.labelFess), 10000);
  const isVisible = await element.isDisplayed();

  expect(isVisible).to.be.true;
});

Then('o campo de Multa deve ser exibido na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(PayElementsMap.labelFine), 10000);
  const isVisible = await element.isDisplayed();

  expect(isVisible).to.be.true;
});

Then('o campo Data de vencimento deve ter uma data menor que a data atual na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  //
});

Then('o campo de Valor mínimo deve ser exibido na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(PayElementsMap.labelMinValue), 10000);
  const isVisible = await element.isDisplayed();

  expect(isVisible).to.be.true;
});

Then('o campo de Valor máximo deve ser exibido na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(PayElementsMap.labelMaxValue), 10000);
  const isVisible = await element.isDisplayed();

  expect(isVisible).to.be.true;
});

Then('preencho o campo Valor do documento com o valor {string} na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World, value: string) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.fillInputValue(value);
  await sleep(2000);
});

Then('o botão Avançar deve estar habilitado na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(PayElementsMap.btnAdvance), 10000);
  const isDisabled = await element.getAttribute('disabled');

  expect(isDisabled).to.be.null;
});

Then('o botão Avançar deve estar desabilitado na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.wait(until.elementLocated(PayElementsMap.btnAdvance), 10000);
  const isDisabled = await element.getAttribute('disabled');

  expect(isDisabled).to.not.be.null;
});