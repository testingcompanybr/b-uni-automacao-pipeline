export const PayBillElementsMap = {
  btnContinue: "accessibility id:CONTINUAR",
  inputCodeBar: 'android=new UiSelector().className("android.widget.EditText")',
  btnConfirm: "accessibility id:CONFIRMAR",
  keyboardPIN: (digit: string) => `android=new UiSelector().description("${digit}")`,
  btnShowTransactionProof: "accessibility id:VER COMPROVANTE",
  labelMinValue: 'android=new UiSelector().textStartsWith("Valor mínimo")',
  labelDiscount: 'android=new UiSelector().text("Descontos")',
  labelFine: 'android=new UiSelector().text("Multas")',
};