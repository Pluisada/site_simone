/**
 * Stylelint — Landpage Simone
 *
 * Purpose: catch invalid/broken CSS and enforce the design-token discipline
 * from docs/design/design-system.md §35. It deliberately does NOT enforce
 * formatting — testing is kept proportional to the project
 * (docs/architecture/technical-architecture.md §14).
 */

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-declaration-strict-value'],
  ignoreFiles: ['dist/**/*', '.astro/**/*', 'node_modules/**/*'],

  overrides: [
    {
      // Astro components hold their CSS inside <style> blocks.
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
    {
      // tokens.css is the ONE approved home for literal color values.
      // Every other file must reference them through var(--color-*).
      files: ['src/styles/tokens.css'],
      rules: {
        'scale-unlimited/declaration-strict-value': null,
      },
    },
  ],

  rules: {
    'no-descending-specificity': null,

    // --- Real defects: invalid syntax, unknown properties/values ---
    'declaration-property-value-no-unknown': true,
    'function-no-unknown': true,
    'property-no-unknown': true,
    'unit-no-unknown': true,
    'no-invalid-double-slash-comments': true,
    'color-no-invalid-hex': true,
    // Long form, matching how the palette is written in design-system.md §4
    // (#FFFFFF, not #fff). Shortening would edit an approved token.
    'color-hex-length': 'long',

    // --- Token discipline (the rule this project actually needs) ---
    // Any color-ish property must use a var(), not a literal.
    'scale-unlimited/declaration-strict-value': [
      ['/color/', 'background-color', 'border-color', 'outline-color', 'fill', 'stroke'],
      {
        ignoreValues: ['transparent', 'inherit', 'currentColor', 'none', 'initial', 'unset'],
        disableFix: true,
        message:
          'Use a design token (var(--color-*)) instead of a literal color — see docs/design/design-system.md §35.',
      },
    ],

    // --- Cosmetic rules disabled on purpose ---
    // Two reasons: this project lints for defects rather than formatting, and
    // several of these would rewrite APPROVED TOKEN VALUES verbatim —
    // color-function-notation would turn the --shadow-sm rgba() into
    // rgb()/percentage form, and value-keyword-case would lowercase the
    // Georgia fallback. design-system.md §35 forbids changing those.
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'media-feature-range-notation': null,
    'font-family-name-quotes': null,
    'property-no-vendor-prefix': null,
    'value-keyword-case': null,
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': null,
    'selector-class-pattern': null,

    // Astro's scoped-style escape hatch is valid syntax that the standard
    // config does not recognize.
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],

    'custom-property-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
  },
};
