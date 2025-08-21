import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { SmsAuthActions } from '../../Pages/Mobile/SmsAuthPageObject/SmsAuthActions';

When('preencho o campo Código com o valor {string} na tela de Autorização do App', async function (this: World, smsCode: string) {
  const smsAuthActions = new SmsAuthActions(this.mobileDriver!);
  await smsAuthActions.fillSMSCode(smsCode);
});

When('clico no botão Entrar na tela de Login do App na tela de Autorização do App', async function (this: World) {
  const smsAuthActions = new SmsAuthActions(this.mobileDriver!);
  await smsAuthActions.clickEnterButton();
});