import { Before, After } from '@cucumber/cucumber';
import { World } from './World';
import { setDefaultTimeout } from '@cucumber/cucumber';

Before(async function (this: World, scenario) {
  const tags = scenario.pickle.tags.map(tag => tag.name);
  console.log('📌 Tags do cenário:', tags);
  await this.init(tags);
});

After(async function (this: World) {
  await this.quit();
});

setDefaultTimeout(60000);