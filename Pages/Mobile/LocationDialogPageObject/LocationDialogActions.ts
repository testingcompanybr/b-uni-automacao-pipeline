import { Browser } from 'webdriverio';
import { LocationDialogElementsMap } from './LocationDialogElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class LocationDialogActions {
  constructor(private driver: Browser) {}

  async clickNextButton() {
    const btn = await this.driver.$(bySelector(LocationDialogElementsMap.btnNext));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }
}