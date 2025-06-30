import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { ReceiveElementsMap } from './ReceiveElementsMap';

export class ReceiveActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async fillPixValueField(pixValue: string): Promise<void> {
    const pixValueInput: WebElement = await this.waitForElement(ReceiveElementsMap.inputPixValue);
    await pixValueInput.sendKeys(pixValue);
}

async clickBtnContinue(): Promise<void> {
    const btnContinue: WebElement = await this.waitForElement(ReceiveElementsMap.btnContinue);
    await btnContinue.click();
}

async fillDescriptionTextArea(description: string): Promise<void> {
    const textAreaDescription: WebElement = await this.waitForElement(ReceiveElementsMap.textAreaDescription);
    await textAreaDescription.sendKeys(description);
}

async clickBtnGenerateQRcode(): Promise<void> {
    const btnGenerateQRcode: WebElement = await this.waitForElement(ReceiveElementsMap.btnGenerateQRcode);
    await btnGenerateQRcode.click();
}

async clickBtnCopy(): Promise<void> {
    const btnCopy: WebElement = await this.waitForElement(ReceiveElementsMap.btnCopy);
    await btnCopy.click();
}

async clickBtnHome(): Promise<void> {
    const btnHome: WebElement = await this.waitForElement(ReceiveElementsMap.btnHome);
    await btnHome.click();
}


}