jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-linear-gradient', () => {
  const React = require('react');
  const {View} = require('react-native');
  return ({children, style, ...props}) =>
    React.createElement(View, {style, ...props}, children);
});

jest.mock('react-native-webview', () => {
  const React = require('react');
  const {View} = require('react-native');
  return (props) => React.createElement(View, props);
});

jest.mock('react-native-orientation-locker', () => ({
  lockToPortrait: jest.fn(),
  unlockAllOrientations: jest.fn(),
}));
