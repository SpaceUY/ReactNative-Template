import '@testing-library/jest-native/extend-expect'

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
  Link: 'Link',
}))

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks()
}) 