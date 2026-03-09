# Receive Book Now & Contact Form Submissions by Email

If you **don't** receive emails when someone submits the Book Now or Contact form, form delivery isn't configured yet. Set up **one** of the options below so submissions are sent to your inbox.

---

## Option 1: Resend API (Vercel – recommended for production)

**Best for:** Sites deployed on Vercel. Reliable, no third-party limits, full control.

1. Go to **[https://resend.com](https://resend.com)** and sign up (free tier: 100 emails/day).
2. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Verify your domain at [resend.com/domains](https://resend.com/domains) (e.g. `smartestgaragedoors.com`).
4. In **Vercel** → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your Resend API key
   - `NOTIFICATION_EMAIL` = email where you want leads (e.g. `info@smartestgaragedoors.com`)
   - `FROM_EMAIL` = `Smartest Garage Doors <noreply@smartestgaragedoors.com>` (use your verified domain)
5. **Redeploy** the project.

Submissions will be emailed to `NOTIFICATION_EMAIL` with all lead details, form name, and timestamp.

---

## Option 2: Web3Forms (free, works everywhere)

1. Go to **[https://web3forms.com](https://web3forms.com)**.
2. Enter the email where you want to receive submissions (e.g. `info@smartestgaragedoors.com`).
3. Click **Create Access Key** and copy the key.
4. Add it to your hosting environment:
   - **Vercel:** Project → Settings → Environment Variables → add `VITE_WEB3FORMS_ACCESS_KEY` = your key.
   - **Netlify:** Site → Site settings → Environment variables → add `VITE_WEB3FORMS_ACCESS_KEY` = your key.
   - **Local:** Add to `.env`: `VITE_WEB3FORMS_ACCESS_KEY=your_key_here`
5. **Redeploy** the site (or restart the dev server if testing locally).

Submissions will be sent to the email you used in step 2.

---

## Option 3: Formspree (free tier)

1. Go to **[https://formspree.io](https://formspree.io)** and sign up (free).
2. Create a new form and set the email where you want to receive submissions.
3. Copy the **Form ID** (the part after `/f/` in the form URL, e.g. `xyzabcde`).
4. Add to your hosting environment: `VITE_FORMSPREE_FORM_ID` = your form ID.
5. **Redeploy** (or restart dev server).

Submissions appear in the Formspree dashboard and can be forwarded to your email.

---

## Priority order

The form tries methods in this order:

1. **Resend API** (if deployed on Vercel and `RESEND_API_KEY` + `NOTIFICATION_EMAIL` are set)
2. **Web3Forms** (if `VITE_WEB3FORMS_ACCESS_KEY` is set)
3. **Formspree** (if `VITE_FORMSPREE_FORM_ID` is set)
4. **Mailto fallback** – opens the visitor's email client (you only get the lead if they send it)

---

## Verify

After configuring and redeploying:

1. Open your site's **Book Now** or **Contact** page.
2. Submit a test request with real data.
3. Check the inbox for the email you configured (and spam/junk the first time).

If you still don't receive anything:

- Double-check variable names and that you redeployed after adding them.
- For Resend: ensure your domain is verified and `FROM_EMAIL` uses that domain.
- Check the browser console (F12) for errors when submitting.

---

## Without any option

If no provider is configured, the form will open the visitor's **email client** (mailto). You only get the submission if they actually send that email. To receive leads reliably, set up Option 1, 2, or 3 above.
