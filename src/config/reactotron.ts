import Reactotron, { trackGlobalLogs } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { storage } from '@services/storage';

const reactotron = Reactotron.configure({
  name: 'React Native Template',
  // Use localhost for Android emulator
  host: 'localhost',
  port: 9090,
})
  .useReactNative({
    // Enable all built-in React Native plugins
    networking: {
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    },
    editor: true,
    errors: {
      veto: (frame) => frame.fileName.indexOf('/node_modules/') >= 0,
    },
    overlay: true,
  })
  .use(trackGlobalLogs as any)
  .use(reactotronRedux())
  .connect();

// Clear Reactotron on every refresh in development
if (__DEV__) {
  reactotron.clear?.();
}

// Extend console with tron for easier logging
if (__DEV__) {
  // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
  (console as any).tron = reactotron;
}

// Export configured instance
export default reactotron;

// Helper functions for custom commands
export const customCommands = [
  {
    title: 'Clear MMKV Storage',
    description: 'Clears all data from MMKV storage',
    command: 'clearMMKV',
    handler: () => {
      storage.clearAll();
      if (__DEV__) {
        // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
        (console as any).tron?.log?.('MMKV storage cleared');
      }
    },
  },
  {
    title: 'Show Storage Keys',
    description: 'Display all MMKV storage keys',
    command: 'showStorageKeys',
    handler: () => {
      const keys = storage.getAllKeys();
      if (__DEV__) {
        // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
        (console as any).tron?.display?.({
          name: 'Storage Keys',
          value: keys,
          preview: `${keys.length} keys`,
        });
      }
    },
  },
  {
    title: 'Reset App State',
    description: 'Clear all storage and reset Redux state',
    command: 'resetApp',
    handler: () => {
      storage.clearAll();
      // Add Redux reset logic here
      if (__DEV__) {
        // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
        (console as any).tron?.log?.('App state reset');
      }
    },
  },
];

// Register custom commands
customCommands.forEach((cmd) => {
  reactotron.onCustomCommand?.(cmd);
});

// TypeScript declarations
declare global {
  interface Console {
    tron: typeof reactotron;
  }
}
