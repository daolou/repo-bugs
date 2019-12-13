module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:jsx-control-statements/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/react', // disables react-specific linting rules that conflict with prettier
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-control-statements', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    'jsx-control-statements/jsx-control-statements': true,
  },
  globals: {
    // $: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  // 配置自定义规则
  rules: {
    'prettier/prettier': 1,
    '@typescript-eslint/camelcase': [
      'warn',
      {
        allow: [
          'API_Error',
          'u_id',
          'u_name',
          'u_account',
          'new_permission_key',
          'permission_key',
          'op_app',
          'op_action',
          'op_page',
        ],
      },
    ],
    '@typescript-eslint/indent': ['error', 2, { VariableDeclarator: 2, SwitchCase: 1 }],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/interface-name-prefix': ['warn', { prefixWithI: 'always' }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'never', lib: 'never' }],
    'no-console': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    // eqeqeq: ['warn', 'always'],
    // React相关校验规则
    'react/jsx-indent': [2, 4],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'jsx-control-statements/jsx-use-if-tag': 0,
    'jsx-control-statements/jsx-jcs-no-undef': 0,
  },
}
