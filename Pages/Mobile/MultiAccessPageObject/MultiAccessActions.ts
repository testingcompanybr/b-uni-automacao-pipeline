import { Browser } from 'webdriverio';
import { MultiAccessElementsMap } from './MultiAccessElementsMap';
import { bySelector } from '../../../Support/MobileUtils';
import { swipeUp } from '../../../Support/MobileUtils';
import { LoginGenerator } from '../../../Support/Utils';

export class MultiAccessActions {
  constructor(private driver: Browser) { }

  async clickCreateUser() {
    const btn = await this.driver.$(bySelector(MultiAccessElementsMap.btnCreateUser));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async fillName(name: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputName));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.addValue(name);
    await this.driver.hideKeyboard();
  }

  async fillEmail(email: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputEmail));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.addValue(email);
    await this.driver.hideKeyboard();
  }

  async fillCellPhone(cellphone: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputCellPhone));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.addValue(cellphone);
    await this.driver.hideKeyboard();
  }

  async clickContinue() {
    const btn = await this.driver.$(bySelector(MultiAccessElementsMap.btnContinue));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async fillLogin(login: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputLogin));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.clearValue();
    await input.addValue(login);
    await this.driver.hideKeyboard();
  }

  async fillRandomLogin() {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputLogin));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.clearValue();
    await input.addValue(LoginGenerator());
    await this.driver.hideKeyboard();
  }

  async fillPassword(password: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputPassword));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.clearValue();
    await input.addValue(password);
    await this.driver.hideKeyboard();
  }

  async clickCheckBoxAllAccess() {
    await swipeUp(this.driver);
    await swipeUp(this.driver);
    await swipeUp(this.driver);
    await swipeUp(this.driver);

    const checkbox = await this.driver.$(bySelector(MultiAccessElementsMap.checkBoxAllAccess));
    await checkbox.waitForDisplayed({ timeout: 30000 });
    await checkbox.click();
  }

  async clickDeleteUser() {
    const btn = await this.driver.$(bySelector(MultiAccessElementsMap.btnDeleteUser));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }
}