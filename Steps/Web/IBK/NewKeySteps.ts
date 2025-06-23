import { When } from '@cucumber/cucumber';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { NewKeyActions } from '../../../Pages/Web/IBK/NewKeyPageObject/NewKeyActions';
import { TransferPixActions } from '../../../Pages/Web/IBK/TransferPixPageObject/TransferPixActions';
import { sleep } from '../../../Support/Utils';

When('clico no botão Chave aleatória na tela de Nova Chave na etapa de Tipo de chave', async function (this: World) {
  const newKeyActions = new NewKeyActions(this.driver as WebDriver);
  await newKeyActions.clickBtnRandomKey();
});

When('clico no botão Avançar na tela de Nova Chave na etapa de Tipo de chave', async function (this: World) {
  const newKeyActions = new NewKeyActions(this.driver as WebDriver);
  await newKeyActions.clickBtnAdvance();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação', async function (this: World, pin: string) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Nova Chave na etapa de Confirmação', async function (this: World) {
  const transferPixActions = new TransferPixActions(this.driver as WebDriver);
  await transferPixActions.clickBtnConfirmPopUp();
  await sleep(5000);
});