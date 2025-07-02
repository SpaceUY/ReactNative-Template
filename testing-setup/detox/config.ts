export default {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  specs: 'e2e',
  behavior: {
    init: {
      exposeGlobals: true,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/YourApp.app',
      build: 'xcodebuild -workspace ios/YourApp.xcworkspace -scheme YourApp -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/YourApp.app',
      build: 'xcodebuild -workspace ios/YourApp.xcworkspace -scheme YourApp -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081]
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_4_API_30'
      }
    }
  }
} 