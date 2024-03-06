import { test, expect, type Page } from '@playwright/test';
const HomePage = require(`../PageObject/HomePage`);

let homePage = new HomePage();

test.beforeEach(async ({ page }) => {
    await homePage.launchBrowser();
});

test('testcase 1', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(homePage.getTitle).toBeTruthy();
});

