#!/usr/bin/env node
/**
 * Test form submission pipeline.
 * Usage:
 *   node scripts/test-form-submission.js                    # Test against production
 *   node scripts/test-form-submission.js http://localhost:3000  # Test against local dev
 *
 * For local API testing, run `vercel dev` first so /api/submit-form is available.
 */

const baseUrl = process.argv[2] || 'https://www.smartestgaragedoors.com';

async function testForm(formName, data) {
  const url = `${baseUrl.replace(/\/$/, '')}/api/submit-form`;
  console.log(`\n--- Testing: ${formName} ---`);
  console.log(`POST ${url}`);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, formName }),
    });
    let body;
    try {
      body = await res.json();
    } catch {
      console.log('❌ API not available (got HTML – are you deployed to Vercel with the api/ folder?)');
      return false;
    }
    if (res.ok && body.success) {
      console.log('✅ Success – check your inbox for the notification email');
      return true;
    }
    if (res.status === 503) {
      console.log('⚠️  API not configured (503). Add RESEND_API_KEY and NOTIFICATION_EMAIL in Vercel.');
      return false;
    }
    console.log(`❌ Failed: ${body.error || res.statusText}`);
    return false;
  } catch (err) {
    console.log(`❌ Error: ${err.message}`);
    if (err.cause) console.log('   Cause:', err.cause);
    return false;
  }
}

async function main() {
  console.log('Form submission test');
  console.log('Base URL:', baseUrl);

  const contactData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '(555) 123-4567',
    address: '123 Test St, Test City, NY',
    serviceType: 'repair',
    urgency: 'normal',
    message: 'This is a test submission from scripts/test-form-submission.js',
  };

  const bookNowData = {
    name: 'Test Booker',
    email: 'booker@example.com',
    phone: '(555) 987-6543',
    address: '456 Book Ave, Booking, CT',
    serviceType: 'spring-replacement',
    urgency: 'urgent',
    description: 'Test Book Now form submission',
  };

  const apiOk = await testForm('Contact Page Form', contactData);
  await testForm('Book Now Form', bookNowData);

  if (!apiOk && baseUrl.includes('smartestgaragedoors.com')) {
    console.log('\n📋 To enable email notifications on production:');
    console.log('   1. Add RESEND_API_KEY and NOTIFICATION_EMAIL in Vercel → Settings → Environment Variables');
    console.log('   2. Verify your domain at https://resend.com/domains');
    console.log('   3. See FORM_SETUP.md for full instructions');
  }
}

main();
