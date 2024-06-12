const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nxPlugin = require('@nx/eslint-plugin');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('./eslint'),
  // ...defaultConf,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      '@nx': nxPlugin,
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },

  ...compat.config({ extends: ['plugin:@nx/typescript'] })
    .map(config => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-multi-spaces': ['error'],
        'one-var': ['error', 'never'],
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'object-curly-spacing': ['error', 'always'],
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      },
    })),

  ...compat.config({ extends: ['plugin:@nx/javascript'] })
    .map(config => ({
      ...config,
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'no-multi-spaces': ['error'],
        'one-var': ['error', 'never'],
        'func-style': ['error', 'declaration', { allowArrowFunctions: false }],
        'object-curly-spacing': ['error', 'always'],
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      },
    })),

  ...compat
    .config({ extends: ['plugin:@nx/typescript', 'plugin:react/recommended'] })
    .map(config => ({
      ...config,
      files: ['**/*.tsx', '**/*.jsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': ['error', { ignore: ['jsx', 'global', 'css', 'sx'] }],
      },
    })),

  ...compat.config({ env: { jest: true } }).map(config => ({
    ...config,
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
    rules: {},
  })),
];
