import { annotation_doc_info_approved, annotation_doc_info_request, annotation_doc_info_resubmit, annotation_doc_info_return } from "../component/annotation";
import { annotation_doc_button, annotation_feedback_button, back_to_button, cabinet_button, concluded_button, eyes_button, feedback_button, open_folder, reject_button, request_button, return_button, select_first_file, submit_button2, workflow_pendding_button } from "../component/button";
import { annotation_back_to_info, annotation_back_to_info_u4, annotation_concluded_info, annotation_doc_info, annotation_feedback_info, annotation_reject_info, annotation_request_info, annotation_return_info, request_info } from "../component/fillin";

export async function annotation_request(page) {
    // await cabinet_button(page);                  // from home page to cabinet page
    // await open_folder(page);                     // open folder (autotest folder)
    // await select_first_file(page);               // select first file
    // await workflow_pendding_button(page);        // click workflow pendding button
    await eyes_button(page);                        // click eyes button (to view document)
    await annotation_doc_button(page);              // click annotation button
    await annotation_doc_info_request(page);        // fill in annotation information

    await request_button(page);                     // click request button
    await annotation_request_info(page);            // fill in request information
    await submit_button2(page);                     // click submit button
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function annotation_return(page) {
    // await cabinet_button(page);                  // from home page to cabinet page
    // await open_folder(page);                     // open folder (autotest folder)
    // await select_first_file(page);               // select first file
    // await workflow_pendding_button(page);        // click workflow pendding button
    // await eyes_button(page);                     // click eyes button (to view document)
    await annotation_doc_button(page);              // click annotation button
    await annotation_doc_info_return(page);         // fill in annotation information

    await return_button(page);                      // click return button
    await annotation_return_info(page);             // fill in return information
    await submit_button2(page);                     // click submit button
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function annotation_resubmit(page) {
    // await cabinet_button(page);                  // from home page to cabinet page
    // await open_folder(page);                     // open folder (autotest folder)
    // await select_first_file(page);               // select first file
    // await workflow_pendding_button(page);        // click workflow pendding button
    // await eyes_button(page);                     // click eyes button (to view document)
    await annotation_doc_button(page);              // click annotation button
    await annotation_doc_info_resubmit(page);       // fill in annotation information

    await back_to_button(page);                     // click back to button
    await annotation_back_to_info(page);            // fill in back to information
    await submit_button2(page);                     // click submit button
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function annotation_resubmit_u4(page) {
    // await cabinet_button(page);                  // from home page to cabinet page
    // await open_folder(page);                     // open folder (autotest folder)
    // await select_first_file(page);               // select first file
    // await workflow_pendding_button(page);        // click workflow pendding button
    // await eyes_button(page);                     // click eyes button (to view document)
    await annotation_doc_button(page);              // click annotation button
    await annotation_doc_info_resubmit(page);       // fill in annotation information

    await back_to_button(page);                     // click back to button
    await annotation_back_to_info_u4(page);         // fill in back to information
    await submit_button2(page);                     // click submit button
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function annotation_feedback(page) {
    // await cabinet_button(page);                  // from home page to cabinet page
    // await open_folder(page);                     // open folder (autotest folder)
    // await select_first_file(page);               // select first file
    // await workflow_pendding_button(page);        // click workflow pendding button
    // await eyes_button(page);                     // click eyes button (to view document)
    await annotation_doc_button(page);              // click annotation button
    await annotation_doc_info_approved(page);       // fill in annotation information

    await annotation_feedback_button(page);         // click feedback button
    await annotation_feedback_info(page);           // fill in feedback information
    await submit_button2(page);                     // click submit button
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function annotation_approved(page) {
    // await cabinet_button(page);                  // from home page to cabinet page
    // await open_folder(page);                     // open folder (autotest folder)
    // await select_first_file(page);               // select first file
    // await workflow_pendding_button(page);        // click workflow pendding button
    // await eyes_button(page);                     // click eyes button (to view document)
    await annotation_doc_button(page);              // click annotation button
    await annotation_doc_info_approved(page);       // fill in annotation information

    await concluded_button(page);                   // click concluded button
    await annotation_concluded_info(page);          // fill in concluded information
    await submit_button2(page);                     // click submit button
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function annotation_reject(page) {
    // await cabinet_button(page);                  // from home page to cabinet page
    // await open_folder(page);                     // open folder (autotest folder)
    // await select_first_file(page);               // select first file
    // await workflow_pendding_button(page);        // click workflow pendding button
    // await eyes_button(page);                     // click eyes button (to view document)
    await annotation_doc_button(page);              // click annotation button
    await annotation_doc_info_approved(page);         // fill in annotation information

    await reject_button(page);                     // click concluded button
    await annotation_reject_info(page);             // fill in concluded information
    await submit_button2(page);                     // click submit button
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++