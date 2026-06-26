import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'
import typescript from 'typescript-eslint'

import stylistic from '@stylistic/eslint-plugin'

import a11y from 'eslint-plugin-a11y'

import tailwindcss from 'eslint-plugin-tailwindcss'

import jest from 'eslint-plugin-jest'
import tl from 'eslint-plugin-testing-library'

export default defineConfig([
  globalIgnores(['node_modules', 'coverage', 'dist', '.next', '.vercel', '.eslintcache', './next-env.d.ts']),
  js.configs.recommended,
  typescript.configs.recommended,
  {
    name: 'stylistic/customize',
    ...stylistic.configs.customize({
      indent: 2,
      quotes: 'single',
      semi: false,
      jsx: true,
      arrowParens: true,
      blockSpacing: true,
      quoteProps: 'as-needed',
      commaDangle: 'never',
      braceStyle: '1tbs',

      severity: 'error'
    })
  },
  {
    name: 'node/recommended',
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024
      }
    }
  },
  {
    name: 'a11y/recommended',
    plugins: {
      a11y
    },
    rules: {
      ...a11y.configs.recommended.rules
    }
  },
  {
    name: 'tailwindcss/recommended',
    plugins: {
      tailwindcss
    },
    settings: {
      tailwindcss: {
        cssConfigPath: 'src/app/globals.css'
      }
    },
    rules: {
      ...tailwindcss.configs.recommended.rules
    }
  },
  {
    name: 'jest/recommended',
    files: ['**/*.{spec,test}.{ts,tsx}'],
    ...jest.configs['flat/recommended']
  },
  {
    files: ['**/*.{spec,test}.{ts,tsx}'],
    ...tl.configs['flat/react'],
    name: 'testing-library/recommended'
  }
])
