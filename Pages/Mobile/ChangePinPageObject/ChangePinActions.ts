import { Browser } from 'webdriverio';
import { ChangePinElementsMap } from './ChangePinElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class ChangePinActions {
  constructor(private driver: Browser) {}

  async clickOkButton() {
      const btn = await this.driver.$(bySelector(ChangePinElementsMap.btnOk));
      await btn.waitForDisplayed({ timeout: 30000 });
      await btn.click();
  }

  async fillSMSCode(smsCode: string) {
    const input = await this.driver.$(bySelector(ChangePinElementsMap.inputCode));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.click();
    await input.addValue(smsCode);
    //await this.driver.hideKeyboard();
  }

  async clickContinueButton() {
    const btn = await this.driver.$(bySelector(ChangePinElementsMap.btnContinue));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async fillPINCode(pinCode: string) {
    for(const digit of pinCode) {
          const btn = await this.driver.$(bySelector(ChangePinElementsMap.keyboardPIN(digit)));
          await btn.waitForDisplayed({ timeout: 30000 });
          await btn.click();
          await this.driver.pause(500);
    }
  }
}