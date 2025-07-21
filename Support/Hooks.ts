import { Before, After, AfterStep, Status } from '@cucumber/cucumber';
import { World } from './World';
import { setDefaultTimeout } from '@cucumber/cucumber';

Before(async function (this: World, scenario) {
  const tags = scenario.pickle.tags.map(tag => tag.name);
  console.log('📌 Tags do cenário:', tags);
  await this.init(tags);
});

AfterStep(async function (this: World, stepResult) {
  const status = stepResult.result?.status;

  if (
    this.driver &&
    (status === Status.FAILED || status === Status.SKIPPED)
  ) {
    try {
      if ('takeScreenshot' in this.driver) {
        const screenshot = await (this.driver as any).takeScreenshot();
        await this.attach(Buffer.from(screenshot, 'base64'), 'image/png');
      }

      const errorMessage = stepResult.result?.message;
      if (errorMessage) {
        await this.attach(`🧾 Erro no passo:\n${errorMessage}`, 'text/plain');
      }
    } catch (err) {
      console.error('Erro ao capturar screenshot/log no AfterStep:', err);
    }
  }
});

After(async function (this: World) {
  await this.quit();
});

setDefaultTimeout(60000);