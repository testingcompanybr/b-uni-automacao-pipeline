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

When('clico no botão Limites transacionais na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);
  await bOAccountDetailsActions.clickBtnTransactionLimits();
  await sleep(3000);
});

When('clico no botão Editar na linha que contém os valores {string}, {string}, {string} na tela de Detalhes da Conta', async function (this: World, transactionType: string, timePeriod: string, limitType: string) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);  
  await bOAccountDetailsActions.clickEditButtonByRowValues(transactionType,timePeriod,limitType);
});

When('preencho campo Novo limite com o valor {string} na janela Edição de limite de conta na tela de Detalhes da Conta', async function (this: World, newLimit: string) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);  
  await bOAccountDetailsActions.fillNewLimit(newLimit);
});

When('clico no botão Confirmar na janela Edição de limite de conta na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);  
  await bOAccountDetailsActions.clickBtnConfirmNewLimit();
});

When('clico no botão Confirmar no dialogo Confirmação de alteração de limite de conta na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);  
  await bOAccountDetailsActions.btnConfirmNewLimitDialog();
});