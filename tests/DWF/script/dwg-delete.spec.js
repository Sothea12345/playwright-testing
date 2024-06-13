import { test } from 'playwright/test';
import { link_to_website } from '../component/link';
import { login_info } from '../component/fillin';
import { cabinet_button, delete_button, login_button, open_folder, select_first_file } from '../component/button';

test('delete', async ({ page }) => {
    // Navigate to the website
    await link_to_website(page);

    // testing process (call function)
    await login_info(page);
    await login_button(page);
    await cabinet_button(page);
    await open_folder(page);
    await select_first_file(page);
    await delete_button(page);

});