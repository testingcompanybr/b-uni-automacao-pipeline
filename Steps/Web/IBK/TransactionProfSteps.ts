import { Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { TransactionProfElementsMap } from '../../../Pages/Web/IBK/TransactionProfPageObject/TransactionProfElementsMap';
import { TransactionProfActions } from '../../../Pages/Web/IBK/TransactionProfPageObject/TransactionProfActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { sleep, scrollDown, waitFor } from '../../../Support/Utils';

Then('verifico que estou na tela de Comprovante', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, {type: 'urlContains',value: 'https://ibk.stg.ser.buni.digital/inicio/detalhes/'}, 30000);
  expect(currentUrl).to.contain('https://ibk.stg.ser.buni.digital/inicio/detalhes/');
});

Then('o Tipo de transação deve ser {string} na tela de Comprovante', async function (this: World, typeTransaction: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtTypeTransaction);
  const value = await element.getText();
  expect(value).to.equal(typeTransaction);
});

Then('o Valor deve ser {string} na tela de Comprovante', async function (this: World, valor: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtTransactionValue);
  const value = await element.getText();
  expect(value).to.equal(valor);
});

Then('o Nome da Conta de origem deve ser {string} na tela de Comprovante', async function (this: World, accountName: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtOriginAccount);
  const value = await element.getText();
  expect(value).to.equal("Nome: " + accountName);
});

Then('a Instituição da Conta de origem deve ser {string} na tela de Comprovante', async function (this: World, institution: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtInstitutionOrigin);
  const value = await element.getText();
  expect(value).to.equal("Instituição: " + institution);
});

Then('o Nome da Conta de destino deve ser {string} na tela de Comprovante', async function (this: World, accountName: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtDestinyAccount);
  const value = await element.getText();
  expect(value).to.equal("Nome: " + accountName);
});

Then('a Instituição da Conta de destino deve ser {string} na tela de Comprovante', async function (this: World, institution: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtInstitutionDestiny);
  const value = await element.getText();
  expect(value).to.equal("Instituição: " + institution);
});

Then('a Agência da Conta de destino deve ser {string} na tela de Comprovante', async function (this: World, agency: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtAgencyDestiny);
  const value = await element.getText();
  expect(value).to.equal("Agência: " + agency);
});

Then('a Conta da Conta de destino deve ser {string} na tela de Comprovante', async function (this: World, account: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtAccountDestiny);
  const value = await element.getText();
  expect(value).to.equal("Conta: " + account);
});

Then('a Descrição da transferência deve ser {string} na tela de Comprovante', async function (this: World, description: string) {
  const actual_driver = this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtTransactionDescription);
  const value = await element.getText();
  expect(value).to.equal(description);
});

Then('clico no botão Compartilhar na tela de Comprovante', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.driver as WebDriver);
  await transactionProfActions.clickBtnShare();
});

Then('clico no botão Baixar no modal de Comprovante da transação na tela de Comprovante', async function (this: World) {
  await scrollDown(this.driver as WebDriver);
  await sleep(1000);

  const transactionProfActions = new TransactionProfActions(this.driver as WebDriver);
  await transactionProfActions.clickBtnDownload();
});

Then('clico no botão Enviar por email no modal de Comprovante da transação na tela de Comprovante', async function (this: World) {
  await scrollDown(this.driver as WebDriver);
  await sleep(1000);

  const transactionProfActions = new TransactionProfActions(this.driver as WebDriver);
  await transactionProfActions.clickBtnSendByEmail();
});

Then('a mensagem {string} deve ser apresentada na tela de Comprovante', async function (this: World, message: string) {
  await sleep(3000);
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.findElement(TransactionProfElementsMap.txtEmailSent);
  const textMessage = await element.getText();
  expect(textMessage).to.equal(message);
});

Then('a tela Comprovante da transação deve ser apresentada', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, {type: 'urlContains',value: 'https://ibk.stg.ser.buni.digital/inicio/detalhes/'}, 30000);
  expect(currentUrl).to.contain('https://ibk.stg.ser.buni.digital/inicio/detalhes/');
});