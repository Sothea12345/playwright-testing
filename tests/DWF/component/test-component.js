import { feedback_button } from "./button";


export async function submit_testing(page) {
    await feedback_button(page);                    // click the feedback button
    // await check_feedback_title(page);               // check the feedback title
    await feedback_info(page);                      // fill in the feedback information
    // await submit_button(page);                      // click the submit button
    // await check_feedback_message(page);             // check the feedback message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// fill in the feedback form (from document page)
export async function feedback_info(page) {
    // await page.getByRole('combobox').click();
    // await page.getByRole('option', { name: 'narundet3 srong3' }).click()
    // await page.waitForTimeout(1000);

    // await page.getByLabel('ផ្ដល់មតិយោបល់').click();
    await page.getByPlaceholder('វាយបញ្ចូល @ ដើម្បីលើកឡើងសមាជិកមុខការ').type('@បុគ្គលិក');
    await page.getByText('បុគ្គលិក 1staff').click();
    await page.waitForTimeout(1000);

    // await page.getByText('សូមមេត្តាពិនិត្យ និងសម្រេច', { exact: true }).click();
    // await page.waitForTimeout(1000);
}
// ===============================================================================================================================================
