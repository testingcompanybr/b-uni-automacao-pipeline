import { Given, When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { LoginActions } from '../../Pages/Mobile/LoginPageObject/LoginActions';
import type { Browser } from 'webdriverio';

Given('que estou na página Inicial do App', async function (this: World) {
//
});

When('clico no botão Entrar na tela Inicial do App', async function (this: World) {
  const loginActions = new LoginActions(this.driver as Browser);
  await loginActions.clickEnterButton();
});

When('clico no botão Criar Conta na tela Inicial do App', async function (this: World) {
  const loginActions = new LoginActions(this.driver as Browser);
  await loginActions.clickCreateAccountButton();
});