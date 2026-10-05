/**
 * Facts about the business that do not depend on language.
 * Edit here; all pages, structured data and links read from this file.
 *
 * Rule: leave a value empty rather than guessing. Empty values are simply not rendered.
 */
export const site = {
  /** Brand name exactly as it should appear in the logo. */
  brand: 'Alla · Málaga',
  /** Alla's first name, used in structured data (Person). */
  personName: 'Alla',

  /**
   * WhatsApp number in international format, digits only, no "+" or spaces.
   * Example format: '34600000000'. While empty, WhatsApp buttons are hidden.
   */
  whatsappNumber: '' as string,

  /**
   * Public contact email, stored encoded (reversed + base64) so scrapers can't read it from the source.
   * To change it, run `npm run encode-email -- new@address` and paste the output here.
   * Leave empty to hide email on the site.
   */
  emailEncoded: 'bW9jLmxpYW1nQGF2b211YW4uYXNpbGxh' as string,

  /** Phone number as shown to people, e.g. '+34 600 00 00 00'. Optional. */
  phoneDisplay: '' as string,

  /** City the business serves. No street address is ever published. */
  city: 'Málaga',
  region: 'Andalucía',
  countryCode: 'ES',

  /** Neighbourhoods served (proper names, not translated). */
  areas: ['La Luz', 'La Paz'] as const,

  /**
   * Public profiles (Google Business Profile, Instagram…) once they exist.
   * Used for schema.org `sameAs` and footer links.
   */
  profiles: [] as { label: string; url: string }[],

  /** Social preview image in /public (1200×630). */
  ogImage: 'og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,

  themeColor: '#FBF7F1',
} as const;

export const hasWhatsApp = site.whatsappNumber.trim().length > 0;
export const hasEmail = site.emailEncoded.trim().length > 0;

/** Decoded email, only for build-time use (never rendered as plain text). */
export const contactEmail = hasEmail ? [...atob(site.emailEncoded)].reverse().join('') : '';
