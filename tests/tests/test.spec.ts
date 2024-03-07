import { test, expect, type Page } from '@playwright/test';
const HomePage = require(`../PageObject/HomePage`);

let homePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.launchBrowser(page);
});

test('testcase 1', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(homePage.getTitle()).toBeTruthy();
});