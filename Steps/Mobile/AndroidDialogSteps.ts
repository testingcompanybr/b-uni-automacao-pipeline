import { Given, When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AndroidDialogActions } from '../../Pages/Mobile/AndroidDialogPageObject/AndroidDialogActions';

Given('clico em Permitir no dialogo de notificações do Android', async function (this: World) {
  const androidDialogActions = new AndroidDialogActions(this.mobileDriver!);
  await androidDialogActions.clickAllowNotificationButton();
});

When('clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android', async function (this: World) {
  const androidDialogActions = new AndroidDialogActions(this.mobileDriver!);
  await androidDialogActions.clickAllowWhileUsingAppButton();
});