import { When } from '@cucumber/cucumber';
import { BOAuthenticationActions } from '../../../Pages/Web/BackOffice/BOAuthenticationPageObject/BOAuthenticationActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('preencho o campo Código TOTP com o valor {string} na tela de Autenticação do BackOffice', async function (this: World, code: string) {
  const boAuthenticationActions = new BOAuthenticationActions(this.driver as WebDriver);
  await boAuthenticationActions.fillCodeInput(code);
});

When('clico no botão Validar na tela de Autenticação do BackOffice', async function (this: World) {
  const boAuthenticationActions = new BOAuthenticationActions(this.driver as WebDriver);
  await boAuthenticationActions.clickBtnValidate();
});