export const PixElementsMap = {
  btnTransfer: 'android=new UiSelector().description("Transferir")',
  inputSearchForUsers: 'android=new UiSelector().text("pesquisar usuários")',
  filteredUser: (description: string) => `android=new UiSelector().description("${description}")`,
  inputPixValue: 'android=new UiSelector().className("android.widget.EditText")',
  btnContinue: "accessibility id:CONTINUAR",
  btnConfirm: "accessibility id:CONFIRMAR",
  keyboardPIN: (digit: string) => `android=new UiSelector().description("${digit}")`,
  btnShowTransactionProof: "accessibility id:VER COMPROVANTE",
  btnAddKey: 'android=new UiSelector().description("")'
};