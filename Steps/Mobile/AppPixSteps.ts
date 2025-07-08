import { When, Then } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PixActions } from '../../Pages/Mobile/PixPageObject/PixActions';
import { PixElementsMap } from '../../Pages/Mobile/PixPageObject/PixElementsMap';
import type { Browser } from 'webdriverio';
import { bySelector, pressAndroidBackButton } from '../../Support/MobileUtils';
import { expect } from 'chai';

When('clico no botão Transferir na tela de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnTransfer();
});

When('clico no botão + na tela de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnAddKey();
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

Then('deve haver uma chave {string} cadastrada na tela de Pix do App', async function (this: World, keyType: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(PixElementsMap.txtKeyTypeByKeyType(keyType)));
  const value = await element.getText();
  expect(value).to.equal(keyType);
});

When('clico no botão Cobrar na tela de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnCharge();
});

When('clico no botão Voltar na tela de Pix do App', async function (this: World) {
  await pressAndroidBackButton(this.driver as Browser);
});

When('clico no botão Pix copia e cola na tela de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnCopyPaste();
});

Then('clico no botão de 3 pontos da chave pix na tela de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnPixKeyOptions();
});

Then('clico no botão Apagar chave Pix na tela de Pix do App', async function (this: World) {
  const pixActions = new PixActions(this.driver as Browser);
  await pixActions.clickBtnDeletePixKey();

  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(5000);
});

Then('a chave {string} deve ter sido excluida na tela de Pix do App', async function (this: World, keyType: string) {
  const driver = this.driver as Browser;
  const element = await driver.$(bySelector(PixElementsMap.txtKeyTypeByKeyType(keyType)));
  const isExisting = await element.isExisting();
  expect(isExisting).to.be.false;
});