import { When } from '@cucumber/cucumber';
import { SmsAuthActions } from '../../../Pages/Web/IBK/SmsAuthPageObject/SmsAuthActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('preencho o campo Código com o valor {string}', async function (this: World, code: string) {
  const smsAuthActions = new SmsAuthActions(this.driver as WebDriver);
  await smsAuthActions.fillCode(code);
});

When('clico no botão Entrar da tela de Solicitar SMS', async function (this: World) {
  const smsAuthActions = new SmsAuthActions(this.driver as WebDriver);
  await smsAuthActions.clickBtnEnter();
});