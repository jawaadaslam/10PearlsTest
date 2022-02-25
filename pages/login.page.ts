import {BrowserContext, Page, Browser, chromium } from "@playwright/test";
import env from "../data/environment";
let page:Page;
let browser:Browser;
let context: BrowserContext;


export class LoginPage {

    private page:Page;


    constructor(page:Page) {
        this.page = page;
    }
//#region Locators

txtSignInEmailAddress = '#email';
txtPassword = '#passwd';
btnSignIn = "#SubmitLogin";
menuSignIn = '.login';
loginName = '.account';
toastMessage = '#center_column > div.alert.alert-danger'



//#endregion Locators

//#region Getter Functions.


    public get getEmailAddress_Login(){
        const emailAddress =   this.page.waitForSelector(this.txtSignInEmailAddress);
        if (emailAddress != null) {
           return emailAddress;
       } else throw new Error("Element: Email Address is not found on Sign in section of Login page.")
        
    }

    public get getPassword_Login(){
        const password =   this.page.waitForSelector(this.txtPassword);
        if (password != null) {
           return password;
       } else throw new Error("Element: Password is not found on Sign in section of Login page.")
    }

    public get getSignInButton(){
        const signIn =   this.page.waitForSelector(this.btnSignIn);
        if (signIn != null) {
           return signIn;
       } else throw new Error("Element: Sign In Button is not found on Sign in section of Login page.")
    }

    async getInnerText(locator:string){
       const elem =  await this.page.waitForSelector(locator);
       return (await elem.innerText()).trim();
    }



//#endregion Getter Functions.

//#region Setter Functions.

async setEmailAddress_SignIn(emailAddress : string){
    const email =  await this.getEmailAddress_Login;
    email?.fill(emailAddress);
}
async setPassword(password : string){
    const pass =  await this.getPassword_Login;
    pass?.fill(password);
}

async clickSignInButton(){
    const signIn =  await this.getSignInButton;
    signIn?.click();
}



//#endregion Setter Functions. 

//#region Helper Functions. 



public async SignIn(emailAddress:string , password: string){
    await this.setEmailAddress_SignIn(emailAddress);
    await this.setPassword(password);
    await this.clickSignInButton();
    } 
//#endregion Helper FUnctions. 
}

