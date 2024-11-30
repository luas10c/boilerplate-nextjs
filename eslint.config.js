import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'

import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

import react from 'eslint-plugin-react'
import a11y from 'eslint-plugin-jsx-a11y'

import nextjs from '@next/eslint-plugin-next'

import jest from 'eslint-plugin-jest'
import tl from 'eslint-plugin-testing-library'

export default defineConfig([
  globalIgnores(['node_modules', '.next', 'coverage']),
  js.configs.recommended,
  ts.configs.recommended,
  {
    plugins: {
      prettier,
      react,
      'jsx-a11y': a11y,
      '@next/next': nextjs
    },
    languageOptions: {
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
      ...prettier.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...a11y.configs.recommended.rules,
      ...nextjs.configs.recommended.rules
    }
  },
  {
    files: ['**/*.{spec,test}.ts?(x)'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    ...jest.configs['flat/recommended']
  },
  {
    files: ['**/*.{spec,test}.ts?(x)'],
    ...tl.configs['flat/react']
  }
])
