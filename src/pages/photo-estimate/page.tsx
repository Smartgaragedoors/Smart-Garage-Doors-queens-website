import GuidePageTemplate from '../../components/feature/GuidePageTemplate';

export default function PhotoEstimatePage() {
  return (
    <GuidePageTemplate
      metaTitle="Garage Door Photo Estimate | Text Us Photos, Get a Real Price"
      metaDescription="Text 2-3 photos of your garage door and get an honest price range from a real technician — before anyone comes out. Free, no-obligation photo estimates for repairs, springs, openers, and new doors."
      keywords="garage door photo estimate, send photos garage door quote, text pictures garage door repair, garage door estimate without visit, garage door quote by photo"
      slug="/photo-estimate/"
      badge="Free Photo Estimate"
      headline="Text Us Photos. Get a Real Price Before We Come Out."
      subheadline="Snap 2-3 pictures of your garage door, spring, or opener and a real technician — not a bot — replies with an honest assessment and a price range. Free, no obligation, no pressure."
      showWhatsAppHero={true}
      whatsAppMessage="Hi! I'd like a photo estimate — here are pictures of my garage door."
      intro={[
        'Most garage door problems can be diagnosed from a few good photos. A snapped spring, a door that jumped its track, a stripped opener gear, a dented panel — an experienced technician can usually tell what happened and what it costs to fix before setting foot on your driveway.',
        'That’s the whole idea behind our photo estimate. Take two or three pictures with your phone, send them over WhatsApp, and one of our technicians looks at them and replies with what we think is wrong and an honest price range. No visit required, no sales pitch, and no obligation to book.',
        'It works for broken springs, off-track doors, opener problems, damaged panels, and even new-door quotes. Homeowners across Queens, Brooklyn, Long Island, Westchester, Bergen County, and Fairfield County use it as a quick reality check before scheduling anything.',
      ]}
      criteria={{
        title: 'Why Get a Photo Estimate First',
        intro: 'Three things we promise about every photo estimate we send back.',
        cards: [
          {
            title: 'A Real Technician Replies',
            description:
              'Your photos go to a working garage door technician, not a chatbot or a call center script. The person assessing your door is the same kind of person who would fix it.',
            icon: 'ri-user-star-line',
          },
          {
            title: 'Honest Price Range First',
            description:
              'You get a realistic range based on what the photos show — matched to our published pricing. The final number is confirmed in person before any work starts.',
            icon: 'ri-price-tag-3-line',
          },
          {
            title: 'No Obligation, No Pressure',
            description:
              'The estimate is free whether you book with us or not. Use it to budget, to compare another quote, or just to understand what you’re dealing with.',
            icon: 'ri-shield-check-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'How the Photo Estimate Works',
          paragraphs: [
            'There’s nothing to download and no form to fill out. The whole process happens over WhatsApp, the same way you’d text a friend.',
          ],
          bullets: [
            'Step 1: Tap the green button on this page. It opens WhatsApp with a message already started for you.',
            'Step 2: Attach 2-3 photos of your door and the problem area (more on what to shoot below).',
            'Step 3: Add a sentence about what happened — "loud bang, door won’t open" or "opener hums but nothing moves" is plenty.',
            'Step 4: A technician reviews the photos and replies with what we see, what it likely needs, and an honest price range.',
            'Step 5: If the range works for you, we schedule the visit. Same-day appointments are often available — we’ll give you an exact ETA when you call.',
          ],
        },
        {
          heading: 'What Photos to Send',
          paragraphs: [
            'You don’t need professional shots — clear phone photos in decent light are all it takes. Three angles tell us almost everything:',
          ],
          bullets: [
            'The full door from outside, far enough back to see the whole thing. This shows us the door size, panel style, and overall condition.',
            'The broken part up close. The spring above the door, the roller out of its track, the frayed cable, the bent panel — whatever looks wrong, get close to it.',
            'The opener label or model sticker, usually on the side or back of the motor unit hanging from the ceiling. The model number tells us exactly which parts fit.',
            'Bonus for new-door quotes: a shot of the opening from inside the garage so we can see headroom and track configuration.',
          ],
        },
        {
          heading: 'What Happens After You Send Photos',
          paragraphs: [
            'A technician looks at your pictures and writes back with a plain-English read: here’s what we think broke, here’s what the fix involves, and here’s the realistic range. For a snapped torsion spring, that’s typically $175–$350. Most common repairs land between $150 and $300. Opener repairs usually run $150–$350, and if the opener is genuinely done, we’ll say so — a new LiftMaster belt-drive WiFi opener installed runs about $450–$900 depending on the model.',
            'If the photos aren’t enough to be sure — sometimes a problem hides inside the opener housing or behind a panel — we’ll tell you that too, and give you the range of likely outcomes rather than guessing low to win the job. Whatever range we quote, you approve the final price in person before a single bolt comes off.',
          ],
        },
        {
          heading: 'Why Homeowners Prefer Starting With Photos',
          paragraphs: [
            'The obvious reason is the price check: you know roughly what you’re in for before anyone is standing in your garage. There’s no awkward moment where a technician you just let into your home hands you a number you weren’t expecting.',
            'The less obvious reason is that it makes the actual repair faster. When the technician has already seen your spring size, your opener model, and your track setup, they arrive with the right parts on the truck. That usually means the job gets done in one visit instead of a diagnosis trip followed by a parts trip.',
            'And because every repair we do is backed by a 1-year parts and labor warranty, the photo estimate isn’t a watered-down version of service — it’s the same licensed, insured, warranty-backed work, just with the guesswork removed up front.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is the photo estimate really free?',
          answer:
            'Yes — completely free, whether you book with us or not. You send photos, a technician replies with an assessment and a price range, and what you do with that information is up to you. There’s no fee and no obligation.',
        },
        {
          question: 'How accurate is a photo estimate?',
          answer:
            'It’s a range, not a final invoice — and we’re upfront about that. Good photos let us identify the problem and the parts involved, so the range is usually tight. When the technician arrives, they confirm the diagnosis in person and you approve the exact price before any work starts. No surprise add-ons, no work begins without your sign-off.',
        },
        {
          question: 'Can I get a photo estimate for a new garage door?',
          answer:
            'Absolutely. Send a photo of your current door from outside plus a shot of the opening from inside the garage, and tell us roughly what style you’re interested in. We’ll reply with realistic ranges — standard doors start around $800 installed, with insulated, carriage-house, and custom doors running higher — and we can schedule a free in-person measurement when you’re ready.',
        },
        {
          question: 'Do you reply outside business hours?',
          answer:
            'Our emergency line is answered 24/7, and photo replies are usually fast. We don’t promise a specific reply time on WhatsApp, but if your door is stuck open or you’re locked out, call us instead of texting — that’s the quickest path to getting a technician dispatched.',
        },
        {
          question: 'What if I don’t use WhatsApp?',
          answer:
            'No problem. You can call us and describe the issue, or use the booking form on this site to schedule a visit directly. WhatsApp is just the fastest way to get photos in front of a technician — it’s not the only way to reach us.',
        },
        {
          question: 'Will the price change when you arrive?',
          answer:
            'The range we send is the range we stand behind. On arrival, the technician confirms the diagnosis, gives you the exact price within that range, and you approve it before any work begins. If we find something the photos couldn’t show, we explain it and re-quote before touching anything — you’re never billed for work you didn’t approve.',
        },
      ]}
      bottomLine="If your garage door is acting up, the fastest way to an honest answer is two or three photos. A real technician will tell you what’s wrong and what it costs to fix — free, before anyone comes out. Tap the green button, send the pictures, and you’ll know where you stand."
      relatedLinks={{
        title: 'Popular Services',
        links: [
          { label: 'Emergency Garage Door Repair', href: '/emergency-garage-door-repair/' },
          { label: 'Spring Replacement', href: '/spring-replacement/' },
          { label: 'Opener Repair & Installation', href: '/opener-repair-installation/' },
          { label: 'Garage Door Repair', href: '/garage-door-repair/' },
          { label: 'Garage Door Installation', href: '/garage-door-installation/' },
          { label: 'Book Now', href: '/book-now/' },
        ],
      }}
      ctaHeadline="Get Your Free Photo Estimate"
      ctaText="Send 2-3 photos and get an honest price range from a real technician. Same-day appointments often available — exact ETA when you call."
    />
  );
}
