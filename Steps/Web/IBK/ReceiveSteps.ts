import { When } from '@cucumber/cucumber';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { ReceiveActions } from '../../../Pages/Web/IBK/ReceivePageObject/ReceiveActions';

When('preencho o campo valor com {string} na tela Receber na etapa de Valor', async function (this: World, pixValue: string) {
  const receiveActions = new ReceiveActions(this.driver as WebDriver);
  await receiveActions.fillPixValueField(pixValue);
});

When('clico no botão Continuar na tela Receber na etapa de Valor', async function (this: World) {
  const receiveActions = new ReceiveActions(this.driver as WebDriver);
  await receiveActions.clickBtnContinue();
});

When('preencho o campo Descrição com o valor {string} na tela Receber na etapa de Descrição', async function (this: World, description: string) {
  const receiveActions = new ReceiveActions(this.driver as WebDriver);
  await receiveActions.fillDescriptionTextArea(description);
});

When('clico no botão Gerar QRcode na tela Receber na etapa de Descrição', async function (this: World) {
  const receiveActions = new ReceiveActions(this.driver as WebDriver);
  await receiveActions.clickBtnGenerateQRcode();
});

When('clico no botão Copiar na tela Receber na etapa de QRcode Pix', async function (this: World) {
  const receiveActions = new ReceiveActions(this.driver as WebDriver);
  await receiveActions.clickBtnCopy();
});

When('clico no botão de Início no menu lateral na tela Receber na etapa de QRcode Pix', async function (this: World) {
  const receiveActions = new ReceiveActions(this.driver as WebDriver);
  await receiveActions.clickBtnHome();
});