// Post-build SEO/quality checks. Fails the build (exit 1) on errors.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = { ru: 'index.html', es: 'es/index.html', uk: 'uk/index.html', en: 'en/index.html' };
const errors = [];
const warnings = [];
const seen = { title: new Map(), description: new Map() };

const attr = (html, re) => (html.match(re) || [])[1];

for (const [lang, file] of Object.entries(pages)) {
  const path = join(dist, file);
  if (!existsSync(path)) {
    errors.push(`${file}: missing`);
    continue;
  }
  const html = readFileSync(path, 'utf8');
  const fail = (msg) => errors.push(`${file}: ${msg}`);

  if (attr(html, /<html[^>]*\slang="([^"]+)"/) !== lang) fail(`<html lang> is not "${lang}"`);

  const title = attr(html, /<title>([^<]*)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!title) fail('missing <title>');
  if (!description) fail('missing meta description');
  if (title && title.length > 65) warnings.push(`${file}: title is ${title.length} chars`);
  if (description && (description.length < 70 || description.length > 165))
    warnings.push(`${file}: description is ${description.length} chars`);
  for (const [key, value] of [['title', title], ['description', description]]) {
    if (!value) continue;
    if (seen[key].has(value)) fail(`${key} duplicates ${seen[key].get(value)}`);
    seen[key].set(value, file);
  }

  const h1 = html.match(/<h1[\s>]/g) || [];
  if (h1.length !== 1) fail(`expected exactly one <h1>, found ${h1.length}`);

  const canonicals = html.match(/<link rel="canonical"[^>]*>/g) || [];
  if (canonicals.length !== 1) fail(`expected one canonical, found ${canonicals.length}`);

  for (const hl of [...Object.keys(pages), 'x-default']) {
    if (!html.includes(`hreflang="${hl}" href="https://`)) fail(`missing hreflang="${hl}" alternate`);
  }
  for (const og of ['og:title', 'og:description', 'og:url', 'og:image', 'og:locale']) {
    if (!html.includes(`property="${og}"`)) fail(`missing ${og}`);
  }

  const ld = attr(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) fail('missing JSON-LD');
  else {
    try {
      JSON.parse(ld);
    } catch (e) {
      fail(`invalid JSON-LD: ${e.message}`);
    }
  }

  if (/TODO[:\s]/.test(html)) fail('contains a TODO placeholder');
  if (/<script(?![^>]*application\/ld\+json)[^>]*>/.test(html)) warnings.push(`${file}: ships client JavaScript`);
  if (!html.includes('wa.me/')) warnings.push(`${file}: no WhatsApp link (set whatsappNumber in src/config/site.ts)`);
}

for (const f of ['robots.txt', 'sitemap-index.xml', '404.html', 'og.png', 'favicon.svg']) {
  if (!existsSync(join(dist, f))) errors.push(`${f}: missing`);
}

for (const w of warnings) console.warn(`⚠ ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  process.exit(1);
}
console.log(`✓ verify-build: ${Object.keys(pages).length} pages OK`);
