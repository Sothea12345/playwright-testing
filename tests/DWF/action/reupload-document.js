import { add_new_workflow_button, workflow_button } from "../component/button";
import { workflow_info } from "../component/fillin";

export async function reupload_document(page) {
    await cabinet_button(page);
    await open_folder(page);
    await select_first_file(page);
    await workflow_button(page);
    await add_new_workflow_button(page);
    await workflow_info(page);
    await save_button(page);                // save workflow
    await check_success_message(page);      // check success message
    await cross1(page);  
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++