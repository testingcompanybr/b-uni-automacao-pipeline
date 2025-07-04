import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { PayBillActions } from '../../Pages/Mobile/PayBillPageObject/PayBillActions';
import type { Browser } from 'webdriverio';

When('preencho o campo Código do boleto com {string} na tela de Pagar conta do App', async function (this: World, barCode: string) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.fillBilletCodeValue(barCode);
});

When('clico no botão Continuar na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.clickBtnContinue();
});

When('clico no botão Confirmar na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.clickBtnConfirm();
});

When('digito o PIN {string} na tela de Pagar conta do App', async function (this: World, pinCode: string) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.fillPINCode(pinCode);

  const mobileDriver = this.driver as Browser;
  await mobileDriver.pause(5000);
});

When('clico no botão Ver Comprovante na tela de Pagar conta do App', async function (this: World) {
  const payBillActions = new PayBillActions(this.driver as Browser);
  await payBillActions.clickBtnShowTransactionProof();
});