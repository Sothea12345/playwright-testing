import { test } from '@playwright/test';
import { link_to_website } from '../component/link';
import { login_staff1, login_user1, login_user2, login_user3, login_user4, login_user4a, login_user4b } from '../action/login';
import { upload_document } from '../action/upload-document';
import { annotation, annotation_approved, annotation_feedback, annotation_reject, annotation_request, annotation_resubmit, annotation_resubmit_u4, annotation_return } from '../action/annotation';
import { logout, logout_user1, logout_user2, logout_user3, logout_user4, logout_user4a } from '../action/logout';
import { annotation_feedback_button, delete_workflow_button, reload_button, select_img_doc, view_document } from '../component/button';
import { share_doc_info } from '../component/fillin';
import { active_workflow } from '../action/active-workflow';
import { select_workflow } from '../action/select-workflow';
import { submit_approved, submit_feedback, submit_feedback_u4, submit_reject, submit_request, submit_resubmit, submit_return, submit_u2 } from '../action/submit';
import { edit } from '../action/edit';
import { share } from '../action/share-workflow';
import { pendding } from '../action/pendding';
import { return_document } from '../action/return-document';
import { delete_workflow } from '../action/delete-workflow';
import { reupload_document } from '../action/reupload-document';

test('Upload new document', async ({ page }) => {
    await link_to_website(page);
    await login_user1(page);
    await upload_document(page);
    await select_img_doc(page);
    await select_workflow(page);
    await submit_request(page);
    await logout_user1(page);
})

test('feedback to u3', async ({ page }) => {
    await link_to_website(page);
    await login_user2(page);
    await active_workflow(page);
    await submit_feedback(page);
    await logout_user2(page);
});

test('return document to u1', async ({ page }) => {
    await link_to_website(page);
    await login_user3(page);
    await active_workflow(page);
    await return_document(page);  
    await logout_user3(page);
});

test('delete and resubmit', async ({ page }) => {
    await link_to_website(page);
    await login_user1(page);
    await active_workflow(page);
    await delete_workflow(page);

    await reupload_document(page);
    await logout_user1(page);
});

test('feedback again to u3', async ({ page }) => {
    await link_to_website(page);
    await login_user2(page);
    await active_workflow(page);
    await submit_feedback(page);
    await logout_user2(page);
});

// npx playwright test ./tests/dwf/scenario/test-Scenario-3.spec.js --headed --project chromium --workers=1