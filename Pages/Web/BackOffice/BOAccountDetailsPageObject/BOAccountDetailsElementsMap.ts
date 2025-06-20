import { By } from 'selenium-webdriver';

export const BOAccountDetailsElementsMap = {
  btnDispositivos: By.xpath("//span[@class='MuiTab-wrapper' and text()='DISPOSITIVOS']"),
  btnRemoveDevice: By.css("div[data-field='remove'] button.users__remove--button"),
  txtPaginationDevicesTable: By.css("p.MuiTablePagination-caption")
};