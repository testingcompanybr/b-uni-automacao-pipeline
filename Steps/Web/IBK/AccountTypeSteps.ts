import { When } from '@cucumber/cucumber';
import { AccountTypeActions } from '../../../Pages/Web/IBK/AccountTypePageObject/AccountTypeActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('seleciono o tipo de conta Pessoa Física', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.driver as WebDriver);
  await accountTypeActions.clickBtnPessoaFisica();
});

When('seleciono o tipo de conta Pessoa Jurídica', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.driver as WebDriver);
  await accountTypeActions.clickBtnPessoaJuridica();
});

When('clico no botão Continuar na tela de Tipo de Conta', async function (this: World) {
  const accountTypeActions = new AccountTypeActions(this.driver as WebDriver);
  await accountTypeActions.clickBtnContinue();
});