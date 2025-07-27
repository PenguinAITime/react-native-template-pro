# React Native Template Pro

A production-ready React Native template with TypeScript, NativeWind (Tailwind CSS), Redux Toolkit, React Navigation, and comprehensive development tooling.

## 🚀 Features

### Core
- **React Native 0.80.2** - Latest version with all the newest features
- **TypeScript** - Full type safety with strict mode enabled
- **NativeWind v4** - Use Tailwind CSS classes in React Native
- **Path Aliases** - Clean imports with @ prefix

### State Management
- **Redux Toolkit** - Modern Redux with less boilerplate
- **RTK Query** - Powerful data fetching and caching
- **React Query** - Server state management
- **Zustand** - Lightweight state management for simple states
- **MMKV Storage** - Fast, encrypted key-value storage (50x faster than AsyncStorage)

### UI/UX
- **React Native Paper** - Material Design components
- **FlashList** - High-performance list component (30% faster than FlatList)
- **React Hook Form + Zod** - Type-safe forms with validation
- **Gesture Handler** - Smooth gesture interactions
- **Error Boundaries** - Graceful error handling

### Developer Experience
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Git hooks for code quality
- **Reactotron** - Advanced debugging tool
- **Custom console.tron** - Enhanced logging in development

## 📋 Prerequisites

- Node.js >= 18
- React Native development environment set up ([React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup))
- iOS: macOS, Xcode, CocoaPods
- Android: Android Studio, Android SDK

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/PenguinAITime/react-native-template-pro.git
cd react-native-template-pro
```

2. Install dependencies:
```bash
npm install

# iOS only
cd ios && pod install && cd ..
```

## 📱 Running the App

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## 🧹 Code Quality

```bash
# Type checking
npm run typecheck

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Run all checks
npm run check-all
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   └── common/       # Common components (Button, Card, etc.)
├── features/         # Feature-based modules
│   ├── home/        # Home screen
│   └── settings/    # Settings screen
├── navigation/       # Navigation configuration
├── services/        # API and external services
│   └── api/        # RTK Query API setup
├── store/           # Redux store configuration
├── theme/           # Theme and styling
└── types/           # TypeScript type definitions
```

## 🎨 Styling

This template uses NativeWind (Tailwind CSS for React Native). You can use Tailwind classes directly in your components:

```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold text-gray-900">Hello World</Text>
</View>
```

Theme colors are defined in `tailwind.config.js`:
- Primary: `#10B981` (Emerald Green)
- Secondary: `#3B82F6` (Blue)
- Accent: `#F59E0B` (Amber)

## 🏗 Path Aliases

Available path aliases for cleaner imports:
- `@components` → `src/components`
- `@features` → `src/features`
- `@navigation` → `src/navigation`
- `@services` → `src/services`
- `@store` → `src/store`
- `@theme` → `src/theme`
- `@types` → `src/types`
- `@utils` → `src/utils`

## 📦 State Management

Redux Toolkit is configured with:
- Type-safe hooks (`useAppDispatch`, `useAppSelector`)
- RTK Query for API calls
- Redux DevTools enabled in development

Example usage:
```tsx
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleDarkMode } from '@store/appSlice';

const isDarkMode = useAppSelector(state => state.app.isDarkMode);
const dispatch = useAppDispatch();

dispatch(toggleDarkMode());
```

## 🔧 Configuration Files

- `.eslintrc.js` - ESLint configuration
- `.prettierrc.js` - Prettier configuration
- `tsconfig.json` - TypeScript configuration
- `babel.config.js` - Babel configuration with path aliases
- `metro.config.js` - Metro bundler configuration
- `tailwind.config.js` - Tailwind/NativeWind configuration

## 📱 Platform-Specific Code

Use platform-specific file extensions:
- `Component.ios.tsx` - iOS specific
- `Component.android.tsx` - Android specific

Or use the Platform API:
```tsx
import { Platform } from 'react-native';

const styles = {
  marginTop: Platform.OS === 'ios' ? 20 : 0
};
```

## 🚀 Production Build

### Android
```bash
cd android
./gradlew assembleRelease
```

### iOS
1. Open `ios/YourApp.xcworkspace` in Xcode
2. Select your device/simulator
3. Product → Archive

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/)
- [NativeWind](https://www.nativewind.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://reactnativepaper.com/)