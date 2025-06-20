import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AccountTypeActions } from '../../Pages/Mobile/AccountTypePageObject/AccountTypeActions';
import type { Browser } from 'webdriverio';

When('seleciono o tipo de conta Pessoa Física na tela de Tipo de Conta do App', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.driver as Browser);
  await accountTypeActions.clickPFBtn();
});

When('clico no botão Continuar na tela de Tipo de Conta do App', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.driver as Browser);
  await accountTypeActions.clickContinueBtn();
});