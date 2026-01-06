# Google Reviews Setup Guide

This guide will help you set up Google Places API to display real Google reviews on your website.

## Step 1: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create an API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key

## Step 2: Secure Your API Key (Important!)

**For Production (Recommended):**
- Create a server-side proxy endpoint that calls Google Places API
- This keeps your API key secure and not exposed in the client
- Add the proxy URL to your environment variables: `VITE_GOOGLE_REVIEWS_PROXY_URL=/api/google-reviews`

**For Development:**
- You can use the API key directly in `.env` file
- **Never commit the `.env` file to git!**

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your API key to `.env`:
   ```
   VITE_GOOGLE_PLACES_API_KEY=your_actual_api_key_here
   ```

3. For Vercel deployment:
   - Go to your Vercel project settings
   - Add the environment variable: `VITE_GOOGLE_PLACES_API_KEY`
   - Set the value to your API key

## Step 4: Set API Key Restrictions (Recommended)

1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click on your API key
3. Under "API restrictions", select "Restrict key"
4. Choose "Places API" only
5. Under "Application restrictions", you can:
   - Restrict by HTTP referrer (for web)
   - Add your domain: `https://smartestgaragedoors.com/*`

## Step 5: Create Server-Side Proxy (Production)

For production, create an API endpoint that proxies requests to Google Places API:

### Option A: Vercel Serverless Function

Create `api/google-reviews.ts`:

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJucuPoePGzGMRGWWH9YOmAX4';

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      res.status(200).json({
        reviews: data.result.reviews || [],
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
      });
    } else {
      res.status(400).json({ error: data.error_message || 'Failed to fetch reviews' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

Then add to `vercel.json`:
```json
{
  "functions": {
    "api/google-reviews.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### Option B: Supabase Edge Function

If you're using Supabase, create an edge function that proxies the request.

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the reviews section
3. Check the browser console for any errors
4. Verify reviews are loading correctly

## Cost Information

- **Free Tier**: $200/month credit
- **Places API Details**: ~$17 per 1,000 requests
- **Typical Usage**: For a small business website, you'll likely stay within the free tier
- **Caching**: Reviews are cached client-side to minimize API calls

## Troubleshooting

### Reviews Not Loading

1. Check browser console for errors
2. Verify API key is set correctly in environment variables
3. Ensure Places API is enabled in Google Cloud Console
4. Check API key restrictions aren't blocking your domain

### CORS Errors

- If using direct API calls, you may encounter CORS issues
- Use the server-side proxy approach instead

### Rate Limiting

- Implement client-side caching (already included)
- Consider server-side caching for production

## Support

For issues with:
- **Google Places API**: [Google Cloud Support](https://cloud.google.com/support)
- **Implementation**: Check the code comments in `src/utils/googleReviews.ts`

