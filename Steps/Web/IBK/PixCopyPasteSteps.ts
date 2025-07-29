import { When } from '@cucumber/cucumber';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { PixCopyPasteActions } from '../../../Pages/Web/IBK/PixCopyPastePageObject/PixCopyPasteActions';
import { TransferPixActions } from '../../../Pages/Web/IBK/TransferPixPageObject/TransferPixActions';
import { sleep } from '../../../Support/Utils';

When('colo o código pix copiado anteriormente na tela de Pix Copia e Cola na etapa de Pagar', async function (this: World) {
  const pixCopyPasteActions = new PixCopyPasteActions(this.driver as WebDriver);
  await pixCopyPasteActions.fillPixCopyPasteCodeTextArea();
});

When('clico no botão Continuar na tela de Pix Copia e Cola na etapa de Pagar', async function (this: World) {
  const pixCopyPasteActions = new PixCopyPasteActions(this.driver as WebDriver);
  await pixCopyPasteActions.clickBtnContinue();
});

When('clico no botão Confirmar na tela de Pix Copia e Cola na etapa de Detalhes', async function (this: World) {
  const pixCopyPasteActions = new PixCopyPasteActions(this.driver as WebDriver);
  await pixCopyPasteActions.clickBtnConfirm();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Pix Copia e Cola na etapa de Detalhes', async function (this: World, pin: string) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pix Copia e Cola na etapa de Detalhes', async function (this: World) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.clickBtnConfirmPopUp();
  await sleep(3000);
});