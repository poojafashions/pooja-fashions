POOJA FASHIONS WEBSITE - VERSION 2

Included:
- Your uploaded Pooja FASHIONS logo
- Home page
- Departments: Men's Wear, Women's Wear, Kids Wear, Accessories
- Product placeholders
- Add to Cart
- Cart stored in browser
- Contact email: poojafashions2018@gmail.com
- Instagram: @poojafashionsofficial
- Google Form checkout connection placeholder
- Optional Google Apps Script for email notifications

IMPORTANT LIMITATION:
A public Google Form does not automatically become a dynamic e-commerce checkout merely by embedding it.
For the exact workflow you requested (new products automatically appearing in the order form, cart contents,
required customer fields, and automatic email notification), a Google Sheet + Apps Script or a custom checkout
backend is needed.

Instagram:
A Google Form cannot normally send an Instagram DM to you. The free workflow is to email each new order.
Instagram automation requires a supported business/API integration and permissions.

NEXT STEP:
Put your Google Form URL in config.js. Then the checkout button can open that form.
For a production version, create the Form + linked Sheet and use apps-script-order-email.gs.


CHECKOUT UPDATE:
- The large "Proceed to Google Form Checkout" text has been changed to "Checkout".
- Checkout now opens an easy customer-details form on the website.
- Required: Customer Name, Mobile Number, Full Address, Pin Code, Mode of Payment.
- Optional: Email Address.
- The customer's cart/order summary is shown before placing the order.
- The final Google Form/email submission connection still needs the actual Google Form URL and field IDs.


DIRECT ORDER EMAIL CONNECTION:
The website now sends checkout details to a Google Apps Script Web App endpoint.
The Apps Script sends each order to poojafashions2018@gmail.com.

YOU MUST DO ONE GOOGLE-ACCOUNT STEP:
Deploy google-apps-script-order.gs as a Web App from your Google account, then put its /exec URL in config.js:
window.PF_ORDER_ENDPOINT = "YOUR_WEB_APP_URL";

This is required because Google must authorize access to your email account. I cannot authorize or deploy
inside your Google account for you.

IMPORTANT: The Apps Script Web App URL is embedded directly in index.html so the order connection works even when the site is opened from a local content:// file.
