import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { World } from '../../Support/World';
import { TransactionProfElementsMap } from '../../Pages/Mobile/TransactionProfPageObject/TransactionProfElementsMap';
import { TransactionProfActions } from '../../Pages/Mobile/TransactionProfPageObject/TransactionProfActions';
import { bySelector } from '../../Support/MobileUtils';

When('clico no botão Fechar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.mobileDriver!);
  await transactionProfActions.clickBtnClose();
});

Then('clico no botão Compartilhar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.mobileDriver!);
  await transactionProfActions.clickShareButton();
});

Then('clico no botão Imagem no pop-up de Compartilhar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.mobileDriver!);
  await transactionProfActions.clickImageShareButton();
});

Then('clico no botão Email no pop-up de Compartilhar na tela de Comprovante do App', async function (this: World) {
  const transactionProfActions = new TransactionProfActions(this.mobileDriver!);
  await transactionProfActions.clickEmailShareButton();
});

Then('o Valor deve ser {string} na tela de Comprovante do App', async function (this: World, valor: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtValue));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(valor);
});

Then('o Tipo de Transação deve ser {string} na tela de Comprovante do App', async function (this: World, transactionType: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtTransactionType));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(transactionType);
});

Then('a Instituição da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, institution: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtInstitutionOrigin));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(institution);
});

Then('o Nome da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, accountName: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountNameOrigin));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(accountName);
});

Then('a Agência da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, agency: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAgencyOrigin));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(agency);
});

Then('a Conta da Conta origem deve ser {string} na tela de Comprovante do App', async function (this: World, account: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountOrigin));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(account);
});

Then('a Instituição da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, institution: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtInstitutionDestiny));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(institution);
});

Then('o Nome da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, accountName: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountNameDestiny));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(accountName);
});

Then('a Agência da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, agency: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAgencyDestiny));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(agency);
});

Then('a Conta da Conta destino deve ser {string} na tela de Comprovante do App', async function (this: World, account: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtAccountDestiny));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(account);
});

Then('a Descrição deve ser {string} na tela de Comprovante do App', async function (this: World, description: string) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.txtDescription));
  await element.waitForDisplayed({ timeout: 10000 });
  const value = await element.getText();
  expect(value).to.equal(description);
});

Then('a tela de Comprovante do App deve ser exibida', async function (this: World) {
  const driver = this.mobileDriver!;
  const element = await driver.$(bySelector(TransactionProfElementsMap.labelProfScreen));
  await element.waitForDisplayed({ timeout: 10000 });

  const isDisplayed = await element.isDisplayed();
  expect(isDisplayed).to.be.true;
});
