import { When, Then } from '@cucumber/cucumber';
import { AprovationActions } from '../../../Pages/Web/IBK/AprovationPageObject/AprovationActions';
import { World } from '../../../Support/World';
import { WebDriver } from 'selenium-webdriver';
import { sleep } from '../../../Support/Utils';
import { expect } from 'chai';

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

Then('a tela Aprovação deve ser apresentada', async function (this: World) {
  await sleep(3000);
  const actual_driver = await this.driver as WebDriver;
  const url = await actual_driver.getCurrentUrl();
  expect(url).to.equal('https://ibk.stg.ser.buni.digital/aprovacao');
});