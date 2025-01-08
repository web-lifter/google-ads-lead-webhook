# Google Ads Lead Webhook

## Overview
This open-source repository provides a Google Apps Script solution for automating the handling of Google Ads lead form submissions. The script validates incoming webhook requests, stores lead data in a Google Sheet, and sends email notifications when a new lead is received.

## Features
- Validates webhook keys to ensure secure data transmission.
- Stores lead form submissions in a specified Google Sheet.
- Sends email notifications with lead details.
- Supports dynamic fields for easy customization.

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

## License
This project is licensed under the [MIT License](LICENSE).

## Sponsorship
If you find this project helpful, consider [sponsoring us](https://github.com/sponsors/web-lifter) to support future development.

## Contribution
Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md).

## Contact
For any issues or questions, please create an [issue](https://github.com/web-lifter/google-ads-lead-webhook/issues) or reach out via email at `open-source@web-lifter.com.au`.

