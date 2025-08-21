import { When, Then } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { ChargeActions } from '../../Pages/Mobile/ChargePageObject/ChargeActions';
import { pressAndroidBackButton } from '../../Support/MobileUtils';

When('preencho o campo valor com {string} na tela de Cobrar do App', async function (this: World, pixValue: string) {
  const chargeActions = new ChargeActions(this.mobileDriver!);
  await chargeActions.fillPixValue(pixValue);
});

When('clico no botão Continuar na tela de Cobrar do App', async function (this: World) {
  const chargeActions = new ChargeActions(this.mobileDriver!);
  await chargeActions.clickBtnContinue();
});

When('preencho o campo Identificador com {string} na tela de Cobrar do App', async function (this: World, identifier: string) {
  const chargeActions = new ChargeActions(this.mobileDriver!);
  await chargeActions.fillIdentifier(identifier);
  const mobileDriver = this.mobileDriver!;
  await mobileDriver.pause(1500);
});

When('clico no botão Criar QRcode na tela de Cobrar do App', async function (this: World) {
  const chargeActions = new ChargeActions(this.mobileDriver!);
  await chargeActions.clickBtnCreateQRcode();
});

When('clico no botão Copiar na tela de Cobrar do App', async function (this: World) {
  const chargeActions = new ChargeActions(this.mobileDriver!);
  await chargeActions.clickBtnCopy();
});

When('clico no botão Voltar na tela de Cobrar do App', async function (this: World) {
  await pressAndroidBackButton(this.mobileDriver!);
});