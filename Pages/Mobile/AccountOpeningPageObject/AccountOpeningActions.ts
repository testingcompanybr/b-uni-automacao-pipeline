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
  }

  async fillCPFRandom() {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCPF));
    await input.click();
    await input.addValue(CPFGenerator());
  }

  async fillEmail(email: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputEmail));
    await input.click();
    await input.addValue(email);
  }

  async fillCellPhone(cellphone: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCellphone));
    await input.click();
    await input.addValue(cellphone);
  }

  async fillSMSCode(smsCode: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputSMSCode));
    await input.click();
    await input.addValue(smsCode);
  }

  async fillName(name: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputName));
    await input.click();
    await input.addValue(name);
  }

  async fillBirthdate(birthdate: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputBirthDate));
    await input.click();
    await input.addValue(birthdate);
  }

  async fillMotherName(motherName: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputMotherName));
    await input.click();
    await input.addValue(motherName);
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
  }

  async fillCEP(cep: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCEP));
    await input.click();
    await input.addValue(cep);
  }

  async fillUF(uf: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputUF));
    await input.click();
    await input.addValue(uf);
  }

  async fillCity(city: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCity));
    await input.click();
    await input.addValue(city);
  }

  async fillNeightborhood(neightborhood: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputNeightborhood));
    await input.click();
    await input.addValue(neightborhood);
  }

  async fillStreet(street: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputStreet));
    await input.click();
    await input.addValue(street);
  }

  async fillNumber(number: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputNumber));
    await input.click();
    await input.addValue(number);
  }

  async fillComplement(complement: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputComplement));
    await input.click();
    await input.addValue(complement);
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
  }

  async fillCNPJRandom() {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCNPJ));
    await input.click();
    await input.addValue(CNPJGenerator());
  }

  async fillCorporateReason(corporateReason: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCorporateReason));
    await input.click();
    await input.addValue(corporateReason);
  }

  async fillFantasyName(fantasyName: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputFantasyName));
    await input.click();
    await input.addValue(fantasyName);
  }

  async fillStateRegistration(stateRegistration: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputStateRegistration));
    await input.click();
    await input.addValue(stateRegistration);
  }

  async fillCorporationOpenDate(corporationOpenDate: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputCorporationOpeningDate));
    await input.click();
    await input.addValue(corporationOpenDate);
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
  }

  async fillRepresentativeNumber(number: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputRepresentativeNumber));
    await input.click();
    await input.addValue(number);
  }

  async fillRepresentativeComplement(complement: string) {
    const input = await this.driver.$(bySelector(AccountOpeningElementsMap.inputRepresentativeComplement));
    await input.click();
    await input.addValue(complement);
  }

}