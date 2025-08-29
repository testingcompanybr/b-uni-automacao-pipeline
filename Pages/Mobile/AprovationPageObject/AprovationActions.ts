import { Browser } from 'webdriverio';
import { AprovationElementsMap } from './AprovationElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class AprovationActions {
  constructor(private driver: Browser) {}

  async clickBtnApprove() {
    const btn = await this.driver.$(bySelector(AprovationElementsMap.btnApprove));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnApprovePopUp() {
    const btn = await this.driver.$(bySelector(AprovationElementsMap.btnApprovePopup));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async fillPINCode(pinCode: string) {
    for(const digit of pinCode) {
        const btn = await this.driver.$(bySelector(AprovationElementsMap.keyboardPIN(digit)));
        await btn.click();
        await this.driver.pause(500);
    }
  }

}