module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.android.js', '.ios.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'tests': './tests/',
          '^@/(.+)': './src/\\1',
        },
      },
    ],
  ],
}
