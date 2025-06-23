import { By } from 'selenium-webdriver';

export const PixElementsMap = {
  btnTransfer: By.xpath("//p[contains(@class, 'icon-card__text') and text()='Transferir']"),
  btnCreateKey: By.xpath("//p[contains(@class, 'icon-card__text') and text()='Criar chave']")
};