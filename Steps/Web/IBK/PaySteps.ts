import { When } from '@cucumber/cucumber';
import { PayActions } from '../../../Pages/Web/IBK/PayPageObject/PayActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';

When('clico no botão Pagar Boleto na tela de Pagar na etapa de Tipo do Pagamento', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnPayBillet();
});

When('preencho o campo Código do Boleto com o valor "" na tela de Pagar na etapa de Código de barras', async function (this: World, barcode: string) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.fillBarCodeField(barcode);
});

When('clico no botão Avançar na tela de Pagar na etapa de Código de barras', async function (this: World) {
  const payActions = new PayActions(this.driver as WebDriver);
  await payActions.clickBtnAdvance();
});