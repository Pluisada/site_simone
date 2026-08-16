// @ts-check
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

/**
 * ESLint — Landpage Simone
 *
 * Scope (Phase 1.1): catch real TypeScript/Astro defects and accessibility
 * regressions. Formatting is deliberately not enforced here — no Prettier
 * integration, to keep the toolchain minimal per
 * docs/architecture/technical-architecture.md §14 ("testing proportional to
 * the project").
 */
export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Astro components + the accessibility ruleset (jsx-a11y rules adapted for
  // .astro templates). This is what guards the WCAG AA commitments in
  // docs/design/design-system.md §30 at author time.
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],

  {
    files: ['**/*.{ts,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Unused code is a real smell in a codebase this small.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // The data layer uses `null` deliberately for unvalidated fields.
      '@typescript-eslint/no-non-null-assertion': 'error',
      eqeqeq: ['error', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Node context: config files run outside the browser.
  {
    files: ['*.config.{js,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
