import { Browser } from 'webdriverio';
import { PixElementsMap } from './PixElementsMap';
import { bySelector, swipeUp } from '../../../Support/MobileUtils';

export class PixActions {
  constructor(private driver: Browser) {}

  async clickBtnTransfer() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnTransfer));
    await btn.click();
  }

  async clickBtnAddKey() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnAddKey));
    await btn.click();
  }

  async fillSearchUser(username: string) {
    const input = await this.driver.$(bySelector(PixElementsMap.inputSearchForUsers));
    await input.click();
    await input.addValue(username);
    await this.driver.hideKeyboard();
  }

  async clickFilteredUser(description: string) {
    const filteredUser = await this.driver.$(bySelector(PixElementsMap.filteredUser(description)));
    await filteredUser.click();
    await filteredUser.click();
  }

  async fillPixValue(pixValue: string) {
    const input = await this.driver.$(bySelector(PixElementsMap.inputPixValue));
    await input.click();
    await input.addValue(pixValue);
    await this.driver.hideKeyboard();
  }

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnContinue));
    await btn.click();
  }

  async clickBtnConfirm() {
    await swipeUp(this.driver);

    const btn = await this.driver.$(bySelector(PixElementsMap.btnConfirm));
    await btn.click();
  }

  async fillPINCode(pinCode: string) {
    for(const digit of pinCode) {
        const btn = await this.driver.$(bySelector(PixElementsMap.keyboardPIN(digit)));
        await btn.click();
        await this.driver.pause(500);
    }
  }

  async clickBtnShowTransactionProof() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnShowTransactionProof));
    await btn.click();
  }

  async clickBtnCharge() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnCharge));
    await btn.click();
  }

  async clickBtnCopyPaste() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnCopyPaste));
    await btn.click();
  }

  async clickBtnPixKeyOptions() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnPixKeyOptions));
    await btn.click();
  }

  async clickBtnDeletePixKey() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnDeletePixKey));
    await btn.click();
  }
}