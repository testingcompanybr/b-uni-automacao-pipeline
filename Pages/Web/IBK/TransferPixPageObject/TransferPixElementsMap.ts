import { By } from 'selenium-webdriver';

export const TransferPixElementsMap = {
  //Contatos------------------------------------------------------------------------------------------------------------------
  inputSearchByName: By.xpath("//input[@placeholder='Busca por nome' and contains(@class, 'contact-list__header__input')]"),
  searchContactResult: By.css("div.contact-list-item__contacts__list"),
  //Valor---------------------------------------------------------------------------------------------------------------------
  inputPixValue: By.css("input.value-requested__currency-mask-input"),
  btnAdvance: By.xpath("//button[.//span[contains(text(), 'Avançar')]]"),
  //Descrição-----------------------------------------------------------------------------------------------------------------
  textAreaDescription: By.xpath("//textarea[contains(@class, 'MuiOutlinedInput-inputMultiline')]"),
  //Confirmar-----------------------------------------------------------------------------------------------------------------
  btnConfirm: By.xpath("//button[.//span[contains(@class, 'advanced-button__inner__text') and text()='Confirmar']]"),
  numericKeyboard: (number: string) => By.xpath(`//p[contains(@class, 'confirmation-modal__number-grid__digit') and text()='${number}']`),
  btnConfirmPopUp: By.xpath("//div[contains(@class, 'confirmation-modal__button-container')]//button[.//span[contains(@class, 'advanced-button__inner__text') and text()='Confirmar']]")
};