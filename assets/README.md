# App Assets

This directory should contain the following image assets for your Expo app:

## Required Files

### 1. `icon.png`
- **Size**: 1024x1024 pixels
- **Format**: PNG with transparency
- **Purpose**: Main app icon for iOS and Android
- **Note**: Will be automatically resized for different device requirements

### 2. `splash.png`
- **Size**: 1284x2778 pixels (iPhone 14 Pro Max size)
- **Format**: PNG
- **Purpose**: Loading screen shown while app initializes
- **Note**: Should work for all device sizes

### 3. `adaptive-icon.png`
- **Size**: 1024x1024 pixels
- **Format**: PNG with transparency
- **Purpose**: Android adaptive icon foreground
- **Note**: Make sure the important content is centered (will be masked)

### 4. `favicon.png`
- **Size**: 48x48 pixels
- **Format**: PNG
- **Purpose**: Web browser favicon
- **Note**: Only used when running on web

## Design Guidelines

1. **Icon Design**:
   - Keep it simple and recognizable
   - Avoid text if possible
   - Test at small sizes
   - Use bold shapes and colors

2. **Splash Screen**:
   - Center your logo/brand
   - Use a solid background color
   - Keep it minimal (loads quickly)
   - Match your app's theme

3. **Adaptive Icon**:
   - Content should fit in a safe zone (66% of total size)
   - Background color is set in app.json
   - Will be displayed with various masks (circle, square, squircle)

## Generating Assets

You can use these tools to create your assets:
- [Expo App Icon Generator](https://www.appicon.co/)
- [Figma](https://www.figma.com/)
- [Canva](https://www.canva.com/)
- [Adobe XD](https://www.adobe.com/products/xd.html)

## Example Command to Generate Icons

Once you have your base icon.png (1024x1024), Expo will automatically generate all required sizes during the build process.