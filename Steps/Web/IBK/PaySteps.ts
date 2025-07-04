import { When } from '@cucumber/cucumber';
import { PayActions } from '../../../Pages/Web/IBK/PayPageObject/PayActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { sleep } from '../../../Support/Utils';

When('clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnPayBillet();
});

When('preencho o campo Código do Boleto com o valor {string} na tela de Pagar na etapa de Código de barras', async function (this: World, barcode: string) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.fillBarCodeField(barcode);
});

When('clico no botão Avançar na tela de Pagar na etapa de Código de barras', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnAdvance();
  await sleep(3000);
});

When('clico no botão Avançar na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnAdvance();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World, pin: string) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Pagar na etapa de Detalhes do pagamento', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnConfirmPopUp();
  await sleep(5000);
});