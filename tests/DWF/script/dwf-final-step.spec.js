import { test } from 'playwright/test';
import { login_info2, final_step_info } from '../component/fillin';
import { link_to_website } from '../component/link';
import {
    concluded_button, submit_button, workflow_pending_menu, login_button, select_pendding_file, return_button
} from '../component/button';
import { check_concluded_message, check_concluded_title, check_reject_message, check_return_message, check_return_title } from '../component/check';


test('2.9 Conclud', async ({ page }) => {
    await link_to_website(page);
    await login_info2(page);
    await login_button(page);
    await workflow_pending_menu(page);
    await select_pendding_file(page);

    await concluded_button(page);
    await check_concluded_title(page);
    await final_step_info(page);
    await submit_button(page);
    await check_concluded_message(page);
});

test('2.10 Reject', async ({ page }) => {
    await link_to_website(page);
    await login_info2(page);
    await login_button(page);
    await workflow_pending_menu(page);
    await select_pendding_file(page);

    await reject_button(page);
    await check_reject_title(page);
    await final_step_info(page);
    await submit_button(page);
    await check_reject_message(page);
});

test('2.7 Return', async ({ page }) => {
    await link_to_website(page);
    await login_info2(page);
    await login_button(page);
    await workflow_pending_menu(page);
    await select_pendding_file(page);

    await return_button(page);
    await check_return_title(page);
    await final_step_info(page);
    await submit_button(page);
    await check_return_message(page);
});
