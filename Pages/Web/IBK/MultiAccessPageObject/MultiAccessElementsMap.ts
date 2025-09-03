import { By } from 'selenium-webdriver';

export const MultiAccessElementsMap = {
  //Multi accessos---------------------------------------------------------------------------------------------------------------------
  btnCreateUser: By.xpath("//button[contains(normalize-space(string(.)), 'Criar usuário')]"),
  cardByLogin: (login: string) => By.xpath(`//div[contains(@class,'user-card')][.//span[contains(., 'Login: ${login}')]]`),
  btnRemoveUser: By.xpath("//p[@class='action-display__action__options__title-document' and normalize-space(text())='Remover usuário']"),
  btnDelete: By.xpath("//button[contains(@class,'ant-btn-primary')]//span[text()='Excluir']"),
  //Conta de acesso---------------------------------------------------------------------------------------------------------------------
  inputName: By.xpath("//label[normalize-space(text())='Nome']/following-sibling::div//input"),
  inputEmail: By.xpath("//label[normalize-space(text())='Email']/following-sibling::div//input"),
  inputCellphone: By.xpath("//label[normalize-space(text())='Celular']/following-sibling::div//input"),
  btnContinue: By.xpath("//button[.//span[contains(normalize-space(),'Continuar')]]"),
  //Credenciais
  inputLogin: By.xpath("//label[normalize-space(text())='Login']/following-sibling::div//input"),
  inputPassword: By.xpath("//label[normalize-space(text())='Senha']/following-sibling::div//input"),
};