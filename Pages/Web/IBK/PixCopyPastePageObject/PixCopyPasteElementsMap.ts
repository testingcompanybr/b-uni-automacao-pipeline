import { By } from 'selenium-webdriver';

export const PixCopyPasteElementsMap = {
  //Pagar---------------------------------------------------------------------------------------------------------
  textAreaCopyPastePixCode: By.xpath("//textarea[contains(@class, 'ant-input payment-pix-key__textarea')]"),
  btnContinue: By.xpath("//button[.//span[contains(text(), 'Continuar')]]"),
  //Detalhes------------------------------------------------------------------------------------------------------
  btnConfirm:  By.xpath("//button[.//span[contains(text(), 'Confirmar')]]"),
};