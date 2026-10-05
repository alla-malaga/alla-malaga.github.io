import { site } from '../config/site';
import { absoluteUrl, localePath, publicPath, defaultLocale, locales, getDictionary, type Dictionary } from '../i18n';

/**
 * JSON-LD graph for a localized home page.
 * Only facts that are visible on the page or set in config/site.ts are included:
 * no street address, no coordinates, no prices, no ratings.
 */
export function buildSchema(t: Dictionary) {
  const root = absoluteUrl(localePath(defaultLocale));
  const pageUrl = absoluteUrl(localePath(t.locale));
  const businessId = `${root}#business`;
  const cityId = `${root}#malaga`;

  const city = {
    '@type': 'City',
    '@id': cityId,
    name: site.city,
    containedInPlace: { '@type': 'AdministrativeArea', name: site.region },
  };

  const areaServed = [
    { '@id': cityId },
    ...site.areas.map((name) => ({
      '@type': 'Place',
      name: `${name}, ${site.city}`,
      containedInPlace: { '@id': cityId },
    })),
  ];

  const business: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: site.brand,
    description: t.schema.businessDescription,
    url: root,
    image: absoluteUrl(publicPath(site.ogImage)),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    areaServed,
    founder: { '@type': 'Person', name: site.personName },
  };
  if (site.phoneDisplay) business.telephone = site.phoneDisplay;
  if (site.profiles.length) business.sameAs = site.profiles.map((p) => p.url);

  const services = [t.schema.foodService, t.schema.cleaningService, t.schema.homeHelpService].map(
    (name, i) => ({
      '@type': 'Service',
      '@id': `${pageUrl}#service-${i + 1}`,
      name,
      serviceType: name,
      provider: { '@id': businessId },
      areaServed,
      inLanguage: t.htmlLang,
    }),
  );

  const faq = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    inLanguage: t.htmlLang,
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${root}#website`,
        url: root,
        name: site.brand,
        inLanguage: locales.map((l) => getDictionary(l).htmlLang),
        publisher: { '@id': businessId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: t.htmlLang,
        isPartOf: { '@id': `${root}#website` },
        about: { '@id': businessId },
      },
      city,
      business,
      ...services,
      ...(t.faq.items.length ? [faq] : []),
    ],
  };
}

/** Serialize for a <script> tag without allowing "</script>" breakouts. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
