import { Browser } from 'webdriverio';
import { AndroidCameraElemetsMap } from './AndroidCameraElemetsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class AndroidCameraActions {
  constructor(private driver: Browser) {}

  async clickBtnOkPermission() {
    const btn = await this.driver.$(bySelector(AndroidCameraElemetsMap.btnOkPermission));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async clickBtnCameraWhileUsingApp() {
    const btn = await this.driver.$(bySelector(AndroidCameraElemetsMap.btnCameraWhileUsingApp));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async clickBtnInsertCodeManually() {
    const btn = await this.driver.$(bySelector(AndroidCameraElemetsMap.btnInsertCodeManually));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

}