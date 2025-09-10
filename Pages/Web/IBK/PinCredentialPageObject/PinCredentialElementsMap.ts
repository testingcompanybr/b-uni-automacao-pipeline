import { By } from 'selenium-webdriver';

export const PinCredentialElementsMap = {
  btnOk: By.xpath('//button[normalize-space()="Ok"]'),
  inputCode: By.css('input.MuiInputBase-input.MuiOutlinedInput-input'),
  btnNext: By.xpath('//button[normalize-space()="Próximo"]'),
  numericKeyboard: (number: string) => By.xpath(`//p[contains(@class, 'confirmation-modal__number-grid__digit') and text()='${number}']`),
  btnConfirm: By.xpath('//button[normalize-space()="Confirmar"]'),
  btnConfirmPopUp: By.xpath("//button[contains(@class, 'MuiButton-fullWidth') and descendant-or-self::*[normalize-space(text())='Confirmar']]"),
};