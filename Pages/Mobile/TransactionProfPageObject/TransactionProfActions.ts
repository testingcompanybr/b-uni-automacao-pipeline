import { Browser } from 'webdriverio';
import { TransactionProfElementsMap } from './TransactionProfElementsMap';
import { bySelector } from '../../../Support/MobileUtils';
import { swipeUp } from '../../../Support/MobileUtils';

export class TransactionProfActions {
  constructor(private driver: Browser) {}

  async clickBtnClose() {
    await swipeUp(this.driver);

    const btn = await this.driver.$(bySelector(TransactionProfElementsMap.btnClose));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async clickShareButton() {
      const btn = await this.driver.$(bySelector(TransactionProfElementsMap.btnShare));
      await btn.waitForDisplayed({ timeout: 30000 });
      await btn.click();
  }

  async clickImageShareButton() {
      const btn = await this.driver.$(bySelector(TransactionProfElementsMap.btnShareImage));
      await btn.waitForDisplayed({ timeout: 30000 });
      await btn.click();
  }

  async clickEmailShareButton() {
      const btn = await this.driver.$(bySelector(TransactionProfElementsMap.btnShareEmail));
      await btn.waitForDisplayed({ timeout: 30000 });
      await btn.click();
  }
}