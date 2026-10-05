export const locales = ['ru', 'es', 'uk', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export interface Item {
  title: string;
  text: string;
}

/** Every key is required: a missing translation fails `astro check`. */
export interface Dictionary {
  locale: Locale;
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  /** OpenGraph locale, e.g. ru_RU. */
  ogLocale: string;
  /** Language name in that language, for the switcher. */
  languageName: string;
  /** Short code shown in the switcher. */
  languageShort: string;

  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };

  nav: {
    skipToContent: string;
    primaryLabel: string;
    languageLabel: string;
    food: string;
    cleaning: string;
    about: string;
    areas: string;
    faq: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    foodLink: string;
    cleaningLink: string;
  };

  food: {
    eyebrow: string;
    title: string;
    lead: string;
    points: Item[];
    note: string;
  };

  cleaning: {
    eyebrow: string;
    title: string;
    lead: string;
    points: Item[];
    note: string;
  };

  about: {
    title: string;
    paragraphs: string[];
    signature: string;
  };

  areas: {
    title: string;
    lead: string;
    cityLabel: string;
    otherAreas: string;
  };

  how: {
    title: string;
    steps: Item[];
  };

  faq: {
    title: string;
    items: { q: string; a: string }[];
  };

  contact: {
    title: string;
    text: string;
    phoneLabel: string;
    pending: string;
    /** Shown instead of `text` while there is no WhatsApp number. */
    emailText: string;
    emailLabel: string;
    emailButton: string;
    emailSubject: string;
  };

  whatsapp: {
    button: string;
    short: string;
    /** Accessible name for icon-only or short buttons. */
    ariaLabel: string;
    /** Pre-filled first message in the chat. */
    prefill: string;
  };

  footer: {
    tagline: string;
    languages: string;
  };

  /** Names of services for structured data. */
  schema: {
    businessDescription: string;
    foodService: string;
    cleaningService: string;
    homeHelpService: string;
  };

  notFound: {
    title: string;
    text: string;
    back: string;
  };
}
