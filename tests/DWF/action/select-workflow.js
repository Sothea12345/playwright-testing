import { cabinet_button, cross, cross1, open_folder, save_button, select_first_file, workflow_button } from "../component/button";
import { check_success_message } from "../component/check";
import { workflow_info } from "../component/fillin";

export async function select_workflow(page) {
    // await cabinet_button(page);          // from home page to cabinet page
    // await open_folder(page);             // open folder (autotest folder)
    // await select_first_file(page);       // select first file
    await workflow_button(page);            // click workflow button
    await workflow_info(page);              // fill in workflow information
    await save_button(page);                // save workflow
    await check_success_message(page);      // check success message
    await cross1(page);                     // close the success message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++