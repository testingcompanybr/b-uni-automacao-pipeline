import { Browser } from 'webdriverio';
import { ChargeElementsMaps } from './ChargeElementsMaps';
import { bySelector } from '../../../Support/MobileUtils';

export class ChargeActions {
  constructor(private driver: Browser) {}

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(ChargeElementsMaps.btnContinue));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async fillPixValue(pixValue: string) {
    const input = await this.driver.$(bySelector(ChargeElementsMaps.inputPixValue));
    await input.waitForDisplayed({ timeout: 10000 });
    await input.click();
    await input.addValue(pixValue);
    await this.driver.hideKeyboard();
  }

  async fillIdentifier(identifier: string) {
    const input = await this.driver.$(bySelector(ChargeElementsMaps.inputIdentifier));
    await input.waitForDisplayed({ timeout: 10000 });
    await input.click();
    await input.addValue(identifier);
    await this.driver.hideKeyboard();
  }

  async clickBtnCreateQRcode() {
    const btn = await this.driver.$(bySelector(ChargeElementsMaps.btnCreateQRcode));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }
  
  async clickBtnCopy() {
    const btn = await this.driver.$(bySelector(ChargeElementsMaps.btnCopy));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

}