import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { ExtractElementsMap } from './ExtractElementsMap';

export class ExtractActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickFirstTransaction(): Promise<void> {
    const firstTransactionName: WebElement = await this.waitForElement(ExtractElementsMap.txtFirstTransactionNameAccount);
    await firstTransactionName.click();
}

}