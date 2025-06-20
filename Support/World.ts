import { Builder, WebDriver } from 'selenium-webdriver';
import { setWorldConstructor, IWorldOptions, World as CucumberWorld } from '@cucumber/cucumber';
import chrome from 'selenium-webdriver/chrome';
import { remote, type Browser, type RemoteOptions } from 'webdriverio';

export class World extends CucumberWorld {
  public driver: WebDriver | Browser;
  isMobile: any;

  constructor(options: IWorldOptions) {
    super(options);
    this.driver = null!;
  }

  async init(tags: string[]): Promise<void> {
    console.log('🔍 Tags recebidas no init:', tags);

    if (tags.includes('@mobile')) {
      const opts: RemoteOptions = {
        path: '/wd/hub',
        port: 4723,
        capabilities: {
          platformName: 'Android' as const,
          deviceName: 'emulator-5554',
          automationName: 'UiAutomator2' as const,
          appPackage: 'br.com.fintech.novo.buni.stg.digital',
          appActivity: '.MainActivity',
          noReset: false
        } as any
      };

      this.driver = await remote(opts);
    } else {
      console.log('💻 Iniciando driver web');
      const chromeOptions = new chrome.Options();
      chromeOptions.addArguments('--start-maximized');
      this.driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    }
  }

  async quit(): Promise<void> {
    if (!this.driver) return;

    if ('deleteSession' in this.driver) {
      await (this.driver as Browser).deleteSession();
    } else {
      await (this.driver as WebDriver).quit();
    }
  }
}

setWorldConstructor(World);