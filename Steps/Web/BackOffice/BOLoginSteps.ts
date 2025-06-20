import { Given, When } from '@cucumber/cucumber';
import { BOLoginActions } from '../../../Pages/Web/BackOffice/BOLoginPageObject/BOLoginActions';
import { goToBOLoginPage } from '../../../Support/Utils';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

Given('que estou na tela de Login do BackOffice', async function (this: World) {
  await goToBOLoginPage(this.driver as WebDriver);
});

When('preencho o campo Email com o valor {string} na tela de Login do BackOffice', async function (this: World, email: string) {
  const boLoginActions = new BOLoginActions(this.driver as WebDriver);
  await boLoginActions.fillEmail(email);
});

When('preencho o campo Senha com o valor {string} na tela de Login do BackOffice', async function (this: World, password: string) {
  const boLoginActions = new BOLoginActions(this.driver as WebDriver);
  await boLoginActions.fillPassword(password);
});

When('clico no botão Entrar na tela de Login do BackOffice', async function (this: World) {
  const boLoginActions = new BOLoginActions(this.driver as WebDriver);
  await boLoginActions.clickBtnEnter();
});