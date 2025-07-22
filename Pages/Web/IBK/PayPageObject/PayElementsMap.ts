import { By } from 'selenium-webdriver';

export const PayElementsMap = {
  //Tipo de Pagamento---------------------------------------------------------------------------------------------
  btnPayBillet: By.xpath("//div[contains(@class, 'action-display__action__options__container')]//p[contains(@class, 'action-display__action__options__title') and text()='Pagar Boleto']"),
  //Código de barras----------------------------------------------------------------------------------------------
  inputBarCode: By.xpath("//textarea[contains(@class, 'bank-slip__textarea__component')]"),
  btnAdvance: By.xpath("//button[.//span[text()='Avançar']]"),
  //Detalhes do pagamento------------------------------------------------------------------------------------------
  numericKeyboard: (number: string) => By.xpath(`//p[contains(@class, 'confirmation-modal__number-grid__digit') and text()='${number}']`),
  btnConfirmPopUp: By.xpath("//button[.//span[text()='Confirmar']]"),
  inputValue: By.xpath("//input[contains(@class, 'payment-details__input') and contains(@class, 'payment-details__input--amount')]"),
  labelDiscount: By.xpath("//p[contains(@class, 'payment-details__label') and text()='Desconto']"),
  labelFess: By.xpath("//p[contains(@class, 'payment-details__label') and text()='Juros']"),
  labelFine: By.xpath("//p[contains(@class, 'payment-details__label') and text()='Multa']"),
  labelMinValue: By.xpath("//p[contains(@class, 'payment-details__label') and text()='Valor mínimo']"),
  labelMaxValue: By.xpath("//p[contains(@class, 'payment-details__label') and text()='Valor máximo']"),
  txtDate: By.xpath("//p[contains(@class, 'payment-details__text') and normalize-space(text()) and string-length(text())=10 and substring(text(),3,1)='/' and substring(text(),6,1)='/']")
};