import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { NewKeyActions } from '../../Pages/Mobile/NewKeyPageObject/NewKeyActions';
import type { Browser } from 'webdriverio';

When('clico no botão Chave aleatória na tela de Tipo de Chave do App', async function (this: World) {
  const newKeyActions = new NewKeyActions(this.driver as Browser);
  await newKeyActions.clickBtnRandomKey();
});

When('clico no botão Continuar na tela de Tipo de Chave do App', async function (this: World) {
  const newKeyActions = new NewKeyActions(this.driver as Browser);
  await newKeyActions.clickBtnContinue();
});