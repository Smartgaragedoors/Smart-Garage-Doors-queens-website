import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const GOOGLE_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY') || Deno.env.get('VITE_GOOGLE_PLACES_API_KEY');
    const PLACE_ID = 'ChIJucuPoePGzGMRGWWH9YOmAX4';

    if (!GOOGLE_API_KEY) {
      throw new Error('Missing GOOGLE_PLACES_API_KEY');
    }

    // Fetch place details including photos
    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,photos&key=${GOOGLE_API_KEY}`;
    
    const placeResponse = await fetch(placeDetailsUrl);
    const placeData = await placeResponse.json();

    if (placeData.status !== 'OK') {
      throw new Error(`Google API error: ${placeData.status}`);
    }

    const result = placeData.result;
    
    // Process photos
    const photos = result.photos?.slice(0, 6).map((photo: any) => ({
      url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${GOOGLE_API_KEY}`,
      attribution: photo.html_attributions?.[0] || ''
    })) || [];

    // Process reviews
    const reviews = result.reviews?.map((review: any) => ({
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      profilePhoto: review.profile_photo_url
    })) || [];

    return new Response(
      JSON.stringify({
        name: result.name,
        rating: result.rating,
        photos,
        reviews
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});