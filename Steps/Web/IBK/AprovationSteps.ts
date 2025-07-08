import { When } from '@cucumber/cucumber';
import { AprovationActions } from '../../../Pages/Web/IBK/AprovationPageObject/AprovationActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { sleep } from '../../../Support/Utils';

When('clico no botão Aprovar na tela de Detalhes da transação', async function (this: World) {
  const aprovationActions = new AprovationActions(this.driver as WebDriver);
  await aprovationActions.clickBtnApprove();
});

When('digito o PIN {string} no pop-up Digite o seu PIN na tela de Detalhes da transação', async function (this: World, pin: string) {
  const aprovationActions = new AprovationActions(this.driver as WebDriver);
  await aprovationActions.digitPinNumericKeyboard(pin);
});

When('clico no botão Confirmar no pop-up Digite o seu PIN na tela de Detalhes da transação', async function (this: World) {
  const aprovationActions = new AprovationActions(this.driver as WebDriver);
  await aprovationActions.clickBtnConfirmPopUp();
  await sleep(15000);
});