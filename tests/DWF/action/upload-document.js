import { add_new_document_button, cabinet_button, cross, open_folder, save_button } from "../component/button";
import { add_doc_info, upload_file } from "../component/fillin";
import { check_success_message } from "../component/check";


export async function upload_document(page) {
    await cabinet_button(page);                 // from home page to cabinet page
    await add_new_document_button(page);        // click add new document button
    await add_doc_info(page);                   // fill in document information
    await upload_file(page);                    // upload file
    await save_button(page);                    // save document
    await check_success_message(page);          // check success message
    await cross(page);                          // close the success message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++