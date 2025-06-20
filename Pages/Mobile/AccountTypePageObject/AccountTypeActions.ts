import { Browser } from 'webdriverio';
import { AccountTypeElementsMap } from './AccountTypeElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class AccountTypeActions {
  constructor(private driver: Browser) {}

  async clickPFBtn() {
    const btn = await this.driver.$(bySelector(AccountTypeElementsMap.buttonPF));
    await btn.click();
  }

  async clickPJBtn() {
    const btn = await this.driver.$(bySelector(AccountTypeElementsMap.buttonPJ));
    await btn.click();
  }

  async clickContinueBtn() {
    const btn = await this.driver.$(bySelector(AccountTypeElementsMap.btnContinue));
    await btn.click();
  }

}