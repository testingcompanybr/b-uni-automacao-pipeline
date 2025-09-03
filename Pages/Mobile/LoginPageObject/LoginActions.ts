import { Browser } from 'webdriverio';
import { LoginElementsMap } from './LoginElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class LoginActions {
  constructor(private driver: Browser) {}

  async clickEnterButton() {
    const btn = await this.driver.$(bySelector(LoginElementsMap.btnEnter));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async clickCreateAccountButton() {
    const btn = await this.driver.$(bySelector(LoginElementsMap.btnCreateAccount));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }
}