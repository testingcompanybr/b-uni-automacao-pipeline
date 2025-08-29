import { When, Then } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { ExtractActions } from '../../Pages/Mobile/ExtractPageObject/ExtractActions';

When('clico na primeira transação que contenha o nome {string} na tela de Extrato do App', async function (this: World, userAccount: string) {
  const extractActions = new ExtractActions(this.mobileDriver!);
  await extractActions.clickFirstTransactionByUser(userAccount);
});

Then('a última movimentação deve ser transação de PIX para {string} no valor de {string} na tela de Extrato do App', async function (this: World, userName: string, pixValue: string) {
  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(5000);
});