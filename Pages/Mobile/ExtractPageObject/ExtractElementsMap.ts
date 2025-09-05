export const ExtractElementsMap = {
  firstTransactionByUser: (userAccount: string) => `android=new UiSelector().text("PARA ${userAccount}").instance(0)`,
  btnHome: 'accessibility id:󰚡, Início',
  txtDailyBalance: 'android=new UiSelector().textContains("Saldo do dia:")',
}