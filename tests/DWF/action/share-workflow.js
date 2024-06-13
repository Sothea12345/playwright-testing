import { add_button, submit_button } from "../component/button";
import { share_doc_info } from "../component/fillin";

export async function share(page) {
    await share_doc_info(page);         // fill in the share document information (other user name)
    await add_button(page);             // share button to add user
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++