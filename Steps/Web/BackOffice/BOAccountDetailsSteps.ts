import { When, Then } from '@cucumber/cucumber';
import { BOAccountDetailsActions } from '../../../Pages/Web/BackOffice/BOAccountDetailsPageObject/BOAccountDetailsActions';
import { BOAccountDetailsElementsMap } from '../../../Pages/Web/BackOffice/BOAccountDetailsPageObject/BOAccountDetailsElementsMap';
import { World } from '../../../Support/World';
import { expect } from 'chai';
import { waitFor } from '../../../Support/Utils';
import { WebDriver } from 'selenium-webdriver';

Then('verifico que estou na tela de detalhes de Conta', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, { type: 'urlContains', value: 'https://backoffice.stg.ser.buni.digital/usuarios/detalhes/' }, 30000);
  expect(currentUrl).to.contain('https://backoffice.stg.ser.buni.digital/usuarios/detalhes/');
});

When('clico no botão Dispositivos na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);
  await bOAccountDetailsActions.clickBtnDevices();
});

When('removo todos os dispositivos cadastrados clicando no botão Remover na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);
  await bOAccountDetailsActions.removeAllRegisteredDevicesFromAccount();
});

Then('não deve haver mais nenhum dispositivo cadastrado referente a conta selecionada', async function (this: World) {
  const driver = this.driver as WebDriver;

  await driver.wait(async () => {
    const paginationTextElement = await driver.findElement(BOAccountDetailsElementsMap.txtPaginationDevicesTable);
    const text = await paginationTextElement.getText();
    return text === '0-0 of 0';
  }, 10000, 'A tabela ainda não indicou 0 dispositivos.');

  const paginationTextElement = await driver.findElement(BOAccountDetailsElementsMap.txtPaginationDevicesTable);
  const text = await paginationTextElement.getText();
  expect(text).to.equal('0-0 of 0');
});

When('clico no botão Limites transacionais na tela de Detalhes da Conta', async function (this: World) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);
  await bOAccountDetailsActions.clickBtnTransactionLimits();
});

When('clico no botão Editar na linha que contém os valores {string}, {string}, {string} na tela de Detalhes da Conta', async function (this: World, transactionType: string, timePeriod: string, limitType: string) {
  const bOAccountDetailsActions = new BOAccountDetailsActions(this.driver as WebDriver);
  await bOAccountDetailsActions.clickEditButtonByRowValues(transactionType, timePeriod, limitType);
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