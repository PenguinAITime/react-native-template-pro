import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StorageUtils } from '@services/storage';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  setUser: (user: User) => void;
  clearUser: () => void;
  updateUser: (updates: Partial<User>) => void;
  setLoading: (loading: boolean) => void;
}

// Custom storage adapter for MMKV
const mmkvStorage = {
  getItem: (name: string) => {
    const value = StorageUtils.getString(name);
    return value ?? null;
  },
  setItem: (name: string, value: string) => {
    StorageUtils.setString(name, value);
  },
  removeItem: (name: string) => {
    StorageUtils.delete(name);
  },
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        }),

      clearUser: () =>
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        }),

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),

      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => mmkvStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Selectors
export const selectUser = (state: UserState) => state.user;
export const selectIsAuthenticated = (state: UserState) => state.isAuthenticated;
export const selectIsLoading = (state: UserState) => state.isLoading;
