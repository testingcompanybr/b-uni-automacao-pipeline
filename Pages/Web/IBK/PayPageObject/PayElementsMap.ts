import { By } from 'selenium-webdriver';

export const PayElementsMap = {
  //Tipo de Pagamento---------------------------------------------------------------------------------------------
  btnPayBillet: By.xpath("//div[contains(@class, 'action-display__action__options__container')]//p[contains(@class, 'action-display__action__options__title') and text()='Pagar Boleto']"),
  //Código de barras----------------------------------------------------------------------------------------------
  inputBarCode: By.xpath("//textarea[contains(@class, 'bank-slip__textarea__component')]"),
  btnAdvance: By.xpath("//div[contains(@class, 'advanced-button')]//span[contains(@class, 'advanced-button__inner__text') and text()='Avançar']"),
  //Detalhes do pagamento------------------------------------------------------------------------------------------
  numericKeyboard: (number: string) => By.xpath(`//p[contains(@class, 'confirmation-modal__number-grid__digit') and text()='${number}']`),
  btnConfirmPopUp: By.xpath("//div[contains(@class, 'confirmation-modal__button-container')]//button[.//span[contains(@class, 'advanced-button__inner__text') and text()='Confirmar']]")
};