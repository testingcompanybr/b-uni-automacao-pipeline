import { Browser } from 'webdriverio';
import { ChargeElementsMaps } from './ChargeElementsMaps';
import { bySelector } from '../../../Support/MobileUtils';

export class ChargeActions {
  constructor(private driver: Browser) {}

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(ChargeElementsMaps.btnContinue));
    await btn.click();
  }

  async fillPixValue(pixValue: string) {
    const input = await this.driver.$(bySelector(ChargeElementsMaps.inputPixValue));
    await input.click();
    await input.addValue(pixValue);
  }

  async fillIdentifier(identifier: string) {
    const input = await this.driver.$(bySelector(ChargeElementsMaps.inputIdentifier));
    await input.click();
    await input.addValue(identifier);
  }

  async clickBtnCreateQRcode() {
    const btn = await this.driver.$(bySelector(ChargeElementsMaps.btnCreateQRcode));
    await btn.click();
  }
  
  async clickBtnCopy() {
    const btn = await this.driver.$(bySelector(ChargeElementsMaps.btnCopy));
    await btn.click();
  }

}