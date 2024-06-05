exports.react = {
  'react/jsx-pascal-case': 1,
  'react/jsx-sort-props': 1, // Sort is great for conflict resolution and is auto-fixable
  'react/jsx-no-useless-fragment': 2,
  'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  'react/no-array-index-key': 'warn',
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
    },
  ],

  // React 17 JSX transformer
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',

  'react/jsx-closing-bracket-location': [
    'warn',
    { selfClosing: 'tag-aligned', nonEmpty: 'after-props' },
  ],
  'react/jsx-fragments': [2, 'syntax'],
  'react/no-adjacent-inline-elements': 1,
  'react/no-danger': 'error',
  'react/jsx-props-no-spreading': 'off',
  'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
  'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
  'react/prop-types': 'off',
  'react/state-in-constructor': ['warn', 'never'],

  'react/function-component-definition': 'off',
  'react/require-default-props': 'off',
};
