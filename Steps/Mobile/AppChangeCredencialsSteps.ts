import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { ChangeCredencialsActions } from '../../Pages/Mobile/ChangeCredencialsPageObject/ChangeCredencialsActions';

When('clico no botão OK na tela de Alteração de Credenciais do App', async function (this: World) {
  const changeCredencialsActions = new ChangeCredencialsActions(this.mobileDriver!);
  await changeCredencialsActions.clickOkButton();
});

When('preencho o campo Código com o valor {string} na tela de Alteração de Credenciais do App', async function (this: World, code: string) {
  const changeCredencialsActions = new ChangeCredencialsActions(this.mobileDriver!);
  await changeCredencialsActions.fillSMSCode(code);
});

When('clico no botão Continuar na tela de Alteração de Credenciais do App', async function (this: World) {
  const changeCredencialsActions = new ChangeCredencialsActions(this.mobileDriver!);
  await changeCredencialsActions.clickContinueButton();
});

When('preencho o campo Senha com o valor {string} na tela de Alteração de Credenciais do App', async function (this: World, password: string) {
  const changeCredencialsActions = new ChangeCredencialsActions(this.mobileDriver!);
  await changeCredencialsActions.fillPassword(password);
});

When('clico no botão Confirmar na tela de Alteração de Credenciais do App', async function (this: World) {
  const changeCredencialsActions = new ChangeCredencialsActions(this.mobileDriver!);
  await changeCredencialsActions.clickConfirmButton();
});