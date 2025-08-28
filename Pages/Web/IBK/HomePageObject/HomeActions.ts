import { WebDriver, WebElement, By, until } from 'selenium-webdriver';
import { HomeElementsMap } from './HomeElementsMap';
import { waitForLoadingToDisappear } from '../../../../Support/Utils';

export class HomeActions {constructor(private driver: WebDriver) {}

private async waitForElement(locator: By, timeout: number = 25000): Promise<WebElement> {
    return this.driver.wait(until.elementLocated(locator), timeout);
}

async clickBtnAccountBalanceEye(): Promise<void> {
    const btnAccountBalanceEye: WebElement = await this.waitForElement(HomeElementsMap.btnAccountBalanceEye);
    await btnAccountBalanceEye.click();
}

async clickBtnExtract(): Promise<void> {
    await waitForLoadingToDisappear(this.driver);

    const btnExtract: WebElement = await this.waitForElement(HomeElementsMap.btnExtract);
    await btnExtract.click();
}

async clickBtnProfile(): Promise<void> {
    const btnProfile: WebElement = await this.waitForElement(HomeElementsMap.btnProfile);
    await btnProfile.click();
}

async clickBtnProfileLogout(): Promise<void> {
    const btnProfileLogout: WebElement = await this.waitForElement(HomeElementsMap.btnProfileLogout);
    await btnProfileLogout.click();
}

async clickBtnPix(): Promise<void> {
    const btnPix: WebElement = await this.waitForElement(HomeElementsMap.btnPix);
    await btnPix.click();
}

async clickBtnReceive(): Promise<void> {
    const btnReceive: WebElement = await this.waitForElement(HomeElementsMap.btnReceive);
    await btnReceive.click();
}

async clickBtnPay(): Promise<void> {
    const btnPay: WebElement = await this.waitForElement(HomeElementsMap.btnPay);
    await btnPay.click();
}

async clickBtnTransfer(): Promise<void> {
    const btnTrasfer: WebElement = await this.waitForElement(HomeElementsMap.btnTrasfer);
    await btnTrasfer.click();
}

async clickBtnSeeExtract(): Promise<void> {
    const btnSeeExtract: WebElement = await this.waitForElement(HomeElementsMap.btnSeeExtract);
    await btnSeeExtract.click();
}

async clickBtnPIX(): Promise<void> {
    const btnSeePIX: WebElement = await this.waitForElement(HomeElementsMap.btnPIX);
    await btnSeePIX.click();
}

}