import { expect } from "@playwright/test";

// link to the MTPC DWF website
export async function link_to_website(page) {
    await page.goto('https://test.dwf.mptc.gov.kh/');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================
