import { default as createConfig } from 'next/jest.js'

/** @type{import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/tests/$1'
  }
}

export default createConfig({
  dir: './'
})(config)
