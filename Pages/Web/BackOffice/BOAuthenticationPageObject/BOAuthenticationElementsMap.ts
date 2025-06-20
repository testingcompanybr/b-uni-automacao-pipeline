import { By } from 'selenium-webdriver';

export const BOAuthenticationElementsMap = {
  inputCode: By.name("pin0"),
  btnValidate: By.css("button[type='submit']"),
  btnLogout: By.css(".advanced-button__inner__text")
};