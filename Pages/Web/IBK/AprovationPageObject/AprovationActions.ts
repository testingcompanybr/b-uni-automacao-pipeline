import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { AprovationElementsMap } from './AprovationElementsMap';

export class AprovationActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnApprove(): Promise<void> {
    const btnApprove: WebElement = await this.waitForElement(AprovationElementsMap.btnApprove);
    await btnApprove.click();
}

async digitPinNumericKeyboard(pin: string): Promise<void> {
    for (const digit of pin) {
         const locator = AprovationElementsMap.numericKeyboard(digit);
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
    const btnConfirmPopUp: WebElement = await this.waitForElement(AprovationElementsMap.btnConfirmPopUp);
    await btnConfirmPopUp.click();
}

}