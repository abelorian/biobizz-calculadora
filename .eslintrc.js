module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  rules: {
    'max-len': 0,
    'object-curly-newline': 0,
    camelcase: 0,
    'prefer-destructuring': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    'no-alert': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'react/no-danger': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-cycle': 0,
    'consistent-return': 0,
    'react/button-has-type': 0,
    'jsx-a11y/no-onchange': 0,
    'no-unneeded-ternary': 0,
    // 'no-use-before-define': 0,
    'no-lonely-if': 0,
    'react/self-closing-comp': 0,
    radix: 0,
    'no-param-reassign': 0,
    'prefer-const': 0,
    'template-curly-spacing': 'off', // fix
    indent: 'off', // fix
    'comma-dangle': 1,
    semi: 1,
    'react/jsx-curly-spacing': 0,
    'operator-linebreak': 0,
    'react/jsx-wrap-multilines': 0,
  },
};