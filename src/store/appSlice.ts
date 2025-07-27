import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isDarkMode: boolean;
  isPushEnabled: boolean;
  appVersion: string;
}

const initialState: AppState = {
  isDarkMode: false,
  isPushEnabled: true,
  appVersion: '1.0.0',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    setPushEnabled: (state, action: PayloadAction<boolean>) => {
      state.isPushEnabled = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode, setPushEnabled } = appSlice.actions;
export default appSlice.reducer;