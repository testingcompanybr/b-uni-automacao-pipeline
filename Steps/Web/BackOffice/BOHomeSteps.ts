import { Given, When, Then } from '@cucumber/cucumber';
import { BOHomeActions } from '../../../Pages/Web/BackOffice/BOHomePageObject/BOHomeActions';
import { World } from '../../../Support/World';
import { expect } from 'chai';
import { waitFor } from '../../../Support/Utils';
import { WebDriver } from 'selenium-webdriver';

Given('que estou na tela Home do Backoffice', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, { type: 'urlContains', value: 'https://backoffice.stg.ser.buni.digital/usuarios/relatorio' }, 30000);
  expect(currentUrl).to.contain('https://backoffice.stg.ser.buni.digital/usuarios/relatorio');
});

Then('verifico que estou logado na Home do BackOffice', async function (this: World) {
  const driver = this.driver as WebDriver;
  const currentUrl = await waitFor(driver, { type: 'urlContains', value: 'https://backoffice.stg.ser.buni.digital/usuarios/relatorio' }, 30000);
  expect(currentUrl).to.contain('https://backoffice.stg.ser.buni.digital/usuarios/relatorio');
});

When('clico no botão para visualizar o registro da primeira linha', async function (this: World) {
  const boHomeActions = new BOHomeActions(this.driver as WebDriver);
  await boHomeActions.clickviewButtonRegisterFirstRow();
});

When('clico no botão para mostrar os Filtros avançados', async function (this: World) {
  const boHomeActions = new BOHomeActions(this.driver as WebDriver);
  await boHomeActions.clickAdvancedFilters();
});

When('preencho o campo CPF ou CNPJ com o valor {string} nos Filtros avançados', async function (this: World, cpf: string) {
  const boHomeActions = new BOHomeActions(this.driver as WebDriver);
  await boHomeActions.fillCPFFilter(cpf)
});

When('clico no botão Filtrar nos Filtros avançados', async function (this: World) {
  const boHomeActions = new BOHomeActions(this.driver as WebDriver);
  await boHomeActions.clickBtnFilter();
});

When('clico no botão para visualizar o registro filtrado', async function (this: World) {
  const boHomeActions = new BOHomeActions(this.driver as WebDriver);
  await boHomeActions.clickviewButtonRegisterFirstRow();
});