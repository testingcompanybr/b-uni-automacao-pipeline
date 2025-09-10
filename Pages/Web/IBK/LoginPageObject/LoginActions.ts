import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { LoginElementsMap } from './LoginElementsMap';
import { loadLogin } from '../../../../Support/LoginStorage';

export class LoginActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async fillCPF(cpf: string): Promise<void> {
    const cpfInput: WebElement = await this.waitForElement(LoginElementsMap.inputCPF);
    await cpfInput.sendKeys(cpf);
}

async fillMultiaccessStoredLogin(): Promise<void> {
    const login = await loadLogin();

    if (!login) {
      throw new Error('❌ Nenhum login salvo foi encontrado.');
    }
    const cpfInput: WebElement = await this.waitForElement(LoginElementsMap.inputCPF);
    await cpfInput.sendKeys(login);
}

async fillPassword(password: string): Promise<void> {
    const passwordInput: WebElement = await this.waitForElement(LoginElementsMap.inputPassword);
    await passwordInput.sendKeys(password);
}

async clickBtnEnter(): Promise<void> {
    const btnEnter: WebElement = await this.waitForElement(LoginElementsMap.btnEnter);
    await btnEnter.click();
}

async clickBtnCreateAccount(): Promise<void> {
    const btnCreateAccount: WebElement = await this.waitForElement(LoginElementsMap.btnCreateAccount);
    await btnCreateAccount.click();
}

}