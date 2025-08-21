import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AndroidCameraActions } from '../../Pages/Mobile/AndroidCameraPageObject/AndroidCameraActions';

When('clico no botão OK no dialogo de Permissão de câmera do App', async function (this: World) {
  const androidCameraActions = new AndroidCameraActions(this.mobileDriver!);
  await androidCameraActions.clickBtnOkPermission();
});

When('clico no botão Permitir enquanto estiver usando o App no dialogo de câmera do Android', async function (this: World) {
  const androidCameraActions = new AndroidCameraActions(this.mobileDriver!);
  await androidCameraActions.clickBtnCameraWhileUsingApp();

  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(2000);
});

When('clico no botão Inserir Código Manualmente na câmera do dispositivo', async function (this: World) {
  const androidCameraActions = new AndroidCameraActions(this.mobileDriver!);
  await androidCameraActions.clickBtnInsertCodeManually();
});