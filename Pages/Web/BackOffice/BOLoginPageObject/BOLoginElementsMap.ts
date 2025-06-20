import { By } from 'selenium-webdriver';

export const BOLoginElementsMap = {
  inputEmail: By.css("[testid='login_AdvancedInput_email']"),
  inputPassword: By.css("[testid='login_AdvancedInput_password']"),
  btnEnter: By.css("[testid='login_AdvancedButton_submit']"),
};