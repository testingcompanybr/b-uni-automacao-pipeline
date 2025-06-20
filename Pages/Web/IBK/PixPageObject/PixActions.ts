import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { PixElementsMap } from './PixElementsMap';

export class PixActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnTransfer(): Promise<void> {
    const btnTransfer: WebElement = await this.waitForElement(PixElementsMap.btnTransfer);
    await btnTransfer.click();
}

}