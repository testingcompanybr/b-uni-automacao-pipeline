import { Browser } from 'webdriverio';
import { ProfileElementsMap } from './ProfileElementsMap';
import { bySelector } from '../../../Support/MobileUtils';
import { swipeUp } from '../../../Support/MobileUtils';

export class ProfileActions {
  constructor(private driver: Browser) {}

  async clickExitButton() {
    const profilebtn = await this.driver.$(bySelector(ProfileElementsMap.btnProfile));
    await profilebtn.waitForDisplayed({ timeout: 30000 });
    
    await swipeUp(this.driver);

    const btn = await this.driver.$(bySelector(ProfileElementsMap.btnExit));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

}
