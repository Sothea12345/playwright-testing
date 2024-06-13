import { test, expect } from '@playwright/test';

import { getTitles, website } from './website.js';

// website();
// getTitle();

test('Visit Website', async ({ page }) => {
    await page.goto('https://www.google.com/');

    await getTitles(page);
});