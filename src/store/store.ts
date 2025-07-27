import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from '@services/api/apiSlice';
import appReducer from './appSlice';

// Import Reactotron in development
const getReactotron = () => {
  if (__DEV__) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('../config/reactotron').default;
  }
  return null;
};

const reactotron = getReactotron();

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(apiSlice.middleware),
  enhancers: (getDefaultEnhancers) => {
    if (__DEV__ && reactotron) {
      return getDefaultEnhancers().concat(reactotron.createEnhancer());
    }
    return getDefaultEnhancers();
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
