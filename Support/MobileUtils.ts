import { Browser } from "webdriverio";

export function bySelector(selector: string) {
  if (selector.startsWith('id=')) return selector;
  if (selector.startsWith('accessibility id:'))
    return `~${selector.replace('accessibility id:', '').trim()}`;
  if (selector.startsWith('android=')) return selector;
  return selector;
}

export async function swipeUp(driver: Browser, duration = 800) {
  const windowSize = await driver.getWindowSize();
  const startX = Math.floor(windowSize.width / 2);
  const startY = Math.floor(windowSize.height * 0.8);
  const endY = Math.floor(windowSize.height * 0.2);

  await driver.touchAction([
    { action: 'press', x: startX, y: startY },
    { action: 'wait', ms: duration },
    { action: 'moveTo', x: startX, y: endY },
    { action: 'release' }
  ]);
}

export async function pressAndroidBackButton(driver: Browser) {
  await driver.back();
}

export async function waitAndClick(driver: Browser, selector: string, timeout = 10000) {
  const element = await driver.$(selector);
  await element.waitForDisplayed({ timeout });
  await element.click();
}

export async function waitAndSetValue(driver: Browser, selector: string, value: string, timeout = 10000) {
  const element = await driver.$(selector);
  await element.waitForDisplayed({ timeout });
  await element.setValue(value);
}

export async function waitForElement(driver: Browser, selector: string, timeout = 10000): Promise<WebdriverIO.Element> {
  const element = await driver.$(selector);
  await element.waitForDisplayed({ timeout });
  return element;
}