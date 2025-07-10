export const PayBillElementsMap = {
  btnContinue: "accessibility id:CONTINUAR",
  inputCodeBar: 'android=new UiSelector().className("android.widget.EditText")',
  btnConfirm: "accessibility id:CONFIRMAR",
  keyboardPIN: (digit: string) => `android=new UiSelector().description("${digit}")`,
  btnShowTransactionProof: "accessibility id:VER COMPROVANTE",
  txtDate: 'android=new UiSelector().textContains("/")',
  labelMinValue: 'android=new UiSelector().textStartsWith("Valor mínimo")',
  labelDiscount: 'android=new UiSelector().text("Descontos")',
  labelFine: 'android=new UiSelector().text("Multas")',
  labelFess: 'android=new UiSelector().text("Juros")',
  inputValue: 'android=new UiSelector().className("android.widget.EditText")'
};