import { test, expect, BrowserContext,Page } from "@playwright/test";
import {LoginPage} from "../pages/login.page";
import {CreateAccount} from "../pages/createaccount.page";
import {MainMenuPage} from "../pages/mainmenu.page";
import env from "../data/environment";
import {LoginData} from "../data/LoginData";
import {CreateAccountData} from "../data/CreateAccount";

test.describe("Login Tests", () => {
   
    let page: Page;
    let context : BrowserContext;
    let loginPage : LoginPage;
    let mainMenu: MainMenuPage;
    let createAccount : CreateAccount;

    test.beforeAll(async ({browser}) => {
       context = await browser.newContext();
       page = await context.newPage();      
       loginPage =  new LoginPage(page); 
       mainMenu = new MainMenuPage(page); 
       createAccount = new CreateAccount(page);

       await page.goto(env.URL);
       await page.waitForLoadState('domcontentloaded');
       await mainMenu.SelectMenu(mainMenu.signIn);
       await page.waitForLoadState('domcontentloaded');
      
 })

 test('This test creates a new user account', async ()=> {
     
    await createAccount.CreateAccount(CreateAccountData.FirstName,CreateAccountData.LastName,CreateAccountData.Password,CreateAccountData.Address,CreateAccountData.City,CreateAccountData.State, CreateAccountData.ZipCode,CreateAccountData.MobilePhone);
    await page.waitForLoadState('domcontentloaded');
    const loginName =  await loginPage.getInnerText(loginPage.loginName);
    expect(loginName).toBe(CreateAccountData.LoginName);
    
    });

});

