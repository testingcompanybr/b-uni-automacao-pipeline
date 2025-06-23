import { When } from '@cucumber/cucumber';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { PixActions } from '../../../Pages/Web/IBK/PixPageObject/PixActions';

When('clico no botão Transferir na tela de Pix', async function (this: World) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnTransfer();
});

When('clico no botão Criar chave na tela de Pix', async function (this: World) {
  const pixActions = new PixActions(this.driver as WebDriver);
  await pixActions.clickBtnCreateKey();
});