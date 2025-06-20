import { By } from 'selenium-webdriver';

export const LoginElementsMap = {
  inputCPF: By.css("[testid='login_AdvancedInput_username']"),
  inputPassword: By.css("[testid='login_AdvancedInput_password']"),
  btnEnter: By.css("[testid='login_Button_Submit']"),
  btnCreateAccount: By.xpath("//button[contains(., 'Criar conta.')]")
};