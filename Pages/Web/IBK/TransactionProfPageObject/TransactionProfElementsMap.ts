import { By } from 'selenium-webdriver';

export const TransactionProfElementsMap = {
  txtTransactionValue: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[1]/div[2]/div/p'),
  txtTypeTransaction: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[1]/div[1]/div/p'),
  txtOriginAccount: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[1]/div/p[1]'),
  txtCPFOrigin: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[1]/div/p[2]/text()'),
  txtInstitutionOrigin: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[1]/div/p[3]'),
  txtDestinyAccount: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[2]/div/p[1]'),
  txtCPFCNPJDestiny: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[2]/div/p[2]/text()'),
  txtInstitutionDestiny: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[2]/div/p[3]'),
  txtAgencyDestiny: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[2]/div/p[4]'),
  txtAccountDestiny: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[5]/div[2]/div/p[5]'),
  txtTransactionDescription: By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div[3]/div[10]/div/p'),
  btnShare: By.xpath('//button[.//span[contains(text(), "Compartilhar")]]'),
  btnDownload: By.xpath("//button[.//span[contains(text(), 'Baixar')]]"),
  btnSendByEmail: By.xpath("//button[.//span[contains(text(), 'Enviar por email')]]"),
  txtEmailSent: By.xpath('/html/body/div[2]/div/div/div/div/div/span[2]')
};