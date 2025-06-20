import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { BOAuthenticationElementsMap } from './BOAuthenticationElementsMap';

export class BOAuthenticationActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async fillCodeInput(code: string): Promise<void> {
    const cpfInput: WebElement = await this.waitForElement(BOAuthenticationElementsMap.inputCode);
    await cpfInput.sendKeys(code);
}

async clickBtnValidate(): Promise<void> {
    const btnEnter: WebElement = await this.waitForElement(BOAuthenticationElementsMap.btnValidate);
    await btnEnter.click();
}

async clickBtnLogout(): Promise<void> {
    const btnEnter: WebElement = await this.waitForElement(BOAuthenticationElementsMap.btnLogout);
    await btnEnter.click();
}

}