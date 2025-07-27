import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import merge from 'deepmerge';

// Adapt navigation theme for MD3
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

// Custom colors matching tailwind.config.js
const customColors = {
  primary: '#10B981',    // Emerald Green
  secondary: '#3B82F6',  // Blue
  tertiary: '#F59E0B',   // Amber
  surface: '#FFFFFF',
  background: '#F9FAFB',
  error: '#EF4444',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onSurface: '#1F2937',
  surfaceVariant: '#E5E7EB',
};

// Merge themes properly
export const theme = merge.all([
  MD3LightTheme,
  LightTheme,
  {
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
      ...customColors,
    },
    roundness: 2,
  },
]);