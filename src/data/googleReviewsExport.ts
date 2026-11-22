/**
 * Real Google reviews for the location pages — word for word.
 * ------------------------------------------------------------
 * Source: the Queens (Flushing) Google Business Profile's own review manager,
 * read by hand on 2026-11-22 (502 reviews, all 5-star, 466 with text). The
 * Suffern profile (157 reviews) was checked the same day; none of its reviews
 * name a town we have a page for that its own page doesn't already cover.
 *
 * Why this file exists next to googleReviews.generated.json: the synced file
 * holds only the 12 newest reviews, and none of them name a town. Location
 * pages had shown no reviews at all since the invented ones were removed.
 *
 * Rules (brain 08 "Truth & claims"):
 *  - `text` is the customer's own words, unedited — typos included. Only
 *    Google's add-on chips ("Great price", "Services: …") are left off.
 *  - `author` is the name as Google shows it, cut to first name + last initial.
 *  - `place` is the place the customer named in their own review. Never tag a
 *    review with a town the customer didn't write.
 *  - Never add a review that isn't on the Google profile, never change a word,
 *    never add a price ("$") or "24/7" from a review (pricing + Ads rules).
 *  - `posted` is the month Google showed (exact dates, or "N weeks ago"
 *    counted back from 2026-11-22). Kept for maintenance; not displayed.
 *
 * Left out on purpose: reviews with prices, reviews that mention other
 * platforms or competitors by name, the few mixed ones, and a group from late
 * 2025 that read alike and repeat search phrases.
 */

export interface ExportedReview {
  id: string;
  author: string;
  text: string;
  posted: string;
  /** The place the customer named, written for display (e.g. "Melville, NY"). */
  place?: string;
}

/** Reviews whose text names a place we serve. */
const PLACE_REVIEWS: ExportedReview[] = [
  { id: 'q006', author: 'Nina B.', posted: 'Oct 2026', place: 'Flushing, Queens', text: "Exceptional service and for best price\nI'm located in flushing and Daniel was by me within 10 min and repaired my opener without having to replace and fixed my door and gave me a new remote\nI told him him I was retired and he gave me a discount even after he completed the service" },
  { id: 'q008', author: 'D Family', posted: 'Oct 2026', place: 'Flushing, Queens', text: 'Nice guys have me a few options\nDaniel explained it all nicely to me and made my door smoother in flushing' },
  { id: 'q288', author: 'Abe D.', posted: 'Jun 2025', place: 'Flushing, Queens', text: 'Opener really good daniel installed in Flushing' },
  { id: 'q078', author: 'Susan T.', posted: 'Feb 2026', place: 'St. Albans, Queens', text: "Im selling my house in saint albans and it wasn't passing inspection. I called these kind men from smart garage doors and the owners Daniel and Ben themselves came out and shoveled my snow and got the door back to working again and for a good price I've gotten estimates from other companies and these guys are by far the best in service speed cost and quality" },
  { id: 'q200', author: 'Jimmy R.', posted: 'Aug 2025', place: 'Richmond Hill, Queens', text: 'Daniel Came Immediately to my place in Richmond Hill easy to communicate with very knowledgeable' },
  { id: 'q268', author: 'Michael H.', posted: 'Jul 2025', place: 'Ozone Park, Queens', text: 'I got a smart camera belt drive motor/ opener installed in ozone Park and I must say Daniel is a very sweet man and was able to install it for a very fair price and did a great job' },
  { id: 'q291', author: 'Devraj S.', posted: 'Jun 2025', place: 'Queens', text: 'I had to fix broken garage door and Daniel was first to come and installed me a new garage door opener with Wi-Fi\nHe did garage door repair in queens' },
  { id: 'q106', author: 'Ronald L.', posted: 'Jan 2026', place: 'Fresh Meadows, Queens', text: 'Great modern door and been set up here in fresh meadows ny' },
  { id: 'q066', author: 'Ayesha A.', posted: 'Feb 2026', place: 'Glen Head, Long Island', text: 'My garage door cable ripped in my spring fell off. I called smart garage doors and they came out instantly. I had Daniel as a technician. He did a phenomenal job. I’m out in Glenn head Long Island. The job was done promptly.' },
  { id: 'q090', author: 'Guadalupe M.', posted: 'Jan 2026', place: 'Melville, NY', text: 'My garage door spring broke in Melville NY and Daniel was out within the hour to fix it and for a great price' },
  { id: 'q085', author: 'Leonard S.', posted: 'Jan 2026', place: 'Lake Grove, NY', text: 'Daniel was amazing and so polite. He actually didn’t have to come here at all to Lake Grove, New York. He walked me through what to do in order to fix my garage door. It was such an easy fix. How many contractors do you know that would do that? He spent time on the phone with me and didn’t even make a dime.' },
  { id: 'q158', author: 'Mathew K.', posted: 'Oct 2025', place: 'New Hyde Park, NY', text: 'My old Raynor garage door opener stopped working. Daniel was doing work by my neighbor and asked him to take a look and he offered to replace the opener at a fair price. Did a great job connected it to my phone to now I have two remotes a keypad and I can open the door from anywhere using my phone. I am located in new Hyde Park. Really happy with the service totally.' },
  { id: 'q159', author: 'Abraham Y.', posted: 'Oct 2025', place: 'New Hyde Park, NY', text: 'Great service repairing My garage door in New Hyde Park\nI did a spring replacement and rollers replacement by Daniel and my door is alot smoother now. He even replaced one of my rusty pulling for free' },
  { id: 'q234', author: 'Cheri D.', posted: 'Aug 2025', place: 'Suffolk County, NY', text: 'This door cable snapped and smart garage doors came out to my house in Suffolk because they’re very good I’ve heard great things about them and I’m really happy that I hired them Daniel was my technician he did amazing and very affordable compared to other companies' },
  { id: 'q244', author: 'Mikayla R.', posted: 'Aug 2025', place: 'Long Beach, NY', text: 'Out on Long Beach the system gets rusty Dan did a great job on fixing my door opener and replacing sensors' },
  { id: 'q308', author: 'Michelle K.', posted: 'Jun 2025', place: 'Freeport, NY', text: 'Had Daniel from smart garage doors come repair my door he ended up giving me a great price on an opener installation and garage door repair in Freeport\nI recommend to you all my friends' },
  { id: 'q314', author: 'Skye T.', posted: 'May 2025', place: 'Westbury, NY', text: 'My garage door stopped working Daniel was able to fix my garage door and repair my opener without having to replace he was very honest and gave me multiple options\nI’m out in Westbury and he was here within 15 min really good service' },
  { id: 'q300', author: 'Swaminatha G.', posted: 'Jun 2025', place: 'New Canaan, CT', text: 'Daniel helped fix my garage door in New Canaan, CT. Great job!' },
  { id: 'q216', author: 'Micha', posted: 'Aug 2025', place: 'Englewood, NJ', text: 'Great service done for me in Englewood NJ' },
];

/**
 * Location page → reviews that name a place inside that page's area, best
 * first (max 6 shown). A page missing here falls back to its own `reviews`
 * prop (Suffern: its own profile's reviews), then to COMPANY_REVIEWS.
 * Fresh Meadows is listed ahead of its page (branch feat/core-local-pages-2026-11).
 */
const PAGE_PLACE_REVIEWS: Record<string, string[]> = {
  '/queens-ny/': ['q078', 'q200', 'q268', 'q106', 'q291', 'q006'],
  '/flushing-ny/': ['q006', 'q288', 'q008'],
  '/fresh-meadows-ny/': ['q106'],
  '/long-island-ny/': ['q066', 'q090', 'q314', 'q244', 'q234', 'q158'],
  '/nassau-county-ny/': ['q066', 'q314', 'q244', 'q308', 'q158', 'q159'],
  '/suffolk-county-ny/': ['q234', 'q090', 'q085'],
  '/new-canaan-ct/': ['q300'],
  '/bergen-county-nj/': ['q216'],
};

/**
 * Company-wide reviews for pages with fewer than three place reviews. Shown
 * as "Google review" with no town — never presented as coming from the page's
 * town. Chosen for concrete detail (the part, the technician, what was done).
 */
export const COMPANY_REVIEWS: ExportedReview[] = [
  { id: 'q005', author: 'Gloria C.', posted: 'Oct 2026', text: 'My wooden garage door has seen its time and we’re starting to come apart I did some research and I found smart garage doors. Daniel was kind enough to offer me a new door but also an option to repair what I had and was able to patch it up so that rain doesn’t come in and that the door won’t feel heavy he replaced the springs pulleys cables and rollers adjusted my track that was bent. Applied some plywood on the back to seal off the wind and installed my opener that I had purchased.' },
  { id: 'q012', author: 'Dierdre K.', posted: 'Aug 2026', text: 'Ben, Esteban and their team did a great job replacing 2 old wooden garage doors with one modern motorized unit. They were professional, and completed the job in a timely manner. I would recommend them to anyone looking for garage door services.' },
  { id: 'q014', author: 'Nezam', posted: 'Aug 2026', text: 'Ben of Smart Garage Door is a fine gentleman.i needed a quote for a MyQ garage door opener. He was very prompt and knowledgeable. Great service and professionalism.' },
  { id: 'q020', author: 'Eric L.', posted: 'Jul 2026', text: 'Ben was great - very professional and fixed the issue with our garage door very quickly and without any fuss. Gave us alternative solutions and was reasonably priced.\nHighly recommended.' },
  { id: 'q024', author: 'Mable P.', posted: 'Jun 2026', text: 'They answered the phone on the first call. They listened to my issue. Were able to come same day to assess the problem. Was friendly and professional in answering all our questions and concerned being our first time requesting garage repairs/replacement.\nThey were able to fit us into their schedule within two days. They arrived on time and worked quickly. Got the job done in less than an hour and a half.\nThey seem professional. I would highly recommend them.' },
  { id: 'q030', author: 'Mr. Arzu', posted: 'Apr 2026', text: 'Ben did an excellent job fixing the garage door stripping at our new home. The door came with some damage, and the original stripping wasn’t flush, leaving a gap that let cold air in during the winter. Ben was incredibly knowledgeable, easy to talk to, and explained everything clearly. The final result looks great and has already made a big difference. Highly recommend his work.' },
  { id: 'q037', author: 'Tamara T.', posted: 'Mar 2026', text: "Good company. They did a great job with the installation. I had everything but the doors and rails replaced. I went from noisy chain openers to belt. Anyway, I'm very happy with their work and professionalism." },
  { id: 'q038', author: 'Jacob B.', posted: 'Mar 2026', text: "I called them. They got there within an hour explain the problem clearly told me the fix. Told me the price. I confirmed the price and then fixed. It doesn't get better than that" },
  { id: 'q048', author: 'Matthew O.', posted: 'Mar 2026', text: 'Luca was great. Nice guy and overall we are very happy that we installed a new motor. The first thing he came in and checked everything to see if there was anything we would need. and was very honest.. Wich I appreciated. Honesty goes long way, highly recommend this company and especially Luca' },
  { id: 'q056', author: 'Fraidy M.', posted: 'Mar 2026', text: 'I was skeptical at first as usual before hiring a company to do any work by my place and Dan came out promptly and explained everything very nicely and made the whole installation process very smooth and was done same day. I have my garage door system replaced and an opener installed and now I can have unlimited remotes on my phone and share access to anyone I want. Very happy with the service' },
  { id: 'q064', author: 'Tina C.', posted: 'Feb 2026', text: 'Garage doors were something I never thought I’d have to understand but Daniel explained it all to me to a point where everything made sense and not only did I get the job done, I have a better understanding on garage doors and learned how to maintain the system' },
  { id: 'q067', author: 'Ahmed B.', posted: 'Feb 2026', text: 'Smart Garage Doors did an outstanding job from start to finish. I reached out on very short notice to replace an old, non-standard garage door, and they handled everything seamlessly. Despite the size not being standard, they were able to find a matching door in stock and moved quickly to get it installed the very next day.\n\nThe whole process was smooth, fast, and professional—and the result looks fantastic. Huge thanks to the team for going above and beyond. I’d absolutely hire them again.' },
  { id: 'q077', author: 'Gavin R.', posted: 'Feb 2026', text: "My parents' garage door has been broken for months. They're both older and dealing with a lot, so the door hasn't been addressed. Seeing my dad struggle to open the door and prop it up with a piece of wood was the last straw. I called Smart Garage Door after reading Google reviews. Daniel arrived the same day, offered an affordable option that fit their budget, and fixed the door within 30 minutes. We’re incredibly grateful." },
  { id: 'q095', author: 'Kevin T.', posted: 'Jan 2026', text: 'The garage door cables were jammed and loose. I called Smart Garage Doors the same day, and a technician arrived within two hours. Ben was friendly, professional, and knew exactly what he was doing. He fixed the issue quickly and explained everything clearly. Great service and fast response' },
  { id: 'q099', author: 'James B.', posted: 'Jan 2026', text: 'my garage door opener broke and I had Daniel inspect it and replace it on the same day very happy with the service\nDependable fast and efficient' },
  { id: 'q116', author: 'Mauroof A.', posted: 'Jan 2026', text: 'Ben gave me options for either installing a brand new door or fixing the gaps and the weather strips on the existing door. Given my budget I went with fixing. Ben did a great job in explaining what he was going to do, what other options I had and things I can consider for keeping the garage door in good condition. He did the work efficiently and with care. He adjusted the closing and replaced the weather strips and also helped closed some gaps on the molding. I’d recommend their services.' },
  { id: 'q117', author: 'Tom S.', posted: 'Jan 2026', text: 'Wonderful service! Accurate and quick diagnosis of problem with sensors. Explained everything and provided options without pressure to upsell.\nImprovised replacement of sensors.\nRep Luka was professional throughout and a credit to Smart Garage.\nT. Sartain' },
  { id: 'q148', author: 'Janette C.', posted: 'Nov 2025', text: 'Highly recommend Smart Garage Doors. Luke explained everything in detail, before you know it, we had a new motor installed! Courteous and professional!' },
  { id: 'q150', author: 'Yogesh S.', posted: 'Nov 2025', text: 'Daniel from Smart Garage Doors was a pleasure to work with. He is a calm, confident professional. He replaced my garage dooe rollers and sensors in half hour and did it in a way that would make me recommend him to any neighbor. Great experience.' },
  { id: 'q153', author: 'Jacob G.', posted: 'Oct 2025', text: 'I reached out for installation of a new opener and Luka came out very quickly and installed in efficiently and expertly. Price was very reasonable and Luka pointed out that my springs needed to be replaced but was not pushy about the job and was able to add that on the spot again at a reasonable price. Garage door works great now and it only took 1.5 hours start to finish! Will use again for sure!' },
  { id: 'q162', author: 'Tamar N.', posted: 'Sep 2025', text: 'Our garage door spring broke and we couldn’t get the cars out. I was stressed, but Dan came within a couple hours and got it working. He was friendly, didn’t try to upsell me, and the door now runs smoother than before it broke. Really glad I called them.' },
  { id: 'q183', author: 'Paul G.', posted: 'Sep 2025', text: "My door started getting heavier and I'm unable to lift it I had Daniel came over explain to me all the options I had to Install the opener\nI didn't have much Headroom above my door he gave me a few options I can work with. Explained it very well." },
  { id: 'q198', author: 'Adrian B.', posted: 'Aug 2025', text: 'Amazing team work By Ben and Dan\nReach out to them, and less than under 3 hrs Dan arrived and replaced by my garage system and installed this fantastic motor in my garage\n\nWith this kind of service, they will forever be my first call\n\nThank you guys for make this day possible' },
  { id: 'q222', author: 'Mordy T.', posted: 'Aug 2025', text: 'My garage door was out of commission and Dan Ben and Luka all came To lift it up and put it back on track installed new springs and gave me a great discount for an opener' },
  { id: 'q228', author: 'Michael C.', posted: 'Aug 2025', text: 'My garage door motor wasn’t working it kept getting stuck and Daniel gave me a camera motor for very good value and I’m super happy with the outcome from smart garage doors' },
  { id: 'q243', author: 'Geoffrey Q.', posted: 'Aug 2025', text: 'Ben came by in the afternoon and gave me a great price to switch my spring rollers and motor. I had three other companies come out and he beat all the prices. I highly recommend them the very honest and very responsive.' },
  { id: 'q364', author: 'Aravinth C.', posted: 'Aug 2024', text: 'Excellent installation service for our new garage door opener! Daniel and his team was punctual, professional, and efficiently completed the job, ensuring everything worked perfectly. Highly recommend their services for anyone needing a reliable and quick garage door opener installation' },
  { id: 'q365', author: 'Richard S.', posted: 'Jul 2024', text: 'Installation of the new garage motor was seem less. Dan and team were friendly and explained everything we needed to do to ensure our garage door will last for the years to come. They showed up on time and were very courteous. We recently called with a question and Dan called us and walked us through to answer it. Highly recommend!' },
  { id: 'q398', author: 'Steve E.', posted: 'Jun 2024', text: 'These three guys Dan avi and Ben came over and installed my garage door and a brand new opener for me they did a great job and stayed late till they Finished' },
  { id: 'q435', author: 'Aldo B.', posted: 'Mar 2024', text: 'Dan was here and replaced my whole system and a new smart opener that has wifi and it’s now connected to my phone he did a great job! Thank you Dan' },
  { id: 'q438', author: 'Gaurav G.', posted: 'Mar 2024', text: 'Dan and Mike did a great job walking me through replacing the garage door system and motor for a garage door that was towards the end of its life. They talked me through setting up a garage door code for a newly installed keypad as well. So far everything is working really well and I would recommend them to others.' },
  { id: 'q448', author: 'Charlene C.', posted: 'Feb 2024', text: 'My garage door was acting wonkey for some time now so I got smart garage doors to come our and give me an estimate and Dan and his team were able to get the job done on the spot\nThey installed a quiet belt opener and connected my phone to wifi now I can open my garage from anywhere in the world!\nThank you' },
  { id: 'q468', author: 'Moshe T.', posted: 'Dec 2023', text: 'I had a terrific experience with Daniel. Called with a broken garage door opener on Thanksgiving weekend and he responded right away and came down around an hour later. He was knowledgeable, experienced and helpful. He offered several options all very clearly spelled out. Seems very honest too. I would definitely recommend him/them highly.' },
  { id: 'q469', author: 'Anite T.', posted: 'Nov 2023', text: 'I called smart garage doors to install a new opener for me because my old one was making noise and wasn’t working properly. Daniel inspected the door and immediately found the source of the problem and gave me a discount for repairing the door and replacing the opener\nGreat job!' },
  { id: 'q477', author: 'Maria F.', posted: 'Nov 2023', text: "Daniel was wonderful installed garage door opener and replaced my system and I didn't have to wait too long he did it in great timing and did a great job too.\nThank you smart garage doors!" },
  { id: 'q487', author: 'Wan L.', posted: 'Oct 2023', text: 'Awesome job at a very reasonable price. I was told to replace the entire panel by another company. I decided to give another try with Smart Garage Doors and am so happy that Ben was able to just fix it on the spot. I definitely recommend him.' },
  { id: 'q498', author: 'Yusuf H.', posted: 'Sep 2023', text: 'Dan dropped by within an hour or two with competitive rates and replaced the extension springs on my garage door. Learned a few things speaking to Dan as he fixed the door. Quick service!' },
];

export interface DisplayReview {
  key: string;
  author: string;
  text: string;
  /** Under the name: "Google review · Melville, NY" or "Google review". */
  label: string;
}

const byId = new Map(PLACE_REVIEWS.map((r) => [r.id, r]));

function toDisplay(r: ExportedReview, withPlace: boolean): DisplayReview {
  return {
    key: r.id,
    author: r.author,
    text: r.text,
    label: withPlace && r.place ? `Google review · ${r.place}` : 'Google review',
  };
}

/** Small stable string hash so each page gets its own, unchanging picks. */
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * Reviews that name a place inside this page's area (max 6). The template only
 * titles the section "What {city} customers say" when it has three or more.
 */
export function getPlaceReviews(slug: string): DisplayReview[] {
  return (PAGE_PLACE_REVIEWS[slug] ?? [])
    .map((id) => byId.get(id))
    .filter((r): r is ExportedReview => !!r)
    .slice(0, 6)
    .map((r) => toDisplay(r, true));
}

/** Three company-wide reviews, spread across the list so neighbouring pages differ. */
export function getCompanyReviews(slug: string, count = 3, exclude: string[] = []): DisplayReview[] {
  const pool = COMPANY_REVIEWS.filter((r) => !exclude.includes(r.id));
  if (pool.length === 0) return [];
  const step = Math.max(1, Math.floor(pool.length / count));
  const start = hashSlug(slug) % pool.length;
  const picks: DisplayReview[] = [];
  for (let k = 0; k < count && k < pool.length; k++) {
    const r = pool[(start + k * step) % pool.length];
    if (r) picks.push(toDisplay(r, false));
  }
  return picks;
}
