import { Before, After, Status } from '@cucumber/cucumber';
import { World } from './World';
import { setDefaultTimeout } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

Before(async function (this: World, scenario) {
  const tags = scenario.pickle.tags.map(tag => tag.name);
  console.log('📌 Tags do cenário:', tags);
  await this.init(tags);
});

After(async function (this: World, scenario) {
  let screenshot: string | undefined;

  if (scenario.result?.status === Status.FAILED && this.driver) {
    try {
      if ('takeScreenshot' in this.driver) {
        screenshot = await (this.driver as any).takeScreenshot();
      } else if ('saveScreenshot' in this.driver) {
        const buffer = await (this.driver as any).saveScreenshot();
        screenshot = buffer.toString('base64');
      }

      if (screenshot) {
        await this.attach(screenshot, 'image/png');
      }
    } catch (err) {
      console.error('Erro ao capturar screenshot:', err);
    }
  }

  await this.quit();
});

setDefaultTimeout(60000);