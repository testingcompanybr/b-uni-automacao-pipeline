import { Browser } from 'webdriverio';
import { PixElementsMap } from './PixElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

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
  }

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(PixElementsMap.btnContinue));
    await btn.click();
  }

  async clickBtnConfirm() {
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
}