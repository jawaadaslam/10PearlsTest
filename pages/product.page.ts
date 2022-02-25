import {BrowserContext, Page, Browser, chromium } from "playwright";
import {LoginPage} from "./login.page";
let page:Page;
let browser:Browser;
let context: BrowserContext;
let loginPage =  new LoginPage(page);


export class ProductPage {

    private page:Page;
   // common = new CommonFunctions(page);

    constructor(page:Page) {
        this.page = page;
       
    }
//#region Locators
crossIcon = '.cross';
btnCart = '.shopping_cart > a';
addToCartProduct = "#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default"

//#endregion Locators

//#region Getter Functions.
public get getProductAddToCart(){

    const product =   this.page.waitForSelector(this.addToCartProduct);
    if (product != null) {
            return product;
       } else throw new Error("Element: Add to Cart Button of a product is not found.")
   }

public get getCrossIcon(){

    const elem =   this.page.waitForSelector(this.crossIcon);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Cross icon is not found.")
   }

  

async clickAddToCart(){
    const elem =  await this.getProductAddToCart;
    elem?.click();
}


async ClickCrossButton(){
    const cross =  await this.getCrossIcon;
    cross?.click();
}


//#endregion Helper FUnctions. 
}


