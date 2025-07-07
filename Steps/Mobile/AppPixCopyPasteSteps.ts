import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PixCopyPasteActions } from '../../Pages/Mobile/PixCopyPastePageObject/PixCopyPasteActions';
import type { Browser } from 'webdriverio';

When('clico no botão Colar na tela de Copia e cola do App', async function (this: World) {
  const pixCopyPasteActions = new PixCopyPasteActions(this.driver as Browser);
  await pixCopyPasteActions.clickBtnPaste();
  
  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(1000);
});

When('clico no botão Continuar na tela de Copia e cola do App', async function (this: World) {
  const pixCopyPasteActions = new PixCopyPasteActions(this.driver as Browser);
  await pixCopyPasteActions.clickBtnContinue();
});