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

  async clickBtnConfirm() {
    const btn = await this.driver.$(bySelector(PayBillElementsMap.btnConfirm));
    await btn.click();
  }

  async fillPINCode(pinCode: string) {
    for(const digit of pinCode) {
        const btn = await this.driver.$(bySelector(PayBillElementsMap.keyboardPIN(digit)));
        await btn.click();
        await this.driver.pause(500);
    }
  }

  async clickBtnShowTransactionProof() {
    const btn = await this.driver.$(bySelector(PayBillElementsMap.btnShowTransactionProof));
    await btn.click();
  }

  async fillBilletValue(billetValue: string) {
    const input = await this.driver.$(bySelector(PayBillElementsMap.inputValue));
    await input.click();
    await input.clearValue();
    await input.addValue(billetValue);
  }

}