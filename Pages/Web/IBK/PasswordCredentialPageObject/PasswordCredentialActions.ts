import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { PasswordCredentialElementsMap } from './PasswordCredentialElementsMap';

export class PasswordCredentialActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnOk(): Promise<void> {
    const btnOk: WebElement = await this.waitForElement(PasswordCredentialElementsMap.btnOk);
    await btnOk.click();
}

async fillCode(code: string): Promise<void> {
    const inputCode: WebElement = await this.waitForElement(PasswordCredentialElementsMap.inputCode);
    await inputCode.sendKeys(code);
}

async clickBtnNext(): Promise<void> {
    const btnNext: WebElement = await this.waitForElement(PasswordCredentialElementsMap.btnNext);
    await btnNext.click();
}

async fillPassword(password: string): Promise<void> {
    const inputPassword: WebElement = await this.waitForElement(PasswordCredentialElementsMap.inputPassword);
    await inputPassword.sendKeys(password);
}

async clickBtnConfirm(): Promise<void> {
    const btnConfirm: WebElement = await this.waitForElement(PasswordCredentialElementsMap.btnConfirm);
    await btnConfirm.click();
}

}