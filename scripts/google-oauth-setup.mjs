/**
 * ONE-TIME Google Business Profile OAuth setup.
 *
 * WHY: The Business Profile API (unlike the public Places API) returns ALL of
 * our real Google reviews + the true total/average, but it requires OAuth as
 * the business owner. This script does the one-time browser authorization and
 * prints a REFRESH TOKEN we then store in .env.local. After that, the build can
 * fetch reviews unattended forever (the refresh token is long-lived).
 *
 * It also auto-discovers your Business Profile account + location IDs and prints
 * the exact lines to paste into .env.local.
 *
 * RUN:  node scripts/google-oauth-setup.mjs
 *   1. A Google sign-in page opens (or a URL is printed — open it manually).
 *   2. Sign in with the Google account that OWNS the Smartest Garage Doors
 *      listing and approve.
 *   3. This prints GOOGLE_OAUTH_REFRESH_TOKEN + account/location IDs.
 *   4. Paste those into .env.local. Done.
 *
 * REQUIRES in .env.local:
 *   GOOGLE_OAUTH_CLIENT_ID
 *   GOOGLE_OAUTH_CLIENT_SECRET
 * The OAuth client must list  http://localhost:3000  as an authorized redirect URI.
 */
import { createServer } from 'node:http';
import { exec } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const REDIRECT_URI = 'http://localhost:3000';
const PORT = 3000;
const SCOPE = 'https://www.googleapis.com/auth/business.manage';

// ---- tiny .env loader ----------------------------------------------------
function loadEnv(name) {
  const p = join(ROOT, name);
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const key = m[1];
    const val = m[2].replace(/^["']|["']$/g, '');
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadEnv('.env.local');
loadEnv('.env');

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET in .env.local');
  process.exit(1);
}

function openBrowser(url) {
  const cmd =
    process.platform === 'win32' ? `start "" "${url}"` :
    process.platform === 'darwin' ? `open "${url}"` :
    `xdg-open "${url}"`;
  exec(cmd, () => {});
}

const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
authUrl.searchParams.set('client_id', CLIENT_ID);
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('scope', SCOPE);
authUrl.searchParams.set('access_type', 'offline');
authUrl.searchParams.set('prompt', 'consent');

async function exchangeCode(code) {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`token exchange ${res.status}: ${JSON.stringify(json)}`);
  return json;
}

async function discover(accessToken) {
  const auth = { headers: { Authorization: `Bearer ${accessToken}` } };
  const out = [];
  try {
    const aRes = await fetch(
      'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
      auth
    );
    const aJson = await aRes.json();
    const accounts = aJson.accounts || [];
    for (const acc of accounts) {
      const accId = acc.name; // e.g. "accounts/123456789"
      let locs = [];
      try {
        const lRes = await fetch(
          `https://mybusinessbusinessinformation.googleapis.com/v1/${accId}/locations?readMask=name,title,storefrontAddress&pageSize=100`,
          auth
        );
        const lJson = await lRes.json();
        locs = lJson.locations || [];
      } catch { /* ignore */ }
      out.push({ accId, accName: acc.accountName || acc.type || '', locs });
    }
  } catch (e) {
    console.warn('Could not auto-discover accounts/locations:', e.message);
  }
  return out;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);
  const code = url.searchParams.get('code');
  const err = url.searchParams.get('error');
  if (err) {
    res.end(`Authorization failed: ${err}. You can close this tab.`);
    console.error('Authorization error:', err);
    server.close();
    return;
  }
  if (!code) {
    res.statusCode = 400;
    res.end('No code received.');
    return;
  }
  try {
    const tokens = await exchangeCode(code);
    const accounts = await discover(tokens.access_token);

    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>✅ Authorized. Return to your terminal — the refresh token is printed there. You can close this tab.</h2>');

    console.log('\n========================================================');
    console.log('SUCCESS — paste these into .env.local:\n');
    console.log(`GOOGLE_OAUTH_REFRESH_TOKEN=${tokens.refresh_token || '(none returned — re-run; the consent screen must prompt fresh)'}`);

    if (accounts.length) {
      console.log('\n--- Business Profile accounts & locations found ---');
      for (const a of accounts) {
        console.log(`\nAccount: ${a.accId}  ${a.accName ? `(${a.accName})` : ''}`);
        if (!a.locs.length) console.log('  (no locations returned)');
        for (const l of a.locs) {
          const city = l.storefrontAddress?.locality || '';
          console.log(`  Location: ${l.name}  "${l.title || ''}" ${city ? `— ${city}` : ''}`);
        }
      }
      // Suggest the env lines if exactly one account/one location.
      const single =
        accounts.length === 1 && accounts[0].locs.length === 1
          ? accounts[0]
          : null;
      if (single) {
        console.log('\nSuggested (single match auto-detected):');
        console.log(`GOOGLE_BUSINESS_ACCOUNT_ID=${single.accId}`);
        console.log(`GOOGLE_BUSINESS_LOCATION_ID=${single.locs[0].name}`);
      } else {
        console.log('\nPick the right location above, then set:');
        console.log('GOOGLE_BUSINESS_ACCOUNT_ID=accounts/XXXX');
        console.log('GOOGLE_BUSINESS_LOCATION_ID=locations/YYYY');
      }
    }
    console.log('========================================================\n');
  } catch (e) {
    res.statusCode = 500;
    res.end('Error exchanging code — check the terminal.');
    console.error(e);
  } finally {
    setTimeout(() => server.close(), 500);
  }
});

server.listen(PORT, () => {
  console.log(`\nOpening Google sign-in… if it doesn't open, paste this URL into your browser:\n\n${authUrl.toString()}\n`);
  console.log('Sign in with the Google account that OWNS the Smartest Garage Doors listing.\n');
  openBrowser(authUrl.toString());
});
