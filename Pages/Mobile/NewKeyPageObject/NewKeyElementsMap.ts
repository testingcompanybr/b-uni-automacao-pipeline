export const NewKeyElementsMap = {
  btnRandomKey: "accessibility id:Chave aleatória",
  btnCPFCNPJKeyAccountByCPFCNPJ: (cpfcnpj: string) => `android=new UiSelector().description("󰭸, CPF/CNPJ, ${cpfcnpj}")`,
  btnContinue: "accessibility id:CONTINUAR",
};