import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { PayElementsMap } from './PayElementsMap';

export class PayActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnPayBillet(): Promise<void> {
    const btnPayBillet: WebElement = await this.waitForElement(PayElementsMap.btnPayBillet);
    await btnPayBillet.click();
}

async clickBtnAdvance(): Promise<void> {
    const btnAdvance: WebElement = await this.waitForElement(PayElementsMap.btnAdvance);
    await btnAdvance.click();
}

async fillBarCodeField(barCode: string): Promise<void> {
    const inputBarCode: WebElement = await this.waitForElement(PayElementsMap.inputBarCode);
    await inputBarCode.sendKeys(barCode);
}

async digitPinNumericKeyboard(pin: string): Promise<void> {
    for (const digit of pin) {
         const locator = PayElementsMap.numericKeyboard(digit);
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
    const btnConfirmPopUp: WebElement = await this.waitForElement(PayElementsMap.btnConfirmPopUp);
    await btnConfirmPopUp.click();
}

}