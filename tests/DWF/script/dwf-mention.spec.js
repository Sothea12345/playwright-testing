import { test } from 'playwright/test';

import { link_to_website } from "../component/link";
import { login_info2 } from '../component/fillin';
import { login_button } from '../component/button';
import { active_workflow } from '../action/active-workflow';
import { submit_testing } from '../component/test-component';

test('testing test', async ({ page }) => {
    await link_to_website(page);
    await login_info2(page);
    await login_button(page);
    await active_workflow(page);
    await submit_testing(page);
});