import { When } from '@cucumber/cucumber';
import { PasswordCredentialActions } from '../../../Pages/Web/IBK/PasswordCredentialPageObject/PasswordCredentialActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('clico no botão Ok na tela de Criação de Senha', async function (this: World) {
  const passwordCredentialActions = new PasswordCredentialActions(this.driver as WebDriver);
  await passwordCredentialActions.clickBtnOk();
});

When('preencho o campo Código com o valor {string} na tela de Criação de Senha', async function (this: World, code: string) {
  const passwordCredentialActions = new PasswordCredentialActions(this.driver as WebDriver);
  await passwordCredentialActions.fillCode(code);
});

When('clico no botão Próximo na tela de Criação de Senha', async function (this: World) {
  const passwordCredentialActions = new PasswordCredentialActions(this.driver as WebDriver);
  await passwordCredentialActions.clickBtnNext();
});

When('preencho o campo Senha com o valor {string} na tela de Criação de Senha', async function (this: World, password: string) {
  const passwordCredentialActions = new PasswordCredentialActions(this.driver as WebDriver);
  await passwordCredentialActions.fillPassword(password);
});

When('clico no botão Confirmar na tela de Criação de Senha', async function (this: World) {
  const passwordCredentialActions = new PasswordCredentialActions(this.driver as WebDriver);
  await passwordCredentialActions.clickBtnConfirm();
});