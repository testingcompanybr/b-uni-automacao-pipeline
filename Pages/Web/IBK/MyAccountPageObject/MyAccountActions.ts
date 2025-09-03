import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { MyAccountElementsMap } from './MyAccountElementsMap';

export class MyAccountActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnMultiAccess(): Promise<void> {
    const btnMultiAccess: WebElement = await this.waitForElement(MyAccountElementsMap.btnMultiAccess);
    await btnMultiAccess.click();
}

}