import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { ExtractElementsMap } from '../../../Pages/Web/IBK/ExtractPageObject/ExtractElementsMap';
import { ExtractActions } from '../../../Pages/Web/IBK/ExtractPageObject/ExtractActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { sleep } from '../../../Support/Utils';

Then('verifico que estou na tela de Extrato', async function (this: World) {
  await sleep(3000);
  const actual_driver = await this.driver as WebDriver;
  const url = await actual_driver.getCurrentUrl();
  expect(url).to.equal('https://ibk.stg.ser.buni.digital/extrato');
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
  const extractActions = new ExtractActions(this.driver as WebDriver);
  await extractActions.clickFirstTransaction();
});