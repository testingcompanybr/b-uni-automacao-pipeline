import { By } from 'selenium-webdriver';

export const AccountTypeElementsMap = {
  buttonPF: By.xpath("//div[contains(@class, 'account-type__content__type')]//p[text()='Pessoa Física']"),
  buttonPJ: By.xpath("//div[contains(@class, 'account-type__content__type')]//p[text()='Pessoa Jurídica']"),
  btnContinue: By.xpath("//button[.//span[contains(text(), 'Continuar')]]")
};