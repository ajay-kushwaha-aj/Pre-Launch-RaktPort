# 📊 Google Sheets Setup Guide for RaktPort

Follow these steps to collect all form submissions directly into a Google Sheet.

---

## Step 1 — Create your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new sheet
2. Name it: **RaktPort Early Access**
3. Add these headers in Row 1:
   `Timestamp | Name | Email | Role | Message | Source`
4. Copy the Sheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/**SHEET_ID**/edit`

---

## Step 2 — Create the Google Apps Script

1. Go to [script.google.com](https://script.google.com) → **New Project**
2. Name it: **RaktPort Waitlist API**
3. Delete everything and paste:

```javascript
const SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet()
    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name      || '',
      data.email     || '',
      data.role      || '',
      data.message   || '',
      data.source    || 'RaktPort Landing'
    ])
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Saved!' }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet(e) {
  return ContentService.createTextOutput('RaktPort API is running ✅')
}
```

4. Click **Save** (Ctrl+S)

---

## Step 3 — Deploy as Web App

1. Click **Deploy** → **New Deployment**
2. Click the gear icon → Select type: **Web App**
3. Set:
   - **Description**: RaktPort Waitlist API
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize when prompted
6. **Copy the Web App URL** — looks like:
   `https://script.google.com/macros/s/AKfyc.../exec`

---

## Step 4 — Add URL to your code

Open `src/components/JoinForm.jsx` and replace:
```js
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'
```
with:
```js
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec'
```

---

## ✅ Done!

Every form submission will now automatically appear in your Google Sheet with:
- **Timestamp** (Indian time)
- **Name**
- **Email**
- **Role** (Donor / Hospital / etc.)
- **Message**
- **Source**

---

*Both the Hero email capture and the full JoinForm send data to the same sheet.*
