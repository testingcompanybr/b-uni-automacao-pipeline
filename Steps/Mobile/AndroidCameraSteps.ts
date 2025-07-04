import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AndroidCameraActions } from '../../Pages/Mobile/AndroidCameraPageObject/AndroidCameraActions';
import type { Browser } from 'webdriverio';

When('clico no botão OK no dialogo de Permissão de câmera do App', async function (this: World) {
  const androidCameraActions = new AndroidCameraActions(this.driver as Browser);
  await androidCameraActions.clickBtnOkPermission();
});

When('clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android', async function (this: World) {
  const androidCameraActions = new AndroidCameraActions(this.driver as Browser);
  await androidCameraActions.clickBtnCameraWhileUsingApp();
});

When('clico no botão Inserir Código Manualmente na câmera do dispositivo', async function (this: World) {
  const androidCameraActions = new AndroidCameraActions(this.driver as Browser);
  await androidCameraActions.clickBtnInsertCodeManually();
});