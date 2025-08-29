export const TransferElementsMap = {
  inputSearchForUsers: 'android=new UiSelector().text("Pesquisar")',
  filteredUser: (description: string) => `android=new UiSelector().description("${description}")`,
  inputTEDValue: 'android=new UiSelector().className("android.widget.EditText")',
  btnContinue: "accessibility id:CONTINUAR",
  btnConfirm: "accessibility id:CONFIRMAR",
  keyboardPIN: (digit: string) => `android=new UiSelector().description("${digit}")`,
  btnShowTransactionProof: "accessibility id:VER COMPROVANTE",
};