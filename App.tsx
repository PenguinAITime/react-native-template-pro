import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from '@store/store';
import { AppNavigator } from '@navigation/AppNavigator';
import { theme } from '@theme/theme';
import { QueryProvider } from '@providers/QueryProvider';
import { ErrorBoundary } from '@components/ErrorBoundary';
import './global.css';

function App() {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <QueryProvider>
            <PaperProvider theme={theme}>
              <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
              <AppNavigator />
            </PaperProvider>
          </QueryProvider>
        </Provider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

export default App;
