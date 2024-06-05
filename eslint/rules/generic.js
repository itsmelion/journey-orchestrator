exports.generic = {
  'flat': false,
  'arrow-parens': 'off',
  'no-console': [
    'warn',
    {
      allow: [
        'warn',
        'error',
        'time',
        'timeLog',
        'timeEnd',
        'info',
        'group',
        'groupCollapsed',
        'groupEnd',
        'count',
        'countReset',
        'assert',
      ],
    },
  ],

  'no-use-before-define': ['warn', { functions: false, classes: false }],

  // Warn against template literal placeholder syntax in regular strings
  'no-template-curly-in-string': 1,

  // Warn if return statements do not either always or never specify values
  'consistent-return': 1,

  // Warn if no return statements in callbacks of array methods
  'array-callback-return': 1,

  // Require the use of === and !==
  'eqeqeq': 2,

  // Disallow the use of alert, confirm, and prompt
  // 'no-alert': 2,

  // Disallow the use of arguments.caller or arguments.callee
  'no-caller': 2,

  // Disallow null comparisons without type-checking operators
  'no-eq-null': 2,

  // Disallow the use of eval()
  'no-eval': 2,

  // Warn against extending native types
  'no-extend-native': 1,

  // Warn against unnecessary calls to .bind()
  'no-extra-bind': 1,

  // Warn against unnecessary labels
  'no-extra-label': 1,

  // Disallow leading or trailing decimal points in numeric literals
  'no-floating-decimal': 2,

  // Warn against shorthand type conversions
  'no-implicit-coercion': 1,

  // Warn against function declarations and expressions inside loop statements
  'no-loop-func': 1,

  // Disallow new operators with the Function object
  'no-new-func': 2,

  // Warn against new operators with the String, Number, and Boolean objects
  'no-new-wrappers': 1,

  // Disallow throwing literals as exceptions
  'no-throw-literal': 2,

  // Require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': 2,

  // Enforce 'for loop' update clause moving the counter in the right direction
  'for-direction': 2,

  // Enforce return statements in getters
  'getter-return': 2,

  // Disallow comparing against -0
  'no-compare-neg-zero': 2,

  // Disallow identifiers from shadowing restricted names
  'no-shadow-restricted-names': 2,

  // Enforce return statements in callbacks of array methods
  'callback-return': 2,

  // Warn against string concatenation with __dirname and __filename
  'no-path-concat': 1,

  // # Typescript
  'no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_|ref',
    },
  ],
};

exports.typescriptGenerics = {
  'no-undef': 'off',
  'no-unused-vars': 0,
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      // varsIgnorePattern: '^React$', used to ignore react due advent of react 17. but by now should be ok to remove this
      // allows unused _dangle args, and ref*(needs to be pulled out of react-hook-form controlled component)
      argsIgnorePattern: '^_|ref',
      ignoreRestSiblings: true,
    },
  ],

  'no-use-before-define': 0,
  '@typescript-eslint/no-use-before-define': [
    'warn',
    { functions: false, classes: true, variables: false },
  ],

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',
};
