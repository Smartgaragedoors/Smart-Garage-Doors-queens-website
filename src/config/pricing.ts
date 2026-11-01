/**
 * Published pricing — single source of truth.
 * ------------------------------------------------
 * Owner decision 2026-11-02: the site shows STARTING prices only ("From $X"),
 * never ranges or ceilings, and every block that shows a price carries the
 * PRICING_NOTE (see <PricingNote />). Parts and labor vary by job; the promise
 * the site makes is one total price, fees and taxes included, confirmed before
 * any work begins.
 *
 * Rules for agents and humans:
 *  - Prose that quotes a price must match these figures. Change the number here
 *    first, then grep for the old figure.
 *  - A figure followed by a dash or "to" and a second figure ("$X–$Y", "$X-$Y",
 *    "$X to $Y"), or "between $X and $Y", is forbidden in src/ (the build runs scripts/verify-pricing.mjs). Blog JSON
 *    gets a warning, not a failure, so Post Automation keeps publishing.
 *  - Real past-job totals (RecentWork, DoorStyleGallery, location recentJobs)
 *    are proof, not quotes; they stay, labelled as past jobs.
 */
export const PRICING = {
  /** Basic repairs: sensors, adjustments, rollers, track, panel work. */
  repairFrom: 150,
  /** Torsion / extension spring replacement, replaced in pairs. */
  springFrom: 175,
  /** Cable and roller replacement. */
  cableRollerFrom: 150,
  /** Opener repair. */
  openerRepairFrom: 150,
  /** New chain- or belt-drive opener, installed. */
  openerInstallFrom: 349,
  /** New belt-drive opener, installed. */
  beltOpenerFrom: 399,
  /** Wall-mount (jackshaft) opener, installed. */
  wallMountOpenerFrom: 749,
  /** Service visit when nothing needs repair. */
  diagnosticVisit: 115,
  /** Standard single steel door, installed. */
  doorFrom: 800,
  /** Insulated double- or triple-layer door, installed. */
  insulatedDoorFrom: 1200,
  /** Carriage-style, wood, full-view glass or custom door, installed. */
  carriageCustomFrom: 2500,
  /** Maintenance plans, per year. */
  maintenanceBasicFrom: 99,
  maintenancePremiumFrom: 179,
  maintenanceEliteFrom: 299,
} as const;

export const formatPrice = (n: number): string => `$${n.toLocaleString('en-US')}`;

/** "From $175" — the only way a service price is written on the site. */
export const fromPrice = (n: number): string => `From ${formatPrice(n)}`;

export const PRICING_NOTE =
  'Starting prices for standard residential doors. Parts and labor vary by job, so we confirm one total price — including any fees, surcharges and taxes — before any work begins.';

export const PRICING_NOTE_ES =
  'Precios iniciales para puertas residenciales estándar. Las piezas y la mano de obra varían según el trabajo, así que confirmamos un precio total — con tarifas, recargos e impuestos incluidos — antes de empezar cualquier trabajo.';

/** True when a string carries a dollar figure (used to auto-attach the note). */
export const mentionsPrice = (text: string | undefined | null): boolean =>
  !!text && /\$\s?\d/.test(text);
