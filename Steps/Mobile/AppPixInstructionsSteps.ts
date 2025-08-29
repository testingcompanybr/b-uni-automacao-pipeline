import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PixInstructionsActions } from '../../Pages/Mobile/PixInstructionsPageObject/PixInstructionsActions';

When('clico no botão Próximo na tela de instruções do Pix do App', async function (this: World) {
  const pixInstructionsActions = new PixInstructionsActions(this.mobileDriver!);
  await pixInstructionsActions.clickBtnNext();
});