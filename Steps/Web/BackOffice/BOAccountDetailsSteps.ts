import { When, Then } from '@cucumber/cucumber';
import { BOAccountDetailsActions } from '../../../Pages/Web/BackOffice/BOAccountDetailsPageObject/BOAccountDetailsActions';
import { BOAccountDetailsElementsMap } from '../../../Pages/Web/BackOffice/BOAccountDetailsPageObject/BOAccountDetailsElementsMap';
import { World } from '../../../Support/World';
import { expect } from 'chai';
import { sleep } from '../../../Support/Utils';
import { WebDriver } from 'selenium-webdriver';

Then('verifico que estou na tela de detalhes de Conta', async function (this: World) {
  await sleep(3000);
  const actual_driver = await this.driver as WebDriver;
  const url = await actual_driver.getCurrentUrl();
  expect(url).to.include('https://backoffice.stg.ser.buni.digital/usuarios/detalhes/');
});

When('clico no botão Dispositivos na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);
  await bOAccountDetailsActions.clickBtnDevices();
  await sleep(5000);
});

When('removo todos os dispositivos cadastrados clicando no botão Remover na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);
  await bOAccountDetailsActions.removeAllRegisteredDevicesFromAccount();
});

Then('não deve haver mais nenhum dispositivo cadastrado referente a conta selecionada', async function (this: World) {
  await sleep(2000);
  const actual_driver = this.driver as WebDriver;
  const paginationTextElement = await actual_driver.findElement(BOAccountDetailsElementsMap.txtPaginationDevicesTable);
  const text = await paginationTextElement.getText();
  expect(text).to.equal('0-0 of 0');
});