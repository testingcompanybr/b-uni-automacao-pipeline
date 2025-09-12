import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { LoginCredencialsActions } from '../../Pages/Mobile/LoginCredencialsPageObject/LoginCredencialsActions';

When('preencho o campo CPF com o valor {string} na tela de Login do App', async function (this: World, cpf: string) {
  const loginCredencialsActions = new LoginCredencialsActions(this.mobileDriver!);
  await loginCredencialsActions.fillCPF(cpf);
});

When('clico no botão Continuar na tela de Login do App', async function (this: World) {
  const loginCredencialsActions = new LoginCredencialsActions(this.mobileDriver!);
  await loginCredencialsActions.clickContinueButton();
});

When('preencho o campo Senha com o valor {string} na tela de Login do App', async function (this: World, password: string) {
  const loginCredencialsActions = new LoginCredencialsActions(this.mobileDriver!);
  await loginCredencialsActions.fillPassword(password);
});

When('clico no botão Entrar na tela de Login do App', async function (this: World) {
  const loginCredencialsActions = new LoginCredencialsActions(this.mobileDriver!);
  await loginCredencialsActions.clickEnterButton();
});

When('clico no botão Agora não no dialogo do FaceID na tela de Login do App', async function (this: World) {
  const loginCredencialsActions = new LoginCredencialsActions(this.mobileDriver!);
  await loginCredencialsActions.clickNotNowFaceIDButton();
});

When('preencho o campo CPF com o valor login gerado através do multi acesso na tela de Login do App', async function (this: World) {
  const loginCredencialsActions = new LoginCredencialsActions(this.mobileDriver!);
  await loginCredencialsActions.fillMultiaccessStoredLogin();
});