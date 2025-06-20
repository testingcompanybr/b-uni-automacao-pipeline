import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { SmsAuthElementsMap } from './SmsAuthElementsMap';

export class SmsAuthActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async fillCode(code: string): Promise<void> {
    const inputCode: WebElement = await this.waitForElement(SmsAuthElementsMap.inputCode);
    await inputCode.sendKeys(code);
}

async clickBtnEnter(): Promise<void> {
    const btnEnter: WebElement = await this.waitForElement(SmsAuthElementsMap.btnEnter);
    await btnEnter.click();
}

}