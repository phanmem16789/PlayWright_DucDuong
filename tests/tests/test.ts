import { test, expect, type Page } from '@playwright/test';
const HomePage = require(`../PageObject/HomePage`);

test.beforeEach(async ({ page }) => {
    await HomePage.goto('https://demo.playwright.dev/todomvc');
});

test('testcase 1', async ({ page }) => {

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
