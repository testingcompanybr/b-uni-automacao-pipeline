import { By } from 'selenium-webdriver';

export const AccountOpeningElementsMap = {
  //Primeiros Passos-------------------------------------------------------------------------------------
  fieldCPF: By.xpath("//div[label[text()='CPF']]//input"),
  fieldName: By.xpath("//div[label[text()='Nome completo']]//input"),
  fieldMotherName: By.xpath("//div[label[text()='Nome da mãe']]//input"),
  fieldEmail: By.xpath("//div[label[text()='E-mail']]//input"),
  fieldCellphone: By.xpath("//div[label[text()='Celular']]//input"),
  fieldBirthDate: By.xpath("//div[label[text()='Data de nascimento']]//input"),
  fieldMonthlyBilling: By.xpath("//div[label[text()='Faturamento médio mensal']]//input"),
  //Primeiros Passos Juridico----------------------------------------------------------------------------
  fieldCNPJ: By.xpath("//div[label[text()='CNPJ']]//input"),
  fieldCorporateReason: By.xpath("//div[label[text()='Razão social']]//input"),
  fieldFantasyName: By.xpath("//div[label[text()='Nome fantasia']]//input"),
  fieldCorporateEmail: By.xpath("//div[label[text()='E-mail corporativo']]//input"),
  fieldCorporateCellPhone: By.xpath("//div[label[text()='Celular']]//input"),
  fieldCorporateMonthlyBilling: By.xpath("//div[label[text()='Faturamento médio mensal']]//input"),
  fieldCorporationOpeningDate: By.xpath("//div[label[text()='Quando sua empresa foi aberta?']]//input"),
  fieldBranchActivity: By.xpath("//div[label[text()='Ramo de atividade']]//input"),
  optionBranchActivity: (option: string) => By.xpath(`//li[contains(@class, 'MuiAutocomplete-option') and normalize-space(text())='${option}']`),
  fieldCorporationCategory: By.xpath("//div[label[text()='Categoria da empresa']]//input"),
  optionCorporationCategory: (option: string) => By.xpath(`//li[contains(@class, 'MuiAutocomplete-option') and normalize-space(text())='${option}']`),
  fieldCNAE: By.xpath("//div[label[text()='CNAE']]//input"),
  fieldStateRegistration: By.xpath("//div[label[text()='Inscrição Estadual']]//input"),
  btnContinue: By.xpath("//button[.//span[contains(text(), 'Continuar')]]"),
  msgError: By.css(".ant-message-notice-content .ant-message-error span:last-child"),
  //Validação--------------------------------------------------------------------------------------------
  fieldValidationCode: By.xpath("//div[label[text()='Código de validação']]//input"),
  btnContinueFinal: By.xpath("//div[contains(@class, 'advance_final__button')]//button[.//span[text()='Continuar']]"),
  msgErrorValidation: By.css('div.ant-message-custom-content.ant-message-error'),
  //Representates juridicos------------------------------------------------------------------------------
  fieldRepresentativeCellphone: By.xpath("//*[@id='rc-tabs-0-panel-10']/div/div/form/div[5]/div[1]/div/div/div/input"),
  fieldRepresentativeMonthBilling: By.xpath("//*[@id='rc-tabs-0-panel-10']/div/div/form/div[5]/div[3]/div/div/div/input"),
  fieldRepresentativePercentage: By.xpath("//div[label[text()='Porcentagem do representante']]//input"),
  btnContinueRepresentative: By.xpath("//*[@id='rc-tabs-0-panel-10']/div/div/form/div[9]/div[1]/button"),
  //Termos de Uso----------------------------------------------------------------------------------------
  checkboxTerms: By.xpath("//label[.//span[text()='Aceitar Termos de uso']]//input[@type='checkbox']"),
  //Politica de Privacidade------------------------------------------------------------------------------
  checkboxPrivacyPolitic: By.xpath("//label[.//span[text()='Aceitar Política de Privacidade']]//input[@type='checkbox']"),
  //Credenciais------------------------------------------------------------------------------------------
  fieldPasswordAcess: By.xpath("//div[label[text()='Senha de acesso']]//input"),
  //Endereço---------------------------------------------------------------------------------------------
  fieldCEP: By.xpath("//input[@placeholder='CEP']"),
  fieldUF: By.xpath("//div[label[text()='UF']]//input"),
  fieldCity: By.xpath("//div[label[text()='Cidade']]//input"),
  fieldNeightborhood: By.xpath("//div[label[text()='Bairro']]//input"),
  fieldPublicPlace: By.xpath("//div[label[text()='Logradouro']]//input"),
  fieldNumberAdress: By.xpath("//div[label[text()='Número']]//input"),
  fieldComplement: By.xpath("//div[label[text()='Complemento']]//input"),
  btnContinueFinalAdress: By.css("[data-testid='advance-address-submit']"),
  msgErrorAdress: By.xpath("//div[contains(@class, 'ant-message-error')]//span[text()='Endereço não encontrado']"),
  //Identidade---------------------------------------------------------------------------------------------
  btnVerify: By.css(".ctaWrapper button"),
  btnUpload: By.id("btn_upload"),
  btnCapture: By.id("btn_capture"),
  btnRG: By.id("btn_rg"),
  btnCNH: By.id("btn_cnh"),
  btnCNHOpen: By.id("btn_cnh_full"),
  btnCNHDigital: By.id("btn_cnh_digital"),
  btnUnderstand: By.css("a[data-cy='button']"),
  btnSkip: By.id("btn_skip"),
  btnUploadImage: By.xpath("//button[contains(text(), 'Carregar imagem')]"),
  btnUploadDocument: By.xpath("//button[contains(text(), 'Carregar documento')]"),
  inputDocument: By.css('input[type="file"][name="file"]'),
  btnSend: By.css('div.ctaWrapper button[data-cy="button"]')
};