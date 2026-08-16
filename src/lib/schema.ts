/**
 * JSON-LD builders — technical-architecture.md §8.
 *
 * SOURCING RULE (CLAUDE.md): every emitted value reads from the validated
 * data layer (src/data/*). Nothing is hand-written here, so the structured
 * data can never drift from the visible page.
 *
 * HARD PROHIBITIONS (technical-architecture.md §8, design-system.md §23):
 *  - NO `aggregateRating` and NO `review`. No consented rating, count or
 *    testimonial exists; emitting a plausible-looking one would be
 *    indistinguishable from a fabricated review to a search or answer engine.
 *  - NO `openingHoursSpecification`. client-validation G2 gives
 *    "terças a quintas, manhã e tarde", which cannot be converted to explicit
 *    opening/closing times without inventing them (`contact.hoursSpec` is null).
 *  - NO `priceRange`, `areaServed`, or years/patient figures — none validated.
 *  - NO `medicalSpecialty`: schema.org's enum has no term this project can
 *    map to with certainty, and guessing one would be an invented claim.
 *    The property is optional, so it is simply omitted.
 *
 * ENTITY TYPE — APPROVED 2026-08-16: `MedicalBusiness`, the most semantically
 * accurate LocalBusiness subtype for a registered healthcare practitioner.
 * technical-architecture.md §8 had flagged this as needing validation; the
 * choice is now confirmed. `medicalSpecialty` stays omitted (see above).
 */
import { site, whatsapp, contact, credentials } from '../data/site';
import { faqItems } from '../data/faq';

/** Stable @id fragments so the nodes can reference each other. */
const ID = {
  business: '#practice',
  person: '#simone',
} as const;

type JsonLdNode = Record<string, unknown>;

/** Absolute URL helper. `siteUrl` comes from Astro.site (SITE_URL env var). */
const abs = (siteUrl: URL | undefined, path: string): string | undefined =>
  siteUrl ? new URL(path, siteUrl).href : undefined;

/**
 * The practice as a local business — drives local search and the NAP block.
 * Address and telephone are client-validated (G1).
 */
function buildBusiness(siteUrl: URL | undefined, imagePath?: string): JsonLdNode {
  const node: JsonLdNode = {
    '@type': 'MedicalBusiness',
    '@id': abs(siteUrl, ID.business) ?? ID.business,
    name: `${site.role} ${site.name}`,
    /** E.164 — the same number as whatsapp.e164, never a second source. */
    telephone: `+${whatsapp.e164}`,
    address: {
      '@type': 'PostalAddress',
      /**
       * The district (Alphaville) is folded into streetAddress: PostalAddress
       * has no district field, addressLocality must stay the municipality
       * (Barueri), and dropping it would make the structured NAP disagree with
       * the visible one — which local search treats as an inconsistency.
       */
      streetAddress: `${contact.addressStreet} — ${contact.addressBuilding}, ${contact.addressDistrict}`,
      addressLocality: contact.addressLocality,
      addressRegion: contact.addressRegion,
      addressCountry: contact.addressCountry,
    },
    /** The public Google listing already used on the current site. */
    sameAs: [contact.mapsUrl],
  };

  const url = abs(siteUrl, '/');
  if (url) node.url = url;

  const image = imagePath ? abs(siteUrl, imagePath) : undefined;
  if (image) node.image = image;

  // openingHoursSpecification intentionally absent — see file header.
  return node;
}

/**
 * Simone as a person, with her two verifiable CFFa registrations expressed as
 * credentials rather than free text. Source: client-validation F1 + the final
 * credential validation round.
 */
function buildPerson(siteUrl: URL | undefined, imagePath?: string): JsonLdNode {
  const node: JsonLdNode = {
    '@type': 'Person',
    '@id': abs(siteUrl, ID.person) ?? ID.person,
    name: site.name,
    jobTitle: site.role,
    hasCredential: credentials.cffaSpecializations.map((item) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Especialista',
      name: `${item.title} — ${item.registration}`,
      recognizedBy: {
        '@type': 'Organization',
        name: item.body,
      },
    })),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: credentials.formation.institution,
    },
    worksFor: { '@id': abs(siteUrl, ID.business) ?? ID.business },
  };

  const image = imagePath ? abs(siteUrl, imagePath) : undefined;
  if (image) node.image = image;

  return node;
}

/**
 * FAQPage built from the SAME array that renders the visible accordion, and
 * filtered the same way — entries with an unvalidated (null) answer are
 * excluded, never invented. Visible content and structured data cannot drift.
 */
function buildFaq(): JsonLdNode | null {
  const answered = faqItems.filter((item) => item.answer !== null);
  if (answered.length === 0) return null;

  return {
    '@type': 'FAQPage',
    mainEntity: answered.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Homepage graph: business + person + FAQ, linked by @id.
 * `siteUrl` should be Astro.site; when it is undefined (no SITE_URL set) the
 * nodes still emit with fragment-only ids rather than a fake domain.
 */
export function buildHomepageSchema(siteUrl: URL | undefined, imagePath?: string): string {
  const graph: JsonLdNode[] = [
    buildBusiness(siteUrl, imagePath),
    buildPerson(siteUrl, imagePath),
  ];

  const faq = buildFaq();
  if (faq) graph.push(faq);

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
