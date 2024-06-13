import { test } from 'playwright/test';

import { login_info1, press_esc } from '../component/fillin';
import {
  select_first_file, view_document, login_button, cabinet_button, open_folder,
} from '../component/button';
import { link_to_website } from '../component/link';

test('2.3 View Document', async ({ page }) => {
  // Navigate to the website
  await link_to_website(page);

  // testing process (call function)
  await login_info1(page);
  await login_button(page);
  await cabinet_button(page);
  await open_folder(page);
  await select_first_file(page);
  await view_document(page);
  await press_esc(page);

});

// npx playwright test ./tests/dwf/script/dwf-view-doc.spec.js --headed --project chromium