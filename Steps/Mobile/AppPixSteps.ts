import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PixActions } from '../../Pages/Mobile/PixPageObject/PixActions';
import type { Browser } from 'webdriverio';

When('clico no botão Transferir na tela de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnTransfer();
});

When('preencho o campo Pesquisar usuários com o valor {string} na tela de Transferir Pix do App', async function (this: World, username: string) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.fillSearchUser(username);
});

When('clico na conta filtrada com a descrição {string} na tela de Transferir Pix do App', async function (this: World, description: string) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickFilteredUser(description);
});

When('preencho o campo valor com {string} na tela de Pague com Pix do App', async function (this: World, pixValue: string) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.fillPixValue(pixValue);
});

When('clico no botão Continuar na tela de Pague com Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnContinue();
});

When('clico no botão Confirmar na tela de Confirmação de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnConfirm();
});

When('digito o PIN {string} na tela de preenchimento do PIN do App', async function (this: World, pinCode: string) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.fillPINCode(pinCode);

  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(15000);
});

When('clico no botão Ver Comprovante na tela de Pix Confirmado do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnShowTransactionProof();
  
  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(5000);
});