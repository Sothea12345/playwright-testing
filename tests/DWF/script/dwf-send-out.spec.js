import { test } from 'playwright/test';

import { back_to_info, login_info1, request_info, upload_new_file } from '../component/fillin';
import {
  workflow_pendding_button, eyes_button, login_button, cabinet_button, open_folder,
  select_first_file, request_button, submit_button, back_to_button, edit_button, save_button
} from '../component/button';
import { link_to_website } from '../component/link';
import { check_back_to_message, check_back_to_title, check_request_title, check_requested_message } from '../component/check';

test('2.5 Sent Out', async ({ page }) => {
  // Navigate to the website
  await link_to_website(page);

  // testing process (call function)
  await login_info1(page);
  await login_button(page);
  await cabinet_button(page);
  await open_folder(page);
  await select_first_file(page);
  await workflow_pendding_button(page);
  await eyes_button(page);
  await request_button(page);
  await check_request_title(page);
  await request_info(page);
  await submit_button(page);
  await check_requested_message(page);
});

test('2.8 Resubmit', async ({ page }) => {
  // Navigate to the website
  await link_to_website(page);

  // testing process (call function)
  await login_info1(page);
  await login_button(page);
  await cabinet_button(page);
  await open_folder(page);
  await select_first_file(page);
  await workflow_pendding_button(page);
  await eyes_button(page);
  await edit_button(page);
  await upload_new_file(page);
  await save_button(page);
  await back_to_button(page);
  await check_back_to_title(page);
  await back_to_info(page);
  await submit_button(page);
  await check_back_to_message(page);
});