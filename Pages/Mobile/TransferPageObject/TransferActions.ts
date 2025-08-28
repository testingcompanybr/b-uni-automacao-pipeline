import { Browser } from 'webdriverio';
import { TransferElementsMap } from './TransferElementsMap';
import { bySelector, swipeUp } from '../../../Support/MobileUtils';

export class TransferActions {
  constructor(private driver: Browser) { }

  async fillSearchUser(username: string) {
    const input = await this.driver.$(bySelector(TransferElementsMap.inputSearchForUsers));
    await input.click();
    await input.addValue(username);
    await this.driver.hideKeyboard();
  }

  async clickFilteredUser(description: string) {
    const filteredUser = await this.driver.$(bySelector(TransferElementsMap.filteredUser(description)));
    await filteredUser.click();
    await filteredUser.click();
  }

  async fillTEDValue(TEDValue: string) {
    const input = await this.driver.$(bySelector(TransferElementsMap.inputTEDValue));
    await input.click();
    await input.addValue(TEDValue);
    await this.driver.hideKeyboard();
  }

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(TransferElementsMap.btnContinue));
    await btn.click();
  }

  async clickBtnConfirm() {
    await swipeUp(this.driver);

    const btn = await this.driver.$(bySelector(TransferElementsMap.btnConfirm));
    await btn.click();
  }

  async fillPINCode(pinCode: string) {
    for (const digit of pinCode) {
      const btn = await this.driver.$(bySelector(TransferElementsMap.keyboardPIN(digit)));
      await btn.click();
      await this.driver.pause(500);
    }
  }

  async clickBtnShowTransactionProof() {
    const btn = await this.driver.$(bySelector(TransferElementsMap.btnShowTransactionProof));
    await btn.click();
  }
}