module.exports = {
    preset: 'ts-jest',
    testMatch: ['**/tests/**/*.test.[jt]s?(x)'],
    testTimeout: process.env.CI ? 30000 : 10000,
    watchPathIgnorePatterns: ['<rootDir>/build'],
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.json'
      }
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment: "node",
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "<rootDir>/tests/__mocks__/styleMock.js",
        "^styles/(.*)$": "<rootDir>/tests/__mocks__/styleMock.js",
        "^src/(.*)$": "<rootDir>/src/$1",
        "^components/(.*)$": "<rootDir>/src/components/$1"
    }

  }