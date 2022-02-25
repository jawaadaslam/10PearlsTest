import {BrowserContext, Page, Browser, chromium } from "playwright";
import { CreateAccountData } from "../data/CreateAccount";
import {LoginPage} from "./login.page";
let page:Page;
let browser:Browser;
let context: BrowserContext;
let loginPage =  new LoginPage(page);


export class CreateAccount {

    private page:Page;
   // common = new CommonFunctions(page);

    constructor(page:Page) {
        this.page = page;
       
    }
//#region Locators
txtEmailAddress_Create =  '#email_create';
btnCreateAnAccount = '#SubmitCreate';
rdbMr = '#uniform-id_gender1';
rdbMrs = '#id_gender2';
txtFirstName = '#customer_firstname';
txtLastName = '#customer_lastname';
txtEmail='#email';
txtPassword ='#passwd';
txtAddressFirstName = '#firstname';
txtAddressLastName = '#lastname';
txtAddress = '#address1';
txtCity = '#city';
selState = '#id_state';
txtCountry ='#id_country' ;
txtZipCode = '#postcode';
txtMobilePhone ='#phone_mobile'; 
btnRegister ='#submitAccount';

//#endregion Locators

//#region Getter Functions.
public get getEmailAddress_CreateAccount(){

    const emailAddress =   this.page.waitForSelector(this.txtEmailAddress_Create);
    if (emailAddress != null) {
            return emailAddress;
       } else throw new Error("Element: Email Address field is not found on Create Account section of Login page.")
   }

public get getTitleMr(){

    const elem =   this.page.waitForSelector(this.rdbMr);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Title Mr field is not found on Create Account form.")
   }

   public get getTitleMrs(){

    const elem =   this.page.waitForSelector(this.rdbMrs);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Title Mrs field is not found on Create Account form.")
   }

   public get getFirstName(){
    const elem =   this.page.waitForSelector(this.txtFirstName);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: First Name is not found on Create Account form.")
   }

   public get getLastName(){
    const elem =   this.page.waitForSelector(this.txtLastName);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Last Name is not found on Create Account form.")
   }

   public get getPassword(){
    const elem =   this.page.waitForSelector(this.txtPassword);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Password filed is not found on Create Account form.")
   }

   public get getFirstName_Address(){
    const elem =   this.page.waitForSelector(this.txtAddressFirstName);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: First Name field Under Address heading is not found on Create Account form.")
   }

   public get getLastName_Address(){
    const elem =   this.page.waitForSelector(this.txtAddressLastName);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Last Name field Under Address heading is not found on Create Account form.")
   }

   public get getAddress(){
    const elem =   this.page.waitForSelector(this.txtAddress);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Address field Under Address heading is not found on Create Account form.")
   }

   public get getCity(){
    const elem =   this.page.waitForSelector(this.txtCity);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: City field Under Address heading is not found on Create Account form.")
   }

   public get getState(){
    const elem =   this.page.waitForSelector(this.selState);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: State field Under Address heading is not found on Create Account form.")
   }

   public get getZipCode(){
    const elem =   this.page.waitForSelector(this.txtZipCode);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Zip/Postal Code field Under Address heading is not found on Create Account form.")
   }

   public get getMobilePhone(){
    const elem =  this.page.waitForSelector(this.txtMobilePhone);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Mobile Phone field Under Address heading is not found on Create Account form.")
   }

   public get getRegisterButton(){
    const elem =  this.page.waitForSelector(this.btnRegister);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Register button is not found on Create Account form.")
   }

   public get getCreateAccountButton(){
    const elem =  this.page.waitForSelector(this.btnCreateAnAccount);
    if (elem != null) {
            return elem;
       } else throw new Error("Element: Create account button is not found on Create Account section of Sign In form.")
   }


//#endregion Getter Functions.

//#region Setter Functions.
async setEmailAddress_CreateAccount(emailAddress : string){
    const email =  await this.getEmailAddress_CreateAccount;
    email?.fill(emailAddress);
}

async clickCreateAnAccountButton(){
    const createAccount =  await this.getCreateAccountButton;
    createAccount?.click();
}

async checkTitleMr(){
    const elem =  await this.getTitleMr;
    elem?.click();
}
async checkTitleMrs(){
    const elem =  await this.getTitleMrs;
    elem?.click();
}

async setFirsName(firstName : string){
    const elem =  await this.getFirstName;
    elem?.fill(firstName);
}

async setLastName(lastName : string){
    const elem =  await this.getLastName;
    elem?.fill(lastName);
}
async setPassword(password : string){
    const pass =  await this.getPassword;
    pass?.fill(password);
}

async setFirsName_Address(firstName : string){
    const elem =  await this.getFirstName_Address;
    elem?.fill(firstName);
}

async setLastName_Address(lastName : string){
    const elem =  await this.getLastName_Address;
    elem?.fill(lastName);
}

async setAddress(address : string){
    const elem =  await this.getAddress;
    elem?.fill(address);
}

async setCity(city : string){
    const elem =  await this.getCity;
    elem?.fill(city);
}
async setState(state : string){
    const elem =  await this.getState;
    elem?.selectOption(state);
}

async setZipCode(zipCode : string){
    const elem =  await this.getZipCode;
    elem?.fill(zipCode);
}

async setMobilePhone(mobilePhone : string){
    const elem =  await this.getMobilePhone;
    elem?.fill(mobilePhone);
}

async clickRegisterButton(){
    const register =  await this.getRegisterButton;
    register?.click();
}

//#endregion Setter Functions. 

//#region Helper Functions. 

/**
 * This method creates a new account.
 * @param firstName First Name
 * @param lastName Last Name
 * @param password Password
 * @param address Address
 * @param city City
 * @param zipCode Zip/Postal Code
 * @param mobilePhone Mobile phone
 */
public async CreateAccount(firstName:string,lastName:string,password:string, address: string, city:string, state:string, zipCode: string, mobilePhone: string) {
      

     await this.setEmailAddress_CreateAccount(CreateAccountData.EmailAddress);
     await this.clickCreateAnAccountButton();
    //  await page.waitForLoadState('domcontentloaded');
      await this.checkTitleMr();
      await this.setFirsName(firstName);
      await this.setLastName(lastName);
      await this.setPassword(password);
      await this.setFirsName_Address(firstName);
      await this.setLastName_Address(lastName);
      await this.setAddress(address)
      await this.setCity(city);
      await this.setState(state);
      await this.setZipCode(zipCode);
      await this.setMobilePhone(mobilePhone);
      await this.clickRegisterButton();
}
//#endregion Helper FUnctions. 
}


