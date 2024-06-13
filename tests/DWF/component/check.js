import { expect } from '@playwright/test';

// Check for success message (when document is successfully uploaded)
export async function check_success_message(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'បានជោគជ័យ' })
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('បានជោគជ័យ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title of the flow form
export async function check_workflow_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'ចាប់ផ្ដើមលំហូរឯកសារ' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('ចាប់ផ្ដើមលំហូរឯកសារ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title of the request form
export async function check_request_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'ដាក់ស្នើ' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('ដាក់ស្នើ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check for success message (when document is successfully requested)
export async function check_requested_message(page) {
    const successMessageLocator = page.getByText('បញ្ចូលលំហូរឯកសារបានជោគជ័យ')
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('បញ្ចូលលំហូរឯកសារបានជោគជ័យ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title of the back to form
export async function check_back_to_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'ត្រលប់ទៅវិញ' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('ត្រលប់ទៅវិញ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check for success message (when document is successfully requested again)
export async function check_back_to_message(page) {
    const successMessageLocator = page.getByText('ការបញ្ចូនត្រលប់ លំហូរឯកសារបានជោគជ័យ')
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('ការបញ្ចូនត្រលប់ លំហូរឯកសារបានជោគជ័យ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title for the concluded form (final step of the document workflow)
export async function check_concluded_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'ឯកភាព' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('ឯកភាព');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title for the reject form (final step of the document workflow)
export async function check_reject_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'មិនឯកភាព' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('មិនឯកភាព');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title for the return form (final step of the document workflow)
export async function check_return_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'បញ្ចូនត្រលប់' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('បញ្ចូនត្រលប់');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check for success message (when document is successfully concluded)
export async function check_concluded_message(page) {
    const successMessageLocator = page.getByText('បញ្ចូលលំហូរឯកសារបានជោគជ័យ')
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('បញ្ចូលលំហូរឯកសារបានជោគជ័យ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check for success message (when document is successfully reject)
export async function check_reject_message(page) {
    const successMessageLocator = page.getByText('បានបដិសេដ លំហូរឯកសារបានជោគជ័យ')
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('បានបដិសេដ លំហូរឯកសារបានជោគជ័យ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check for success message (when document is successfully return)
export async function check_return_message(page) {
    const successMessageLocator = page.getByText('ការបញ្ចូនត្រលប់ លំហូរឯកសារបានជោគជ័យ')
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('ការបញ្ចូនត្រលប់ លំហូរឯកសារបានជោគជ័យ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title for the edit form (after the document has been returned for a recheck)
export async function check_edit_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'កែប្រែ' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('កែប្រែ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title for the feedback form (after the document has been returned for a recheck) (from document form)
export async function check_feedback_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'ផ្ដល់យោបល់' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('ផ្ដល់យោបល់');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check title for the feedback form (after the document has been returned for a recheck) (from annotation form)
export async function check_annotation_feedback_title(page) {
    const successMessageLocator = page.getByRole('heading', { name: 'Feedback' }).locator('span');
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('Feedback');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================

// Check for success message (when document is successfully feedbacked)
export async function check_feedback_message(page) {
    const successMessageLocator = page.getByText('បញ្ចូលលំហូរឯកសារបានជោគជ័យ')
    await successMessageLocator.waitFor({ state: 'visible' });
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toContain('បញ្ចូលលំហូរឯកសារបានជោគជ័យ');
    await page.waitForTimeout(1000);
}
// ===============================================================================================================================================