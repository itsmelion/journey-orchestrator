const stylistic = require('@stylistic/eslint-plugin');

const { generic, imports, promises, react, typescriptGenerics, whitespace } = require('./rules');

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  extends: [
    // 'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@nx/typescript',
    'plugin:@nx/react',
    'plugin:storybook/recommended',
    'plugin:@stylistic/disable-legacy',
    'plugin:@stylistic/recommended-extends',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],

  globals: {
    __DEV__: 'readonly',
  },

  plugins: [
    'promise',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'storybook',
    '@stylistic',
    '@nx',
  ],

  env: {
    node: true,
    commonjs: true,
    browser: false,
    es2023: true,
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
    ...stylistic.configs.customize({
      flat: false,
      ...generic,
      ...whitespace,
      ...promises,
      ...imports,
      ...react,
      ...typescriptGenerics,
    }).rules,
  },

  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        // ? repeated from whitespace cuz somewhere (plugins/extends) is being overwritten
        '@stylistic/jsx-curly-spacing': [2, 'always', {
          allowMultiline: true,
          spacing: { objectLiterals: 'never' },
        }],
      },
    },
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
  ],
};
