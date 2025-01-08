# Google Ads Lead Webhook

## Overview
This open-source repository provides a Google Apps Script solution for automating the handling of Google Ads lead form submissions. The script validates incoming webhook requests, stores lead data in a Google Sheet, and sends email notifications when a new lead is received.

## Features
- Validates webhook keys to ensure secure data transmission.
- Stores lead form submissions in a specified Google Sheet.
- Sends email notifications with lead details.
- Supports dynamic fields for easy customisation.

## Captured Fields

This script captures the following fields from the incoming Google Ads lead form submissions:

1. **Full Name** (`FULL_NAME`): The full name of the lead.
2. **Email** (`EMAIL`): The lead's email address.
3. **Phone Number** (`PHONE_NUMBER`): The lead's phone number.
4. **Street Address** (`STREET_ADDRESS`): The lead's street address.
5. **Postcode** (`POSTAL_CODE`): The lead's postal code.
6. **Job Details** (`could_you_provide_more_details_about_your_requirements?`): Additional details provided by the lead in response to qualifying questions.
7. **Submission Date**: Automatically captures the current date and time of submission.

## Prerequisites
- A Google Ads account with lead form extensions set up.
- A Google Sheet to store the lead data.
- Google Apps Script access for deployment.

## Installation and Setup

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/google-ads-lead-webhook.git
```

### 2. Set Up the Google Apps Script
- Open your Google Sheet.
- Go to **Extensions > Apps Script**.
- Copy the script from `script.gs` in this repository and paste it into the Apps Script editor.

### 3. Configure the Script
- Replace the `expectedKey` variable with your actual webhook key.
- Replace the Google Sheet ID and email address in the script with your details.

### 4. Deploy the Script as a Web App
- Click **Deploy > New Deployment**.
- Choose **Web App**.
- Set the access permissions to **Anyone with the link**.

### 5. Set Up the Webhook in Google Ads
- Use the Web App URL as the webhook URL in Google Ads.
- Add the webhook key as a query parameter.

## How to Edit Captured Fields

The script is designed to handle dynamic fields based on the column IDs provided by Google Ads. To modify or add new fields:

1. **Identify Column IDs**:
   - The `user_column_data` object contains all fields from the lead form.
   - Each field has a `column_id` (e.g., `FULL_NAME`, `EMAIL`).

2. **Update the Script**:
   - Locate the `getField` function in the script:
     ```javascript
     const getField = (id) => {
       const field = userColumnData.find((item) => item.column_id === id);
       return field ? field.string_value : '';
     };
     ```
   - Add or update the `getField` calls with the appropriate `column_id` for your new or updated fields.

### Helpful Resources

- [Google Ads Lead Form Extensions Overview](https://developers.google.com/google-ads/api/reference/rpc/v18/LeadFormSubmissionData): Learn more about importing Lead Form Submission Data using Google Ads API.
- [Google Apps Script Documentation](https://developers.google.com/apps-script/): Detailed documentation for working with Apps Script.
- [SpreadsheetApp Class](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app): Documentation for interacting with Google Sheets in Apps Script.
- [MailApp Class](https://developers.google.com/apps-script/reference/mail/mail-app): Guide for sending email notifications in Apps Script.

By following these resources, users can easily adapt the script to capture additional fields or modify existing ones.

## License
This project is licensed under the [MIT License](LICENSE).

## Sponsorship
If you find this project helpful, consider [sponsoring us](https://github.com/sponsors/web-lifter) to support future development.

## Contribution
Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md).

## Contact
For any issues or questions, please create an [issue](https://github.com/web-lifter/google-ads-lead-webhook/issues) or reach out via email at `open-source@web-lifter.com.au`.

