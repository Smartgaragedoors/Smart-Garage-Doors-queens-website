# Get form emails in 2 minutes (no login required for visitors)

Right now your Contact and Book Now forms don’t send you an email unless the visitor sends it from their own email client. To get every submission as an email to you, do this once:

---

## Step 1: Get a free Web3Forms key

1. Open **https://web3forms.com**
2. In the box that says “Enter your email”, type **the email where you want to receive leads** (e.g. `info@smartestgaragedoors.com`)
3. Click **“Create Access Key”**
4. Copy the long key they show you (starts with something like `abcd1234-...`)

---

## Step 2: Add the key to your project

Open your **`.env`** file in the project root and add this line (paste your real key):

```env
VITE_WEB3FORMS_ACCESS_KEY=paste_your_key_here
```

So your `.env` might look like:

```env
VITE_PUBLIC_SUPABASE_ANON_KEY="..."
VITE_PUBLIC_SUPABASE_URL="..."
VITE_SITE_URL="https://smartestgaragedoors.com"
VITE_GOOGLE_PLACES_API_KEY=...
VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_from_web3forms
```

Save the file.

---

## Step 3: Rebuild and redeploy

- **Local:** Stop the dev server (Ctrl+C), then run `npm run dev` again.
- **Production (Vercel):** In Vercel → your project → **Settings** → **Environment Variables**, add:
  - Name: `VITE_WEB3FORMS_ACCESS_KEY`
  - Value: (paste the same key)
  Then trigger a new deploy (e.g. push a commit or click Redeploy).

---

## Step 4: Test

1. Open your site’s **Contact** or **Book Now** page.
2. Submit a test message.
3. Check the inbox for the email you used in Step 1 (and spam/junk the first time).

After this, every form submission will send an email to that address. Visitors never have to log into their email.
