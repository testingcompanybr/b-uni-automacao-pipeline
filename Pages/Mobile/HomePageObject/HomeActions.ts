import { Browser } from 'webdriverio';
import { HomeElementsMap } from './HomeElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class HomeActions {
  constructor(private driver: Browser) {}

  async clickBtnPix() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnPix));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnExtract() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnExtract));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnProfile() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.imgProfile));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnPay() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnPay));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnPayWithBillet() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnPayWithBillet));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnTransfer() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnTransfer));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnTransferTED() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnTransferTED));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }
}