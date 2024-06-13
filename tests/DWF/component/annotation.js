// annotation u1 to u2 (request)
export async function annotation_doc_info_request(page) {
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 26,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 587,
            y: 25
        }
    });
    await page.locator('button:nth-child(16)').click();
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 253,
            y: 102
        }
    });
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 356,
            y: 107
        }
    });
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 265,
            y: 303
        }
    });
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 350,
            y: 397
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 444,
            y: 102
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 444,
            y: 241
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 444,
            y: 373
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Signature' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 484,
            y: 648
        }
    });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Stamp' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 151,
            y: 668
        }
    });
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// annotattion u3 to u1 (return)
export async function annotation_doc_info_return(page) {
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 587,
            y: 25
        }
    });
    await page.locator('button:nth-child(18)').click();
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 260,
            y: 177
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 348,
            y: 253
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 271,
            y: 320
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 338,
            y: 387
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 587,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Signature' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 484,
            y: 648
        }
    });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Stamp' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 151,
            y: 668
        }
    });
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// annotation u1 to u3 (resubmit)
export async function annotation_doc_info_resubmit(page) {
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 26,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 587,
            y: 25
        }
    });
    await page.locator('button:nth-child(16)').click();
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 253,
            y: 102
        }
    });
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 356,
            y: 107
        }
    });
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 265,
            y: 303
        }
    });
    await page.getByRole('button', { name: 'Circle' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 350,
            y: 397
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 444,
            y: 102
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 444,
            y: 241
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 444,
            y: 373
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('.upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 587,
            y: 25
        }
    });
    await page.locator('button:nth-child(18)').click();
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 260,
            y: 177
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 348,
            y: 253
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 271,
            y: 320
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').click({
        position: {
            x: 338,
            y: 387
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(2) > .upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 587,
            y: 25
        }
    });
    await page.locator('button:nth-child(19)').click();
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 378,
            y: 89
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 376,
            y: 133
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 374,
            y: 175
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 371,
            y: 220
        }
    });
    await page.getByRole('button', { name: 'Check' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').click({
        position: {
            x: 371,
            y: 268
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(3) > .upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
}
// ===============================================================================================================================================

// annotation u3 (approved)
export async function annotation_doc_info_approved(page) {
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.locator('#header div').filter({ hasText: 'Testing_3_page.pdf50%75%100%' }).getByRole('button').first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(4) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(4) > .upper-canvas').first().click({
        position: {
            x: 587,
            y: 25
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(4) > .upper-canvas').first().click({
        position: {
            x: 26,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Cross' }).click();
    await page.locator('div:nth-child(4) > .upper-canvas').first().click({
        position: {
            x: 588,
            y: 766
        }
    });
    await page.getByRole('button', { name: 'Signature' }).click();
    await page.locator('div:nth-child(4) > .upper-canvas').click({
        position: {
            x: 484,
            y: 648
        }
    });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Stamp' }).click();
    await page.locator('div:nth-child(4) > .upper-canvas').click({
        position: {
            x: 151,
            y: 668
        }
    });
    await page.waitForTimeout(1000);
    
}
// ===============================================================================================================================================
