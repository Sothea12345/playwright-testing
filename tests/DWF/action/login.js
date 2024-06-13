import { login_button, logout_button } from "../component/button";
import { login_info1, login_info2, login_info3, login_info4, login_info4a, login_info4b } from "../component/fillin";

// login to user 1 (user1@test.com)
export async function login_user1(page) {
    await login_info1(page);
    await login_button(page);
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// login to user 2 (user2@test.com)
export async function login_user2(page) {
    await login_info2(page);
    await login_button(page);
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 3 (user3@test.com)
export async function login_user3(page) {
    await login_info3(page);
    await login_button(page);
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 4(user4@test.com)
export async function login_user4(page) {
    await login_info4(page);
    await login_button(page);
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 4 assistant a (user4a@test.com)
export async function login_user4a(page) {
    await login_info4a(page);
    await login_button(page);
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loging to user 4 assiatant b (user4b@test.com)
export async function login_user4b(page) {
    await login_info4b(page);
    await login_button(page);
    await page.waitForTimeout(1000);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++