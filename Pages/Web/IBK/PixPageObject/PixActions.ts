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

async clickBtnCreateKey(): Promise<void> {
    const btnCreateKey: WebElement = await this.waitForElement(PixElementsMap.btnCreateKey);
    await btnCreateKey.click();
}

async clickBtnCharge(): Promise<void> {
    const btnCharge: WebElement = await this.waitForElement(PixElementsMap.btnCharge);
    await btnCharge.click();
}

async clickBtnCopyPaste(): Promise<void> {
    const btnCopyPaste: WebElement = await this.waitForElement(PixElementsMap.btnCopyPaste);
    await btnCopyPaste.click();
}

}