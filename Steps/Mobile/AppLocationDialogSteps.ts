import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { LocationDialogActions } from '../../Pages/Mobile/LocationDialogPageObject/LocationDialogActions';
import type { Browser } from 'webdriverio';

When('clico em Próximo no dialogo de Acesso de localização do App', async function (this: World) {
  const locationDialogActions = new LocationDialogActions(this.driver as Browser);
  await locationDialogActions.clickNextButton();
});