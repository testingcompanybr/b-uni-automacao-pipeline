import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { TransferActions } from '../../Pages/Mobile/TransferPageObject/TransferActions';

When('preencho o campo Pesquisar usuários com o valor {string} na tela de Transferir do App', async function (this: World, username: string) {
  const transferActions = new TransferActions(this.mobileDriver!);
  await transferActions.fillSearchUser(username);
});

When('clico na conta filtrada com a descrição {string} na tela de Transferir do App', async function (this: World, description: string) {
  const transferActions = new TransferActions(this.mobileDriver!);
  await transferActions.clickFilteredUser(description);
});

When('preencho o campo valor com {string} na tela de Transferir do App', async function (this: World, TEDValue: string) {
  const transferActions = new TransferActions(this.mobileDriver!);
  await transferActions.fillTEDValue(TEDValue);
});

When('clico no botão Continuar na tela de Transferir do App', async function (this: World) {
  const transferActions = new TransferActions(this.mobileDriver!);
  await transferActions.clickBtnContinue();
});

When('clico no botão Confirmar na tela de Transferir do App', async function (this: World) {
  const transferActions = new TransferActions(this.mobileDriver!);
  await transferActions.clickBtnConfirm();
});

When('clico no botão Ver Comprovante na tela de Tranferência confirmada do App', async function (this: World) {
  const transferActions = new TransferActions(this.mobileDriver!);
  await transferActions.clickBtnShowTransactionProof();
  
  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(5000);
});