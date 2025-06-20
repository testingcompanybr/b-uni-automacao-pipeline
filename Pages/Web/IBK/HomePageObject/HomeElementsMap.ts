import { By } from 'selenium-webdriver';

export const HomeElementsMap = {
  btnAccountBalanceEye: By.css("[testid='home_EyeOutlined_visible']"),
  txtAccountBalance: By.css("[testid='home_h1_balance']"),
  btnExtract: By.css("[testid='home_EXTRACT_click']"),
  btnProfile: By.css('img.advanced-header__avatar_img'),
  btnProfileLogout: By.xpath("//p[@class='profile__text' and text()='Sair']"),
  btnPix: By.css("[testid='home_PIX_click']"),
  btnTrasfer: By.xpath("//p[@class='icon-card__text' and text()='Transferir']"),
  btnReceive: By.xpath("//p[@class='icon-card__text' and text()='Receber']"),
  btnPay: By.xpath("//p[@class='icon-card__text' and text()='Pagar']"),
  btnSeeExtract: By.xpath("//span[@class='ant-typography' and text()='Ver extrato']"),
  btnAccountDetails: By.xpath("//span[@class='ant-typography' and text()='Detalhes da conta']"),
  btnCreditCard: By.xpath("//span[@class='ant-typography' and text()='Cartão de crédito']"),
  btnConsignatedCredit: By.xpath("//span[@class='ant-typography' and text()='Crédito consignado']"),
};