exports.whitespace = {
  'indent': 2,
  'quotes': 'single',
  'semi': true,
  'jsx': true,

  '@stylistic/quote-props': ['warn', 'as-needed', {
    keywords: true,
    numbers: true,
    unnecessary: true,
  }],

  'linebreak-style': ['error', 'unix'],

  'eol-last': ['error', 'always'],
  'no-multiple-empty-lines': [
    'error',
    {
      max: 2,
      maxEOF: 1,
    },
  ],

  // max-len seems not working
  '@stylistic/max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  'max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],

  '@stylistic/array-bracket-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'always'],

  '@stylistic/jsx-curly-spacing': [2, 'always', {
    allowMultiline: true,
    spacing: { objectLiterals: 'never' },
  }],
};
