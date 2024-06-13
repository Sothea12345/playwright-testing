const validEmail1 = 'u1@test.com';
const validEmail2 = 'u2@test.com';
const validEmail3 = 'u3@test.com';
const validEmail4 = 'u4@test.com';
const validEmail4a = 'u4a@test.com';
const validEmail4b = 'u4b@test.com';
const invalidEmail = 'wrongEmail@gmail.com';
const validPassword = 'Test!123';
const invalidPassword = 'wrongPassword';

// fill user1 (valid) information
export async function login_info1(page) {
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').click();
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').fill(validEmail1);
    await page.waitForTimeout(1000);
    await page.getByLabel('លេខសម្ងាត់').click();
    await page.getByLabel('លេខសម្ងាត់').fill(validPassword);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill user2 (valid) information
export async function login_info2(page) {
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').click();
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').fill(validEmail2);
    await page.waitForTimeout(1000);
    await page.getByLabel('លេខសម្ងាត់').click();
    await page.getByLabel('លេខសម្ងាត់').fill(validPassword);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill user3 (valid) information
export async function login_info3(page) {
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').click();
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').fill(validEmail3);
    await page.waitForTimeout(1000);
    await page.getByLabel('លេខសម្ងាត់').click();
    await page.getByLabel('លេខសម្ងាត់').fill(validPassword);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill user4 (valid) information
export async function login_info4(page) {
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').click();
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').fill(validEmail4);
    await page.waitForTimeout(1000);
    await page.getByLabel('លេខសម្ងាត់').click();
    await page.getByLabel('លេខសម្ងាត់').fill(validPassword);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill user4 assistant a (valid) information
export async function login_info4a(page) {
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').click();
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').fill(validEmail4a);
    await page.waitForTimeout(1000);
    await page.getByLabel('លេខសម្ងាត់').click();
    await page.getByLabel('លេខសម្ងាត់').fill(validPassword);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill user4 assistant b (valid) information
export async function login_info4b(page) {
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').click();
    await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').fill(validEmail4b);
    await page.waitForTimeout(1000);
    await page.getByLabel('លេខសម្ងាត់').click();
    await page.getByLabel('លេខសម្ងាត់').fill(validPassword);
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in new dcument form (document type, cabinets)
export async function add_doc_info(page) {
    await page.locator('ng-select').filter({ hasText: 'ប្រភេទឯកសារ' }).getByRole('combobox').click();
    await page.locator('ng-select').filter({ hasText: 'ប្រភេទឯកសារ' }).getByRole('combobox').fill('សារាចរណ៍');
    await page.locator('ng-select').filter({ hasText: 'ប្រភេទឯកសារ' }).getByRole('combobox').press('Enter');
    await page.waitForTimeout(1000);

    await page.locator('ng-select').filter({ hasText: 'ថតផ្ទុកឯកសារ (Folder)' }).getByRole('combobox').click();
    await page.getByText('autotest').click();
    await page.waitForTimeout(1000);

    await page.locator('ng-select').filter({ hasText: 'ភ្ជាប់ទៅ' }).getByRole('combobox').click();
    await page.getByRole('option', { name: 'តស​' }).click();
    await page.getByRole('option', { name: 'et' }).click();
    await page.waitForTimeout(500);
    await page.locator('.col > .form-group > .custom-ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Upload file
export async function upload_file(page) {
    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing_3_page.pdf');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Upload new file (newer version)
export async function upload_new_file(page) {
    await page.getByText('កំណែក្រោយ').click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing_4_page.pdf');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill informaion in workflow form
export async function workflow_info(page) {
    await page.locator('ng-select').filter({ hasText: 'ប្រភេទលំហូរ' }).locator('div').nth(1).click();
    await page.getByRole('option', { name: 'to s4 via s2,s3' }).locator('div').click(); // pls change the workflow name to the same workflow that was being used
    await page.waitForTimeout(1000);

    await page.getByLabel('ចុះលេខ').click();
    await page.getByPlaceholder('ចុះលេខ').fill('12345');
    await page.waitForTimeout(1000);

    await page.locator('ng-select').filter({ hasText: 'ឯកសារភ្ជាប់' }).getByRole('combobox').click();
    await page.getByRole('option', { name: 'Testing_3_page.pdf' }).first().click(); // pls change the file name to the same file that was being uploaded
    await page.waitForTimeout(1000);

    await page.getByText('ឯកសារប្រញាប់').click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in request form (document type, cabinets)
export async function request_info(page) {
    await page.getByRole('listbox').locator('div').first().click();
    await page.getByRole('combobox').click();
    await page.getByText('បុគ្គលិក 2').click();
    await page.waitForTimeout(1000);

    await page.getByLabel('ផ្ដល់មតិយោបល់ *').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').type('mentioning test staff 1 @បុគ្គលិក 1');
    await page.getByText('បុគ្គលិក 1staff').click();
    await page.waitForTimeout(1000);

    await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច').click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.pptx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in request form (annotation page)
export async function annotation_request_info(page) {
    await page.getByRole('textbox', { name: 'Username*' }).click();
    await page.getByRole('button', { name: 'narundet2 srong2' }).click();
    await page.waitForTimeout(1000);

    await page.locator('div').filter({ hasText: /^comment\*$/ }).locator('div span').click();
    await page.locator('div').filter({ hasText: /^comment\*$/ }).locator('div span').type('mentioning staff 1 @បុគ្គលិក');
    await page.locator('div').filter({ hasText: /^បុគ្គលិក 1staff 1$/ }).first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'សូមមេត្តាពិនិត្យ និងសម្រេច' }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.pptx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the concluded/reject/return form (final step of the document workflow)
export async function final_step_info(page) {
    const headed = await page.$eval('nb-card-header', element => element.textContent.trim());

    if (headed === 'ឯកភាព') {
        await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').fill('approve ');
        await page.locator('#mat-hint-0').getByText('ឯកភាព').click();
        await page.waitForTimeout(1000);
    } else if (headed === 'បញ្ចូនត្រលប់') {
        await page.getByRole('listbox').locator('div').first().click();
        await page.getByRole('combobox').click();
        await page.getByRole('option', { name: 'លោក អ្នក1' }).locator('div').click();
        await page.waitForTimeout(1000);

        await page.getByLabel('មូលហេតុ').click();
        await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').fill('please check again ');
        await page.waitForTimeout(1000);

        await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច', { exact: true }).click();
        await page.waitForTimeout(1000);
    } else {
        await page.getByLabel('មូលហេតុ *').click();
        await page.getByPlaceholder('Ex. សូមឯកឧត្តមអគ្គនាយក មេត្តាពិនិត្យនិងសម្រេច។').fill('this is not right ');
        await page.waitForTimeout(1000);

        await page.locator('#mat-hint-0').getByText('សូមពិនិត្យឡើងវិញ').click();
        await page.waitForTimeout(1000);
    }

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/images copy.jpeg');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// press ESC key
export async function press_esc(page) {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// update the old document and resubmit
export async function back_to_info(page) {
    await page.getByRole('listbox').locator('div').first().click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'narundet3 srong3' }).locator('div').click();
    await page.waitForTimeout(1000);

    await page.getByLabel('មូលហេតុ').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').fill('please review again ');
    await page.waitForTimeout(1000);

    await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច', { exact: true }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.pptx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in old dcument form and send back
export async function back_to_final_info(page) {
    await page.getByLabel('មូលហេតុ').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').fill('please review again ');
    await page.waitForTimeout(1000);

    await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច', { exact: true }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.pptx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the feedback form (from document page)
export async function feedback_info(page) {
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'narundet3 srong3' }).click()
    await page.waitForTimeout(1000);

    await page.getByLabel('ផ្ដល់មតិយោបល់').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').fill('forwarding to narundet3 srong3 ');
    await page.waitForTimeout(1000);

    await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច', { exact: true }).click();
    await page.waitForTimeout(1000);

    // await page.locator('div').filter({ hasText: /^បុគ្គលិក 1$/ }).getByRole('button').click();
    await page.locator('form rect').click();
    // await page.locator('#cmtModal div').filter({ hasText: 'Username*Type @ to mention' }).getByRole('button').nth(4).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'បាទ/ចាស' }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Transcript_Test.pdf');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the feedback form (from document page)
export async function feedback_info_u4(page) {
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'narundet4 srong4' }).click()
    await page.waitForTimeout(1000);

    await page.getByLabel('ផ្ដល់មតិយោបល់').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').type('forwarding to final boss @staff');
    await page.getByText('បុគ្គលិក 3staff').click();
    await page.waitForTimeout(1000);

    await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច', { exact: true }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.png');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the feedback form (from document page)
export async function resubmit_info_u4(page) {
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'narundet4 srong4' }).click()
    await page.waitForTimeout(1000);

    await page.getByLabel('ផ្ដល់មតិយោបល់').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').fill('forwarding to final boss ');
    await page.waitForTimeout(1000);

    await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច', { exact: true }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.png');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the feedback form (from annotation page)
export async function annotation_feedback_info(page) {
    await page.getByPlaceholder(' ', { exact: true }).click();
    await page.getByRole('button', { name: 'narundet4 srong4' }).click();
    await page.waitForTimeout(1000);

    await page.locator('div').filter({ hasText: /^Type @ to mention members\*$/ }).locator('div span').click();
    await page.locator('div').filter({ hasText: /^Type @ to mention members\*$/ }).locator('div span').fill('forwarding to final boss ');
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'សូមមេត្តាពិនិត្យ និងសម្រេច' }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.png');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// share the document (from document page)
export async function share_doc_info(page) {
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').type('@u4a');
    await page.getByText('narundet4a srong4anarundet4a').click();
    await page.waitForTimeout(1000);

    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').type('@u4b');
    await page.getByText('narundet4b srong4bnarundet4b').click();
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the return form (from annotation page)
export async function annotation_return_info(page) {
    await page.getByLabel('Return to*').click();
    await page.getByRole('button', { name: 'លោក អ្នក' }).click();
    await page.waitForTimeout(1000);

    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').click();
    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').type('user 1 please send me another version @បុគ្គលិក');
    await page.locator('div').filter({ hasText: /^បុគ្គលិក 2staff 2$/ }).first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'សូមពិនិត្យឡើងវិញ' }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/National_ID_Test.pdf');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the back to form (from annotation page)
export async function annotation_back_to_info(page) {
    await page.getByRole('textbox', { name: 'Username*' }).click();
    await page.getByRole('button', { name: 'narundet3 srong3' }).click();
    await page.waitForTimeout(1000);

    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').click();
    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').fill('This is the newer version file ');
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'សូមមេត្តាពិនិត្យ និងសម្រេច' }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.docx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the back to form (from annotation page)
export async function annotation_back_to_info_u4(page) {
    await page.getByRole('textbox', { name: 'Username*' }).click();
    await page.getByRole('button', { name: 'narundet4 srong4' }).click();
    await page.waitForTimeout(1000);

    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').click();
    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').type('This is the newer version file @staff ');
    await page.locator('div').filter({ hasText: /^បុគ្គលិក 3$/ }).getByRole('button').click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'សូមមេត្តាពិនិត្យ និងសម្រេច' }).click();
    await page.waitForTimeout(1000);


    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.docx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the concluded form (from annotation page)
export async function annotation_concluded_info(page) {
    await page.locator('div').filter({ hasText: /^comment\*$/ }).locator('div span').click();
    await page.locator('div').filter({ hasText: /^comment\*$/ }).locator('div span').fill('ok looks good, I like it. ');
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'ឯកភាព' }).nth(2).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.xlsx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// fill in the concluded form (from annotation page)
export async function annotation_reject_info(page) {
    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').click();
    await page.locator('div').filter({ hasText: /^Reason\*$/ }).locator('div span').fill('this is wrong, rejected ');
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'សូមពិនិត្យឡើងវិញ' }).click();
    await page.waitForTimeout(1000);

    const fileInput = await page.$('input[type="file"]');
    await fileInput.setInputFiles('/Users/prumsethouday/Desktop/A_Testing/Testing.xlsx');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

export async function delete_workflow_info(page) {
    await page.getByPlaceholder('មូលហេតុដែលលុបលំហូរ').click();
    await page.getByPlaceholder('មូលហេតុដែលលុបលំហូរ').fill('wrong flow');
    await page.waitForTimeout(1000);
}