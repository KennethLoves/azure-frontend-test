// @ts-check
import { chromium } from '@playwright/test';


export default async config => {
    const { storageState } = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    console.log('Setup start');
    await page.context().storageState({path: storageState});
}

