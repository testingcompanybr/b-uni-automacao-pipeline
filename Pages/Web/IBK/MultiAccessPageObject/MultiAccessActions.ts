import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { MultiAccessElementsMap } from './MultiAccessElementsMap';
import { waitForLoadingToDisappear } from '../../../../Support/Utils';

export class MultiAccessActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnCreateUser(): Promise<void> {
    await waitForLoadingToDisappear(this.driver);

    const btnCreateUser: WebElement = await this.waitForElement(MultiAccessElementsMap.btnCreateUser);
    await btnCreateUser.click();
}

async fillName(name: string): Promise<void> {
    const nameInput: WebElement = await this.waitForElement(MultiAccessElementsMap.inputName);
    await nameInput.sendKeys(name);
}

async fillEmail(email: string): Promise<void> {
    const emailInput: WebElement = await this.waitForElement(MultiAccessElementsMap.inputEmail);
    await emailInput.sendKeys(email);
}

async fillCellphone(cellphone: string): Promise<void> {
    const cellphoneInput: WebElement = await this.waitForElement(MultiAccessElementsMap.inputCellphone);
    await cellphoneInput.sendKeys(cellphone);
}

async clickBtnContinue(): Promise<void> {
    await waitForLoadingToDisappear(this.driver);

    const btnContinue: WebElement = await this.waitForElement(MultiAccessElementsMap.btnContinue);
    await btnContinue.click();
}

async fillLogin(login: string): Promise<void> {
    const loginInput: WebElement = await this.waitForElement(MultiAccessElementsMap.inputLogin);
    await loginInput.sendKeys(login);
}

async fillPassword(password: string): Promise<void> {
    const passwordInput: WebElement = await this.waitForElement(MultiAccessElementsMap.inputPassword);
    await passwordInput.sendKeys(password);
}

async clickUserCardByLogin(login: string): Promise<void> {
    const userCardLocator = MultiAccessElementsMap.cardByLogin(login);
    const userCard: WebElement = await this.waitForElement(userCardLocator);
    await userCard.click();

}

async clickBtnRemoveUser(): Promise<void> {
    const btnRemoveUser: WebElement = await this.waitForElement(MultiAccessElementsMap.btnRemoveUser);
    await btnRemoveUser.click();
}

async clickBtnDelete(): Promise<void> {
    const btnDelete: WebElement = await this.waitForElement(MultiAccessElementsMap.btnDelete);
    await btnDelete.click();

    await waitForLoadingToDisappear(this.driver);
}

}