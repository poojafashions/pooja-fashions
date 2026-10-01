/*
POOJA FASHIONS - OPTIONAL GOOGLE APPS SCRIPT BACKEND

This is a starting script for Google Apps Script. It can email you whenever a Google Form response
is submitted. It does NOT bypass Google's permissions and it does not send Instagram DMs.

HOW TO USE:
1. Create a Google Form with required fields:
   Customer Name, Mobile Number, Address, Pin Code, Email Address (optional), Mode of Payment,
   Order Details.
2. Link the Form to a Google Sheet.
3. In the Sheet: Extensions > Apps Script.
4. Paste this script.
5. Set STORE_EMAIL to poojafashions2018@gmail.com.
6. Add an installable trigger for onFormSubmit: From spreadsheet -> On form submit.
*/

const STORE_EMAIL = "poojafashions2018@gmail.com";

function onFormSubmit(e) {
  const values = e.namedValues || {};
  let body = "New Pooja FASHIONS order\\n\\n";
  Object.keys(values).forEach(function(key) {
    body += key + ": " + values[key].join(", ") + "\\n";
  });
  MailApp.sendEmail({
    to: STORE_EMAIL,
    subject: "New Pooja FASHIONS Order",
    body: body
  });
}
