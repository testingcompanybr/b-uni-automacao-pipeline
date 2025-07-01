import { WebDriver, WebElement, By, until, Key } from 'selenium-webdriver';
import { PixCopyPasteElementsMap } from './PixCopyPasteElementsMap';

export class PixCopyPasteActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async fillPixCopyPasteCodeTextArea(): Promise<void> {
    const pixCopyPasteCodeTextArea: WebElement = await this.waitForElement(PixCopyPasteElementsMap.textAreaCopyPastePixCode);
    await pixCopyPasteCodeTextArea.sendKeys(Key.chord(Key.CONTROL, 'v'));
}

async clickBtnContinue(): Promise<void> {
    const btnContinue: WebElement = await this.waitForElement(PixCopyPasteElementsMap.btnContinue);
    await btnContinue.click();
}

async clickBtnConfirm(): Promise<void> {
    const btnConfirm: WebElement = await this.waitForElement(PixCopyPasteElementsMap.btnConfirm);
    await btnConfirm.click();
}

}