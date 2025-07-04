import { Browser } from 'webdriverio';
import { PayBillElementsMap } from './PayBillElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class PayBillActions {
  constructor(private driver: Browser) {}

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(PayBillElementsMap.btnContinue));
    await btn.click();
  }

  async fillBilletCodeValue(billetCodeValue: string) {
    const input = await this.driver.$(bySelector(PayBillElementsMap.inputCodeBar));
    await input.click();
    await input.addValue(billetCodeValue);
  }

}