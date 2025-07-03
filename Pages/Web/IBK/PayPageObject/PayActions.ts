import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { PayElementsMap } from './PayElementsMap';

export class PayActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnPayBillet(): Promise<void> {
    const btnPayBillet: WebElement = await this.waitForElement(PayElementsMap.btnPayBillet);
    await btnPayBillet.click();
}

async clickBtnAdvance(): Promise<void> {
    const btnAdvance: WebElement = await this.waitForElement(PayElementsMap.btnAdvance);
    await btnAdvance.click();
}

async fillBarCodeField(barCode: string): Promise<void> {
    const inputBarCode: WebElement = await this.waitForElement(PayElementsMap.inputBarCode);
    await inputBarCode.sendKeys(barCode);
}

}