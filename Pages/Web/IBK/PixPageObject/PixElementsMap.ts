import { By } from 'selenium-webdriver';

export const PixElementsMap = {
  btnTransfer: By.xpath("//p[contains(@class, 'icon-card__text') and text()='Transferir']"),
  btnCreateKey: By.xpath("//p[contains(@class, 'icon-card__text') and text()='Criar chave']"),
  btnCharge: By.xpath("//p[contains(@class, 'icon-card__text') and text()='Cobrar']"),
  btnCopyPaste: By.xpath("//p[contains(@class, 'icon-card__text') and text()='Copia e cola']"),
  containerPixKeys: By.css("div.pix__body__item-key"),
  labelPixKeys: By.css("p.pix__body__label"),
  btnPixKeyOptions: By.css("div.ant-row.ant-row-middle"),
  btnDeletePixKey: By.xpath("//li[contains(@class, 'pix__menu')]//span[contains(text(), 'Apagar chave Pix')]"),
};