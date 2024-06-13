import { test } from 'playwright/test';

import { check_success_message } from '../component/check';
import {
  upload_file, login_info1, add_doc_info,
} from '../component/fillin';
import {
  add_new_document_button, login_button, save_button, cabinet_button, fm_to_cabinets
} from '../component/button';
import { link_to_website } from '../component/link';

test('2.2 Upload Document', async ({ page }) => {
  // Navigate to the website
  await link_to_website(page);

  // testing process (call function)
  await login_info1(page);
  await login_button(page);
  await cabinet_button(page);
  await add_new_document_button(page);
  await add_doc_info(page);
  await upload_file(page);
  await save_button(page);
  await check_success_message(page);
  await fm_to_cabinets(page);

});

// npx playwright test ./tests/dwf/script/dwf-upload-doc.spec.js --headed --project chromium