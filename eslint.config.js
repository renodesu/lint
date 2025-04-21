// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
// import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  // // Import order
  // {
  //   files: ['**/*.{ts,tsx}'],
  //   extends: [
  //     importPlugin.flatConfigs.recommended,
  //     importPlugin.flatConfigs.typescript,
  //   ],
  //   rules: {
  //     'import/order': 'error',
  //   },
  // },

  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // eslint-plugin-import
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      'import/order': [
        2,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
    },
  },
  // import-order
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // 'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      //
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      // 'import/order': [
      //   2,
      //   {
      //     groups: [
      //       'builtin',
      //       'external',
      //       'internal',
      //       'parent',
      //       'sibling',
      //       'index',
      //       'object',
      //       'type',
      //     ],
      //     'newlines-between': 'always',
      //     alphabetize: { order: 'asc' },
      //   },
      // ],
    },
  },
  // React
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'], // Fixes html element errors
  // Prettier
  eslintConfigPrettier,
)

// /**
//  * @type {import("eslint").Linter.FlatConfig[]}
//  */
// export default [
//   // {
//   //   env: {
//   //     node: true,
//   //     es2021: true,
//   //   },
//   //   extends: [
//   //     'eslint:recommended',
//   //     'plugin:@typescript-eslint/recommended',
//   //     'plugin:react/recommended',
//   //     'plugin:react/jsx-runtime',
//   //     // TODO: Cannot add with shared configs - see https://typescript-eslint.io/docs/linting/type-linting/
//   //     // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
//   //     'prettier',
//   //   ],
//   //   parser: '@typescript-eslint/parser',
//   //   parserOptions: {
//   //     ecmaVersion: 2022,
//   //     sourceType: 'module',
//   //   },
//   //   settings: {
//   //     react: {
//   //       version: 'detect',
//   //     },
//   //   },
//   //   plugins: ['@typescript-eslint', 'eslint-plugin-import', 'unused-imports'],
//   //   rules: {
//   //     'linebreak-style': [2, 'unix'],
//   //     'object-shorthand': [1],
//   //     'no-useless-rename': [1],
//   //     '@typescript-eslint/member-delimiter-style': [
//   //       2,
//   //       {
//   //         multiline: {
//   //           delimiter: 'none',
//   //         },
//   //         singleline: {
//   //           delimiter: 'semi',
//   //         },
//   //       },
//   //     ],
//   //     // '@typescript-eslint/class-literal-property-style': [1, 'fields'],
//   //     '@typescript-eslint/prefer-ts-expect-error': 1,
//   //     '@typescript-eslint/consistent-type-imports': 'error',
//   //     // Rules where typescript-eslint overrides core rules
//   //     // Some rules require turning off core rule (eslint) and enabling ts-rule
//   //     // See: https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md
//   //     'no-extra-semi': 'off',
//   //     '@typescript-eslint/no-extra-semi': ['error'],
//   //     'no-invalid-this': 'off',
//   //     '@typescript-eslint/no-invalid-this': ['error'],
//   //     'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
//   //     '@typescript-eslint/no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
//   //     // Newlines
//   //     'no-multiple-empty-lines': ['error', { max: 1 }],
//   //     'react/no-unescaped-entities': 'off',
//   //     // unused-imports
//   //     'unused-imports/no-unused-imports': 'error',
//   //     'unused-imports/no-unused-vars': [
//   //       'warn',
//   //       {
//   //         vars: 'all',
//   //         varsIgnorePattern: '^_',
//   //         args: 'after-used',
//   //         argsIgnorePattern: '^_',
//   //       },
//   //     ],
//   //     // sort-imports
//   //     'sort-imports': [
//   //       'error',
//   //       {
//   //         ignoreDeclarationSort: true,
//   //       },
//   //     ],
//   //     // Import ordering
//   //     'import/order': [
//   //       2,
//   //       {
//   //         groups: [
//   //           'builtin',
//   //           'external',
//   //           'internal',
//   //           'parent',
//   //           'sibling',
//   //           'index',
//   //           'object',
//   //           'type',
//   //         ],
//   //         'newlines-between': 'always',
//   //         alphabetize: { order: 'asc' },
//   //       },
//   //     ],
//   //   },
//   // },
// ]
