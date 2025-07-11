import { Before, After, AfterStep, Status } from '@cucumber/cucumber';
import { World } from './World';
import { setDefaultTimeout } from '@cucumber/cucumber';
 
Before(async function (this: World, scenario) {
  const tags = scenario.pickle.tags.map(tag => tag.name);
  console.log('📌 Tags do cenário:', tags);
  await this.init(tags);
});
 
AfterStep(async function (this: World) {
  if (this.driver && 'takeScreenshot' in this.driver) {
    try {
      const screenshot = await (this.driver as any).takeScreenshot();
      await this.attach(Buffer.from(screenshot, 'base64'), 'image/png');
    } catch (err) {
      console.error('Erro ao capturar screenshot no AfterStep:', err);
    }
  }
});
 
After(async function (this: World, scenario) {
  await this.quit();
});
 
setDefaultTimeout(60000);