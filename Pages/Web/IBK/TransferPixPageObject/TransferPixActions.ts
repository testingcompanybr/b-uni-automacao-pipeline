import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { TransferPixElementsMap } from './TransferPixElementsMap';

export class TransferPixActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async fillSearchByNameField(name: string): Promise<void> {
    const searchByNameInput: WebElement = await this.waitForElement(TransferPixElementsMap.inputSearchByName);
    await searchByNameInput.sendKeys(name);
}

async selectSearchResult(): Promise<void> {
    const searchResult: WebElement = await this.waitForElement(TransferPixElementsMap.searchContactResult);
    await searchResult.click();
}

async fillPixValueField(pixValue: string): Promise<void> {
    const pixValueInput: WebElement = await this.waitForElement(TransferPixElementsMap.inputPixValue);
    await pixValueInput.sendKeys(pixValue);
}

async clickBtnAdvance(): Promise<void> {
    const btnAdvance: WebElement = await this.waitForElement(TransferPixElementsMap.btnAdvance);
    await btnAdvance.click();
}

async fillDescriptionTextArea(description: string): Promise<void> {
    const textAreaDescription: WebElement = await this.waitForElement(TransferPixElementsMap.textAreaDescription);
    await textAreaDescription.sendKeys(description);
}

async clickBtnConfirm(): Promise<void> {
    const btnConfirm: WebElement = await this.waitForElement(TransferPixElementsMap.btnConfirm);
    await btnConfirm.click();
}

async digitPinNumericKeyboard(pin: string): Promise<void> {
    for (const digit of pin) {
         const locator = TransferPixElementsMap.numericKeyboard(digit);
         const element = await this.driver.wait(until.elementLocated(locator), 5000);
         await this.driver.wait(until.elementIsVisible(element), 5000);
         await this.driver.wait(until.elementIsEnabled(element), 5000);

    try {
          await element.click();
        } catch (error) {
          await this.driver.executeScript('arguments[0].click();', element);
      }
    }
  }

async clickBtnConfirmPopUp(): Promise<void> {
    const btnConfirmPopUp: WebElement = await this.waitForElement(TransferPixElementsMap.btnConfirmPopUp);
    await btnConfirmPopUp.click();
}

}
