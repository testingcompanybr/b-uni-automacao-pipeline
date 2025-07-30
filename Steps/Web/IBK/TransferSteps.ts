import { When, Then } from '@cucumber/cucumber';
import { TransferActions } from '../../../Pages/Web/IBK/TransferPageObject/TransferActions';
import { TransferElementsMap } from '../../../Pages/Web/IBK/TransferPageObject/TransferElementsMap';
import { World } from '../../../Support/World';
import { until, WebDriver } from 'selenium-webdriver';
import { sleep } from '../../../Support/Utils';
import { expect } from 'chai';

When('clico no botão TED na tela de Transferência na etapa de Tipo de Transferência', async function (this: World) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.clickBtnTED();
});

When('preencho o campo Buscar por nome com o valor {string} na tela de Transferência na etapa de Conta para transferência', async function (this: World, name: string) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.fillSearchByNameField(name);
});

When('clico na conta filtrada na tela de Transferência na etapa de Conta para transferência', async function (this: World) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.selectSearchResult();
});

When('preencho o campo valor com {string} na tela de Transferência na etapa de Valor Solicitado', async function (this: World, tedValue: string) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.fillTedValueField(tedValue);
});

When('clico no botão Avançar na tela de Transferência na etapa de Valor Solicitado', async function (this: World) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.clickBtnAdvance();
});

When('clico no botão Confirmar na tela de Transferência na etapa de Confirmação', async function (this: World) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.clickBtnConfirm();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação', async function (this: World, pin: string) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Transferência na etapa de Confirmação', async function (this: World) {
  const transferActions = new TransferActions(this.driver as WebDriver);
  await transferActions.clickBtnConfirmPopUp();
  await sleep(3000);
});

Then('a mensagem {string} deve ser exibida na tela de Transferência na etapa de Confirmação', async function (this: World, message: string) {
  const actual_driver = await this.driver as WebDriver;
  const element = await actual_driver.findElement(TransferElementsMap.txtMessage);
  const textMessage = await element.getText();
  expect(textMessage).to.equal(message);
});