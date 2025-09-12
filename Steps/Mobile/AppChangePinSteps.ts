import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { ChangePinActions } from '../../Pages/Mobile/ChangePinPageObject/ChangePinActions';

When('clico no botão OK na tela de Alteração de PIN do App', async function (this: World) {
  const changePinActions = new ChangePinActions(this.mobileDriver!);
  await changePinActions.clickOkButton();
});

When('preencho o campo Código com o valor {string} na tela de Alteração de PIN do App', async function (this: World, code: string) {
  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(2500);

  const changePinActions = new ChangePinActions(this.mobileDriver!);
  await changePinActions.fillSMSCode(code);
});

When('clico no botão Continuar na tela de Alteração de PIN do App', async function (this: World) {
  const changePinActions = new ChangePinActions(this.mobileDriver!);
  await changePinActions.clickContinueButton();
});

When('digito o PIN {string} na tela de Alteração de PIN do App', async function (this: World, pinCode: string) {
  const changePinActions = new ChangePinActions(this.mobileDriver!);
  await changePinActions.fillPINCode(pinCode);
});