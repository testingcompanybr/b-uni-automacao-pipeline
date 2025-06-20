import { Browser } from 'webdriverio';
import { LoginCredencialsElementsMap } from './LoginCredencialsElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class LoginCredencialsActions {
  constructor(private driver: Browser) {}

  async fillCPF(cpf: string) {
    const input = await this.driver.$(bySelector(LoginCredencialsElementsMap.inputCPF));
    await input.click();
    await input.addValue(cpf);
  }

  async clickContinueButton() {
    const btn = await this.driver.$(bySelector(LoginCredencialsElementsMap.btnContinue));
    await btn.click();
  }

  async fillPassword(password: string) {
    const input = await this.driver.$(bySelector(LoginCredencialsElementsMap.inputPassword));
    await input.click();
    await input.addValue(password);
  }

  async clickEnterButton() {
    const btn = await this.driver.$(bySelector(LoginCredencialsElementsMap.btnEnter));
    await btn.click();
  }

  async clickNotNowFaceIDButton() {
    const btn = await this.driver.$(bySelector(LoginCredencialsElementsMap.btnNotNowFaceID));
    await btn.click();
  }
}