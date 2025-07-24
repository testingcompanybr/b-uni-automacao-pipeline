import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { SelectAccountElementsMap } from './SelectAccountElementsMap';

export class SelectAccountActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnEnter(): Promise<void> {
    const btnEnter: WebElement = await this.waitForElement(SelectAccountElementsMap.btnEnter);
    await btnEnter.click();
}

}