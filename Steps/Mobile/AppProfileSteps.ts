import { When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { ProfileActions } from '../../Pages/Mobile/ProfilePageObject/ProfileActions';

When('clico no botão Sair na tela de Perfil do App', async function (this: World) {
  const profileActions = new ProfileActions(this.mobileDriver!);
  await profileActions.clickExitButton();
});