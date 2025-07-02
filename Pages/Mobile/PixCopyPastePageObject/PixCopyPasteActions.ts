import { Browser } from 'webdriverio';
import { PixCopyPasteElementsMap } from './PixCopyPasteElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class PixCopyPasteActions {
  constructor(private driver: Browser) {}

  async clickBtnPaste() {
    const btn = await this.driver.$(bySelector(PixCopyPasteElementsMap.btnPaste));
    await btn.click();
  }

  async clickBtnContinue() {
    const btn = await this.driver.$(bySelector(PixCopyPasteElementsMap.btnContinue));
    await btn.click();
  }

}