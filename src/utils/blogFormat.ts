/** Format YYYY-MM-DD for display (e.g. "July 2, 2026"). */
export function formatBlogDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * Post Automation appends a random 4-char suffix (e.g. "b77j") when a slug
 * already exists. Only strip suffixes that look like random hashes (must contain
 * both letters and digits) so year suffixes like "-2025" are preserved.
 */
export function stripAutomationSlugSuffix(slug: string): string {
  const match = slug.match(/-([a-z0-9]{4})$/i);
  if (!match) return slug;
  const suffix = match[1];
  const hasLetter = /[a-z]/i.test(suffix);
  const hasDigit = /[0-9]/.test(suffix);
  if (hasLetter && hasDigit) {
    return slug.slice(0, -5);
  }
  return slug;
}

/** True when slug ends with a Post Automation collision suffix. */
export function hasAutomationSlugSuffix(slug: string): boolean {
  return stripAutomationSlugSuffix(slug) !== slug;
}

/** Friendlier headings for auto-generated photo posts. */
export const AUTO_POST_HEADING_MAP: Record<string, string> = {
  'What the photo shows': 'Project Overview',
  'The common issue / why this happens': 'Common Causes',
  'How this repair or installation is usually handled': 'How We Handle It',
  'Warning signs a homeowner can notice': 'Warning Signs to Watch For',
  'When to call a professional': 'When to Call a Pro',
  'Local service note': 'Local Service Area',
};

export function humanizeAutoPostHeading(heading: string): string {
  return AUTO_POST_HEADING_MAP[heading] ?? heading;
}
