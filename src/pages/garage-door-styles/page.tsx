import GuidePageTemplate from '../../components/feature/GuidePageTemplate';
import DoorStyleGallery from '../../components/feature/DoorStyleGallery';
import { PRICING, fromPrice } from '../../config/pricing';

/**
 * /garage-door-styles/ — styles & materials buyer's guide. Captures the
 * "which door do I want" cluster that ranked with no page behind it. GSC
 * export, 12 months to 2026-11-23: "steel garage door installation" 145 impr
 * at pos 1.6, "wooden garage doors" 138 at 4.0, "vinyl garage doors" 180 at
 * 7.4, "modern garage doors" 110 at 6.4, "black garage doors" 90 at 6.5,
 * "carriage garage doors" 68 at 9.9, "flush mount garage doors in new york"
 * ~290 at ~11, "garage doors for sale" 183 at 2.3 — ~3,000 impressions across
 * styles, custom and for-sale queries with almost no clicks.
 *
 * Fact discipline: prices only from src/config/pricing.ts. The gallery is
 * DoorStyleGallery (real installs only). Vinyl/fiberglass are described
 * neutrally — the owner hasn't confirmed we install them.
 * TODO(owner): confirm whether we supply vinyl or fiberglass doors.
 */

export default function GarageDoorStylesPage() {
  return (
    <GuidePageTemplate
      metaTitle="Garage Door Styles & Materials | Steel, Wood, Glass"
      metaDescription="Compare garage door styles: steel, wood, wood-look, carriage house, modern flush and full-view glass. Real doors we've installed, with starting prices."
      keywords="garage door styles, steel garage doors, wooden garage doors, wood garage doors, modern garage doors, carriage house garage doors, flush mount garage doors, glass garage doors, black garage doors, vinyl garage doors, garage doors for sale"
      slug="/garage-door-styles/"
      heroImage="doorInteriorWindows"
      badge="Styles & Materials Guide"
      headline="Garage Door Styles & Materials"
      subheadline="Steel, real wood, wood-look, carriage house, modern flush or full-view glass. Here's how they differ in looks, upkeep and price, with real doors we've installed."
      showWhatsAppHero={true}
      whatsAppMessage="Hi — I'm looking at new garage door styles. Can you help me pick one for my house?"
      intro={[
        'Your garage door can take up a third of the front of your house, so the style decision matters more than most people expect. The material decides how much upkeep the door needs, how it handles a Northeast winter and how quiet it runs. The panel design decides whether it suits the house or fights it.',
        'Below are real doors we have installed. You can filter them by style and open any one to see its details. After the gallery is a plain-English comparison of each material and what it costs to have one installed.',
      ]}
      afterIntro={<DoorStyleGallery />}
      costTable={{
        title: 'Starting Prices by Door Type (Installed)',
        caption: 'Starting prices for a standard single residential door, installed. Size, windows, insulation and hardware change the total, which we confirm before any work begins.',
        rows: [
          {
            item: 'Standard steel door',
            range: fromPrice(PRICING.doorFrom),
            notes: 'Raised or flush panels, factory colors; the most common choice',
          },
          {
            item: 'Insulated steel (double-layer)',
            range: fromPrice(PRICING.insulatedDoorFrom),
            notes: 'Steel with a foam core; stiffer, quieter and warmer',
          },
          {
            item: 'Insulated steel (triple-layer)',
            range: fromPrice(PRICING.tripleLayerDoorFrom),
            notes: 'Steel-foam-steel sandwich; the quietest and most dent-resistant steel door',
          },
          {
            item: 'Carriage house / wood-look / full-view glass',
            range: fromPrice(PRICING.carriageCustomFrom),
            notes: 'Decorative overlays, wood-grain composites or aluminum-and-glass',
          },
          {
            item: 'Custom, real wood or premium glass',
            range: fromPrice(PRICING.customDoorFrom),
            notes: 'Built to order: real wood, custom sizes, flush-mount and architectural glass',
          },
        ],
      }}
      criteria={{
        title: 'The Main Garage Door Materials',
        intro: 'Each one, honestly: what it\'s good at and where it falls short.',
        cards: [
          {
            title: 'Steel',
            description: 'The workhorse. Strong, affordable, low upkeep and made in every style from traditional raised panel to modern flush. Insulated steel is the best value for most homes. Its weakness is dents on single-layer doors and rust where the finish gets scratched.',
            icon: 'ri-shield-line',
          },
          {
            title: 'Real Wood',
            description: 'Unmatched warmth and depth, and the natural choice for historic and high-end homes. Wood also needs the most upkeep: it has to be refinished regularly, it is heavy (which affects springs and opener choice) and it costs the most.',
            icon: 'ri-tree-line',
          },
          {
            title: 'Wood-Look Steel & Composite',
            description: 'Steel or composite doors with a wood-grain finish give the look of wood without the refinishing. This is the most popular way to get a carriage-house or natural-wood appearance in our area.',
            icon: 'ri-palette-line',
          },
          {
            title: 'Aluminum & Glass (Full-View)',
            description: 'An aluminum frame with glass or polycarbonate lites. It lets daylight into a garage gym, workshop or showroom and suits modern architecture. Privacy and insulation depend heavily on the glass you choose.',
            icon: 'ri-window-line',
          },
          {
            title: 'Vinyl & Fiberglass',
            description: 'Dent-resistant and won\'t rust, which is why you see them near the coast. They are less common in our area and come in fewer styles. If you are considering one, ask and we will go over whether it fits your house.',
            icon: 'ri-drop-line',
          },
          {
            title: 'Flush-Mount & Custom',
            description: 'Flush-mount doors sit level with the wall around them for a seamless, modern facade, and custom doors are built to a specific size or design. These are architect-driven projects, so we look at the opening and framing before quoting.',
            icon: 'ri-ruler-2-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'Panel Designs: Matching the Door to the House',
          paragraphs: ['The material is only half the decision. The panel pattern sets the look:'],
          bullets: [
            'Short raised panel: the classic look on brick and colonial homes, and the most common door on Queens and Long Island streets',
            'Long raised panel: cleaner horizontal lines that suit ranch, split-level and wider double doors',
            'Flush (flat) panel: smooth and minimal, the go-to for modern and renovated homes, especially in black, charcoal or wood-grain',
            'Carriage house: vertical overlays and decorative hinges that mimic swing-out barn doors while still opening overhead',
            'Full-view glass: mostly glass in an aluminum frame, for contemporary homes and converted garages',
          ],
        },
        {
          heading: 'Color, Windows and Hardware',
          paragraphs: [
            'Color has the biggest effect on curb appeal for the money. Black, charcoal and wood-grain finishes are the most requested modern looks right now. White and almond are still the safe choice on traditional homes. A dark door on a sunny south or west wall gets hotter, so an insulated door is a good pairing.',
            'Windows let light in and break up a large door, but think about privacy and what\'s parked inside. Decorative handles and hinges are what complete a carriage-house look.',
          ],
        },
        {
          heading: 'Things People Forget When Choosing a Door',
          paragraphs: ['A new door also affects the parts around it. Before you choose, check:'],
          bullets: [
            'Weight: wood and heavily insulated doors need springs sized for the new weight, and sometimes a stronger opener',
            'Headroom: low ceilings can limit which tracks and openers fit, which is common in older city garages',
            'Attached garages: insulation makes a real difference to the rooms beside and above the garage',
            'HOA or landmark rules: some communities restrict colors, windows or styles, so check before ordering',
            'Lead time: stock steel doors are quick; custom, wood and glass doors are made to order',
          ],
        },
      ]}
      faqs={[
        {
          question: 'What is the best material for a garage door?',
          answer: 'For most homes in the NY, NJ and CT area it is insulated steel. It\'s strong, low-maintenance, handles winters well and comes in every style. Real wood is the choice when looks come first and you accept the upkeep. Aluminum-and-glass suits modern homes and garages used as living or work space.',
        },
        {
          question: 'Are wood garage doors worth it?',
          answer: 'They can be on historic and high-end homes where nothing else looks right. But real wood costs more, weighs more and needs regular refinishing. Wood-grain steel and composite doors give a very similar look with far less upkeep, which is why most of our customers who want wood choose them.',
        },
        {
          question: 'How much does a new garage door cost?',
          answer: `Installed, a standard steel door starts ${fromPrice(PRICING.doorFrom).toLowerCase()}, insulated steel ${fromPrice(PRICING.insulatedDoorFrom).toLowerCase()}, carriage-house, wood-look and full-view glass doors ${fromPrice(PRICING.carriageCustomFrom).toLowerCase()}, and custom or real-wood doors ${fromPrice(PRICING.customDoorFrom).toLowerCase()}. Size, windows and insulation change the total, and we confirm it before any work begins.`,
        },
        {
          question: 'Do you sell garage doors?',
          answer: 'We supply the door and install it. An installation quote covers removing the old door, installing the new door and tracks, setting up the springs and cables, installing the opener if it\'s included, and testing everything.',
        },
        {
          question: 'What is a flush-mount garage door?',
          answer: 'It\'s a door designed to sit level with the wall around it, so it reads as part of the facade rather than a recessed opening. Flush-mount doors are usually custom projects that depend on the opening and framing, so we look at the site before quoting.',
        },
        {
          question: 'Which garage door style adds the most curb appeal?',
          answer: 'The one that matches the architecture. Carriage-house and long-panel wood-grain doors suit traditional homes. Flush panels in black, charcoal or wood-grain suit modern ones. Adding windows and choosing a color that contrasts with the siding usually makes the biggest difference for the money.',
        },
      ]}
      bottomLine="Choose the panel style that suits your house, then the material that suits your budget and how much upkeep you're willing to do. For most homes that means insulated steel in the right color and pattern, with real wood, glass or a custom door when the house calls for it. Send us a photo of your house and we'll show you what fits."
      relatedLinks={{
        title: 'Related Services & Guides',
        links: [
          { label: 'Garage Door Installation', href: '/garage-door-installation/' },
          { label: 'Garage Door Insulation Guide', href: '/garage-door-insulation/' },
          { label: 'Panel Replacement & Repair', href: '/garage-door-panel-replacement/' },
          { label: 'Pedestrian (Walk-Through) Doors', href: '/pedestrian-garage-doors/' },
          { label: 'Westchester Installation Costs', href: '/garage-door-installation-cost-westchester/' },
          { label: 'Free Photo Estimate', href: '/photo-estimate/' },
        ],
      }}
      ctaHeadline="Not Sure Which Style Fits Your House?"
      ctaText="Text us a photo of the front of your house and we'll suggest styles and colors that suit it, with starting prices and no pressure."
    />
  );
}
