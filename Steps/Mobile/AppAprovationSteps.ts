import { When} from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { AprovationActions } from '../../Pages/Mobile/AprovationPageObject/AprovationActions';

When('clico no botão Aprovar na tela de Aprovações do App', async function (this: World) {
  const aprovationActions = new AprovationActions(this.mobileDriver!);
  await aprovationActions.clickBtnApprove();
});

When('clico no botão Aprovar no pop-up Aprovar transação na tela de Aprovações do App', async function (this: World) {
  const aprovationActions = new AprovationActions(this.mobileDriver!);
  await aprovationActions.clickBtnApprovePopUp();
});

When('digito o PIN {string} na tela de Aprovações do App', async function (this: World, pinCode: string) {
  const aprovationActions = new AprovationActions(this.mobileDriver!);
  await aprovationActions.fillPINCode(pinCode);
});