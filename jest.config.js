module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/**/?(*.)+(spec).ts'],
  collectCoverageFrom: ['src/**/*.{ts,vue}'],
};
