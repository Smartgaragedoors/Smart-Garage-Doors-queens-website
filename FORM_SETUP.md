# Form Submission Setup Guide

All forms have been updated to use a new form submission system. Currently, forms will use a mailto fallback (opens email client) until you configure Web3Forms.

## Quick Setup (Recommended: Web3Forms)

1. **Get your Web3Forms Access Key:**
   - Go to https://web3forms.com/
   - Enter your email: `info@smartestgaragedoors.com`
   - Complete the verification
   - Copy your access key

2. **Add to Vercel Environment Variables:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add a new variable:
     - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
     - **Value:** (paste your access key)
     - **Environment:** Production, Preview, Development (select all)
   - Click "Save"
   - Redeploy your site

3. **Test the forms:**
   - After redeployment, test any contact form
   - Submissions should now be sent directly to `info@smartestgaragedoors.com` via email

## Current Status

✅ **Forms Updated:**
- Contact page form (`/contact`)
- Contact component (homepage)
- Book Now form (`/book-now`)
- Emergency Repairs form
- Installation form
- Maintenance form
- Spring Replacement form
- Cable & Roller Repair form

## How It Works

- **With Web3Forms configured:** Forms submit directly to your email
- **Without configuration (current):** Forms use mailto fallback (opens email client)

## Notes

- Web3Forms is **free** and **unlimited** submissions
- No backend code required
- Works immediately after adding the environment variable
- All form data is securely sent to your email



