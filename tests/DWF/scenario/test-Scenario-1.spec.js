import { test } from '@playwright/test';
import { link_to_website } from '../component/link';
import { login_staff1, login_user1, login_user2, login_user3, login_user4, login_user4a, login_user4b } from '../action/login';
import { upload_document } from '../action/upload-document';
import { annotation, annotation_approved, annotation_feedback, annotation_request, annotation_resubmit, annotation_return } from '../action/annotation';
import { logout, logout_user1, logout_user2, logout_user3, logout_user4 } from '../action/logout';
import { annotation_feedback_button, reload_button, select_img_doc, view_document } from '../component/button';
import { share_doc_info } from '../component/fillin';
import { active_workflow } from '../action/active-workflow';
import { select_workflow } from '../action/select-workflow';
import { submit_approved, submit_feedback, submit_feedback_u4, submit_request, submit_resubmit, submit_return, submit_u2 } from '../action/submit';
import { edit } from '../action/edit';
import { share } from '../action/share-workflow';
import { pendding } from '../action/pendding';

test('Testing 1-7', async ({ page }) => {
    await link_to_website(page);
    await login_user1(page);
    await upload_document(page);
    // await view_document(page);       // not neccessary
    await select_img_doc(page);
    await select_workflow(page);
    await annotation_request(page);
    // await submit_request(page);      // not neccessary (submit within annotation page)
    await logout_user1(page);
})

test('Testing 8-11', async ({ page } )=> {
    await link_to_website(page);
    await login_user2(page);
    await active_workflow(page); 
    await submit_feedback(page);
    await logout_user2(page);
});

test('Testing 12-16', async ({ page } )=> {
    await link_to_website(page);
    await login_user3(page);
    await active_workflow(page); 
    await annotation_return(page);
    // await submit_return(page);       // not neccessary (submit within annotation page)
    await logout_user3(page);
});

test('Testing 17-22', async ({ page } )=> {
    await link_to_website(page);
    await login_user1(page);
    await active_workflow(page); 
    await edit(page);
    await annotation_resubmit(page);
    // await submit_resubmit(page);     // not neccessary (submit within annotation page)
    await logout_user1(page);
});

test('Testing 23-28, annotation', async ({ page } )=> {
    await link_to_website(page);
    await login_user3(page);
    await active_workflow(page); 
    await annotation_feedback(page);
    // await submit_feedback_u4(page);  // not neccessary (submit within annotation page)
    await logout_user3(page);
});

test('Testing 23-28, share', async ({ page } )=> {
    await link_to_website(page);
    await login_user4(page);
    await active_workflow(page); 
    await submit_approved(page);
    await reload_button(page);
    await share(page);
    // await logout_user4(page);        // comment out for now, cause want to see the end result
});

// npx playwright test ./tests/dwf/scenario/test-Scenario-1.spec.js --headed --project chromium --workers=1