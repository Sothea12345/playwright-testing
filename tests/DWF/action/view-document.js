import { cabinet_button, view_document, open_folder, select_first_file, select_img_doc } from "../component/button";
import { press_esc } from "../component/fillin";

export async function view_document(page) {
    // await cabinet_button(page);          // from home page to cabinet page
    // await open_folder(page);             // open folder (autotest folder)
    // await select_first_file(page);       // select first file
    await select_img_doc(page);             // select image document
    await view_document(page);              // view document
    await press_esc(page);                  // press esc to close document
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++