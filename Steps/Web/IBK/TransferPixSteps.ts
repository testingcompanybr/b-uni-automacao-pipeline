import { When } from '@cucumber/cucumber';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { TransferPixActions } from '../../../Pages/Web/IBK/TransferPixPageObject/TransferPixActions';
import { sleep } from '../../../Support/Utils';

When('preencho o campo Buscar por nome com o valor {string} na tela de Transferir Via Pix', async function (this: World, name: string) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.fillSearchByNameField(name);
});

When('clico na conta filtrada na tela de Transferir Via Pix na etapa de Contatos', async function (this: World) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.selectSearchResult();
});

When('preencho o campo valor com {string} na tela Transferir Via Pix na etapa de Valor', async function (this: World, pixValue: string) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.fillPixValueField(pixValue);
});

When('clico no botão Avançar na tela Transferir Via Pix na etapa de Valor', async function (this: World) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.clickBtnAdvance();
});

When('preencho o campo descrição com o valor {string} Transferir Via Pix na etapa de Descrição', async function (this: World, description: string) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.fillDescriptionTextArea(description);
});

When('clico no botão Avançar na tela Transferir Via Pix na etapa de Descrição', async function (this: World) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.clickBtnAdvance();
});

When('clico no botão Confirmar na tela de Transferir Via Pix na etapa de Confirmar', async function (this: World) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.clickBtnConfirm();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Transferir Via Pix na etapa de Confirmar', async function (this: World, pin: string) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Transferir Via Pix na etapa de Confirmar', async function (this: World) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.clickBtnConfirmPopUp();
  await sleep(15000);
});