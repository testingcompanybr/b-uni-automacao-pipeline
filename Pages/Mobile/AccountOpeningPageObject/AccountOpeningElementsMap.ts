export const AccountOpeningElementsMap = {
  //INSTRUÇÕES-------------------------------------------------------------------------------
  btnContinue: "accessibility id:CONTINUAR",
  //CPF--------------------------------------------------------------------------------------
  inputCPF: 'android=new UiSelector().resourceId("onboardingCpf_TaxIdentifierScreen_cpfInput")',
  //EMAIL------------------------------------------------------------------------------------
  inputEmail: 'android=new UiSelector().resourceId("onboardingEmail_EmailScreen_emailInput")',
  //CELULAR----------------------------------------------------------------------------------
  inputCellphone: 'android=new UiSelector().resourceId("onboardingCellphone_CellphoneScreen_cellphoneInput")',
  //CÓDIGO SMS-------------------------------------------------------------------------------
  inputSMSCode: 'android=new UiSelector().resourceId("onboardingSmsCode_SmsCodeScreen_codeInput")',
  //NOME COMPLETO----------------------------------------------------------------------------
  inputName: 'android=new UiSelector().resourceId("onboardingName_NameScreen_nameInput")',
  //DATA NASCIMENTO--------------------------------------------------------------------------
  inputBirthDate: 'android=new UiSelector().resourceId("onboardingBirthdayDate_BirthdayScreen_birthdayDateInput")',
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