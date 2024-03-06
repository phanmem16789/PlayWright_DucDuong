/**
 * @param {import('@playwright/test').Page} page
 */

import { Locator, Page } from "@playwright/test"

class GeneralPage{
    logo: Locator;
    page: Page;
    constructor(page: Page){
        this.page = page;
        this.logo = page.locator(`xpath=//img[@alt='The banner should be here']`);
    }
    
    async launchBrowser(){
        await this.page.goto(`http://railwaysg1.somee.com/Page/HomePage.cshtml`);
    }

    async getTitle(){
         return this.page.title;
    }
}

module.exports = GeneralPage;