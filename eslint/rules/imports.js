exports.imports = {
  'import/extensions': [
    'error',
    'never',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      json: 'always',
    },
  ],

  'import/order': [
    'warn',
    {
      'newlines-between': 'always-and-inside-groups',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
      'groups': [
        'builtin',
        'external',
        ['internal', 'type'],
        ['parent', 'sibling', 'index'],
        ['object', 'unknown'],
      ],
      'pathGroups': [
        {
          pattern: '@starkey/**',
          group: 'internal',
          position: 'before',
        },
      ],
    },
  ],

  // Favor named exports
  'import/no-default-export': 1,
  'import/prefer-default-export': 'off',

  'import/no-extraneous-dependencies': 'off',
};
