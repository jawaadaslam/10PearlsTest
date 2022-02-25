import {BrowserContext, Page, Browser, chromium } from "@playwright/test";


let page:Page;
let browser:Browser;

let context: BrowserContext;

export class MainMenuPage {
    
    private page:Page;   
    constructor(page:Page) {

        this.page = page;
        
    }
    
//#region Locators
   
   signIn = 'Sign in';
   logout = 'Sign out';
   womenMenu = '#block_top_menu >> text="Women"';

  

//#endregion Locators
/**
 * This method selects a menu
 * @param mainMenu MainMenu is the first option of dropdown
 */
    async SelectMenu(mainMenu:string) {
     
        const mainmenu = await this.page.waitForSelector(`text="${mainMenu}"`)
        await mainmenu.click();
    }

    async SelectWomenMenu(){
        const menu = await this.page.waitForSelector(this.womenMenu);
        await menu.click();
    }

    
}

