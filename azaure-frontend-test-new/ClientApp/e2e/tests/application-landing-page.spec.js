// @ts-check
import { test, expect } from '@playwright/test';

const applicationName = "Love's Sample Angular UI";

test.describe(`${applicationName} landing page `, () => {

    test.beforeEach(async ({page}) => {
        await page.goto('');
    });

    test(`has ${applicationName} title`, async ({page}) => {
        await expect(page).toHaveTitle(applicationName);
    });
});