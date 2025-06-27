import { Given } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AndroidDialogActions } from '../../Pages/Mobile/AndroidDialogPageObject/AndroidDialogActions';
import type { Browser } from 'webdriverio';

Given('clico em Permitir no dialogo de notificações do Android', async function (this: World) {
  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(2500);

  const androidDialogActions = new AndroidDialogActions(this.driver as Browser);
  await androidDialogActions.clickAllowNotificationButton();
});

Given('clico no botão Permitir enquanto estiver usando o App no dialogo de localização do Android', async function (this: World) {
  const androidDialogActions = new AndroidDialogActions(this.driver as Browser);
  await androidDialogActions.clickAllowWhileUsingAppButton();
});