import { Browser } from 'webdriverio';
import { ChangeCredencialsElementsMap } from './ChangeCredencialsElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class ChangeCredencialsActions {
  constructor(private driver: Browser) {}

  async clickOkButton() {
    const btn = await this.driver.$(bySelector(ChangeCredencialsElementsMap.btnOk));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async fillSMSCode(smsCode: string) {
    const input = await this.driver.$(bySelector(ChangeCredencialsElementsMap.inputCode));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.click();
    await input.addValue(smsCode);
    await this.driver.hideKeyboard();
  }

  async clickContinueButton() {
    const btn = await this.driver.$(bySelector(ChangeCredencialsElementsMap.btnContinue));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async fillPassword(password: string) {
    const input = await this.driver.$(bySelector(ChangeCredencialsElementsMap.inputPassword));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.click();
    await input.addValue(password);
    await this.driver.hideKeyboard();
  }

  async clickConfirmButton() {
    const btn = await this.driver.$(bySelector(ChangeCredencialsElementsMap.btnConfirm));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }
}