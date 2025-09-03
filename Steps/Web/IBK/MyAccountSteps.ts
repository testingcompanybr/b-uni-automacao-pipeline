import { When } from '@cucumber/cucumber';
import { MyAccountActions } from '../../../Pages/Web/IBK/MyAccountPageObject/MyAccountActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('clico no botão Multi acessos na tela de Minha conta', async function (this: World) {
  const myAccountActions = new MyAccountActions(this.driver as WebDriver);
  await myAccountActions.clickBtnMultiAccess();
});