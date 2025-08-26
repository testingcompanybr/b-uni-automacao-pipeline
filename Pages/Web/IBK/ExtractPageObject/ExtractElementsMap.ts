import { By } from 'selenium-webdriver';

export const ExtractElementsMap = {
  txtFirstTransactionNegativeValue: By.css("p.transaction-item__dark-text__negative"),
  txtFirstTransactionNameAccount: By.css("p.transaction-item__black-text"),
  txtTransactionNameByAccountName: (accountName: string) => By.xpath(`//p[contains(@class, 'transaction-item__black-text') and normalize-space(text())="PARA ${accountName}"]`),
  txtTransactionPositiveValueByAmount: (amount: string) => By.xpath(`//p[contains(@class, 'transaction-item__dark-text__positive') and normalize-space(text())="+ R$ ${amount}"]`),
  txtTransactionNegativeValueByAmount: (amount: string) => By.xpath(`//p[contains(@class, 'transaction-item__dark-text__negative') and normalize-space(text())="- R$ ${amount}"]`),
  txtDailyBalance: By.css("span.transaction-list__container__div__daily-balance"),
  btnHomeMenu: By.css("[testid='home_HOME_click']"),
};