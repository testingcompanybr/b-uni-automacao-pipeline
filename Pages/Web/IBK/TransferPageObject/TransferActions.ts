import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { TransferElementsMap } from './TransferElementsMap';

export class TransferActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnTED(): Promise<void> {
    const btnTED: WebElement = await this.waitForElement(TransferElementsMap.btnTED);
    await btnTED.click();
}

async fillSearchByNameField(name: string): Promise<void> {
    const searchByNameInput: WebElement = await this.waitForElement(TransferElementsMap.inputSearchByName);
    await searchByNameInput.sendKeys(name);
}

async selectSearchResult(): Promise<void> {
    const searchResult: WebElement = await this.waitForElement(TransferElementsMap.searchContactResult);
    await searchResult.click();
}

async fillTedValueField(tedValue: string): Promise<void> {
    const tedValueInput: WebElement = await this.waitForElement(TransferElementsMap.inputTedValue);
    await tedValueInput.sendKeys(tedValue);
}

async clickBtnAdvance(): Promise<void> {
    const btnAdvance: WebElement = await this.waitForElement(TransferElementsMap.btnAdvance);
    await btnAdvance.click();
}

async clickBtnConfirm(): Promise<void> {
    const btnConfirm: WebElement = await this.waitForElement(TransferElementsMap.btnConfirm);
    await btnConfirm.click();
}

async digitPinNumericKeyboard(pin: string): Promise<void> {
    for (const digit of pin) {
         const locator = TransferElementsMap.numericKeyboard(digit);
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
    const btnConfirmPopUp: WebElement = await this.waitForElement(TransferElementsMap.btnConfirmPopUp);
    await btnConfirmPopUp.click();
}


}