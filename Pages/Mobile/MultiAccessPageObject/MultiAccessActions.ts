import { Browser } from 'webdriverio';
import { MultiAccessElementsMap } from './MultiAccessElementsMap';
import { bySelector } from '../../../Support/MobileUtils';
import { swipeUp } from '../../../Support/MobileUtils';
import { LoginGenerator } from '../../../Support/Utils';

export class MultiAccessActions {
  constructor(private driver: Browser, private world: any) { }

  async clickCreateUser() {
    const btn = await this.driver.$(bySelector(MultiAccessElementsMap.btnCreateUser));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async fillName(name: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputName));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.addValue(name);
    await this.driver.hideKeyboard();
  }

  async fillEmail(email: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputEmail));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.addValue(email);
    await this.driver.hideKeyboard();
  }

  async fillCellPhone(cellphone: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputCellPhone));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.addValue(cellphone);
    await this.driver.hideKeyboard();
  }

  async clickContinue() {
    const btn = await this.driver.$(bySelector(MultiAccessElementsMap.btnContinue));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async fillLogin(login: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputLogin));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.clearValue();
    await input.addValue(login);
    await this.driver.hideKeyboard();
  }

  async fillRandomLogin() {
    const login = LoginGenerator();
    this.world.storedValues.set('RandomLoginMobile', login);

    const input = await this.world.driver.$(bySelector(MultiAccessElementsMap.inputLogin));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.clearValue();
    await input.addValue(login);
    await this.world.driver.hideKeyboard();
  }

  async fillPassword(password: string) {
    const input = await this.driver.$(bySelector(MultiAccessElementsMap.inputPassword));
    await input.waitForDisplayed({ timeout: 30000 });
    await input.clearValue();
    await input.addValue(password);
    await this.driver.hideKeyboard();
  }

  async clickCheckBoxAllAccess() {
    await swipeUp(this.driver);
    await swipeUp(this.driver);
    await swipeUp(this.driver);
    await swipeUp(this.driver);

    const checkbox = await this.driver.$(bySelector(MultiAccessElementsMap.checkBoxAllAccess));
    await checkbox.waitForDisplayed({ timeout: 30000 });
    await checkbox.click();
  }

  async clickDeleteUser() {
    const btn = await this.driver.$(bySelector(MultiAccessElementsMap.btnDeleteUser));
    await btn.waitForDisplayed({ timeout: 30000 });
    await btn.click();
  }

  async verifyUserCard(login: string) {
    const selector = MultiAccessElementsMap.cardUser(login);
    let found = false;

    for (let i = 0; i < 5; i++) {
      const elements = await this.driver.$$(selector);

      if (elements.length > 0 && await elements[0].isDisplayed()) {
        found = true;
        break;
      }

      console.log(`🔎 Tentativa ${i + 1}: card não encontrado, executando swipeUp`);
      await swipeUp(this.driver);
    }

    if (!found) {
      throw new Error(`❌ Não foi possível encontrar o card do usuário: ${login} após 5 tentativas`);
    }

    console.log(`✅ Card do usuário ${login} encontrado na tela`);
  }

  async clickGeneratedUserCard() {
    const login = this.world.storedValues.get('RandomLoginMobile');

    if (!login) {
      throw new Error('❌ Nenhum login aleatório armazenado em RandomLoginMobile');
    }

    const selector = MultiAccessElementsMap.cardUser(login);

    for (let i = 0; i < 5; i++) {
      const elements = await this.driver.$$(selector);

      if (elements.length > 0 && await elements[0].isDisplayed()) {
        console.log(`✅ Card do usuário ${login} encontrado, clicando...`);
        await elements[0].click();
        return;
      }

      console.log(`🔎 Tentativa ${i + 1}: card não encontrado, executando swipeUp`);
      await swipeUp(this.driver);
    }

    throw new Error(`❌ Não foi possível clicar no card do usuário: ${login} após 5 tentativas`);
  }

  async verifyUserCardDeleted() {
    const login = this.world.storedValues.get('RandomLoginMobile');

    if (!login) {
      throw new Error('❌ Nenhum login aleatório armazenado em RandomLoginMobile');
    }

    const selector = MultiAccessElementsMap.cardUser(login);

    for (let i = 0; i < 5; i++) {
      const elements = await this.driver.$$(selector);

      if (elements.length > 0 && await elements[0].isDisplayed()) {
        console.log(`⚠️ Card do usuário ${login} ainda existe, tentando novamente (${i + 1}/5)`);
        await swipeUp(this.driver);
        continue;
      }

      console.log(`✅ Card do usuário ${login} não encontrado (deletado com sucesso).`);
      return;
    }

    throw new Error(`❌ Card do usuário ${login} ainda está visível após 5 verificações.`);
  }
}