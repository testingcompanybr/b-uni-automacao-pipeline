import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { PixElementsMap } from './PixElementsMap';

export class PixActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnTransfer(): Promise<void> {
    const btnTransfer: WebElement = await this.waitForElement(PixElementsMap.btnTransfer);
    await btnTransfer.click();
}

async clickBtnCreateKey(): Promise<void> {
    const btnCreateKey: WebElement = await this.waitForElement(PixElementsMap.btnCreateKey);
    await btnCreateKey.click();
}

async clickBtnCharge(): Promise<void> {
    const btnCharge: WebElement = await this.waitForElement(PixElementsMap.btnCharge);
    await btnCharge.click();
}

async clickBtnCopyPaste(): Promise<void> {
    const btnCopyPaste: WebElement = await this.waitForElement(PixElementsMap.btnCopyPaste);
    await btnCopyPaste.click();
}

async clickBtnPixKeyOptions(pixKeyLabel: string): Promise<void> {
    const containers: WebElement[] = await this.driver.findElements(PixElementsMap.containerPixKeys);

    for (const container of containers) {
        const labelElement = await container.findElement(PixElementsMap.labelPixKeys);
        const labelText = await labelElement.getText();

        if (labelText === pixKeyLabel) {
            const btnMenu: WebElement = await container.findElement(PixElementsMap.btnPixKeyOptions);
            await btnMenu.click();
        }
    }
}

async clickBtnDeleteKeyPix(): Promise<void> {
    const btnDeletePixKey: WebElement = await this.waitForElement(PixElementsMap.btnDeletePixKey);
    await btnDeletePixKey.click();
}

}