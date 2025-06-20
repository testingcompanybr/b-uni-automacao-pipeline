import { Browser } from 'webdriverio';
import { AndroidDialogElementsMap } from './AndroidDialogElementsMap';
import { bySelector } from '../../../Support/MobileUtils';

export class AndroidDialogActions {
  constructor(private driver: Browser) {}

  async clickAllowNotificationButton() {
      const btn = await this.driver.$(bySelector(AndroidDialogElementsMap.btnAllowNotifications));
      await btn.click();
  }

  async clickAllowWhileUsingAppButton() {
      const btn = await this.driver.$(bySelector(AndroidDialogElementsMap.btnAllowLocationWhileUsingApp));
      await btn.click();
  }
}