import { test, chromium, expect, defineConfig, devices } from 'playwright/test';

import {
  check_success_message, check_request_title, check_requested_message,
  check_workflow_title, check_return_title, check_return_message,
  check_back_to_title, check_back_to_message, check_concluded_title,
  check_concluded_message, check_feedback_title, check_feedback_message
} from '../component/check';
import {
  login_info1, add_doc_info, press_esc, request_info, upload_file, workflow_info,
  login_info2, final_step_info, back_to_info, upload_new_file, feedback_info,
  login_info3, annotation_feedback_info, annotation_doc_info,
  share_doc_info
} from '../component/fillin';
import {
  open_folder, login_button, request_button, cabinet_button, save_button,
  select_first_file, submit_button, view_document, workflow_button,
  add_new_document_button, fm_to_cabinets, fm_view_document, eyes_button,
  logout_button, workflow_pendding_button, select_pendding_file, return_button,
  workflow_pending_menu, back_to_button, concluded_button, edit_button, select_updated_pendding_file,
  feedback_button, annotation_feedback_button, annotation_doc_button, annotation_doc_scroll, submit_button2,
  reload_button,
  add_button
} from '../component/button';
import { link_to_website } from '../component/link';

test('Test 1: 2.2-2.5, from upload - send out', async ({ page }) => {
  // Navigate to the website
  await link_to_website(page);

  // upload document
  await login_info1(page);
  await login_button(page);
  await cabinet_button(page);
  await add_new_document_button(page);
  await add_doc_info(page);
  await upload_file(page);
  await save_button(page);
  await check_success_message(page);
  await fm_to_cabinets(page);

  // view document
  await open_folder(page);
  await select_first_file(page);
  // await view_document(page);
  // await press_esc(page);

  // workflow
  await workflow_button(page);
  await check_workflow_title(page);
  await workflow_info(page);
  await save_button(page);
  await check_success_message(page);

  // send out
  await fm_view_document(page);
  await eyes_button(page);
  await request_button(page);
  await check_request_title(page);
  await request_info(page);
  await submit_button(page);
  await check_requested_message(page);

  await logout_button(page);
});

test('Test 2: 2.6, feedback from 2nd to 3rd', async ({ page }) => {
  // go to the website
  await link_to_website(page);

  // login to user 2 for first feedback
  await login_info2(page);
  await login_button(page);
  await workflow_pending_menu(page);
  await select_pendding_file(page);

  // feedback process
  await feedback_button(page);
  await check_feedback_title(page);
  await feedback_info(page);
  await submit_button(page);
  await check_feedback_message(page);

  await logout_button(page);
});

test('Test 3: 2.7, Return from 3rd to 1st', async ({ page }) => {
  // go to the website
  await link_to_website(page);

  // login to user 3 the return the file
  await login_info3(page);
  await login_button(page);
  await workflow_pending_menu(page);
  await select_pendding_file(page);

  // return process
  await return_button(page);
  await check_return_title(page);
  await final_step_info(page);
  await submit_button(page);
  await check_return_message(page);

  await logout_button(page);
});

test('Test 4: 2.8.1, Resubmit from 1st to 2nd', async ({ page }) => {
  // go to the website
  await link_to_website(page);

  // login back into user 1 for resubmiting new version
  await login_info1(page);
  await login_button(page);
  // await cabinet_button(page);
  // await open_folder(page);
  // await select_first_file(page);
  // await workflow_pendding_button(page);
  // await eyes_button(page);
  await workflow_pending_menu(page);
  await select_pendding_file(page);

  // upload new file
  await edit_button(page);
  await upload_new_file(page);
  await save_button(page);

  // back to process
  await back_to_button(page);
  await check_back_to_title(page);
  await back_to_info(page);
  await submit_button(page);
  await check_back_to_message(page);

  await logout_button(page);
});

test('Test 5: 2.8.2, annotation from 2nd to 3rd', async ({ page }) => {
  // go to the website
  await link_to_website(page);

  // login to user 2 for second feedback
  await login_info2(page);
  await login_button(page);
  await workflow_pending_menu(page);
  await select_updated_pendding_file(page);

  // annotate document
  await annotation_doc_button(page);
  await annotation_doc_info(page);

  // feedback process (from annotation form)
  await annotation_feedback_button(page);
  await annotation_feedback_info(page);
  await submit_button2(page);
  await check_feedback_message(page);

  await logout_button(page);
});

test('Test 6: 2.9, Concluded', async ({ page }) => {
  // go to the website
  await link_to_website(page);

  // login to user 3 final step
  await login_info3(page);
  await login_button(page);
  await workflow_pending_menu(page);
  await select_updated_pendding_file(page);

  // concluded process
  await concluded_button(page);
  await check_concluded_title(page);
  await final_step_info(page);
  await submit_button(page);
  await check_concluded_message(page);

  await view_document(page);
  await page.waitForTimeout(5000);
  await press_esc(page);

  await reload_button(page);

  await share_doc_info(page);
  await add_button(page);
});

// npx playwright test ./tests/dwf/script/dwf-full-test.spec.js --headed --project chromium --workers=1