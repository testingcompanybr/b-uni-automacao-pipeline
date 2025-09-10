import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { MultiAccessElementsMap } from './MultiAccessElementsMap';
import { waitForLoadingToDisappear, LoginGenerator } from '../../../../Support/Utils';
import { World } from '../../../../Support/World';
import { saveLogin } from '../../../../Support/LoginStorage';

export class MultiAccessActions {constructor(private driver: WebDriver, private world: World) {}

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

async fillLoginRandom(): Promise<void> {
    const generatedLogin: string = LoginGenerator();
    const loginInput: WebElement = await this.waitForElement(MultiAccessElementsMap.inputLogin);
    await loginInput.sendKeys(generatedLogin);
    this.world.storedValues.set('generatedLogin', generatedLogin);
    await saveLogin(generatedLogin);
    console.log(`💾 login gerado armazenado no World: ${generatedLogin}`);
}

getStoredValue(key: string): string | undefined {
    return this.world.storedValues.get(key);
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