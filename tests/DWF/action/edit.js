import { edit_button, save_button } from "../component/button";
import { upload_new_file } from "../component/fillin";

export async function edit(page) {
    await edit_button(page);            // edit page
    await upload_new_file(page);        // upload new file
    await save_button(page);            // save new file
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++