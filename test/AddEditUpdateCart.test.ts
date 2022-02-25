import { test, expect, BrowserContext,Page } from "@playwright/test";
import {LoginPage} from "../pages/login.page";
import {ProductPage} from "../pages/product.page";
import {ShoppingCartPage} from "../pages/cart.page";
import {MainMenuPage} from "../pages/mainmenu.page";
import env from "../data/environment";


test.describe("Login Tests", () => {
   
    let page: Page;
    let context : BrowserContext;
    let loginPage : LoginPage;
    let mainMenu: MainMenuPage;
    let productPage : ProductPage;
    let shoppingCart : ShoppingCartPage;

    test.beforeAll(async ({browser}) => {
       context = await browser.newContext();
       page = await context.newPage();      
       loginPage =  new LoginPage(page); 
       mainMenu = new MainMenuPage(page); 
       productPage = new ProductPage(page);
       shoppingCart = new ShoppingCartPage(page);



       await page.goto(env.URL);
       await page.waitForLoadState('domcontentloaded');
       await mainMenu.SelectMenu(mainMenu.signIn);
       await page.waitForLoadState('domcontentloaded');
       await loginPage.SignIn(env.user,env.password);
        await page.waitForLoadState('domcontentloaded');
      
 })

 test('This test adds a product to the shopping cart', async ()=> {
     await mainMenu.SelectWomenMenu();
     await productPage.clickAddToCart();
     await productPage.ClickCrossButton();
     await productPage.clickAddToCart();
     await shoppingCart.verifyProductAdded();
     await shoppingCart.updateAndVerifyQty();
     await shoppingCart.deleteAndVerifyProduct();

    });

});

