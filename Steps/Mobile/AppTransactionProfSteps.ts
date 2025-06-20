import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { World } from '../../Support/World';
import { TransactionProfElementsMap } from '../../Pages/Mobile/TransactionProfPageObject/TransactionProfElementsMap';
import { TransactionProfActions } from '../../Pages/Mobile/TransactionProfPageObject/TransactionProfActions';
import { bySelector } from '../../Support/MobileUtils';
import type { Browser } from 'webdriverio';

When('clico no botão Fechar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.driver as Browser);
  await transactionProfActions.clickBtnClose();
});

Then('clico no botão Compartilhar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.driver as Browser);
  await transactionProfActions.clickShareButton();
});

Then('clico no botão Imagem no pop-up de Compartilhar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.driver as Browser);
  await transactionProfActions.clickImageShareButton();
});

Then('clico no botão Email no pop-up de Compartilhar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.driver as Browser);
  await transactionProfActions.clickEmailShareButton();
});

Then('o Valor deve ser {string} na tela de Comprovante do App', async function (this: World, valor: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtValue));
  const value = await element.getText();
  expect(value).to.equal(valor);
});

Then('o Tipo de Transação deve ser {string} na tela de Comprovante do App', async function (this: World, transactionType: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtTransactionType));
  const value = await element.getText();
  expect(value).to.equal(transactionType);
});

Then('a Instituição da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, institution: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtInstitutionOrigin));
  const value = await element.getText();
  expect(value).to.equal(institution);
});

Then('o Nome da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, accountName: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountNameOrigin));
  const value = await element.getText();
  expect(value).to.equal(accountName);
});

Then('a Agência da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, agency: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAgencyOrigin));
  const value = await element.getText();
  expect(value).to.equal(agency);
});

Then('a Conta da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, account: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountOrigin));
  const value = await element.getText();
  expect(value).to.equal(account);
});

Then('a Instituição da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, institution: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtInstitutionDestiny));
  const value = await element.getText();
  expect(value).to.equal(institution);
});

Then('o Nome da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, accountName: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountNameDestiny));
  const value = await element.getText();
  expect(value).to.equal(accountName);
});

Then('a Agência da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, agency: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAgencyDestiny));
  const value = await element.getText();
  expect(value).to.equal(agency);
});

Then('a Conta da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, account: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountDestiny));
  const value = await element.getText();
  expect(value).to.equal(account);
});

Then('a Descrição deve ser {string} na tela de Comprovante do App', async function (this: World, description: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtDescription));
  const value = await element.getText();
  expect(value).to.equal(description);
});