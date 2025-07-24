import { When } from '@cucumber/cucumber';
import { SelectAccountActions } from '../../../Pages/Web/IBK/SelectAccountPageObject/SelectAccountActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('clico no botão Entrar da tela de Selecionar Conta', async function (this: World) {
  const selectAccountActions = new SelectAccountActions(this.driver as WebDriver);
  await selectAccountActions.clickBtnEnter();
});