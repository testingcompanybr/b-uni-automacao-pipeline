import { By } from 'selenium-webdriver';

export const BOHomeElementsMap = {
  registerTableFirstrow: By.css('[aria-rowindex="2"]'),
  firstRowViewRegisterButton: By.css('[aria-rowindex="2"] [data-field="details"] button'),
  btnAdvancedFilter: By.css('div.MuiAccordionSummary-expandIcon'),
  inputCPFAdvancedFilter: By.xpath("//label[text()='CPF ou CNPJ']/following-sibling::div//input[@type='text']"),
  inputNameAdvancedFilter: By.xpath("//label[text()='Nome']/following-sibling::div//input[@type='text']"),
  btnFilter: By.xpath("//button[.//span[contains(text(),'Filtrar')]]")
};