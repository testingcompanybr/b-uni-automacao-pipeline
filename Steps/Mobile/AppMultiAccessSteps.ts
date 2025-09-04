import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { MultiAccessActions } from '../../Pages/Mobile/MultiAccessPageObject/MultiAccessActions';

When('clico no botão Criar usuário na tela de Multi acessos do App', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.clickCreateUser();
});

When('preencho o campo Nome completo com o valor {string} na tela de Multi acessos do App', async function (this: World, name: string) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.fillName(name);
});

When('preencho o campo Email completo com o valor {string} na tela de Multi acessos do App', async function (this: World, email: string) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.fillEmail(email);
});

When('preencho o campo Celular com o valor {string} na tela de Multi acessos do App', async function (this: World, cellphone: string) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.fillCellPhone(cellphone);
});

When('clico no botão Continuar na tela de Multi acessos do App', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.clickContinue();
});

When('preencho o campo Login com o valor {string} na tela de Multi acessos do App', async function (this: World, login: string) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.fillLogin(login);
});

When('preencho o campo Senha com o valor {string} na tela de Multi acessos do App', async function (this: World, password: string) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.fillPassword(password);
});

When('marco o checkbox Todos os acessos na tela de Multi acessos do App', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.clickCheckBoxAllAccess();
});

When('preencho o campo Login com o valor aleatório na tela de Multi acessos do App', async function (this: World) {
  const multiAccessActions = new MultiAccessActions(this.mobileDriver!);
  await multiAccessActions.fillRandomLogin();
});