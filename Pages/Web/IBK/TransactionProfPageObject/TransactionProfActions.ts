import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { TransactionProfElementsMap } from './TransactionProfElementsMap';

export class TransactionProfActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnShare(): Promise<void> {
    const btnShare: WebElement = await this.waitForElement(TransactionProfElementsMap.btnShare);
    await btnShare.click();
}

async clickBtnDownload(): Promise<void> {
    const btnDownload: WebElement = await this.waitForElement(TransactionProfElementsMap.btnDownload);
    await btnDownload.click();
}

async clickBtnSendByEmail(): Promise<void> {
    const btnSendByEmail: WebElement = await this.waitForElement(TransactionProfElementsMap.btnSendByEmail);
    await btnSendByEmail.click();
}

}