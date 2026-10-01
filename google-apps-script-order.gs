const STORE_EMAIL = "poojafashions2018@gmail.com";

function doGet() {
  return ContentService.createTextOutput("Pooja FASHIONS order system is running.");
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const products = (data.products || []).map(function(p) {
      return p.name + " × " + p.qty + " — ₹" + (Number(p.price || 0) * Number(p.qty || 0));
    }).join("\n");

    const body =
      "NEW POOJA FASHIONS ORDER\n\n" +
      "Customer Name: " + (data.customer_name || "") + "\n" +
      "Mobile Number: " + (data.mobile || "") + "\n" +
      "Email Address: " + (data.email || "Not provided") + "\n" +
      "Full Address: " + (data.address || "") + "\n" +
      "Pin Code: " + (data.pin_code || "") + "\n" +
      "Mode of Payment: " + (data.payment || "") + "\n\n" +
      "ORDER:\n" + products + "\n\n" +
      "TOTAL: ₹" + (data.total || 0);

    MailApp.sendEmail({
      to: STORE_EMAIL,
      subject: "New Pooja FASHIONS Order",
      body: body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/*
DEPLOYMENT:
1. Open script.google.com while logged into the Google account that should receive orders.
2. New project -> paste this code.
3. Deploy -> New deployment -> Web app.
4. Execute as: Me.
5. Who has access: Anyone.
6. Authorize when Google asks.
7. Copy the Web app URL ending in /exec.
8. Paste that URL into config.js as PF_ORDER_ENDPOINT.
*/
