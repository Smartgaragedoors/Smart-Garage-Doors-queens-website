import GuidePageTemplate from '../../components/feature/GuidePageTemplate';

export default function SecondOpinionPage() {
  return (
    <GuidePageTemplate
      metaTitle="Garage Door Second Opinion | Before You Spend Thousands"
      metaDescription="Told you need a whole new garage door or opener? Send us photos and the other quote — a real technician will tell you honestly whether a $200-$350 repair solves it or replacement genuinely makes sense. Free."
      keywords="garage door second opinion, do I really need a new garage door, garage door replacement second opinion, told I need new garage door, garage door quote too high"
      slug="/second-opinion/"
      heroImage="techDanSmiling"
      badge="Free Second Opinion"
      headline="They Said You Need a New Garage Door. Do You?"
      subheadline="Before you spend thousands, send us photos and the other company's quote. A real technician will tell you honestly whether a repair solves it — or whether replacement genuinely makes sense."
      showWhatsAppHero={true}
      whatsAppMessage="Hi! I was quoted for a garage door replacement and I'd like a second opinion. I can send photos and the quote."
      intro={[
        'It’s one of the most common calls we get: another company came out for a noisy door or a snapped spring, and the visit ended with a quote for a full door replacement or a brand-new opener. Sometimes that quote is right. Often, it isn’t.',
        'Our second opinion is simple: send us photos of your door and the quote you were handed, and a real technician — not a salesperson — tells you what we actually see. If a $200–$350 repair solves it, we’ll say so and quote the repair. If the first company was right and replacement is the smart move, we’ll say that too, plainly, with the reasons.',
        'There’s no fee, no obligation, and no commission-driven incentive to talk you into the bigger ticket. We do this for homeowners across Queens, Brooklyn, Long Island, Westchester, Bergen County, and Fairfield County, and a lot of those second opinions end with a repair instead of a replacement.',
      ]}
      criteria={{
        title: 'Why Our Second Opinion Is Worth Two Minutes',
        cards: [
          {
            title: 'No Commission Pressure',
            description:
              'The technician reviewing your photos isn’t paid more for recommending a replacement. The answer you get is the answer we’d give a family member.',
            icon: 'ri-hand-coin-line',
          },
          {
            title: 'Repair-First Diagnosis',
            description:
              'We start from "what’s the least expensive fix that actually solves this?" — and only move to replacement when the math or the safety picture genuinely demands it.',
            icon: 'ri-tools-line',
          },
          {
            title: 'Honest Answer Either Way',
            description:
              'If the first company was right, we tell you. Sometimes a second opinion confirms the first one — and then at least you know the quote was legitimate.',
            icon: 'ri-chat-check-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'When a Repair Usually Solves It',
          paragraphs: [
            'A surprising number of "you need a new door" and "you need a new opener" verdicts trace back to one fixable part. These are the patterns we see most often in second opinions:',
          ],
          bullets: [
            '"Your springs can’t be repaired." Torsion springs are wear parts — they’re designed to be replaced, not to condemn the door. Spring replacement runs $175–$350, and the door is usually fine.',
            'An opener quoted for full replacement when the gear kit, trolley, or logic board was the actual failure. Opener repairs typically run $150–$350 — a fraction of a new unit plus installation.',
            'One or two bent panels pitched as a reason for a whole new door. On many common door models, individual panels can be replaced or straightened.',
            'A door "off its tracks beyond repair." Off-track doors look dramatic, but realignment with new rollers is a standard repair, generally in the $150–$300 range.',
            'The "lifetime spring" upsell — a premium-priced spring package sold as the only safe option. Quality standard-cycle springs, properly sized and installed with a 1-year parts and labor warranty, serve most homes well.',
          ],
        },
        {
          heading: 'When Replacement Genuinely Makes Sense',
          paragraphs: [
            'Honesty cuts both ways. Sometimes the first company’s recommendation is exactly right, and pretending otherwise would just waste your money on repairs that won’t hold. We’ll tell you replacement is the smart call when we see things like:',
          ],
          bullets: [
            'A door that’s decades old with rust-through at the bottom sections, rotted framing, or delaminating panels — repairing one symptom won’t stop the next one.',
            'Repeated failures: if you’ve paid for two or three repairs on the same door in recent years, the math starts favoring a new door, which begins around $800 for standard models.',
            'An opener with no safety sensors or a non-reversing mechanism. These predate modern safety standards and shouldn’t be kept running over a household with kids or pets.',
            'Structural damage — a vehicle strike that twisted the track framing or racked the door out of square — where a "repair" would really be rebuilding most of the system anyway.',
            'Obsolete hardware with no available parts, where sourcing one-off components costs more than it’s worth.',
          ],
        },
        {
          heading: 'How the Second Opinion Works',
          paragraphs: [
            'Tap the green button to open WhatsApp and send us photos of the door, the part the other company pointed at, and — if you’re comfortable sharing it — the quote itself. The quote helps a lot: it tells us exactly what was recommended and lets us respond point by point.',
            'A technician reviews everything and replies with a plain-English read: here’s what we see in the photos, here’s whether the recommendation matches the damage, and here’s what we’d charge to fix it. If we believe a repair solves it, you get a repair price range. If replacement is genuinely the right call, you get an honest replacement quote with premium parts, clean installation, and a 1-year parts and labor warranty behind it.',
            'If you book a visit, the technician confirms the diagnosis in person and you approve the exact price before any work begins. Same-day appointments are often available — we’ll give you an exact ETA when you call.',
          ],
        },
        {
          heading: 'What to Send Us',
          paragraphs: [
            'Three or four photos are usually enough for a confident read:',
          ],
          bullets: [
            'The full door from outside, showing the whole face and frame.',
            'A close-up of whatever the other company said was the problem — the spring, the panel, the opener, the track.',
            'The opener’s model sticker (on the side or back of the motor unit) if the quote involves the opener.',
            'The written quote or a photo of it, so we can address each line item directly.',
            'One sentence on the symptoms: what the door does, what noise it makes, when it started.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is the second opinion free?',
          answer:
            'Yes. Reviewing your photos and the other company’s quote costs you nothing, and there’s no obligation to book with us afterward. Worst case, you spend two minutes sending pictures and walk away knowing whether your quote was fair.',
        },
        {
          question: 'Will you just tell me I need a new door too?',
          answer:
            'Only if it’s true. Many of the second opinions we give end in a repair, not a replacement — a $175–$350 spring job or a $150–$350 opener repair instead of a four-figure ticket. Our technicians aren’t paid commission on replacements, so there’s no incentive to inflate the diagnosis. When replacement really is the right answer, we explain exactly why so you can verify it yourself.',
        },
        {
          question: 'What should I send you?',
          answer:
            'Photos of the full door from outside, a close-up of the part in question, the opener’s model sticker if an opener is involved, and the other company’s quote if you have it. Add a sentence about the symptoms. That’s usually everything a technician needs for a confident read.',
        },
        {
          question: 'Do you charge to come out?',
          answer:
            'Estimates on new door and opener installations are free. For repair visits, we’ll explain how the service call works when you book — honestly and before you commit, so there are no surprises. The photo review itself never costs anything.',
        },
        {
          question: 'What if the first company was right?',
          answer:
            'Then we’ll tell you that — clearly. A second opinion that confirms the first one still has value: you know the recommendation was legitimate, and you can compare the two quotes on price, parts quality, and warranty. If you’d like our number for the same replacement, we’ll quote it honestly with premium parts and a 1-year parts and labor warranty.',
        },
        {
          question: 'Can you give a second opinion on an opener replacement?',
          answer:
            'Yes — opener replacements are one of the most common things we’re asked to double-check. Send a photo of the opener’s model sticker and describe what it’s doing (humming, clicking, chain moves but door doesn’t, remote dead). Many "replace the opener" verdicts turn out to be a fixable gear kit, trolley, or sensor issue in the $150–$350 range. If the unit really is at end of life, a LiftMaster belt-drive WiFi opener installed runs about $450–$900 depending on the model.',
        },
      ]}
      bottomLine="A garage door replacement is a four-figure decision, and you shouldn’t make it on one company’s word. Send us the photos and the quote — if a repair solves it, you’ll save real money; if replacement is right, you’ll proceed with confidence. Either way, you get a straight answer for free."
      relatedLinks={{
        title: 'Compare Before You Decide',
        links: [
          { label: 'Us vs. Precision Garage Door', href: '/vs-precision-garage-door/' },
          { label: 'Us vs. Overhead Door', href: '/vs-overhead-door/' },
          { label: 'Garage Door Repair', href: '/garage-door-repair/' },
          { label: 'Spring Replacement', href: '/spring-replacement/' },
          { label: 'Garage Door Installation', href: '/garage-door-installation/' },
          { label: 'Free Photo Estimate', href: '/photo-estimate/' },
        ],
      }}
      ctaHeadline="Get a Straight Answer Before You Spend Thousands"
      ctaText="Text us photos and the other quote — a real technician will tell you honestly if a repair solves it. Free, no obligation."
    />
  );
}
