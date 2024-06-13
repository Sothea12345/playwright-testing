import { back_to_button, cabinet_button, concluded_button, cross, eyes_button, feedback_button,open_folder, reject_button, request_button, return_button, select_first_file, submit_button, workflow_pendding_button } from "../component/button";
import { check_back_to_message, check_back_to_title, check_concluded_message, check_concluded_title, check_feedback_message, check_feedback_title, check_request_title, check_requested_message, check_return_message, check_return_title } from "../component/check";
import { back_to_info, feedback_info, feedback_info_u4, final_step_info, request_info, resubmit_info_u4 } from "../component/fillin";

export async function submit_request(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await request_button(page);                     // click the request button
    await check_request_title(page);                // check the request title
    await request_info(page);                       // fill in the request information
    await submit_button(page);                      // click the submit button
    await check_requested_message(page);            // check the requested message
    await cross(page);                              // close the message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function submit_feedback(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await feedback_button(page);                    // click the feedback button
    await check_feedback_title(page);               // check the feedback title
    await feedback_info(page);                      // fill in the feedback information
    await submit_button(page);                      // click the submit button
    await check_feedback_message(page);             // check the feedback message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function submit_return(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await return_button(page);                      // click the return button
    await check_return_title(page);                 // check the return title
    await final_step_info(page);                    // fill in the return information
    await submit_button(page);                      // click the submit button
    await check_return_message(page);               // check the return message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function submit_resubmit(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await back_to_button(page);                     // click the back to button
    await check_back_to_title(page);                // check the back to title
    await back_to_info(page);                       // fill in the back to information
    await submit_button(page);                      // click the submit button
    await check_back_to_message(page);              // check the back to message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function submit_approved(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await concluded_button(page);                   // click the concluded button
    await check_concluded_title(page);              // check the concluded title
    await final_step_info(page);                    // fill in the final step information
    await submit_button(page);                      // click the submit button
    // await check_concluded_message(page);         // check the concluded message

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function submit_reject(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await reject_button(page);                      // click the reject button
    // await check_reject_title(page);              // check the reject title
    await final_step_info(page);                    // fill in the final step information
    await submit_button(page);                      // click the submit button
    // await check_reject_message(page);            // check the reject message

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export async function submit_feedback_u4(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await feedback_button(page);                    // click the feedback button
    await check_feedback_title(page);               // check the feedback title
    await feedback_info_u4(page);                   // fill in the feedback information
    await submit_button(page);                      // click the submit button
    await check_feedback_message(page);             // check the feedback message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


export async function submit_resubmit_u4(page) {
    // await cabinet_button(page);                  // navigate to the cabinet page
    // await open_folder(page);                     // open the targeted folder (autotest folder)
    // await select_first_file(page);               // select the first file
    // await workflow_pendding_button(page);        // navigate to the workflow page
    // await eyes_button(page);                     // click the eyes button
    await back_to_button(page);                     // click the back to button
    await check_back_to_title(page);                // check the back to title
    await back_to_info(page);                       // fill in the back to information
    await submit_button(page);                      // click the submit button
    await check_back_to_message(page);              // check the back to message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++export async function submit_feedback_u4(page) {
    
