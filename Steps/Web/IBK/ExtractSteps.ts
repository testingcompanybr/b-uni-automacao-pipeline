import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { ExtractElementsMap } from '../../../Pages/Web/IBK/ExtractPageObject/ExtractElementsMap';
import { ExtractActions } from '../../../Pages/Web/IBK/ExtractPageObject/ExtractActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { sleep, waitFor } from '../../../Support/Utils';

Then('verifico que estou na tela de Extrato', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, { type: 'urlIs', value: 'https://ibk.stg.ser.buni.digital/extrato' }, 30000);
  expect(currentUrl).to.equal('https://ibk.stg.ser.buni.digital/extrato');
});

Then('a última movimentação deve ser transação de PIX para {string} no valor de {string}', async function (this: World, expectedName: string, expectedValue: string) {
  await sleep(5000);
  const actual_driver = this.driver as WebDriver;
  const element_name = await actual_driver.findElement(ExtractElementsMap.txtFirstTransactionNameAccount);
  const element_value = await actual_driver.findElement(ExtractElementsMap.txtFirstTransactionNegativeValue);
  const value_name = await element_name.getText();
  const value_text = await element_value.getText();
  expect(value_name).to.equal("PARA " + expectedName);
  expect(value_text.trim()).to.equal(expectedValue);
});

When('clico na última movimentação para abrir o comprovante na tela de Extrato', async function (this: World) {
  const extractActions = new ExtractActions(this.driver as WebDriver, this);
  await extractActions.clickFirstTransaction();
});

When('armazeno o saldo do dia', async function (this: World) {
  const extractActions = new ExtractActions(this.driver as WebDriver, this);
  await extractActions.storeDailyBalance();
});

Then('o saldo do dia deve estar diferente de anteriormente', async function (this: World) {
  const extractActions = new ExtractActions(this.driver as WebDriver, this);
  const saved_balance = extractActions.getStoredValue('dailyBalance');

  const actual_balance_element = await (this.driver as WebDriver).findElement(ExtractElementsMap.txtDailyBalance);
  const actual_balance_value = await actual_balance_element.getText();

  expect(actual_balance_value).to.not.equal(saved_balance, 'O saldo não deveria ser igual ao armazenado');
});

When('clico no botão de Início no menu lateral na tela de Extrato', async function (this: World) {
  const extractActions = new ExtractActions(this.driver as WebDriver, this);
  await extractActions.clickHomeBtnMenu();
});