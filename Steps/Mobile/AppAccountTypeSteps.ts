import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AccountTypeActions } from '../../Pages/Mobile/AccountTypePageObject/AccountTypeActions';

When('seleciono o tipo de conta Pessoa Física na tela de Tipo de Conta do App', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.mobileDriver!);
  await accountTypeActions.clickPFBtn();
});

When('seleciono o tipo de conta Pessoa Juridica na tela de Tipo de Conta do App', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.mobileDriver!);
  await accountTypeActions.clickPJBtn();
});

When('clico no botão Continuar na tela de Tipo de Conta do App', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.mobileDriver!);
  await accountTypeActions.clickContinueBtn();
});