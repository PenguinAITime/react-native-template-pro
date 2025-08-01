module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@providers': './src/providers',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
