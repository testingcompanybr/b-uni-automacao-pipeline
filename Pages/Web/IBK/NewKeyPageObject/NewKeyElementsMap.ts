import { By } from 'selenium-webdriver';

export const NewKeyElementsMap = {
  //TIPO CHAVE-------------------------------------------------------------------------------
  btnRandomKey: By.xpath('//p[text()="Chave aleatória"]'),
  btnCPFCNPJKey: By.xpath('//p[text()="CPF/CNPJ"]'),
  //CHAVE
  btnAdvance: By.xpath('//button[.//span[text()="Avançar"]]')
};