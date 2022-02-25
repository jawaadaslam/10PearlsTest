import { test, expect, BrowserContext,Page } from "@playwright/test";
import {LoginPage} from "../pages/login.page";
import {MainMenuPage} from "../pages/mainmenu.page";
import env from "../data/environment";
import {LoginData} from "../data/LoginData";

test.describe("Login Tests", () => {
   
    let page: Page;
    let context : BrowserContext;
    let loginPage : LoginPage;
    let mainMenu: MainMenuPage;

    test.beforeAll(async ({browser}) => {
       context = await browser.newContext();
       page = await context.newPage();      
       loginPage =  new LoginPage(page); 
       mainMenu = new MainMenuPage(page); 
      
 })

 test('This test logins3 different users to automation practice application successfully', async ()=> {;
       await page.goto(env.URL);
       await page.waitForLoadState('domcontentloaded');
       await mainMenu.SelectMenu(mainMenu.signIn);
       await page.waitForLoadState('domcontentloaded');
       for (let index = 0; index < env.userNames.length; index++) {
              await loginPage.SignIn(env.userNames[index],env.passwords[index]);
              await page.waitForLoadState('domcontentloaded');
              const loginName =  await loginPage.getInnerText(loginPage.loginName);
              expect(loginName).toBe(LoginData.Verifications.LoginNames[index]);
              await mainMenu.SelectMenu(mainMenu.logout);
              await page.waitForLoadState('domcontentloaded');
       }
   });

    test('This test logins automation practice application successfully', async ()=> {;
        await page.goto(env.URL);
        await page.waitForLoadState('domcontentloaded');
        await mainMenu.SelectMenu(mainMenu.signIn);
        await page.waitForLoadState('domcontentloaded');
        await loginPage.SignIn(env.user,env.password);
        await page.waitForLoadState('domcontentloaded');
        const loginName =  await loginPage.getInnerText(loginPage.loginName);
        expect(loginName).toBe(LoginData.Verifications.LoginName);
        await mainMenu.SelectMenu(mainMenu.logout);

    });

    test('This test verifies the failed login', async ()=> {;
       
       await page.goto(env.URL);
       await page.waitForLoadState('domcontentloaded');
       await mainMenu.SelectMenu(mainMenu.signIn);
       await page.waitForLoadState('domcontentloaded');
       await loginPage.SignIn(env.failedUser,env.failedPassword);
       await page.waitForLoadState('domcontentloaded');
       const toastMessage =  await loginPage.getInnerText(loginPage.toastMessage);
       expect(toastMessage).toContain(LoginData.Verifications.FailedAuth);

  });

});

