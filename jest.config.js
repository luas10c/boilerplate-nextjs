import { default as createConfig } from 'next/jest.js'

/** @type{import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts', '<rootDir>/tests/msw.ts'],
  coverageProvider: 'v8',
  testEnvironment: './tests/environment.ts',
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1'
  }
}

export default createConfig({
  dir: './'
})(config)
