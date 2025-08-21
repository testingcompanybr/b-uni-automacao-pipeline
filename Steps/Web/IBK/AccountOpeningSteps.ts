import { When, Then } from '@cucumber/cucumber';
import { AccountOpeningActions } from '../../../Pages/Web/IBK/AccountOpeningPageObject/AccountOpeningActions';
import { World } from '../../../Support/World';
import { AccountOpeningElementsMap } from '../../../Pages/Web/IBK/AccountOpeningPageObject/AccountOpeningElementsMap';
import { expect } from 'chai';
import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { sleep, waitFor } from '../../../Support/Utils';

//PESSOA FISICA---------------------------------------------------------------------------------------------------------------
When('preencho o campo CPF com o valor {string} na tela de Abertura de Conta', async function (this: World, cpf: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCPFForm(cpf);
});

When('preencho o campo CPF com o valor aleatório na tela de Abertura de Conta', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCPFRandomForm();
});

When('preencho o campo Nome completo com o valor {string} na tela de Abertura de Conta', async function (this: World, name: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillNameForm(name);
});

When('preencho o campo Nome da mãe com o valor {string} na tela de Abertura de Conta', async function (this: World, motherName: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillMotherNameForm(motherName);
});

When('preencho o campo Email com o valor {string} na tela de Abertura de Conta', async function (this: World, email: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillEmailForm(email);
});

When('preencho o campo Celular com o valor {string} na tela de Abertura de Conta', async function (this: World, cellphone: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCellphoneForm(cellphone);
});

When('preencho o campo Data de nascimento com o valor {string} na tela de Abertura de Conta', async function (this: World, birthDate: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillBirthDateForm(birthDate);
});

When('preencho o campo Faturamento médio mensal com o valor {string} na tela de Abertura de Conta', async function (this: World, monthlybilling: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillMonthlyBillingForm(monthlybilling);
});

When('clico no botão Continuar na tela de Abertura de Conta', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinue();
});

When('preencho o campo Código de validação com o valor {string} na tela de Abertura de Conta', async function (this: World, validationCode: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillValidationCodeForm(validationCode);
});

When('clico no botão Continuar na tela de Abertura de Conta na etapa de Validação', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickCheckBoxTerms();
});

When('clico no botão Continuar na tela de Abertura de Conta na etapa de Termos de Uso', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickCheckBoxPrivacyPolitic();
});

When('clico no botão Continuar na tela de Abertura de Conta na etapa de Politica de Privacidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('preencho o campo Senha de acesso com o valor {string} na tela de Abertura de Conta', async function (this: World, passwordAcess: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillPasswordAcessForm(passwordAcess);
});

When('clico no botão Continuar na tela de Abertura de Conta na etapa de Credenciais', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('preencho o campo CEP com o valor {string} na tela de Abertura de Conta', async function (this: World, cep: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCEPForm(cep);
});

When('preencho o campo Bairro com o valor {string} na tela de Abertura de Conta', async function (this: World, neightborhood: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillNeightborhood(neightborhood);
});

When('preencho o campo Logradouro com o valor {string} na tela de Abertura de Conta', async function (this: World, publicplace: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillPublicPlace(publicplace);
});

When('preencho o campo Número com o valor {string} na tela de Abertura de Conta', async function (this: World, numberAdress: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillNumberAdressForm(numberAdress);
});

When('preencho o campo Complemento com o valor {string} na tela de Abertura de Conta', async function (this: World, complement: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillComplementForm(complement);
});

When('clico no botão Continuar na tela de Abertura de Conta na etapa de Endereço', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinalAdress();
});

Then('a mensagem de erro {string} deve ser apresentada na tela de Abertura de Conta', async function (this: World, errorMessage: string) {
  const driver = this.driver as WebDriver;
  const element = await waitFor(driver, { type: 'textPresent', locator: AccountOpeningElementsMap.msgError, text: errorMessage }, 10000) as WebElement;

  const actualText = await element.getText();
  expect(actualText).to.equal(errorMessage);
});

Then('a mensagem de erro {string} deve ser apresentada na tela de Abertura de Conta na etapa de Validação', async function (this: World, errorMessage: string) {
  const driver = this.driver as WebDriver;
  const element = await waitFor(driver, { type: 'textPresent', locator: AccountOpeningElementsMap.msgErrorValidation, text: errorMessage }, 10000) as WebElement;

  const actualText = await element.getText();
  expect(actualText).to.equal(errorMessage);
});

Then('a mensagem de erro {string} deve ser apresentada na tela de Abertura de Conta na etapa de Endereço', async function (this: World, errorMessage: string) {
  const driver = this.driver as WebDriver;
  const element = await waitFor(driver, { type: 'textPresent', locator: AccountOpeningElementsMap.msgErrorAdress, text: errorMessage }, 10000) as WebElement;

  const actualText = await element.getText();
  expect(actualText).to.equal(errorMessage);
});

When('clico no botão Começar verificação na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnStartVerification();
});

When('clico no botão Carregar um arquivo na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnUpload();
});

When('clico no botão Registro Geral - RG na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnRG();
});

When('clico no botão Carteira de Motorista - CNH na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnCNH();
});

When('clico no botão Documento Aberto na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnCNHOpen();
});

When('clico no botão Digital na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnCNHDigital();
});

When('clico no botão Entendi na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnUnderstand();
});

When('clico no botão Pular na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnSkip();
});

When('aguardo as orientações para o upload da foto na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.waitTips();
});

When('clico novamente no botão Entendi na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnStartVerification();
});

When('clico no botão Carregar Imagem na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnUploadImage();
});

When('clico no botão Carregar Documento na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnUploadDocument();
});

When('começo o processo de verificação da IDWall na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  await sleep(5000);
  const actual_driver = await this.driver as WebDriver;
  const iframe = actual_driver.findElement(By.css(".idwall_container > iframe"));
  await actual_driver.switchTo().frame(iframe);
});

When('faço o envio do documento CNH na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  await sleep(2000);
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.uploadDocument();
  await sleep(2000);
});

When('clico no botão Enviar na tela de Abertura de Conta na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnSend();
});

Then('o botão Continuar deve estar desabilitado na etapa de Validação', async function (this: World) {
  const driver = this.driver as WebDriver;
  const button = await waitFor(driver, {type: 'elementDisabled',locator: By.css('button[data-testid="advance-approval-device-submit"]')}, 10000);
  const pointerEvents = await driver.executeScript('return window.getComputedStyle(arguments[0]).getPropertyValue("pointer-events");',button);

  expect(pointerEvents).to.equal('none');
});

Then('o botão Continuar deve estar desabilitado na etapa de Credenciais', async function (this: World) {
  const driver = this.driver as WebDriver;
  const button = await waitFor(driver, {type: 'elementDisabled',locator: By.css('button[data-testid="advance-credentials-submit"]')}, 10000);
  const pointerEvents = await driver.executeScript('return window.getComputedStyle(arguments[0]).getPropertyValue("pointer-events");',button);

  expect(pointerEvents).to.equal('none');
});

Then('o botão Continuar deve estar desabilitado na etapa de Endereço', async function (this: World) {
  const driver = this.driver as WebDriver;
  const button = await waitFor(driver, {type: 'elementDisabled',locator: By.css('button[data-testid="advance-address-submit"]')}, 10000);
  const pointerEvents = await driver.executeScript('return window.getComputedStyle(arguments[0]).getPropertyValue("pointer-events");',button);

  expect(pointerEvents).to.equal('none');
});

//PESSOA JURIDICA---------------------------------------------------------------------------------------------------------------
When('preencho o campo CNPJ com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, cnpj: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCNPJForm(cnpj);
});

When('preencho o campo CNPJ com o valor aleatório na tela de Abertura de Conta Juridica', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCNPJRandomForm();
});

When('preencho o campo Razão social com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, corporateReason: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCorporateReasonForm(corporateReason);
});

When('preencho o campo Nome fantasia com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, fantasyName: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillFantasyNameForm(fantasyName);
});

When('preencho o campo Email corporativo com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, corporateEmail: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCorporateEmailForm(corporateEmail);
});

When('preencho o campo Celular corporativo com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, corporateCellPhone: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCorporateCellPhoneForm(corporateCellPhone);
});

When('preencho o campo Faturamento médio mensal corporativo com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, corporateMonthlybilling: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCorporateMonthlyBillingForm(corporateMonthlybilling);
});

When('preencho o campo Quando sua empresa foi aberta? com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, corporationOpeningDate: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCorporationOpeningDateForm(corporationOpeningDate);
});

When('preencho o campo Ramo de atividade com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, corporationBranchActivity: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCorporationBranchActivityForm(corporationBranchActivity);
});

When('preencho o campo Categoria da empresa com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, corporationCategory: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCorporationCategoryForm(corporationCategory);
});

When('preencho o campo Inscrição estadual com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, stateRegistration: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillStateRegistrationForm(stateRegistration);
});

When('clico no botão Continuar na tela de Abertura de Conta Juridica', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinue();
});

When('preencho o campo Código de validação com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, validationCode: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillValidationCodeForm(validationCode);
});

When('clico no botão Continuar na tela de Abertura de Conta Juridica na etapa de Validação', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('preencho o campo CPF com o valor aleatório na tela de Abertura de Conta Juridica', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCPFRandomForm();
});

When('preencho o campo Nome completo com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, name: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillNameForm(name);
});

When('preencho o campo Nome da mãe com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, motherName: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillMotherNameForm(motherName);
});

When('preencho o campo Email com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, email: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillEmailForm(email);
});

When('preencho o campo Celular com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, cellphone: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillRepresentativeCellphoneForm(cellphone);
});

When('preencho o campo Data de nascimento com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, birthDate: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillBirthDateForm(birthDate);
});

When('preencho o campo Faturamento médio mensal com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, monthlybilling: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillRepresentativeMonthBillingForm(monthlybilling);
});

When('preencho o campo Porcentagem do representante com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, representativePercentage: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillRepresentativePercentageForm(representativePercentage);
});

When('clico no botão Continuar na tela de Abertura de Conta Juridica na etapa de Representantes', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueRepresentatitve();
});

When('marquei o checkbox Aceitar Termos de Uso na tela de Abertura de Conta Juridica', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickCheckBoxTerms();
});

When('clico no botão Continuar na tela de Abertura de Conta Juridica na etapa de Termos de Uso', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('marquei o checkbox Aceitar Política de Privacidade na tela de Abertura de Conta Juridica', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickCheckBoxPrivacyPolitic();
});

When('clico no botão Continuar na tela de Abertura de Conta Juridica na etapa de Politica de Privacidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('preencho o campo Senha de acesso com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, passwordAcess: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillPasswordAcessForm(passwordAcess);
});

When('clico no botão Continuar na tela de Abertura de Conta Juridica na etapa de Credenciais', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinal();
});

When('preencho o campo CEP com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, cep: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillCEPForm(cep);
});

When('preencho o campo Número com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, numberAdress: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillNumberAdressForm(numberAdress);
});

When('preencho o campo Complemento com o valor {string} na tela de Abertura de Conta Juridica', async function (this: World, complement: string) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.fillComplementForm(complement);
});

When('clico no botão Continuar na tela de Abertura de Conta Juridica na etapa de Endereço da empresa', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnContinueFinalAdress();
});

When('começo o processo de verificação da IDWall na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  await sleep(5000);
  const actual_driver = await this.driver as WebDriver;
  const iframe = actual_driver.findElement(By.css(".idwall_container > iframe"));
  await actual_driver.switchTo().frame(iframe);
});

When('clico no botão Começar verificação na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnStartVerification();
});

When('clico no botão Carregar um arquivo na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnUpload();
});

When('clico no botão Carteira de Motorista - CNH na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnCNH();
});

When('clico no botão Digital na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnCNHDigital();
});

When('clico no botão Entendi na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnUnderstand();
});

When('clico no botão Pular na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnSkip();
});

When('faço o envio do documento CNH na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  await sleep(2000);
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.uploadDocument();
  await sleep(2000);
});

When('clico no botão Enviar na tela de Abertura de Conta Juridica na etapa de Identidade', async function (this: World) {
  const accountOpeningActions = new AccountOpeningActions(this.driver as WebDriver);
  await accountOpeningActions.clickBtnSend();
});