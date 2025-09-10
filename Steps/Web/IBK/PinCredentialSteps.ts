import { When } from '@cucumber/cucumber';
import { PinCredentialActions } from '../../../Pages/Web/IBK/PinCredentialPageObject/PinCredentialActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('clico no botão Ok na tela de Criação de PIN', async function (this: World) {
  const pinCredentialActions = new PinCredentialActions(this.driver as WebDriver);
  await pinCredentialActions.clickBtnOk();
});

When('preencho o campo Código com o valor {string} na tela de Criação de PIN', async function (this: World, code: string) {
  const pinCredentialActions = new PinCredentialActions(this.driver as WebDriver);
  await pinCredentialActions.fillCode(code);
});

When('clico no botão Próximo na tela de Criação de PIN', async function (this: World) {
  const pinCredentialActions = new PinCredentialActions(this.driver as WebDriver);
  await pinCredentialActions.clickBtnNext();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Criação de PIN', async function (this: World, pin: string) {
  const pinCredentialActions = new PinCredentialActions(this.driver as WebDriver);
  await pinCredentialActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Criação de PIN', async function (this: World) {
  const pinCredentialActions = new PinCredentialActions(this.driver as WebDriver);
  await pinCredentialActions.clickBtnConfirmPopUp();
});