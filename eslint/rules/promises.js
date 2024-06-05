exports.promises = {
  'promise/no-return-wrap': 'error',
  'promise/param-names': 'error',
  'promise/always-return': 2,
  'promise/catch-or-return': 2,
  'promise/no-nesting': 1,

  // Disallow await inside of loops
  'no-await-in-loop': 2,

  // Require error handling in callbacks
  'handle-callback-err': 2,

  // Prefer using arrow functions for callbacks
  'prefer-arrow-callback': 1,

  // Warn against catch clause parameters from shadowing variables in the outer scope
  'no-catch-shadow': 1,
};
