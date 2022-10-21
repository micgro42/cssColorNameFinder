module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/**/?(*.)+(spec).ts'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  collectCoverageFrom: ['src/**/*.{ts,vue}'],
  transformIgnorePatterns: ['node_modules/(?!(colorjs.io)/)'],
};
