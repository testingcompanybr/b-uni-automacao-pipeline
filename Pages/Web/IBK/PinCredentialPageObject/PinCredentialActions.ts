import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { PinCredentialElementsMap } from './PinCredentialElementsMap';
import { waitForLoadingToDisappear } from '../../../../Support/Utils';

export class PinCredentialActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnOk(): Promise<void> {
    await waitForLoadingToDisappear(this.driver);

    const btnOk: WebElement = await this.waitForElement(PinCredentialElementsMap.btnOk);
    await btnOk.click();
}

async fillCode(code: string): Promise<void> {
    const inputCode: WebElement = await this.waitForElement(PinCredentialElementsMap.inputCode);
    await inputCode.sendKeys(code);
}

async clickBtnNext(): Promise<void> {
    const btnNext: WebElement = await this.waitForElement(PinCredentialElementsMap.btnNext);
    await btnNext.click();
}

async digitPinNumericKeyboard(pin: string): Promise<void> {
    for (const digit of pin) {
         const locator = PinCredentialElementsMap.numericKeyboard(digit);
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
    const btnConfirmPopUp: WebElement = await this.waitForElement(PinCredentialElementsMap.btnConfirmPopUp);
    await btnConfirmPopUp.click();
}

}