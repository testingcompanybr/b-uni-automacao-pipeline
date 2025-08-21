import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { BOHomeElementsMap } from './BOHomeElementsMap';
import { sleep } from '../../../../Support/Utils';

export class BOHomeActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickviewButtonRegisterFirstRow(): Promise<void> {
    await sleep(1000);
    const btnViewRegister: WebElement = await this.waitForElement(BOHomeElementsMap.firstRowViewRegisterButton);
    await btnViewRegister.click();
}

async clickAdvancedFilters(): Promise<void> {
    const btnAdvancedFilter: WebElement = await this.waitForElement(BOHomeElementsMap.btnAdvancedFilter);
    await btnAdvancedFilter.click();
    await sleep(1000);
}

async fillCPFFilter(cpf: string): Promise<void> {
    const cpfInput: WebElement = await this.waitForElement(BOHomeElementsMap.inputCPFAdvancedFilter);
    await cpfInput.sendKeys(cpf);
}

async clickBtnFilter(): Promise<void> {
    const btnFilter: WebElement = await this.waitForElement(BOHomeElementsMap.btnFilter);
    await btnFilter.click();
    await sleep(1000);
}

}