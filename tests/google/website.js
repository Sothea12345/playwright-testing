import { test, expect } from '@playwright/test';

export function website(page) {
    test('Visit Website', async ({ page }) => {


        console.log('Successfully visited google.com.');
    });
}
export function getTitle(page) {
    test('Get Title', async ({ page }) => {
        await page.goto('https://www.google.com/');
        await expect(page).toHaveTitle('Google');

        console.log('The page does have the title "Google".');
    });
}

export async function getTitles(page) {
    await expect(page).toHaveTitle('Google');

    console.log('The page does have the title "Google".');
}