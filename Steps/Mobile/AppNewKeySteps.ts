import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { NewKeyActions } from '../../Pages/Mobile/NewKeyPageObject/NewKeyActions';

When('clico no botão Chave aleatória na tela de Tipo de Chave do App', async function (this: World) {
  const newKeyActions = new NewKeyActions(this.mobileDriver!);
  await newKeyActions.clickBtnRandomKey();
});

When('clico no botão CPF CNPJ com o valor {string} na tela de Tipo de Chave do App', async function (this: World, cpfcnpj: string) {
  const newKeyActions = new NewKeyActions(this.mobileDriver!);
  await newKeyActions.clickBtnCPFCNPJKeyByCPFCNPJ(cpfcnpj);
});

When('clico no botão Continuar na tela de Tipo de Chave do App', async function (this: World) {
  const newKeyActions = new NewKeyActions(this.mobileDriver!);
  await newKeyActions.clickBtnContinue();
});