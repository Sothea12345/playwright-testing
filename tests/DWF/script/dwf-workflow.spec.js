import { test } from 'playwright/test';

import { check_success_message } from '../component/check';
import { login_info1, workflow_info } from '../component/fillin';
import {
  login_button, cabinet_button, open_folder, select_first_file, workflow_button, save_button
} from '../component/button';
import { link_to_website } from '../component/link';

test('2.4 Select Workflow', async ({ page }) => {
  // Navigate to the website
  await link_to_website(page);

  // testing process (call function)
  await login_info1(page);
  await login_button(page);
  await cabinet_button(page);
  await open_folder(page);
  await select_first_file(page);
  await workflow_button(page);
  await workflow_info(page);
  await save_button(page);
  await check_success_message(page);

});

// npx playwright test ./tests/dwf/script/dwf-workflow.spec.js --headed --project chromium