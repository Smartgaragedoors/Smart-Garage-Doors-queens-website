import GuidePageTemplate from '../../components/feature/GuidePageTemplate';

/**
 * /garage-door-storm-preparation/ — a public-safety resource page, written to
 * replace dead garage-door storm links on government pages (2026-11-25 research):
 * seven National Weather Service hurricane pages and the CT Department of Public
 * Health "Before a Hurricane" page link to retired FLASH URLs (protect.php,
 * peril_hurricanes.php, emergency_boardup.pdf), and the NJ OEM and NY DFS storm
 * pages mention garage doors without linking a guide.
 *
 * Rules for this page (resourceMode): no prices, no sales pitch, no arrival
 * promises; every outside fact is attributed and listed in `sources` (all
 * checked live 2026-11-25). FEMA and CPSC pages block automated checks, so they
 * are not cited until someone confirms the exact URLs by hand.
 */

export default function GarageDoorStormPreparationPage() {
  return (
    <GuidePageTemplate
      resourceMode
      metaTitle="Garage Door Storm Prep: Hurricanes & Nor'easters"
      metaDescription="Protect your garage door before a hurricane or nor'easter in NY, NJ and CT: check the hardware, brace it safely, know the manual release, and what to do after."
      keywords="garage door hurricane preparation, brace garage door hurricane, garage door nor'easter, wind rated garage door, garage door storm damage, secure garage door storm"
      slug="/garage-door-storm-preparation/"
      badge="Storm Preparation Guide"
      headline="Securing Your Garage Door Before a Hurricane or Nor'easter"
      subheadline="A plain-language checklist for homeowners in New York, New Jersey and Connecticut: why the garage door matters in high wind, what to check before a storm, and what to do after it."
      reviewedBy="Reviewed by Dan, co-owner and garage door technician at Smart Garage Doors (licensed in NYC, registered in NJ and CT). Last reviewed November 2026."
      intro={[
        'The garage door is usually the largest opening in a house, and often the weakest. When it fails in high wind, the wind can rush inside and push on the roof and walls from within. The Federal Alliance for Safe Homes (FLASH), a national nonprofit, reports that post-storm damage investigations show more than 90% of house damage in severe wind events begins when a garage door separates from its mounting, collapses or caves in.',
        'The Northeast does not see a hurricane every year, but storms like Irene in 2011 and Sandy in 2012, and the nor\'easters that reach the region most winters, bring winds strong enough to bend a garage door with worn rollers, loose track bolts or no reinforcement.',
        'This guide covers what you can safely check yourself, what needs a professional, and what to do once the storm has passed. It is general safety information. For evacuation orders and local instructions, follow your local emergency management office.',
      ]}
      sections={[
        {
          heading: 'Before Storm Season: Check the Hardware',
          paragraphs: [
            'A door is only as strong as what holds it to the house. Wind failures often start at the connections, meaning the track brackets, hinges and rollers, rather than the panels themselves. These checks take a few minutes and need no tools.',
          ],
          bullets: [
            'Look at the vertical tracks on both sides. The bolts holding them to the wall should be tight, and the track should not shift when you push it by hand.',
            'Check the rollers and hinges. Cracked, wobbly or badly rusted rollers and hinges are weak points in strong wind.',
            'Close the door and make sure it comes down fully and evenly, with the bottom seal touching the floor all the way across.',
            'If your door has reinforcement struts (horizontal bars across the inside of the sections), make sure none are bent, loose or missing.',
            'Leave the springs, cables and bottom brackets alone. They are under high tension and can cause serious injury. Adjusting them is a job for a trained technician.',
          ],
        },
        {
          heading: 'Is Your Door Wind-Rated?',
          paragraphs: [
            'Doors built for high wind are tested to a wind-load standard (ANSI/DASMA 108 is the common one) and usually carry a proof-of-compliance label. FLASH describes it as a yellow or white sticker that lists the design pressure in pounds per square foot (PSF). Some doors are also rated to resist impact from windborne debris.',
            'If you cannot find a label, take a photo of the door, including the inside of the end sections, and ask the manufacturer or a garage door company to identify it. FLASH also notes that single-car doors usually resist wind better than wide two-car doors, and that doors without glass do better unless the glass is impact-resistant.',
            'Building codes set the wind requirements for new and replacement doors, and the required rating depends on where you live, with higher requirements in many coastal areas. If you are replacing a door, ask your local building department what applies to your address.',
          ],
        },
        {
          heading: 'Bracing: What It Does and What It Does Not',
          paragraphs: [
            'Garage door bracing kits add vertical posts or extra horizontal struts that keep the door from bowing inward under wind pressure. Some are installed permanently; others go up before a storm and come down afterward.',
            'Bracing helps against wind pressure, but it does not make an ordinary door impact-resistant, and a brace installed the wrong way can damage the door or its tracks. Use a kit made for your door\'s size and model, follow the manufacturer\'s instructions, and do not drill into the door\'s struts or the spring hardware.',
          ],
          bullets: [
            'Unplug the opener while any brace is in place, so nobody runs the motor against it.',
            'Do not tie anything to the door or use it as an anchor, and do not lean heavy objects against it from inside.',
          ],
        },
        {
          heading: 'When a Storm Is Forecast: Checklist',
          paragraphs: [
            'Once a hurricane or strong nor\'easter is in the forecast:',
          ],
          bullets: [
            'Close the garage door fully and keep it closed until the wind has died down.',
            'Put up any temporary bracing you already own, then unplug the opener.',
            'Find the opener\'s manual release (usually a red cord hanging from the rail) and know how to use it if the power goes out. Pull it only with the door fully closed: a door with a broken spring can drop fast if it is released while open.',
            'Move bikes, tools and anything else that could be thrown around away from the inside of the door.',
            'Park so the car is not touching the door. If flooding is possible, follow your local emergency management office\'s guidance on moving vehicles and valuables.',
            'Take photos of the door and the garage before the storm. They help with an insurance claim later.',
          ],
        },
        {
          heading: 'After the Storm',
          paragraphs: [
            'A door that survived the wind can still be damaged in ways that make it unsafe to run.',
          ],
          bullets: [
            'Do not run the opener on a door that is dented, off its track or hanging crooked. Forcing it can bend the door further or snap a cable.',
            'Stay clear of broken springs and loose cables, and keep children and pets away from the door until it has been checked.',
            'If water reached the opener or its outlet, leave the opener unplugged until it has been checked.',
            'Photograph any damage before repairs begin, and contact your insurer.',
            'Before using a door that still works every day, test that it reverses when it meets an obstruction and when the safety sensor beam is blocked.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Should I open the garage door during a hurricane to relieve pressure?',
          answer: 'No. Keep it closed. The old idea of opening doors or windows to "equalize pressure" is outdated; an open garage door lets wind and rain straight into the house.',
        },
        {
          question: 'Can I brace my garage door with plywood or lumber?',
          answer: 'Homemade bracing is risky. It can bend the tracks or put extra load on the spring hardware. A kit made for your door, installed according to its instructions, is safer. If you are not sure what your door can take, ask a garage door technician before the storm season.',
        },
        {
          question: 'How do I open my garage door when the power is out?',
          answer: 'With the door fully closed, pull the opener\'s manual release (usually a red cord on the rail), then lift the door by hand. If it feels very heavy or will not stay up, a spring may be broken. Stop lifting, lower it carefully, and have it checked.',
        },
        {
          question: 'How do I know if my garage door is wind-rated?',
          answer: 'Look for a manufacturer\'s label, typically a yellow or white sticker on the door, that lists the design pressure in PSF. No label usually means no proof of a rating; a photo of the door sent to the manufacturer or a garage door company can help identify it.',
        },
      ]}
      bottomLine="Most storm damage to a garage starts with worn hardware or an unreinforced door. Check the connections before the season, keep the door closed during the storm, unplug the opener while a brace is up, and have anything bent or broken checked before you use the door again."
      sources={[
        { title: 'Strengthen Your Garage Door', publisher: 'Federal Alliance for Safe Homes (FLASH)', href: 'https://flash.org/strengthen-your-garage-door/' },
        { title: 'Protect Your Home', publisher: 'Federal Alliance for Safe Homes (FLASH)', href: 'https://protect-your-home.org/' },
        { title: 'Strengthen Your Home Against Hurricanes', publisher: 'National Weather Service', href: 'https://www.weather.gov/wrn/hurricane-strengthen-home' },
        { title: 'Get Ready for Hurricane Season', publisher: 'National Hurricane Center', href: 'https://www.nhc.noaa.gov/prepare/ready.php' },
        { title: 'Hurricanes', publisher: 'Ready.gov (FEMA)', href: 'https://www.ready.gov/hurricanes' },
        { title: 'Hurricane Safety Tips', publisher: 'NYC Emergency Management', href: 'https://www.nyc.gov/site/em/ready/hurricane-safety-tips.page' },
        { title: 'Storm Preparedness for Homeowners', publisher: 'New York State Department of Financial Services', href: 'https://www.dfs.ny.gov/consumers/help_for_homeowners/storm_preparedness' },
        { title: 'Hurricanes', publisher: 'New Jersey Office of Emergency Management', href: 'https://www.nj.gov/njoem/plan-prepare/hurricanes.shtml' },
        { title: 'Before a Hurricane', publisher: 'Connecticut Department of Public Health', href: 'https://portal.ct.gov/dph/communications/hurricanes/before-a-hurricane' },
      ]}
      relatedLinks={{
        title: 'Related Garage Door Help',
        links: [
          { label: 'Emergency garage door repair', href: '/emergency-garage-door-repair/' },
          { label: 'Broken spring replacement', href: '/spring-replacement/' },
          { label: 'Cable & roller repair', href: '/cable-roller-repair/' },
          { label: 'Panel replacement guide', href: '/garage-door-panel-replacement/' },
        ],
      }}
      ctaHeadline="If a Storm Damaged Your Garage Door"
      ctaText="Do not force a bent or off-track door. Smart Garage Doors is a licensed garage door company serving New York, New Jersey and Connecticut."
    />
  );
}
