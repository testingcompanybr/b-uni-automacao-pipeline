import { Browser } from 'webdriverio';
import { HomeElementsMap } from './HomeElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class HomeActions {
  constructor(private driver: Browser) {}

  async clickBtnPix() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnPix));
    await btn.click();
  }

  async clickBtnExtract() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.btnExtract));
    await btn.click();
  }

  async clickBtnProfile() {
    const btn = await this.driver.$(bySelector(HomeElementsMap.imgProfile));
    await btn.click();
  }
}