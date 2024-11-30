const config = {
  root: true,
  env: {
    browser: true,
    es2024: true
  },
  extends: [
    'prettier',
    'next',
    'plugin:testing-library/react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jest/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: ['prettier', 'jest', 'testing-library'],
  rules: {
    'prettier/prettier': 'error'
  }
}

module.exports = config
