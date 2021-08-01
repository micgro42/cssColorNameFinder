module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/**/?(*.)+(spec).ts'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{ts,vue}'],
  transformIgnorePatterns: ['node_modules/(?!(colorjs.io)/)'],
};
