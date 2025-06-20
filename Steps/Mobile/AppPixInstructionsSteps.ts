import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PixInstructionsActions } from '../../Pages/Mobile/PixInstructionsPageObject/PixInstructionsActions';
import type { Browser } from 'webdriverio';

When('clico no botão Próximo na tela de instruções do Pix do App', async function (this: World) {
  const pixInstructionsActions = new PixInstructionsActions(this.driver as Browser);
  await pixInstructionsActions.clickBtnNext();
  
  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(1000);
});