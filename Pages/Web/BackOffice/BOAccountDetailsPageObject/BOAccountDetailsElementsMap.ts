import { By } from 'selenium-webdriver';

export const BOAccountDetailsElementsMap = {
  //DISPOSITIVOS------------------------------------------------------------------------------------------------------------------
  btnDispositivos: By.xpath("//span[@class='MuiTab-wrapper' and text()='DISPOSITIVOS']"),
  btnRemoveDevice: By.css("div[data-field='remove'] button.users__remove--button"),
  txtPaginationDevicesTable: By.css("p.MuiTablePagination-caption"),
  //LIMITES TRANSACIONAIS----------------------------------------------------------------------------------------------------------
  btnTransactionLimits: By.xpath("//span[@class='MuiTab-wrapper' and text()='LIMITES TRANSACIONAIS']"),
  btnEditRowByValues: (transactionType: string, timePeriod: string, limitType: string) => By.xpath(`//div[@role='row' and .//span[text()='${transactionType}'] and .//span[text()='${timePeriod}'] and .//span[text()='${limitType}']]//button[.//span[text()='Editar']]`),
  inputNewLimit: By.css('input.MuiInputBase-input.MuiOutlinedInput-input'),
  btnConfirmNewLimit: By.xpath("//button[.//span[text()='Confirmar']]"),
  btnConfirmNewLimitDialog: By.xpath("//div[contains(@class, 'ant-modal') and .//div[text()='Confirmação de alteração de limite de conta']]//span[text()='Confirmar']/ancestor::button")
};