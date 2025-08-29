import { Browser } from 'webdriverio';
import { NewKeyElementsMap } from './NewKeyElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class NewKeyActions {
  constructor(private driver: Browser) {}

  async clickBtnRandomKey() {
    const btn = await this.driver.$(bySelector(NewKeyElementsMap.btnRandomKey));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnCPFCNPJKeyByCPFCNPJ(cpfcnpj: string) {
    const btn = await this.driver.$(bySelector(NewKeyElementsMap.btnCPFCNPJKeyAccountByCPFCNPJ(cpfcnpj)));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(NewKeyElementsMap.btnContinue));
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }
}