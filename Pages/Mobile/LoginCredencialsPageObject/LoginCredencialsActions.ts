import { Browser } from 'webdriverio';
import { LoginCredencialsElementsMap } from './LoginCredencialsElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class LoginCredencialsActions {
  constructor(private driver: Browser) {}

  async fillCPF(cpf: string) {
    const input = await this.driver.$(bySelector(LoginCredencialsElementsMap.inputCPF));
    await input.waitForDisplayed({ timeout: 10000 });
    await input.clearValue();
    await input.addValue(cpf);
    await this.driver.hideKeyboard();
  }

  async clickContinueButton() {
    const btn = await this.driver.$(bySelector(LoginCredencialsElementsMap.btnContinue));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async fillPassword(password: string) {
    const input = await this.driver.$(bySelector(LoginCredencialsElementsMap.inputPassword));
    await input.waitForDisplayed({ timeout: 10000 });
    await input.addValue(password);
    await this.driver.hideKeyboard();
  }

  async clickEnterButton() {
    const btn = await this.driver.$(bySelector(LoginCredencialsElementsMap.btnEnter));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickNotNowFaceIDButton() {
    const btn = await this.driver.$(bySelector(LoginCredencialsElementsMap.btnNotNowFaceID));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }
}