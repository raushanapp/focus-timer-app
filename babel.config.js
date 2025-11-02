module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
        verbose: false,
      },
    ],
    'react-native-reanimated/plugin', // Must be LAST
  ],
};

//  if we are going production do like this
// const envFile =
//   process.env.NODE_ENV === 'production'
//     ? '.env.production'
//     : '.env.development';

// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     [
//       'module:react-native-dotenv',
//       {
//         moduleName: '@env',
//         path: envFile,
//         allowUndefined: true,
//       },
//     ],
//   ],
// };
