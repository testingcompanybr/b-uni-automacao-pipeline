export const ExtractElementsMap = {
  firstTransactionByUser: (userAccount: string) => `android=new UiSelector().text("PARA ${userAccount}").instance(0)`,
}