function doPost(e) {
  try {
    // Log the received key for debugging (remove in production)
    Logger.log('Received Key: ' + e.parameter.key);
    
    // Validate the webhook key
    const receivedKey = e.parameter.key; // Extract key from URL parameters
    const expectedKey = PropertiesService.getScriptProperties().getProperty('WEBHOOK_KEY'); // Use stored key for security, Enter your key

    if (receivedKey !== expectedKey) {
      throw new Error('Invalid webhook key. Request denied.');
    }

    // Parse the incoming POST request data
    const data = JSON.parse(e.postData.contents);

    // Open the Google Sheet by its ID
    const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'); // Use stored spreadsheet ID, Enter your spreadsheet id
    const sheetName = 'SHEET_NAME'; // Define the sheet name, enter the name of your sheet
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      throw new Error(`The "${sheetName}" sheet does not exist in the spreadsheet.`);
    }

    // Extract data fields from user_column_data
    const userColumnData = data.user_column_data || [];
    const getField = (id) => {
      const field = userColumnData.find((item) => item.column_id === id);
      return field ? field.string_value : '';
    };

    const name = getField('FULL_NAME');
    const email = getField('EMAIL');
    const phone = getField('PHONE_NUMBER');
    const streetAddress = getField('STREET_ADDRESS');
    const postcode = getField('POSTAL_CODE');
    const jobDetails = getField('could_you_provide_more_details_about_your_requirements?');
    const submissionDate = new Date().toLocaleString(); // Use current date/time for submission date

    // Append the data as a new row in the "Leads" sheet
    const row = [name, email, phone, streetAddress, postcode, jobDetails, submissionDate];
    sheet.appendRow(row);

    // Send email notification
    const recipientEmail = PropertiesService.getScriptProperties().getProperty('NOTIFICATION_EMAIL'); // Use stored email address
    const subject = `New Lead From Google Ads: ${name}`;
    const body = `
      A new lead has been added:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Street Address: ${streetAddress}
      Postcode: ${postcode}
      Job Details: ${jobDetails}
      Submission Date: ${submissionDate}
    `;

    MailApp.sendEmail(recipientEmail, subject, body);

    // Return a success response
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Log and return error details
    Logger.log(error);
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
