// login to user 1 (user1@test.com)
export async function logout_user1(page) {
    await page.getByRole('button', { name: 'លោក អ្នក' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ចេញពីប្រព័ន្ធ' }).click();
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// login to user 2 (user2@test.com)
export async function logout_user2(page) {
    await page.getByRole('button', { name: 'narundet2 srong2' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ចេញពីប្រព័ន្ធ' }).click();
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 3 (user3@test.com)
export async function logout_user3(page) {
    await page.getByRole('button', { name: 'narundet3 srong3' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ចេញពីប្រព័ន្ធ' }).click();
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 4(user4@test.com)
export async function logout_user4(page) {
    await page.getByRole('button', { name: 'narundet4 srong4' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ចេញពីប្រព័ន្ធ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: ' ចេញពីប្រព័ន្ធ' }).click();
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 4 assistant a (user4a@test.com)
export async function logout_user4a(page) {
    await page.getByRole('button', { name: 'narundet4a srong4a' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ចេញពីប្រព័ន្ធ' }).click();
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 4 assiatant b (user4b@test.com)
export async function logout_user4b(page) {
    await page.getByRole('button', { name: 'narundet4b srong4b' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ចេញពីប្រព័ន្ធ' }).click();
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++