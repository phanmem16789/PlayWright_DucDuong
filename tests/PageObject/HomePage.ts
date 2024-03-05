import { Locator, Page } from "@playwright/test";

const GeneralPage = require('./GeneralPage');

class HomePage extends GeneralPage{
    welcomeLbl: Locator

    constructor(page: Page){
        super();
        this.welcomeLbl=page.locator(`xpath=//h1[.='Welcome to QA Railway']`);
    }

    
}

module.exports = HomePage;