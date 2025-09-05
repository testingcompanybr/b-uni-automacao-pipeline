import { Browser } from 'webdriverio';
import { ExtractElementsMap } from './ExtractElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class ExtractActions {
  constructor(private driver: Browser, private world: { storedValues: Map<string, string> }) {}

  async clickFirstTransactionByUser(userAccount: string) {
    const firstTransaction = await this.driver.$(bySelector(ExtractElementsMap.firstTransactionByUser(userAccount)));
    await firstTransaction.waitForDisplayed({ timeout: 30000 });
    await firstTransaction.click();
  }

  async clickBtnHome() {
    const btnHome = await this.driver.$(bySelector(ExtractElementsMap.btnHome));
    await btnHome.waitForDisplayed({ timeout: 30000 });
    await btnHome.click();
  }

  async getDailyBalanceText(): Promise<string> {
    const dailyBalanceElement = await this.driver.$(ExtractElementsMap.txtDailyBalance);
    await dailyBalanceElement.waitForDisplayed({ timeout: 30000 });
    return await dailyBalanceElement.getText(); 
  }

  async storeDailyBalance(): Promise<void> {
    const dailyBalanceText = await this.getDailyBalanceText();
    this.world.storedValues.set('dailyBalance', dailyBalanceText);
    console.log(`💾 Valor armazenado ${dailyBalanceText}`);
  }

}