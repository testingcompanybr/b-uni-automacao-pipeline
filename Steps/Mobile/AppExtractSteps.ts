import { When, Then } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { ExtractActions } from '../../Pages/Mobile/ExtractPageObject/ExtractActions';
import { expect } from 'chai';

When('clico na primeira transação que contenha o nome {string} na tela de Extrato do App', async function (this: World, userAccount: string) {
  const extractActions = new ExtractActions(this.mobileDriver!, this);
  await extractActions.clickFirstTransactionByUser(userAccount);
});

Then('a última movimentação deve ser transação de PIX para {string} no valor de {string} na tela de Extrato do App', async function (this: World, userName: string, pixValue: string) {
  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(5000);
});

When('clico no botão de Início na tela de Extrato do App', async function (this: World) {
  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(5000);

  const extractActions = new ExtractActions(this.mobileDriver!, this);
  await extractActions.clickBtnHome();
});

When('armazeno o valor do saldo dia na tela de Extrato do App', async function (this: World) {
  const extractActions = new ExtractActions(this.mobileDriver!, this);
  await extractActions.storeDailyBalance();
});

Then('o saldo do dia deve estar diferente de anteriormente na tela de Extrato do App', async function (this: World) {
  const extractActions = new ExtractActions(this.mobileDriver!, this);
  const currentBalance = await extractActions.getDailyBalanceText();
  const storedBalance = this.storedValues.get('dailyBalance');

  expect(storedBalance, `Não foi encontrado valor armazenado com a chave dailyBalance`).to.exist;
  expect(currentBalance).to.not.equal(storedBalance, `Saldo não mudou. Continua sendo '${currentBalance}'`);
});