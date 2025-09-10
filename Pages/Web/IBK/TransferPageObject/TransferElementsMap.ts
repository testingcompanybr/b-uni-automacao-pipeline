import { By } from 'selenium-webdriver';

export const TransferElementsMap = {
  //Tipo Transferência------------------------------------------------------------------------------------------------------------------
  btnTED: By.xpath("//div[contains(@class, 'action-display__action__options__container')]//p[contains(@class, 'action-display__action__options__title') and text()='TED']"),
  btnBUNI: By.xpath("//div[contains(@class, 'action-display__action__options__container')]//p[contains(@class, 'action-display__action__options__title') and text()='PARA b.Uni']"),
  //Conta para Transferência-------------------------------------------------------------------------------------------------------------
  inputSearchByName: By.xpath("//input[@placeholder='Busca por nome, CPF ou CNPJ' and contains(@class, 'contact-list__header__input')]"),
  searchContactResult: By.css("div.contact-list-item__contacts__list"),
  //Valor solicitado--------------------------------------------------------------------------------------------------------------------
  inputTedValue: By.css("input.value-requested__currency-mask-input"),
  btnAdvance: By.xpath("//button[.//span[contains(text(), 'Avançar')]]"),
  //Confirmação------------------------------------------------------------------------------------------------------------------------
  btnConfirm: By.xpath("//button[descendant-or-self::*[normalize-space(text())='Confirmar']]"),
  numericKeyboard: (number: string) => By.xpath(`//p[contains(@class, 'confirmation-modal__number-grid__digit') and text()='${number}']`),
  btnConfirmPopUp: By.xpath("//button[contains(@class, 'MuiButton-fullWidth') and descendant-or-self::*[normalize-space(text())='Confirmar']]"),
  txtMessage: By.css('.ant-message-error span:last-of-type')
};