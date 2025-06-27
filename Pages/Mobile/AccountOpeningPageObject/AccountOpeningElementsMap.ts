export const AccountOpeningElementsMap = {
  //INSTRUÇÕES-------------------------------------------------------------------------------
  btnContinue: "accessibility id:CONTINUAR",
  //CPF--------------------------------------------------------------------------------------
  inputCPF: 'android=new UiSelector().resourceId("onboardingCpf_TaxIdentifierScreen_cpfInput")',
  //CNPJ--------------------------------------------------------------------------------------
  inputCNPJ: 'android=new UiSelector().resourceId("onboardingCpf_TaxIdentifierScreen_cnpjInput")',
  //EMAIL------------------------------------------------------------------------------------
  inputEmail: 'android=new UiSelector().resourceId("onboardingEmail_EmailScreen_emailInput")',
  //CELULAR----------------------------------------------------------------------------------
  inputCellphone: 'android=new UiSelector().resourceId("onboardingCellphone_CellphoneScreen_cellphoneInput")',
  //CÓDIGO SMS-------------------------------------------------------------------------------
  inputSMSCode: 'android=new UiSelector().resourceId("onboardingSmsCode_SmsCodeScreen_codeInput")',
  //NOME COMPLETO----------------------------------------------------------------------------
  inputName: 'android=new UiSelector().resourceId("onboardingName_NameScreen_nameInput")',
  //RAZÃO SOCIAL-----------------------------------------------------------------------------
  inputCorporateReason: 'android=new UiSelector().resourceId("onboardingCompanySocialName_CompanyNameScreen_companyNameInput")',
  //NOME FANTASIA----------------------------------------------------------------------------
  inputFantasyName: 'android=new UiSelector().resourceId("onboardingCompanyFantasyName_FantasyNameScreen_fantasyNameInput")',
  //INSCRIÇÃO ESTADUAL-----------------------------------------------------------------------
  inputStateRegistration: 'android=new UiSelector().resourceId("onboardingCompanyRegistrationName_BusinessRegistrationScreen_businessRegistrationInput")',
  //DATA NASCIMENTO--------------------------------------------------------------------------
  inputBirthDate: 'android=new UiSelector().resourceId("onboardingBirthdayDate_BirthdayScreen_birthdayDateInput")',
  //DATA ABERTURA EMPRESA--------------------------------------------------------------------
  inputCorporationOpeningDate: 'android=new UiSelector().resourceId("onboardingOpenDate_OpenDateScreen_dateInput")',
  //TIPO EMPRESA-----------------------------------------------------------------------------
  inputCorporationType: 'accessibility id:Selecione uma opção, ',
  optionCorporationTypeByType: (corporationType: string) => `android=new UiSelector().resourceId("onboardingCompanyType_CompanyTypeScreen_option${corporationType}")`,
  //CNAE-------------------------------------------------------------------------------------
  inputCNAE: 'android=new UiSelector().resourceId("onboardingCompanyCnae_CnaeScreen_cnaeInput")',
  //RAMO DA EMPRESA--------------------------------------------------------------------------
  inputCorporationCategory: 'accessibility id:Selecione uma opção, ',
  inputCategorySearch: 'android=new UiSelector().className("android.widget.EditText")',
  optionCorporationCategoryByCategory: (category: string) => `android=new UiSelector().text("${category}")`,
  //FATURAMENTO MENSAL-----------------------------------------------------------------------
  inputIncome: 'android=new UiSelector().resourceId("onboardingCompanyIncome_CompanyIncomeScreen_incomeInput")',
  //REPRESENTANTE EMPRESA--------------------------------------------------------------------
  inputRepresentative: 'android=new UiSelector().text("Selecione uma opção")',
  optionRepresentativeByRepresentative: (representative: string) => `android=new UiSelector().text("${representative}")`,
  //NOME MAE---------------------------------------------------------------------------------
  inputMotherName: 'android=new UiSelector().resourceId("onboardingMother_MotherScreen_motherNameInput")',
  //TERMOS DE USO----------------------------------------------------------------------------
  checkBoxTerms: "accessibility id:Declaro que li e estou de acordo com os termos de uso",
  //POLÍTICA DE PRIVACIDADE-----------------------------------------------------------------
  checkBoxPolicy: "accessibility id:Declaro que li e estou de acordo com a política de privacidade",
  //SENHA------------------------------------------------------------------------------------
  inputPassword: 'android=new UiSelector().resourceId("onboardingPassword_PasswordScreen_passwordInput")',
  //ENDEREÇO---------------------------------------------------------------------------------
  inputCEP: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_zipcodeInput")',
  inputUF: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_UFInput")',
  inputCity: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_cityInput")',
  inputNeightborhood: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_neighborhoodInput")',
  inputStreet: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_streetInput")',
  inputNumber: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_numberInput")',
  inputComplement: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_complementInput")',
  //ENDEREÇO REPRESENTANTE-------------------------------------------------------------------
  inputRepresentativeCEP: 'android=new UiSelector().resourceId("onboardingRepresentatorAdress_RepresentatorAdressScreen_zipcodeInput")',
  inputRepresentativeNumber: 'android=new UiSelector().resourceId("onboardingRepresentatorAdress_RepresentatorAdressScreen_numberInput")',
  inputRepresentativeComplement: 'android=new UiSelector().resourceId("onboardingRepresentatorAdress_RepresentatorAdressScreen_complementInput")',
  //ENDEREÇO EMPRESA-------------------------------------------------------------------------
  inputCorporateCEP: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_zipcodeInput")',
  inputCorporateNumber: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_numberInput")',
  inputCorporateComplement: 'android=new UiSelector().resourceId("onboardingAdress_AdressScreen_complementInput")',
  //IDENTIFICAÇÃO----------------------------------------------------------------------------
  btnStartIdentification: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/btn_welcome_single_doc")',
  //ETAPAS IDENTIFICAÇÃO---------------------------------------------------------------------
  btnSignDocument: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/ll_card_view_digital_document").instance(0)',
  btnSignSelfie: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/ll_card_view_digital_document").instance(1)',
  //SELECIONAR DOCUMENTO---------------------------------------------------------------------
  btnRG: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/custom_card_view_digital_document").instance(0)',
  btnCNH: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/ll_card_view_digital_document").instance(1)',
  //CARREGAR DOCUMENTO-----------------------------------------------------------------------
  btnLoadFile: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/custom_card_view_digital_document")',
  btnYesPopUp: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/btn_popup_positive_action")',
  btnNoPopUp: 'anroid=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/btn_popup_negative_action")',
  btnLoadCNH: 'anroid=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/idwall_upload_doc_button")',
  //androidFile: 'android=new UiSelector().className("android.widget.RelativeLayout").instance(0)',
  //VERIFICAR DOCUMENTO---------------------------------------------------------------------
  btnConfirmSend: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/idwall_check_upload_cnh_button")',
  //CONTINUAR CADASTRO----------------------------------------------------------------------
  btnContinueSign: 'android=new UiSelector().resourceId("br.com.fintech.novo.buni.stg.digital:id/first_btn_idwall_feedback_digital_document")',
  //DIALOGO CAMERA ANDROID
  //btnAllowThisTime: 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_one_time_button")'
};