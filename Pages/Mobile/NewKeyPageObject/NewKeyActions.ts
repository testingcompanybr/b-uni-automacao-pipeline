import { Browser } from 'webdriverio';
import { NewKeyElementsMap } from './NewKeyElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class NewKeyActions {
  constructor(private driver: Browser) {}

  async clickBtnRandomKey() {
    const btn = await this.driver.$(bySelector(NewKeyElementsMap.btnRandomKey));
    await btn.click();
  }

  async clickBtnCPFCNPJKeyByCPFCNPJ(cpfcnpj: string) {
    const btn = await this.driver.$(bySelector(NewKeyElementsMap.btnCPFCNPJKeyAccountByCPFCNPJ(cpfcnpj)));
    await btn.click();
  }

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(NewKeyElementsMap.btnContinue));
    await btn.click();
  }
}