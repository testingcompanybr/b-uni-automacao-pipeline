import { By } from 'selenium-webdriver';

export const AprovationElementsMap = {
  btnApprove: By.xpath("//button[.//span[contains(@class, 'advanced-button__inner__text') and text()='Aprovar']]"),
  numericKeyboard: (number: string) => By.xpath(`//p[contains(@class, 'confirmation-modal__number-grid__digit') and text()='${number}']`),
  btnConfirmPopUp: By.xpath("//div[contains(@class, 'confirmation-modal__button-container')]//button[.//span[contains(@class, 'advanced-button__inner__text') and text()='Confirmar']]")
};