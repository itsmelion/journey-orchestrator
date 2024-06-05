const stylistic = require('@stylistic/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const hooksPlugin = require('eslint-plugin-react-hooks');

const { generic, imports, promises, react, typescriptGenerics, whitespace } = require('./rules');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __DEV__: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    plugins: {
      '@stylistic': stylistic,
      // storybook: storybookPlugin,
      // promise: promisePlugin,
      'react': reactPlugin,
      'react-hooks': hooksPlugin,
      // import: importsPlugin,
    },
    settings: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      'react': { version: 'detect' },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
    },
  },
  stylistic.configs.customize({
    // flat: false,
    ...generic,
    ...whitespace,
    ...promises,
    ...imports,
    ...react,
    ...typescriptGenerics,
  }),
  {
    files: ['*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 0,
    },
  },
  {
    files: [
      '*.view.tsx',
      '*.screen.tsx',
      '*.route.tsx',
      '*.stories.tsx',
      '*.page.tsx',
      '.storybook/**',
    ],
    rules: {
      'import/no-default-export': 0,
      'import/prefer-default-export': 1,
    },
  },
];
