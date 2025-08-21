import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { LocationDialogActions } from '../../Pages/Mobile/LocationDialogPageObject/LocationDialogActions';

When('clico em Próximo no dialogo de Acesso de localização do App', async function (this: World) {
  const locationDialogActions = new LocationDialogActions(this.mobileDriver!);
  await locationDialogActions.clickNextButton();
});