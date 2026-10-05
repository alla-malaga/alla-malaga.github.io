import type { Dictionary } from './types';

const en: Dictionary = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  languageName: 'English',
  languageShort: 'EN',

  meta: {
    title: 'Home-cooked food & apartment cleaning in Málaga | Alla',
    description:
      'Homemade pelmeni, vareniki and pirozhki to order, apartment cleaning and help at home in Málaga: La Luz and La Paz. Alla, in person. Message on WhatsApp.',
    ogImageAlt: 'Alla · Málaga — home-cooked food and cleaning in Málaga',
  },

  nav: {
    skipToContent: 'Skip to content',
    primaryLabel: 'Page sections',
    languageLabel: 'Language',
    food: 'Food',
    cleaning: 'Cleaning',
    about: 'About me',
    areas: 'Areas',
    faq: 'Questions',
  },

  hero: {
    eyebrow: 'Málaga · La Luz · La Paz',
    title: 'Home-cooked food and cleaning in Málaga',
    lead: 'My name is Alla. I cook homemade food to order and help with apartment cleaning — myself, with no agency or middlemen. We arrange everything personally on WhatsApp.',
    foodLink: 'Home-cooked food',
    cleaningLink: 'Cleaning',
  },

  food: {
    eyebrow: 'Kitchen',
    title: 'Home-cooked food to order',
    lead: 'I cook it myself, the homemade way. What to make, how much and for which day — we decide together in advance.',
    points: [
      { title: 'We talk about the menu', text: 'Tell me what you fancy and I’ll suggest what I can make.' },
      { title: 'We agree on a date', text: 'It’s best to order ahead, so everything can be done calmly.' },
      { title: 'Details on WhatsApp', text: 'Quantities, timing and how to hand over the order — we sort it out by message.' },
    ],
    note: 'I don’t publish prices: it depends on the dishes and the amount. Message me and I’ll reply personally.',
  },

  cleaning: {
    eyebrow: 'Home',
    title: 'Apartment cleaning and help at home',
    lead: 'I help keep your apartment in order, so home feels light and calm. I come myself.',
    points: [
      { title: 'Apartment cleaning', text: 'I’ll put your apartment in order — beforehand we discuss which rooms and what matters to you.' },
      { title: 'Help at home', text: 'If you need a hand with household tasks, just describe what you need.' },
      { title: 'Your preferences', text: 'Tell me what to pay special attention to and what you’d rather I leave alone.' },
    ],
    note: 'The price depends on the apartment and the task — message me and I’ll reply.',
  },

  about: {
    title: 'About me',
    paragraphs: [
      'My name is Alla and I live in Málaga. I’m not a company or an agency — I do everything myself, so you always know who is coming to your home and who is cooking your food.',
      'I want things to be simple and honest: we agree on everything beforehand, with no surprises.',
    ],
    signature: '— Alla',
  },

  areas: {
    title: 'Where I work',
    lead: 'Málaga, mainly the La Luz and La Paz neighbourhoods.',
    cityLabel: 'Málaga',
    otherAreas: 'Live in another part of Málaga? Message me and we’ll see what’s possible.',
  },

  how: {
    title: 'How it works',
    steps: [
      { title: 'Message me on WhatsApp', text: 'Tell me what you need: food, cleaning or both.' },
      { title: 'We agree on the details', text: 'We settle the task, day and time. I’ll tell you the price personally.' },
      { title: 'Done', text: 'I come to clean or cook your order on the agreed day.' },
    ],
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How much does it cost?',
        a: 'I don’t publish prices on the website: it depends on the amount and the task. Message me on WhatsApp and I’ll reply personally.',
      },
      {
        q: 'Which areas do you cover?',
        a: 'Málaga, mainly the La Luz and La Paz neighbourhoods. If you live elsewhere, message me and we’ll talk.',
      },
      {
        q: 'How do I order food?',
        a: 'Message me on WhatsApp with what you’d like and for which day. Ordering ahead is best, so I have time to cook everything.',
      },
      {
        q: 'Are you a company?',
        a: 'No. I’m Alla and I work for myself, with no agency or middlemen.',
      },
    ],
  },

  contact: {
    title: 'Message me',
    text: 'The easiest way to reach me is WhatsApp. Tell me what you need and I’ll reply.',
    phoneLabel: 'Phone',
    pending: 'A WhatsApp contact will appear on this page soon.',
    emailText: 'For now, the easiest way to reach me is by email. Tell me what you need and I’ll reply.',
    emailLabel: 'Email',
    emailButton: 'Send an email',
    emailSubject: 'Enquiry from the website',
  },

  whatsapp: {
    button: 'Message on WhatsApp',
    short: 'WhatsApp',
    ariaLabel: 'Message Alla on WhatsApp',
    prefill: 'Hello Alla! I found you through your website.',
  },

  footer: {
    tagline: 'Home-cooked food and apartment cleaning in Málaga: La Luz and La Paz.',
    languages: 'Languages',
  },

  consent: {
    label: 'Cookie consent',
    text: 'This site uses Google Analytics to understand how many people visit it. Analytics cookies are only enabled with your consent.',
    accept: 'Accept',
    decline: 'Decline',
    settings: 'Cookie settings',
  },

  schema: {
    businessDescription: 'Home-cooked food to order (pelmeni, vareniki, pirozhki), apartment cleaning and help at home in Málaga (La Luz, La Paz).',
    foodService: 'Home-cooked food to order',
    cleaningService: 'Apartment cleaning',
    homeHelpService: 'Help at home',
  },

  notFound: {
    title: 'Page not found',
    text: 'This page doesn’t exist. The link may be out of date.',
    back: 'Go to home page',
  },
};

export default en;
