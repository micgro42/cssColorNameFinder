module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/tests/**/?(*.)+(spec).ts'],
  collectCoverageFrom: ['src/**/*.{ts,vue}'],
};
