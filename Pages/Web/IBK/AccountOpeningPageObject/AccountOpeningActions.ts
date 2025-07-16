import { WebDriver, WebElement, By, until, Key } from 'selenium-webdriver';
import { AccountOpeningElementsMap } from './AccountOpeningElementsMap';
import { sleep, CPFGenerator, CNPJGenerator } from '../../../../Support/Utils';

export class AccountOpeningActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

//Primeiros Passos---------------------------------------------------------------------------------------------
async fillCPFForm(cpf: string): Promise<void> {
    const cpfInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCPF);
    await cpfInput.sendKeys(cpf);
}

async fillCPFRandomForm(): Promise<void> {
    const cpfInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCPF);
    await cpfInput.sendKeys(CPFGenerator());
}

async fillNameForm(name: string): Promise<void> {
    const nameInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldName);
    await nameInput.sendKeys(name);
}

async fillMotherNameForm(motherName: string): Promise<void> {
    const motherNameInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldMotherName);
    await motherNameInput.sendKeys(motherName);
}

async fillEmailForm(email: string): Promise<void> {
    const emailInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldEmail);
    await emailInput.sendKeys(email);
}

async fillCellphoneForm(cellphone: string): Promise<void> {
    const cellphoneInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCellphone);
    await cellphoneInput.sendKeys(cellphone);
}

async fillBirthDateForm(birthDate: string): Promise<void> {
    const birthDateInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldBirthDate);
    await birthDateInput.sendKeys(birthDate);
}

async fillMonthlyBillingForm(monthlybilling: string): Promise<void> {
    const monthlybillingInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldMonthlyBilling);
    await monthlybillingInput.sendKeys(monthlybilling);
}

async clickBtnContinue(): Promise<void> {
    const btnEnter: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnContinue);
    await btnEnter.click();
}

//Validação-------------------------------------------------------------------------------------------------------------
async fillValidationCodeForm(validationCode: string): Promise<void> {
    const validationCodeInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldValidationCode);
    await validationCodeInput.sendKeys(validationCode);
}

async clickBtnContinueFinal(): Promise<void> {
    const btnEnterFinal: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnContinueFinal);
    await btnEnterFinal.click();
}

//Termos de Uso--------------------------------------------------------------------------------------------------------
async clickCheckBoxTerms(): Promise<void> {
    const checkBoxTerms: WebElement = await this.waitForElement(AccountOpeningElementsMap.checkboxTerms);
    await checkBoxTerms.click();
}

//Politicas de privacidade---------------------------------------------------------------------------------------------
async clickCheckBoxPrivacyPolitic(): Promise<void> {
    const checkBoxPrivacyPolitic: WebElement = await this.waitForElement(AccountOpeningElementsMap.checkboxPrivacyPolitic);
    await checkBoxPrivacyPolitic.click();
}

//Credenciais
async fillPasswordAcessForm(passwordAcess: string): Promise<void> {
    const passwordAcessInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldPasswordAcess);
    await passwordAcessInput.sendKeys(passwordAcess);
}

//Endereço-------------------------------------------------------------------------------------------------------------
async fillCEPForm(cep: string): Promise<void> {
    const cepInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCEP);
    await cepInput.sendKeys(cep);
    await sleep(5000);
}

async fillNeightborhood(neightborhood: string): Promise<void> {
    const neightborhoodInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldNeightborhood);
    await neightborhoodInput.sendKeys(neightborhood);
}

async fillPublicPlace(publicplace: string): Promise<void> {
    const publicplaceInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldPublicPlace);
    await publicplaceInput.sendKeys(publicplace);
}

async fillNumberAdressForm(numberAdress: string): Promise<void> {
    const numberAdressInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldNumberAdress);
    await numberAdressInput.sendKeys(numberAdress);
}

async fillComplementForm(complement: string): Promise<void> {
    const complementInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldComplement);
    await complementInput.sendKeys(complement);
}

async clickBtnContinueFinalAdress(): Promise<void> {
    const btnEnterFinalAdress: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnContinueFinalAdress);
    await btnEnterFinalAdress.click();
}

//Identidade-----------------------------------------------------------------------------------------------------------
async clickBtnStartVerification(): Promise<void> {
    const btnStartVerification: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnVerify);
    await btnStartVerification.click();
}

async clickBtnUpload(): Promise<void> {
    const btnUpload: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnUpload);
    await btnUpload.click();
}

async clickBtnRG(): Promise<void> {
    const btnRG: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnRG);
    await btnRG.click();
}

async clickBtnCNH(): Promise<void> {
    const btnCNH: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnCNH);
    await btnCNH.click();
}

async clickBtnCNHOpen(): Promise<void> {
    const btnCNHOpen: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnCNHOpen);
    await btnCNHOpen.click();
}

async clickBtnCNHDigital(): Promise<void> {
    const btnCNHDigital: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnCNHDigital);
    await btnCNHDigital.click();
}

async clickBtnUnderstand(): Promise<void> {
    const btnUnderstand: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnUnderstand);
    await btnUnderstand.click();
}

async clickBtnSkip(): Promise<void> {
    const btnSkip: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnSkip);
    await btnSkip.click();
}

async clickBtnUploadImage(): Promise<void> {
    const btnUploadImage: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnUploadImage);
    await btnUploadImage.click();
}

async clickBtnUploadDocument(): Promise<void> {
    const btnUploaddocument: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnUploadDocument);
    await btnUploaddocument.click();
}

async uploadDocument(): Promise<void> {
    const input = await this.driver.findElement(AccountOpeningElementsMap.inputDocument);
    const filePath = require('path').resolve(__dirname, '../../../../Assets/CNH.pdf');
    await this.driver.executeScript('arguments[0].style.display = "block";', input);
    await input.sendKeys(filePath);
}

async clickBtnSend(): Promise<void> {
    const btnSend: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnSend);
    await btnSend.click();
}

async waitTips(): Promise<void> {
    await sleep(5000);
}

//Primeiros Passos Juridico-----------------------------------------------------------------------------------
async fillCNPJForm(cnpj: string): Promise<void> {
    const cnpjInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCNPJ);
    await cnpjInput.sendKeys(cnpj);
}

async fillCNPJRandomForm(): Promise<void> {
    const cnpjInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCNPJ);
    await cnpjInput.sendKeys(CNPJGenerator());
}

async fillCorporateReasonForm(corporateReason: string): Promise<void> {
    const corporateReasonInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCorporateReason);
    await corporateReasonInput.sendKeys(corporateReason);
}

async fillFantasyNameForm(fantasyName: string): Promise<void> {
    const fantasyNameInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldFantasyName);
    await fantasyNameInput.sendKeys(fantasyName);
}

async fillCorporateEmailForm(corporateEmail: string): Promise<void> {
    const corporateEmailInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCorporateEmail);
    await corporateEmailInput.sendKeys(corporateEmail);
}

async fillCorporateCellPhoneForm(corporateCellPhone: string): Promise<void> {
    const corporateCellPhoneInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCorporateCellPhone);
    await corporateCellPhoneInput.sendKeys(corporateCellPhone);
}

async fillCorporateMonthlyBillingForm(corporateMonthlyBilling: string): Promise<void> {
    const corporateMonthlyBillingInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCorporateMonthlyBilling);
    await corporateMonthlyBillingInput.sendKeys(corporateMonthlyBilling);
}

async fillCorporationOpeningDateForm(corporationOpeningDate: string): Promise<void> {
    const corporationOpeningDateInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCorporationOpeningDate);
    await corporationOpeningDateInput.sendKeys(corporationOpeningDate);
}

async fillCorporationBranchActivityForm(corporationBranchActivity: string): Promise<void> {
    const corporationBranchActivityInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldBranchActivity);
    await corporationBranchActivityInput.click();
    const corporationBranchActivityOption: WebElement = await this.waitForElement(AccountOpeningElementsMap.optionBranchActivity(corporationBranchActivity));
    await corporationBranchActivityOption.click();
}

async fillCorporationCategoryForm(corporationCategory: string): Promise<void> {
    const corporationCategoryInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldCorporationCategory);
    await corporationCategoryInput.sendKeys(corporationCategory);
    const corporationCategoryOption: WebElement = await this.waitForElement(AccountOpeningElementsMap.optionCorporationCategory(corporationCategory));
    await corporationCategoryOption.click();
}

async fillStateRegistrationForm(stateRegistration: string): Promise<void> {
    const stateRegistrationInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldStateRegistration);
    await stateRegistrationInput.sendKeys(stateRegistration);
}

//Representates juridicos------------------------------------------------------------------------------
async fillRepresentativePercentageForm(representativePercentage: string): Promise<void> {
    const representativePercentageInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldRepresentativePercentage);
    await representativePercentageInput.sendKeys(representativePercentage);
}

async fillRepresentativeCellphoneForm(representativeCellphone: string): Promise<void> {
    const representativeCellphoneInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldRepresentativeCellphone);
    await representativeCellphoneInput.sendKeys(representativeCellphone);
}

async fillRepresentativeMonthBillingForm(representativeMonthBilling: string): Promise<void> {
    const representativeMonthBillingInput: WebElement = await this.waitForElement(AccountOpeningElementsMap.fieldRepresentativeMonthBilling);
    await representativeMonthBillingInput.sendKeys(representativeMonthBilling);

}

async clickBtnContinueRepresentatitve(): Promise<void> {
    const btnContinueRepresentatitve: WebElement = await this.waitForElement(AccountOpeningElementsMap.btnContinueRepresentative);
    await btnContinueRepresentatitve.click();
}

}