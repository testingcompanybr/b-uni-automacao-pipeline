import { WebDriver, until, By, WebElement } from 'selenium-webdriver';

export async function goToLoginPage(driver: WebDriver): Promise<void> {
  await driver.get('https://ibk.stg.ser.buni.digital/');
}

export async function goToBOLoginPage(driver: WebDriver): Promise<void> {
  await driver.get('https://backoffice.stg.ser.buni.digital/');
}

export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function CPFGenerator(): string {
  const gerarDigito = (cpfParcial: number[]): number => {
    const soma = cpfParcial.reduce((acc, val, idx) => {
      return acc + val * ((cpfParcial.length + 1) - idx);
    }, 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const cpfNumeros: number[] = [];

  // Gerar os 9 primeiros dígitos
  for (let i = 0; i < 9; i++) {
    cpfNumeros.push(Math.floor(Math.random() * 10));
  }

  // Calcular os 2 dígitos verificadores
  cpfNumeros.push(gerarDigito(cpfNumeros));
  cpfNumeros.push(gerarDigito(cpfNumeros));

  // Formatar como string: "000.000.000-00"
  return cpfNumeros.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function LoginGenerator(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let login = 'a';

  const length = Math.floor(Math.random() * 5) + 6;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    login += chars[randomIndex];
  }

  return login;
}

export function CNPJGenerator(): string {
  const gerarDigito = (cnpjParcial: number[]): number => {
    const pesos = cnpjParcial.length === 12
      ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
      : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const soma = cnpjParcial.reduce((acc, val, idx) => acc + val * pesos[idx], 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const cnpjNumeros: number[] = [];

  // Gerar os 8 primeiros dígitos (número base)
  for (let i = 0; i < 8; i++) {
    cnpjNumeros.push(Math.floor(Math.random() * 10));
  }

  // Adicionar os 4 dígitos fixos de um CNPJ de matriz: 0001
  cnpjNumeros.push(0, 0, 0, 1);

  // Gerar os dois dígitos verificadores
  cnpjNumeros.push(gerarDigito(cnpjNumeros));
  cnpjNumeros.push(gerarDigito(cnpjNumeros));

  // Formatar como string: "00.000.000/0001-00"
  return cnpjNumeros.join('').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

export async function scrollDown(driver: WebDriver, pixels: number = 1000): Promise<void> {
  await driver.executeScript(`window.scrollBy(0, ${pixels});`);
}

export type WaitCondition =
  | { type: 'urlIs', value: string }
  | { type: 'urlContains', value: string }
  | { type: 'urlStartsWith', value: string }
  | { type: 'elementVisible', locator: By }
  | { type: 'elementClickable', locator: By }
  | { type: 'textPresent', locator: By, text: string }
  | { type: 'elementInvisible', locator: By }
  | { type: 'elementDisabled', locator: By }
  | { type: 'tabActive', locator: By, activeClass: string };

export async function waitFor(driver: WebDriver, condition: WaitCondition, timeout = 30000): Promise<WebElement | string | boolean> {
  switch (condition.type) {

    case 'urlIs':
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === condition.value;
      }, timeout, `A URL não mudou para ${condition.value} dentro de ${timeout}ms`);
      return await driver.getCurrentUrl();

    case 'elementVisible': {
      const el = await driver.wait(until.elementLocated(condition.locator), timeout);
      await driver.wait(until.elementIsVisible(el), timeout);
      return el;
    }

    case 'elementClickable': {
      const el = await driver.wait(until.elementLocated(condition.locator), timeout);
      await driver.wait(until.elementIsVisible(el), timeout);
      await driver.wait(until.elementIsEnabled(el), timeout);
      return el;
    }

    case 'textPresent': {
      const el = await driver.wait(until.elementLocated(condition.locator), timeout);
      await driver.wait(until.elementTextContains(el, condition.text), timeout);
      return el;
    }

    case 'elementInvisible': {
      const el = await driver.wait(until.elementLocated(condition.locator), timeout);
      await driver.wait(until.elementIsNotVisible(el), timeout);
      return true;
    }

    case 'elementDisabled': {
      const el = await driver.wait(until.elementLocated(condition.locator), timeout);
      await driver.wait(async () => {
        const pointerEvents = await driver.executeScript(
          'return window.getComputedStyle(arguments[0]).getPropertyValue("pointer-events");',
          el
        );
        return pointerEvents === 'none';
      }, timeout, `O elemento ${condition.locator} não ficou desabilitado dentro de ${timeout}ms`);
      return el;
    }

    case 'tabActive': {
      const el = await driver.wait(until.elementLocated(condition.locator), timeout);
      await driver.wait(async () => {
        const classAttr = await el.getAttribute('class');
        return classAttr.includes(condition.activeClass);
      }, timeout, `A aba ${condition.locator} não ficou ativa dentro de ${timeout}ms`);
      return el;
    }

    case 'urlContains':
      await driver.wait(until.urlContains(condition.value), timeout);
      return driver.getCurrentUrl();

    case 'urlStartsWith':
      await driver.wait(async () => {
        const url = await driver.getCurrentUrl();
        return url.startsWith(condition.value);
      }, timeout, `A URL não iniciou com "${condition.value}" dentro de ${timeout}ms`);
      return driver.getCurrentUrl();

    default:
      throw new Error(`Tipo de espera não suportado: ${(condition as any).type}`);
  }
}

export async function waitForLoadingToDisappear(driver: WebDriver, timeout = 30000): Promise<boolean> {
  try {
    const loadingLocator = By.css('.loading, .spinner, .loader');

    await driver.wait(until.elementLocated(loadingLocator), 3000).catch(() => null);

    await driver.wait(async () => {
      const elements = await driver.findElements(loadingLocator);
      if (elements.length === 0) return true;

      const isDisplayed = await elements[0].isDisplayed().catch(() => false);
      return !isDisplayed;
    }, timeout, `O loading não desapareceu dentro de ${timeout}ms`);

    return true;
  } catch (error) {
    return true;
  }
}