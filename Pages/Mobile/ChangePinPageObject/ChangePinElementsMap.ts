export const ChangePinElementsMap = {
  btnOk: "accessibility id:OK",
  btnContinue: "accessibility id:CONTINUAR",
  inputCode: 'android=new UiSelector().resourceId("sms_SmsCodeScreen_smsCodeInput")',
  keyboardPIN: (digit: string) => `android=new UiSelector().description("${digit}")`,
};