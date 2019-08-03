module.exports = {
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  collectCoverageFrom: ['src/**/*.{ts,vue}'],
  snapshotSerializers: ['jest-serializer-vue'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
