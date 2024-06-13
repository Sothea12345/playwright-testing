import { delete_workflow_button, submit_button } from "../component/button";
import { delete_workflow_info } from "../component/fillin";

export async function delete_workflow(page) {
    await delete_workflow_button(page);             // click the delete workflow button
    await delete_workflow_info(page);   
    await submit_button(page);                      // submit the delete workflow
}   