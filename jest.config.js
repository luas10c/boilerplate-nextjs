import { default as createConfig } from 'next/jest.js'

/** @type{import('jest').Config} */
const config = {
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: './tests/environment.ts',
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1'
  }
}

export default createConfig({
  dir: './'
})(config)
