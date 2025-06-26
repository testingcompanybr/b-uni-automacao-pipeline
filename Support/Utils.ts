import { WebDriver } from 'selenium-webdriver';
import { By } from 'selenium-webdriver';

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