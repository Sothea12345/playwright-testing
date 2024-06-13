import { select_pendding_file, workflow_pending_menu } from "../component/button";

export async function pendding(page) {
    await workflow_pending_menu(page);      // navigate to document workflow page thought the pending home page
    await select_pendding_file(page);       // select the frist pending file
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++