import { WebDriver, WebElement, By, until, Key } from 'selenium-webdriver';
import { BOAccountDetailsElementsMap } from './BOAccountDetailsElementsMap';

export class BOAccountDetailsActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnDevices(): Promise<void> {
  const btnDevices: WebElement = await this.waitForElement(BOAccountDetailsElementsMap.btnDispositivos);

  await this.driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", btnDevices);

  await this.driver.wait(until.elementIsVisible(btnDevices), 5000);
  await this.driver.wait(until.elementIsEnabled(btnDevices), 5000);

  await this.driver.sleep(500);
  await this.driver.executeScript("arguments[0].click();", btnDevices);

  await this.waitForElement(By.css('div.MuiDataGrid-main'));
}

async removeAllRegisteredDevicesFromAccount(): Promise<void> {
  let elements: WebElement[] = await this.driver.findElements(BOAccountDetailsElementsMap.btnRemoveDevice);

  while (elements.length > 0) {
    await this.driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", elements[0]);
    await this.driver.wait(until.elementIsVisible(elements[0]), 5000);
    await this.driver.wait(until.elementIsEnabled(elements[0]), 5000);

    await elements[0].click();
    await this.driver.sleep(1000);

    elements = await this.driver.findElements(BOAccountDetailsElementsMap.btnRemoveDevice);
  }
}

async clickBtnTransactionLimits(): Promise<void> {
  const btnTransactionLimits: WebElement = await this.waitForElement(BOAccountDetailsElementsMap.btnTransactionLimits);

  await this.driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", btnTransactionLimits);

  await this.driver.wait(until.elementIsVisible(btnTransactionLimits), 5000);
  await this.driver.wait(until.elementIsEnabled(btnTransactionLimits), 5000);

  await this.driver.sleep(500);
  await this.driver.executeScript("arguments[0].click();", btnTransactionLimits);

  await this.waitForElement(By.css('div.MuiDataGrid-main'));
}

async clickEditButtonByRowValues(transactionType: string,timePeriod: string, limitType: string): Promise<void> {
    const btnEdit: WebElement = await this.waitForElement(BOAccountDetailsElementsMap.btnEditRowByValues(transactionType, timePeriod, limitType));
    await btnEdit.click();
}

async fillNewLimit(newLimit: string): Promise<void> {
    const newLimitInput: WebElement = await this.waitForElement(BOAccountDetailsElementsMap.inputNewLimit);
    await newLimitInput.sendKeys(Key.chord(Key.CONTROL, 'a'));
    await newLimitInput.sendKeys(newLimit);
}

async clickBtnConfirmNewLimit(): Promise<void> {
    const btnConfirmNewLimit: WebElement = await this.waitForElement(BOAccountDetailsElementsMap.btnConfirmNewLimit);
    await btnConfirmNewLimit.click();
}

async btnConfirmNewLimitDialog(): Promise<void> {
    const btnConfirmNewLimitLimitDialog: WebElement = await this.waitForElement(BOAccountDetailsElementsMap.btnConfirmNewLimitDialog);
    await this.driver.wait(until.elementIsVisible(btnConfirmNewLimitLimitDialog), 5000);
    await this.driver.wait(until.elementIsEnabled(btnConfirmNewLimitLimitDialog), 5000);
    await btnConfirmNewLimitLimitDialog.click();
}

}