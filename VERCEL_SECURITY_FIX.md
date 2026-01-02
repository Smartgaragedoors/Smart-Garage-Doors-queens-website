# How to Fix Vercel Security Checkpoint Issue

## Problem
You're seeing "We're verifying your browser" message every time you visit your website. This is Vercel's DDoS protection (Cloudflare) being triggered.

## Root Cause
Vercel's security checkpoint is controlled by **dashboard settings**, not code. The checkpoint appears when:
- DDoS protection is set too high
- Your IP/location is flagged
- Rate limiting is too strict
- Bot protection is too aggressive

## Solution: Fix in Vercel Dashboard

### Step 1: Access Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. If you see the checkpoint:
   - Try a different network (mobile hotspot)
   - Use incognito/private mode
   - Try a different device
   - Disable VPN if enabled

### Step 2: Navigate to Security Settings
1. Select your project: `Smart-Garage-Doors-queens-website`
2. Click **Settings** (gear icon)
3. Click **Security** or **Protection** in the sidebar

### Step 3: Adjust DDoS Protection
1. Find **"DDoS Protection"** or **"Bot Protection"**
2. Change setting from:
   - **High** → **Low** or **Off**
   - **Medium** → **Low** or **Off**
3. Click **Save**

### Step 4: Adjust Rate Limiting (if available)
1. Find **"Rate Limiting"** settings
2. Increase limits or disable if too strict
3. Click **Save**

### Step 5: IP Allowlist (Optional)
1. Find **"IP Allowlist"** or **"Whitelist"**
2. Add your IP address
3. Note: May require paid plan

## Alternative: Contact Vercel Support

If you can't access the dashboard:

**Email:** support@vercel.com

**Include:**
- Project name: `Smart-Garage-Doors-queens-website`
- Domain: `smartestgaragedoors.com`
- Issue: Security checkpoint appearing for all visitors
- Request: Disable or reduce DDoS protection

## Code Optimizations Applied

I've optimized the code to reduce triggers:

1. **Extended geolocation cache** from 24 hours to 7 days
2. **Added rate limiting** - prevents API calls within 5 minutes
3. **Added request timeout** - 3 second timeout for API calls
4. **Delayed geolocation** - waits 1 second after page load
5. **Environment variable option** - can disable geolocation via `VITE_DISABLE_GEOLOCATION=true`

## Quick Test

After fixing in dashboard, test:
1. Clear browser cache
2. Visit your website
3. Should load without checkpoint

## Important Note

**The security checkpoint CANNOT be disabled via code.** It must be changed in the Vercel dashboard. The code optimizations help reduce triggers but won't eliminate the checkpoint if it's enabled in dashboard settings.

