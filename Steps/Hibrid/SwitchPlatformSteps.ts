import { Given, When } from '@cucumber/cucumber';
import { World } from '../../Support/World';
import { sleep } from '../../Support/Utils';

Given('que acesso o BackOffice', async function (this: World) {
  await this.switchToWeb();
  if ('get' in this.activeDriver!) {
    await (this.activeDriver as any).get('https://backoffice.stg.ser.buni.digital/');
  } else if ('url' in this.activeDriver!) {
    await (this.activeDriver as any).url('https://backoffice.stg.ser.buni.digital/');
  } else {
    throw new Error('activeDriver does not support navigation');
  }
});

When('acesso o Aplicativo', async function (this: World) {
  await this.switchToMobile();
});

When('encerro o navegador web', async function (this: World) {
  await this.closeWebDriver();
  await sleep(5000);
});