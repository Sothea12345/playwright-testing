import { expect } from '@playwright/test';

// redirect to dashboard function
export async function login_button(page) {
    if (page.url().includes('login')) {
        const originalUrl = page.url().replace('login', '');
        const expectedUrl = originalUrl + 'dashboard';

        await page.getByRole('button', { name: 'ចូល' }).click();
        await page.waitForNavigation();
        expect(page.url()).toBe(expectedUrl);
        await page.waitForTimeout(1000);
    } else {
        const originalUrl = page.url();
        const expectedUrl = originalUrl + 'dashboard';

        await page.getByRole('button', { name: 'ចូល' }).click();
        await page.waitForNavigation();
        expect(page.url()).toBe(expectedUrl);
        await page.waitForTimeout(1000);
    }
}
// ===============================================================================================================================================

// redirect to cabinets function
export async function cabinet_button(page) {
    const originalUrl = page.url().replace('dashboard', '');
    const expectedUrl_cabinets = originalUrl + 'cabinets';

    await page.getByRole('link', { name: 'គ្រប់គ្រងឯកសារ' }).click();
    await page.waitForNavigation();
    expect(page.url()).toBe(expectedUrl_cabinets);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// redirect to new document function
export async function add_new_document_button(page) {
    const originalUrl = page.url();
    const expectedUrl_newdoc = originalUrl + '/new-document';

    await page.getByRole('button', { name: 'បញ្ចូលឯកសារថ្មី' }).click();
    // expect(page.url()).toBe(expectedUrl_newdoc);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// redirect to workflow pending function
export async function workflow_pending_menu(page) {
    const originalUrl = page.url().replace('dashboard', '');
    const expectedUrl_workflow = originalUrl + 'workflows/pending';

    await page.getByRole('link', { name: 'រង់ចាំ icon' }).click();
    await page.waitForNavigation();
    expect(page.url()).toBe(expectedUrl_workflow);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// document management button function
export async function fm_to_cabinets(page) {
    await page.getByRole('button', { name: 'ទៅទំព័រគ្រប់គ្រងឯកសារ' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// view document button function (from success message)
export async function fm_view_document(page) {
    await page.getByRole('button', { name: 'ទៅឯកសារលម្អិត' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// view file on another tab
// view file on the same tab
export async function view_document(page) {
    // await page.click('button.view-custom');
    // or
    // await page.locator('#presentationMode').click();
    await page.click('#presentationMode');

    // const view_document = page.locator('nb-card-body').filter({ hasText: 'ឯកសារ លំហូរឯកសារពាក់ព័ន្ធ' }).locator('circle')
    // await view_document.click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// view document in detail button function (from success message)
export async function fm_view_document_indetail(page) {
    await page.getByRole('button', { name: 'ទៅលំហូរឯកសារលម្អិត' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// cabinet folder button function
export async function open_folder(page) {
    await page.getByRole('button', { name: 'autotest' }).click();
    // await page.getByRole('button', { name: ' autotest' }).click();
    await page.waitForTimeout(2000);
}
// ===============================================================================================================================================

// Assuming the file is in the first row of a table, you can use a selector to locate it
export async function select_first_file(page) {
    const fileSelector = 'tr.ng-star-inserted:first-child td.align-middle.w-50';

    await page.click(fileSelector);
    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// select the pendding file to approve
export async function select_pendding_file(page) {
    await page.getByRole('cell', { name: 'Testing_4_page.pdf' }).first().click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// select new updated pendding file to approve
export async function select_updated_pendding_file(page) {
    await page.getByRole('cell', { name: 'Testing_4_page.pdf' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// save button function
export async function save_button(page) {
    await page.getByRole('button', { name: 'រក្សាទុក' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// flow button function
export async function workflow_button(page) {
    await page.getByRole('button', { name: 'លំហូរឯកសារ' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

export async function add_new_workflow_button(page) {
    getByRole('button', { name: ' ចាប់ផ្ដើមលំហូរឯកសារ' })
    await page.waitForTimeout(1000);
}

// flow button function
export async function workflow_pendding_button(page) {
    await page.getByRole('button', { name: 'លំហូរឯកសារ កំពុងដំណើរការ' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

export async function delete_workflow_button(page) {
    await page.locator('#dropdown2').click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: ' លុបការកំណត់ចំណាំ' }).click();
    await page.waitForTimeout(1000);
}

// មើលលម្អិត button function
export async function eyes_button(page) {
    await page.click('button[class="btn-view"], [nbpopover="មើលលម្អិត"]');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// request button function
export async function request_button(page) {
    await page.getByRole('button', { name: 'ដាក់ស្នើ' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// submit button function (Khmer)
export async function submit_button(page) {
    await page.getByRole('button', { name: 'បញ្ចូន', exact: true }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// submit button function (English)
export async function submit_button2(page) {
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// concluded button function (final step of the document workflow)
export async function concluded_button(page) {
    await page.getByRole('button', { name: 'ឯកភាព', exact: true }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// reject button function (final step of the document workflow)
export async function reject_button(page) {
    await page.getByRole('button', { name: 'មិនឯកភាព' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// return button function (final step of the document workflow)
export async function return_button(page) {
    await page.getByRole('button', { name: 'បញ្ចូនត្រលប់' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// bact to button function
export async function back_to_button(page) {
    await page.getByRole('button', { name: 'ត្រលប់ទៅវិញ' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// delete button function
export async function delete_button(page) {
    const checkpoint = await page.getByRole('button', { name: 'លំហូរឯកសារ កំពុងដំណើរការ' });
    const deletepoint = await page.getByRole('button', { name: 'លំហូរឯកសារ កំពុងដំណើរការ' });

    await page.getByRole('button', { name: 'លុប' }).click();
    await page.waitForTimeout(1000);

    const errorMessageLocator = page.getByRole('heading', { name: 'តើ​អ្នក​ប្រាកដ​ឬ​អត់?' }).locator('span');
    await errorMessageLocator.waitFor({ state: 'visible' });

    await page.getByRole('button', { name: 'បាទ/ចាស' }).click();

    if (deletepoint === checkpoint) {
        const confirmationMessageLocator = page.getByText('ការបញ្ជាក់').locator('span');
        await confirmationMessageLocator.waitFor({ state: 'visible' });

        const confirmationMessageText = await confirmationMessageLocator.innerText();
        expect(confirmationMessageText).toContain('ការបញ្ជាក់');
    } else {
        await page.click('button[aria-label="Confirm Delete"]');
    }
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// edit button function
export async function edit_button(page) {
    await page.getByRole('button', { name: 'កែប្រែ' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// feedback button function (from document page)
export async function feedback_button(page) {
    await page.getByRole('button', { name: 'ផ្ដល់យោបល់' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// feedback button function (from annotation page)
export async function annotation_feedback_button(page) {
    await page.getByRole('button', { name: 'មតិយោបល់' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// annotation doc button function (annotate the document)
export async function annotation_doc_button(page) {
    await page.waitForTimeout(5000);
    await page.locator('nb-button').first().click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// scroll down to the bottom of the page (annotate the document)
export async function annotation_doc_scroll(page) {
    await page.locator('#btnScroll').click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// add button function (add names to share the document)
export async function add_button(page) {
    await page.getByRole('button', { name: ' បន្ថែម' }).click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// reload page function
export async function reload_button(page) {
    await page.reload();
    await page.waitForTimeout(2000);
}
// ===============================================================================================================================================

// cross that close the message model
export async function cross(page) {
    await page.locator('#cdk-overlay-0 path').click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// cross that close the message model
export async function cross1(page) {
    await page.locator('#cdk-overlay-1 path').click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// navigate to active workflow (on home page)
export async function active_doc(page) {
    // const firstInboxItem = await page.$('ul.inbox-list > li:nth-child(1)');
    await page.waitForTimeout(2000);
    const firstInboxItem = await page.$('ul.inbox-list > li:first-child');

    await firstInboxItem.click();
    await page.waitForTimeout(2000);
}
// ===============================================================================================================================================

// select file in document management page (with out entering the folder)
export async function select_img_doc(page) {
    await page.locator('.card-img-top').first().click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================
