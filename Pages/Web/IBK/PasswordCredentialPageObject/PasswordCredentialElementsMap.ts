import { By } from 'selenium-webdriver';

export const PasswordCredentialElementsMap = {
  btnOk: By.xpath('//button[normalize-space()="Ok"]'),
  inputCode: By.css('input.MuiInputBase-input.MuiOutlinedInput-input'),
  btnNext: By.xpath('//button[normalize-space()="Próximo"]'),
  inputPassword: By.css('input.MuiInputBase-inputAdornedEnd'),
  btnConfirm: By.xpath('//button[normalize-space()="Confirmar"]'),
};