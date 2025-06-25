import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { NewKeyElementsMap } from './NewKeyElementsMap';

export class NewKeyActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnRandomKey(): Promise<void> {
    const btnRandomKey: WebElement = await this.waitForElement(NewKeyElementsMap.btnRandomKey);
    await btnRandomKey.click();
}

async clickBtnCPFCNPJKey(): Promise<void> {
    const btnCPFCNPJKey: WebElement = await this.waitForElement(NewKeyElementsMap.btnCPFCNPJKey);
    await btnCPFCNPJKey.click();
}

async clickBtnAdvance(): Promise<void> {
    const btnAdvance: WebElement = await this.waitForElement(NewKeyElementsMap.btnAdvance);
    await btnAdvance.click();
}

}