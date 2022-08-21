module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['node_modules/(?!victory|react-native-svg|react-native)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
}
