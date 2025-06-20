import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { BOLoginElementsMap } from './BOLoginElementsMap';

export class BOLoginActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async fillEmail(email: string): Promise<void> {
    const cpfInput: WebElement = await this.waitForElement(BOLoginElementsMap.inputEmail);
    await cpfInput.sendKeys(email);
}

async fillPassword(password: string): Promise<void> {
    const passwordInput: WebElement = await this.waitForElement(BOLoginElementsMap.inputPassword);
    await passwordInput.sendKeys(password);
}

async clickBtnEnter(): Promise<void> {
    const btnEnter: WebElement = await this.waitForElement(BOLoginElementsMap.btnEnter);
    await btnEnter.click();
}

}