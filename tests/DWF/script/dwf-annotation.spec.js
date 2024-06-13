import { test } from 'playwright/test';

import { link_to_website } from '../component/link';
import { annotation_doc_info, annotation_feedback_info, login_info2
} from '../component/fillin';
import { annotation_doc_button, annotation_doc_scroll, annotation_feedback_button, login_button, 
    select_pendding_file, submit_button2, workflow_pending_menu
} from '../component/button';
import { check_annotation_feedback_title, check_feedback_message 
} from '../component/check';

test('Annotate Document', async ({ page }) => {
    await link_to_website(page);
    
    // login and upload document
    // await login_info1(page);
    // await login_button(page);
    // await cabinet_button(page);
    // await open_folder(page);
    // await select_first_file(page);
    // await workflow_pendding_button(page);
    // await eyes_button(page);

    await login_info2(page);
    await login_button(page);
    await workflow_pending_menu(page);
    await select_pendding_file(page);

    // annotate document
    await annotation_doc_button(page);
    await annotation_doc_info(page);
    // await annotation_doc_scroll(page);
    // await request_button(page);

    await annotation_feedback_button(page);
    // await check_annotation_feedback_title(page);
    await annotation_feedback_info(page);
    await submit_button2(page);
    await check_feedback_message(page);

});

// npx playwright test ./tests/dwf/script/dwf-annotation.spec.js --headed --project chromium