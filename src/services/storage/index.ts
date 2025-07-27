import { MMKV } from 'react-native-mmkv';

// Create storage instance
export const storage = new MMKV({
  id: 'app-storage',
  encryptionKey: undefined, // Add encryption key in production
});

// Type-safe storage keys
export const StorageKeys = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  THEME_MODE: 'theme_mode',
  LANGUAGE: 'language',
  ONBOARDING_COMPLETED: 'onboarding_completed',
  PUSH_ENABLED: 'push_enabled',
} as const;

// Storage utilities
export const StorageUtils = {
  // String operations
  setString: (key: string, value: string) => storage.set(key, value),
  getString: (key: string): string | undefined => storage.getString(key),

  // Boolean operations
  setBoolean: (key: string, value: boolean) => storage.set(key, value),
  getBoolean: (key: string): boolean | undefined => storage.getBoolean(key),

  // Number operations
  setNumber: (key: string, value: number) => storage.set(key, value),
  getNumber: (key: string): number | undefined => storage.getNumber(key),

  // JSON operations
  setJSON: <T>(key: string, value: T) => {
    storage.set(key, JSON.stringify(value));
  },
  getJSON: <T>(key: string): T | null => {
    const value = storage.getString(key);
    if (!value) return null;
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  },

  // Delete operations
  delete: (key: string) => storage.delete(key),

  // Clear all storage
  clearAll: () => storage.clearAll(),

  // Check if key exists
  contains: (key: string) => storage.contains(key),

  // Get all keys
  getAllKeys: () => storage.getAllKeys(),
};

// Listeners for storage changes
export const addStorageListener = (callback: (key: string) => void) => {
  const listener = storage.addOnValueChangedListener(callback);
  return () => listener.remove();
};
