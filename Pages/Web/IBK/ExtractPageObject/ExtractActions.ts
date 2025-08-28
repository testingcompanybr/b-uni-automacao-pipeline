import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { ExtractElementsMap } from './ExtractElementsMap';
import { World } from '../../../../Support/World';
import { waitForLoadingToDisappear } from '../../../../Support/Utils';

export class ExtractActions {constructor(private driver: WebDriver, private world: World) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickFirstTransaction(): Promise<void> {
    const firstTransactionName: WebElement = await this.waitForElement(ExtractElementsMap.txtFirstTransactionNameAccount);
    await firstTransactionName.click();
}

async storeDailyBalance(): Promise<void> {
    const balanceElement = await this.waitForElement(ExtractElementsMap.txtDailyBalance);
    const text = await balanceElement.getText();
    this.world.storedValues.set('dailyBalance', text);
    console.log(`💾 Saldo armazenado no World: ${text}`);
}

getStoredValue(key: string): string | undefined {
    return this.world.storedValues.get(key);
}

async clickHomeBtnMenu(): Promise<void> {
  await waitForLoadingToDisappear(this.driver);

  const homeBtnMenu: WebElement = await this.waitForElement(ExtractElementsMap.btnHomeMenu);
  await homeBtnMenu.click();
}

}