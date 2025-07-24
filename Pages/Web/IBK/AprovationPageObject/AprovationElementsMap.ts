import { By } from 'selenium-webdriver';

export const AprovationElementsMap = {
  btnApprove: By.xpath("//button[descendant-or-self::*[normalize-space(text())='Aprovar']]"),
  numericKeyboard: (number: string) => By.xpath(`//p[contains(@class, 'confirmation-modal__number-grid__digit') and text()='${number}']`),
  btnConfirmPopUp: By.xpath("//button[.//span[text()='Confirmar']]"),
};