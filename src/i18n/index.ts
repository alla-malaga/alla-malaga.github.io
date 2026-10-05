import { locales, defaultLocale, type Locale, type Dictionary } from './types';
import ru from './ru';
import es from './es';
import uk from './uk';
import en from './en';

export { locales, defaultLocale };
export type { Locale, Dictionary };

const dictionaries: Record<Locale, Dictionary> = { ru, es, uk, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Base path with exactly one trailing slash, e.g. "/" or "/repo/". */
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Root-relative path of a locale's home page. Russian lives at the root. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? base : `${base}${locale}/`;
}

/** Absolute URL (for canonical, hreflang, OpenGraph, JSON-LD). */
export function absoluteUrl(path: string): string {
  return new URL(path, import.meta.env.SITE).href;
}

/** Path to a file in /public, respecting the base path. */
export function publicPath(file: string): string {
  return base + file.replace(/^\//, '');
}
