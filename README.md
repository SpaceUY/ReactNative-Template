# React Native Template System

A modular template system for React Native projects. Each module is designed to be plug-and-play, providing common functionality that can be easily added to your React Native applications.

## Available Modules

### 🌐 API Client
Ready-to-use API client with Axios and TanStack Query.
[Learn more](./api-client/README.md)

### 💾 State Management
Lightweight state management solution with Zustand.
[Learn more](./state-management/README.md)

### 📅 Date Utils
Date formatting and parsing utilities powered by date-fns.
[Learn more](./date-utils/README.md)

### 🧪 Testing Setup
Complete testing environment with Jest and Detox.
[Learn more](./testing-setup/README.md)

### 📱 Expo Template
React Native template with Expo and Expo Router navigation.

## Getting Started

1. Install the CLI:
```bash
npm install -g @SpaceUY/planetary
```

2. In your React Native project directory, run:
```bash
planetary
```

3. Follow the interactive prompts to:
   - Select your project type
   - Choose which module to install
   - Select an implementation (if multiple are available)

4. Install the required dependencies as specified in the module's README

## Module Structure

Each module follows a consistent structure:
```
module-name/
├── README.md           # Module documentation
├── index.ts           # Entry point
└── implementation/    # Implementation files
    ├── core/
    ├── types/
    └── ...
```

## Best Practices

1. **Installation**
   - Read each module's README for specific setup instructions
   - Install all required dependencies
   - Follow the TypeScript types for proper usage

2. **Usage**
   - Import from the implementation directory
   - Use TypeScript for better type safety
   - Check examples in module READMEs

3. **Customization**
   - Each module is designed to be extensible
   - Follow patterns in the implementation
   - Keep modifications in separate files

## Resources

- [React Native Guidelines](https://spaceuy.github.io/react-native-guidelines/) - Official SpaceUY React Native development guidelines and best practices
- [Planetary CLI](https://github.com/SpaceUY/planetary) - Command-line tool for managing and installing these modules

## Contributing

Feel free to contribute by:
1. Adding new modules
2. Creating new implementations
3. Improving documentation
4. Fixing bugs
