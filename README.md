# React Native Template

A production-ready React Native template with TypeScript, NativeWind (Tailwind CSS), Redux Toolkit, and comprehensive development tooling.

## Features

- ✅ **TypeScript** - Fully typed with strict mode enabled
- ✅ **NativeWind** - Use Tailwind CSS classes in React Native
- ✅ **Redux Toolkit + RTK Query** - Modern state management with data fetching
- ✅ **React Navigation** - Tab and stack navigation pre-configured
- ✅ **React Native Paper** - Material Design components
- ✅ **ESLint + Prettier** - Code quality and formatting
- ✅ **Husky + lint-staged** - Pre-commit hooks
- ✅ **Path Aliases** - Clean imports with @components, @features, etc.
- ✅ **Claude Code YOLO Mode** - Pre-configured for fast development

## Quick Start

1. Clone this template:
```bash
git clone https://github.com/yourusername/ReactNativeTemplate.git MyNewApp
cd MyNewApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Install iOS dependencies (macOS only):
```bash
cd ios && pod install && cd ..
```

4. Start the development server:
```bash
npm start
```

5. Run the app:
```bash
# iOS
npm run ios

# Android
npm run android
```

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── common/       # Generic UI components
│   └── forms/        # Form-specific components
├── features/         # Feature-based modules
│   ├── home/        # Home screen and related
│   └── settings/    # Settings screen and related
├── navigation/       # Navigation configuration
├── services/         # API and external services
│   └── api/         # RTK Query API setup
├── store/           # Redux store configuration
├── theme/           # Theme and styling
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript checks
- `npm run check-all` - Run all checks (type, lint, format)
- `npm test` - Run tests

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize your color palette:

```javascript
colors: {
  primary: '#10B981',      // Your primary color
  secondary: '#3B82F6',    // Your secondary color
  // ... more colors
}
```

### Navigation

Edit `src/navigation/AppNavigator.tsx` to add new screens or modify navigation structure.

### State Management

The Redux store is configured in `src/store/store.ts`. Add new slices as needed:

```typescript
// src/store/yourSlice.ts
import { createSlice } from '@reduxjs/toolkit';
```

## Development with Claude Code

This template includes Claude Code configuration for fast development:

- `.claude/settings.json` - Pre-configured with allowed tools
- CLAUDE.md - Instructions for Claude

To use YOLO mode (skip all permission prompts):
```bash
claude --dangerously-skip-permissions
```

Or press `Shift+Tab` in Claude Code for auto-accept mode.

## Building for Production

### Android

1. Generate a signed APK:
```bash
cd android
./gradlew assembleRelease
```

2. The APK will be in `android/app/build/outputs/apk/release/`

### iOS

1. Open the project in Xcode:
```bash
open ios/ReactNativeTemplate.xcworkspace
```

2. Select your team and configure signing
3. Build and archive through Xcode

## Troubleshooting

### Metro Issues
```bash
npx react-native start --reset-cache
```

### Build Issues
```bash
cd android && ./gradlew clean && cd ..
cd ios && rm -rf Pods Podfile.lock && pod install && cd ..
```

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!