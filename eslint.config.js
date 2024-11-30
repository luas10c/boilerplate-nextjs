import globals from 'globals'

import js from '@eslint/js'

import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import prettier from 'eslint-plugin-prettier'

import react from 'eslint-plugin-react'
import a11y from 'eslint-plugin-jsx-a11y'
import tailwindcss from 'eslint-plugin-tailwindcss'

import nextjs from '@next/eslint-plugin-next'

import jest from 'eslint-plugin-jest'
import testing from 'eslint-plugin-testing-library'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  {
    files: ['**/*.{js,ts,tsx}'],
    ignores: ['node_modules', '.next', 'dist', 'public', 'coverage'],
    plugins: {
      '@typescript-eslint': ts,
      prettier,
      react,
      'jsx-a11y': a11y,
      tailwindcss,
      '@next/next': nextjs
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node,
        React: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...a11y.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      ...nextjs.configs.recommended.rules
    }
  },
  {
    files: ['**/*.{spec,test}.{ts,tsx}'],
    plugins: {
      jest,
      'testing-library': testing
    },
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      ...jest.configs.recommended.rules,
      ...testing.configs['flat/react'].rules
    }
  }
]

export default config
