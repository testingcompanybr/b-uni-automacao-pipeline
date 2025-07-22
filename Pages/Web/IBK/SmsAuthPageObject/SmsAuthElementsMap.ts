import { By } from 'selenium-webdriver';

export const SmsAuthElementsMap = {
  inputCode: By.css("[testid='request-sms_SmsCode_code']"),
  btnEnter: By.css("[data-testid='request-sms_SmsCode_Submit']"),
};