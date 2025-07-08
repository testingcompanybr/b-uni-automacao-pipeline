export const AprovationElementsMap = {
  btnApprove: "accessibility id:APROVAR",
  btnApprovePopup: "accessibility id:Aprovar",
  keyboardPIN: (digit: string) => `android=new UiSelector().description("${digit}")`,
}