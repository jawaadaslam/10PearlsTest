import {BrowserContext, Page, Browser, chromium ,expect} from "@playwright/test";
import { CreateAccountData } from "../data/CreateAccount";
import {LoginPage} from "./login.page";
let page:Page;
let browser:Browser;
let context: BrowserContext;
let loginPage =  new LoginPage(page);


export class ShoppingCartPage {

    private page:Page;

    constructor(page:Page) {
        this.page = page;
       
    }
//#region Locators
shoppingCartTable = '#cart_summary';
verifyText =   'Faded Short Sleeve T-shirts';
gridQuantity = '#cart_summary >> .cart_quantity text-center >> input[type="text"]';
gridDelete = '#cart_summary >> .*cart_delete > a';
//#endregion Locators

//#region Getter Functions.

public get getShoppingCart(){

    const cart =   this.page.waitForSelector(this.shoppingCartTable);
    if (cart != null) {
            return cart;
       } else throw new Error("Element:Shopping cart table is not found.")
   }

async verifyProductAdded(){
    const elem =  await this.page.waitForSelector(this.shoppingCartTable);
    const content = elem.textContent();
    expect(content).toContain(this.verifyText);
    
    
}
async updateAndVerifyQty(){
    const elem = await this.page.waitForSelector(this.gridQuantity)
    elem?.fill("3");
    const value = elem.getProperty('value').then((jsHandle) => jsHandle.jsonValue());
    expect(value).toBe('3');

}

async deleteAndVerifyProduct(){
    const elem = await this.page.waitForSelector(this.gridDelete)
    elem?.click();
    expect(this.getShoppingCart).toHaveCount(0);

}


//#endregion Helper FUnctions. 
}


