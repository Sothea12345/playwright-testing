import { return_button } from "../component/button";
import { final_step_info } from "../component/fillin";

export async function return_document(page) {
    await return_button(page);
    await final_step_info(page);
}