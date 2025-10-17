import { Builder, WebDriver } from 'selenium-webdriver';
import { setWorldConstructor, IWorldOptions, World as CucumberWorld } from '@cucumber/cucumber';
import chrome from 'selenium-webdriver/chrome';
import { remote, type Browser, type RemoteOptions } from 'webdriverio';

export class World extends CucumberWorld {
  public driver: WebDriver | Browser;
  public webDriver: WebDriver | null = null;
  public mobileDriver: Browser | null = null;
  public activeDriver: WebDriver | Browser | null = null;

  storedValues: Map<string, string> = new Map();

  constructor(options: IWorldOptions) {
    super(options);
    this.driver = null!;
  }

  async init(tags: string[]): Promise<void> {
    console.log('🔍 Tags recebidas no init:', tags);

    if (tags.includes('@mobile')) {

      console.log('📱 Iniciando driver mobile');
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

      this.mobileDriver = await remote(opts);
      this.driver = this.mobileDriver;
      this.activeDriver = this.mobileDriver;

    } else if (tags.includes('@web')) {

      console.log('💻 Iniciando driver web');
      const chromeOptions = new chrome.Options();
      // chromeOptions.addArguments('--start-maximized');
      chromeOptions.addArguments('--headless'); // executa sem abrir janela
      chromeOptions.addArguments('--no-sandbox');
      chromeOptions.addArguments('--disable-dev-shm-usage');

      // Pega a URL do Selenium server
    // Local: http://localhost:4444/wd/hub
    // Pipeline GitHub Actions: http://selenium:4444/wd/hub
    const seleniumUrl = process.env.SELENIUM_REMOTE_URL || 'http://localhost:4444/wd/hub';

      this.webDriver = await new Builder()
        .forBrowser('chrome')
        .usingServer(seleniumUrl)
        .setChromeOptions(chromeOptions)
        .build();
        
      this.driver = this.webDriver;
      this.activeDriver = this.webDriver;

    } else if (tags.includes('@hibrid')) {

      console.log('🔀 Iniciando drivers web e mobile para cenário híbrido');

      const chromeOptions = new chrome.Options();
      chromeOptions.addArguments('--start-maximized');
      this.webDriver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

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
      this.mobileDriver = await remote(opts);

      this.driver = this.webDriver;
      this.activeDriver = this.webDriver;
    }
  }

  async switchToWeb() {
    if (!this.webDriver) throw new Error('❌ WebDriver não inicializado');
    this.activeDriver = this.webDriver;
    console.log('🌐 Trocado driver para Web');
  }

  async switchToMobile() {
    if (!this.mobileDriver) throw new Error('❌ MobileDriver não inicializado');
    this.activeDriver = this.mobileDriver;
    console.log('📱 Trocado driver para Mobile');
  }

  async closeWebDriver(): Promise<void> {
    if (this.webDriver) {
      await this.webDriver.quit();
      this.webDriver = null;
      console.log('🛑 WebDriver encerrado.');
    }

    if (this.activeDriver === this.webDriver) {
      this.activeDriver = null;
      console.log('🧼 activeDriver limpo (era WebDriver).');
    }
  }

  async quit(): Promise<void> {
    if (this.webDriver) await this.webDriver.quit();
    if (this.mobileDriver) await this.mobileDriver.deleteSession();
  }
}

setWorldConstructor(World);