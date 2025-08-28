import { Browser } from 'webdriverio';
import { AccountOpeningElementsMap } from './AccountOpeningElementsMap';
import { bySelector } from '../../../Support/MobileUtils';
import { CPFGenerator, CNPJGenerator } from '../../../Support/Utils';

export class AccountOpeningActions {
  constructor(private driver: Browser) {}

  //PESSOA FISICA----------------------------------------------------------------------------------
  async fillCPF(cpf: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCPF));
    await input.click();
    await input.addValue(cpf);
    await this.driver.hideKeyboard();
  }

  async fillCPFRandom() {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCPF));
    await input.click();
    await input.addValue(CPFGenerator());
    await this.driver.hideKeyboard();
  }

  async fillEmail(email: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputEmail));
    await input.click();
    await input.addValue(email);
    await this.driver.hideKeyboard();
  }

  async fillCellPhone(cellphone: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCellphone));
    await input.click();
    await input.addValue(cellphone);
    await this.driver.hideKeyboard();
  }

  async fillSMSCode(smsCode: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputSMSCode));
    await input.click();
    await input.addValue(smsCode);
    await this.driver.hideKeyboard();
  }

  async fillName(name: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputName));
    await input.click();
    await input.addValue(name);
    await this.driver.hideKeyboard();
  }

  async fillBirthdate(birthdate: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputBirthDate));
    await input.click();
    await input.addValue(birthdate);
    await this.driver.hideKeyboard();
  }

  async fillMotherName(motherName: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputMotherName));
    await input.click();
    await input.addValue(motherName);
    await this.driver.hideKeyboard();
  }

  async clickCheckBoxTerms() {
    const checkbox = await this.driver.$(bySelector(AccountOpeningElementsMap.checkBoxTerms));
    await checkbox.click();
  }

  async clickCheckBoxPolicy() {
    const checkbox = await this.driver.$(bySelector(AccountOpeningElementsMap.checkBoxPolicy));
    await checkbox.click();
  }

  async fillPassword(password: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputPassword));
    await input.click();
    await input.addValue(password);
    await this.driver.hideKeyboard();
  }

  async fillCEP(cep: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCEP));
    await input.click();
    await input.addValue(cep);
    await this.driver.hideKeyboard();
  }

  async fillUF(uf: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputUF));
    await input.click();
    await input.addValue(uf);
    await this.driver.hideKeyboard();
  }

  async fillCity(city: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCity));
    await input.click();
    await input.addValue(city);
    await this.driver.hideKeyboard();
  }

  async fillNeightborhood(neightborhood: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputNeightborhood));
    await input.click();
    await input.addValue(neightborhood);
    await this.driver.hideKeyboard();
  }

  async fillStreet(street: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputStreet));
    await input.click();
    await input.addValue(street);
    await this.driver.hideKeyboard();
  }

  async fillNumber(number: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputNumber));
    await input.click();
    await input.addValue(number);
    await this.driver.hideKeyboard();
  }

  async fillComplement(complement: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputComplement));
    await input.click();
    await input.addValue(complement);
    await this.driver.hideKeyboard();
  }

  async clickContinueButton() {
    const btn = await this.driver.$(bySelector(AccountOpeningElementsMap.btnContinue));
    await btn.click();
  }

  async clickStartIdentificationButton() {
    const btn = await this.driver.$(bySelector(AccountOpeningElementsMap.btnStartIdentification));
    await btn.click();
  }

  //PESSOA JURIDICA--------------------------------------------------------------------------------
  async fillCNPJ(cnpj: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCNPJ));
    await input.click();
    await input.addValue(cnpj);
    await this.driver.hideKeyboard();
  }

  async fillCNPJRandom() {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCNPJ));
    await input.click();
    await input.addValue(CNPJGenerator());
    await this.driver.hideKeyboard();
  }

  async fillCorporateReason(corporateReason: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCorporateReason));
    await input.click();
    await input.addValue(corporateReason);
    await this.driver.hideKeyboard();
  }

  async fillFantasyName(fantasyName: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputFantasyName));
    await input.click();
    await input.addValue(fantasyName);
    await this.driver.hideKeyboard();
  }

  async fillStateRegistration(stateRegistration: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputStateRegistration));
    await input.click();
    await input.addValue(stateRegistration);
    await this.driver.hideKeyboard();
  }

  async fillCorporationOpenDate(corporationOpenDate: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCorporationOpeningDate));
    await input.click();
    await input.addValue(corporationOpenDate);
    await this.driver.hideKeyboard();
  }

  async fillCorporationType(corporationType: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCorporationType));
    await input.click();
    const option = await this.driver.$(bySelector(AccountOpeningElementsMap.optionCorporationTypeByType(corporationType)));
    await option.click();
  }

  async fillCNAE(cnae: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCNAE));
    await input.click();
    await input.addValue(cnae);
    await this.driver.hideKeyboard();
  }

  async fillCorporationCategory(corporationCategory: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCorporationCategory));
    await input.click();
    const option = await this.driver.$(bySelector(AccountOpeningElementsMap.optionCorporationCategoryByCategory(corporationCategory)));
    await option.click();
  }

  async fillCorporationIncome(income: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputIncome));
    await input.click();
    await input.addValue(income);
    await this.driver.hideKeyboard();
  }

  async fillRepresentativeType(representativeType: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputRepresentative));
    await input.click();
    const option = await this.driver.$(bySelector(AccountOpeningElementsMap.optionRepresentativeByRepresentative(representativeType)));
    await option.click();
  }

   async fillRepresentativeCEP(cep: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputRepresentativeCEP));
    await input.click();
    await input.addValue(cep);
    await this.driver.hideKeyboard();
  }

  async fillRepresentativeNumber(number: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputRepresentativeNumber));
    await input.click();
    await input.addValue(number);
    await this.driver.hideKeyboard();
  }

  async fillRepresentativeComplement(complement: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputRepresentativeComplement));
    await input.click();
    await input.addValue(complement);
    await this.driver.hideKeyboard();
  }

}