import { Browser } from 'webdriverio';
import { PixInstructionsElementsMap } from './PixInstructionsElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class PixInstructionsActions {
  constructor(private driver: Browser) {}

  async clickBtnNext() {
    const btn = await this.driver.$(bySelector(PixInstructionsElementsMap.btnNext));
    await btn.click();
  }
}