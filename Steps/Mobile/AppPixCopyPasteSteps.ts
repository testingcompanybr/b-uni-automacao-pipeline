import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PixCopyPasteActions } from '../../Pages/Mobile/PixCopyPastePageObject/PixCopyPasteActions';

When('clico no botão Colar na tela de Copia e cola do App', async function (this: World) {
  const pixCopyPasteActions = new PixCopyPasteActions(this.mobileDriver!);
  await pixCopyPasteActions.clickBtnPaste();
});

When('clico no botão Continuar na tela de Copia e cola do App', async function (this: World) {
  const pixCopyPasteActions = new PixCopyPasteActions(this.mobileDriver!);
  await pixCopyPasteActions.clickBtnContinue();
});