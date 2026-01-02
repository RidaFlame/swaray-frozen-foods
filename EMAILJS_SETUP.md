# EmailJS Setup Instructions

## Quick Setup Guide

The contact form is ready but needs EmailJS credentials to work. Follow these steps:

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. **Copy your Service ID** (e.g., `service_xxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Subject:** Quote Request from {{from_name}}

**Content:**
```
New Quote Request

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the Swaray website contact form.
```

4. Set "To Email" to: `ririda6680@gmail.com`
5. **Copy your Template ID** (e.g., `template_xxxxx`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find "Public Key"
3. **Copy your Public Key** (e.g., `xxxxxxxxxxxxx`)

### Step 5: Update Contact.jsx
Open `src/pages/Contact.jsx` and find these lines (around line 30-32):

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
```

Replace:
- `YOUR_SERVICE_ID` with your Service ID from Step 2
- `YOUR_TEMPLATE_ID` with your Template ID from Step 3
- `YOUR_PUBLIC_KEY` with your Public Key from Step 4

### Step 6: Test
1. Run `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (ririda6680@gmail.com) for the test message

## Troubleshooting

- **Form not sending?** Check browser console for errors
- **Email not received?** Check spam folder, verify EmailJS service is connected
- **Template variables not working?** Make sure variable names match exactly (case-sensitive)

## Free Tier Limits
- 200 emails per month
- Perfect for a showcase website
- Upgrade if you need more

