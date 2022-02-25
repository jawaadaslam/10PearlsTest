import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: 'test',
    timeout: 120000,
    reporter: [["line"],['allure-playwright']],
    use: {
        headless: false,
        browserName: 'chromium',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        contextOptions: {
            viewport: null,
            acceptDownloads: true
          },
        launchOptions: {
            args:["--start-maximized"],
            slowMo: 100
        }
    }
}
export default config;