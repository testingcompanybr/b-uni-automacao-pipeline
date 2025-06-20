import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { AccountTypeElementsMap } from './AccountTypeElementsMap';

export class AccountTypeActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnPessoaFisica(): Promise<void> {
    const btnPessoaFisica: WebElement = await this.waitForElement(AccountTypeElementsMap.buttonPF);
    await btnPessoaFisica.click();
}

async clickBtnPessoaJuridica(): Promise<void> {
    const btnPessoaJuridica: WebElement = await this.waitForElement(AccountTypeElementsMap.buttonPJ);
    await btnPessoaJuridica.click();
}

async clickBtnContinue(): Promise<void> {
    const btnContinue: WebElement = await this.waitForElement(AccountTypeElementsMap.btnContinue);
    await btnContinue.click();
}

}