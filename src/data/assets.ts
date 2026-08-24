/**
 * Photographic asset register — single source of truth for image provenance.
 *
 * Every asset here originates from Simone's current website
 * (http://www.fono-simonetavolaro.com/uploads/2/3/5/5/23558386/), captured
 * from the highest-resolution `_orig` variant the platform exposes.
 *
 * This file documents provenance and status ONLY. It deliberately does not
 * import the images — components import the file they need directly, so
 * Astro can fingerprint and optimize it at build time. Keeping metadata here
 * and imports in components avoids duplicating either.
 *
 * NO STOCK PHOTOGRAPHY may be added, ever (CLAUDE.md).
 */

export type AssetStatus =
  /** Approved and in use on the site today. */
  | 'approved'
  /** Approved for a specific future section; asset is present, not yet placed. */
  | 'recommended'
  /** Available and legitimate, but placement is an open decision. */
  | 'optional'
  /** Must never be used. Reason is recorded. */
  | 'rejected';

export type PhotoAsset = {
  /** Filename in src/assets/images (or sources/ for un-cropped originals). */
  file: string;
  /** Original filename on the current website. */
  sourceFile: string;
  /** Intrinsic dimensions of the file referenced by `file`. */
  dimensions: string;
  role: string;
  status: AssetStatus;
  notes?: string;
};

export const photoAssets: PhotoAsset[] = [
  {
    file: 'hero-portrait-4x5.jpg',
    sourceFile: 'photo-2025-08-20-09-41-26_orig.jpg (734×800)',
    dimensions: '640×800',
    role: 'Hero — primary portrait',
    status: 'approved',
    notes:
      'Front-facing studio-style portrait; the strongest asset available. 4:5 crop taken at full source height, horizontally centred.',
  },
  {
    file: 'about-portrait-4x5.jpg',
    sourceFile: 'photo-2025-08-20-10-23-55_orig.jpg (1280×720)',
    dimensions: '576×720',
    role: 'Quem é Simone — contextual portrait',
    status: 'approved',
    notes:
      'Informal, in-context shot at her desk. Deliberately a DIFFERENT photograph from the Hero so the two sections never repeat one image.',
  },
  {
    file: 'sources/consultorio-sala-1067x800.jpg',
    sourceFile: 'img-5154_orig.jpeg (1067×800)',
    dimensions: '1067×800',
    role: 'Como Funciona — therapy room (supporting editorial image)',
    status: 'approved',
    notes:
      'Real consultation room, placed in Como Funciona at its native 4:3 ratio, uncropped. Taken from Simone\'s own uploads folder; it was never displayed on the current site (it only leaked via og:image). CLIENT-AUTHORIZED 2026-08-16: the client explicitly confirmed use of the current website\'s consultório photographs on the new site, covering this image — supersedes the earlier PRE-LAUNCH CHECK note (client-validation I2 no longer needs to be stretched to imply it).',
  },
  {
    file: 'sources/consultorio-recepcao-1067x800.jpg',
    sourceFile: 'img-5152_orig.jpeg (1067×800)',
    dimensions: '1067×800',
    role: 'Reception — superseded by consultorio-recepcao-v2 below',
    status: 'rejected',
    notes:
      'Reception area showing the "Fonoaudióloga Simone Tavolaro Luisada" nameplate and sala 1721, consistent with the validated address (client-validation G1). Originally CLIENT-AUTHORIZED 2026-08-16. SUPERSEDED 2026-08-24: Simone provided a higher-resolution, un-watermarked original of the same room (see consultorio-recepcao-v2 below) — this capped 800px web-scraped copy should not be used now that a better source exists.',
  },
  {
    file: 'sources/consultorio-recepcao-v2-1162x1280.jpg',
    sourceFile: 'PHOTO-2026-08-18-09-35-54 5.jpg (1162×1280, phone original)',
    dimensions: '1162×1280',
    role: 'Contato — supporting image above the contact details list',
    status: 'approved',
    notes:
      'CLIENT-PROVIDED 2026-08-24: photographed by Simone herself (not the old website scrape), replacing consultorio-recepcao-1067x800.jpg as the reception candidate — same room, cleaner framing (armchair, botanical prints, jute rug; no instrument tray in view), meaningfully higher resolution. PLACEMENT APPROVED 2026-08-24 (design-system.md §27 amendment) — used at native ratio, uncropped, in Contact.astro.',
  },
  {
    file: 'sala-infantil-4x3.jpg',
    sourceFile: 'PHOTO-2026-08-18-09-35-54 2.jpg (1280×1211, phone original), cropped',
    dimensions: '960×720 (cropped 4:3 from the 1280×1211 original; see sources/consultorio-sala-infantil-1280x1211.jpg for the uncropped source)',
    role: 'Como Funciona — second supporting editorial image, stacked under the existing room photo',
    status: 'approved',
    notes:
      'CLIENT-PROVIDED 2026-08-24, photographed by Simone. Pediatric therapy room: alphabet/number/phoneme ("Boquinhas — Fonemas") wall charts — strong authenticity signal for the parent-of-a-child journey (the largest stated audience, client-validation A2). Centered 4:3 crop removes the closet door (left) and the mismatched kid furniture (right) that made the as-shot frame read as cluttered against design-system.md §27\'s standard, while keeping the chart wall, the two chairs, the desk and the window in view. PLACEMENT APPROVED 2026-08-24 (design-system.md §27 amendment) — stacked below consultorio-sala-1067x800.jpg in HowItWorks.astro.',
  },
  {
    file: '—',
    sourceFile: 'img-85da622da562-1_orig.jpeg (780×800)',
    dimensions: '780×800',
    role: 'none',
    status: 'rejected',
    notes:
      'WhatsApp business-card screenshot used as page content on the current Contato page. Screenshots are not design assets; a QR/contact affordance must be built natively.',
  },
  {
    file: '—',
    sourceFile: 'sala-comercial-venda-42m-no-green-valley-alphaville-barueri.webp (870×489)',
    dimensions: '870×489',
    role: 'none',
    status: 'rejected',
    notes:
      'Exterior of the office complex. The signage ("885") matches the validated address, but the filename shows it originates from a third-party commercial real-estate sale listing — ownership cannot be established. Rejected on provenance, not subject matter.',
  },
  {
    file: '—',
    sourceFile: 'a-professional-logo-design-for-a-speech-…-zq.jpeg (429×429)',
    dimensions: '429×429',
    role: 'none',
    status: 'rejected',
    notes:
      'Current logo as a flattened 429px JPEG with baked-in white background and no transparency. Not usable as a design asset; a vector/transparent original would be needed from the client.',
  },
];

/**
 * KNOWN LIMITATION: the current website caps stored originals at 800px on the
 * long edge, so no asset here exceeds that. The Hero portrait renders at 420px
 * CSS width, giving ~1.5× density rather than the 2× a retina display wants.
 * Requesting the untouched camera originals from the client remains open.
 */
export const assetLimitations = {
  maxSourceEdge: 800,
  heroRenderWidth: 420,
  heroEffectiveDensity: '≈1.5×',
  openRequest: 'Untouched camera originals from the client (would resolve retina sharpness).',
} as const;
