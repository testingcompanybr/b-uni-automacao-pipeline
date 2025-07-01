import { By } from 'selenium-webdriver';

export const ReceiveElementsMap = {
  btnHome: By.css("[testid='home_HOME_click']"),
  //Valor---------------------------------------------------------------------------------------------------------------------
  inputPixValue: By.css("input.generate-billet-amount__currency-mask-input"),
  btnContinue: By.xpath("//button[.//span[contains(text(), 'Continuar')]]"),
  //Descrição-----------------------------------------------------------------------------------------------------------------
  textAreaDescription: By.xpath("//textarea[contains(@class, 'ant-input')]"),
  btnGenerateQRcode: By.xpath("//button[.//span[contains(text(), 'Gerar QRcode')]]"),
  //QRcode Pix----------------------------------------------------------------------------------------------------------------
  btnCopy: By.xpath("//button[.//span[contains(@class, 'advanced-button__inner__text') and text()='Copiar']]"),
};