import { Browser } from 'webdriverio';
import { ExtractElementsMap } from './ExtractElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class ExtractActions {
  constructor(private driver: Browser) {}

  async clickFirstTransactionByUser(userAccount: string) {
    const firstTransaction = await this.driver.$(bySelector(ExtractElementsMap.firstTransactionByUser(userAccount)));
    await firstTransaction.click();
  }

}