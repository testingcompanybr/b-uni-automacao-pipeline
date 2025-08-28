import { Browser } from 'webdriverio';
import { SmsAuthElementsMap } from './SmsAuthElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class SmsAuthActions {
  constructor(private driver: Browser) {}

  async fillSMSCode(smsCode: string) {
    const input = await this.driver.$(bySelector(SmsAuthElementsMap.inputSMSCode));
    await input.click();
    await input.addValue(smsCode);
    await this.driver.hideKeyboard();
  }

  async clickEnterButton() {
    const btn = await this.driver.$(bySelector(SmsAuthElementsMap.btnEnter));
    await btn.click();
  }
}