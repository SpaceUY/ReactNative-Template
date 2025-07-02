import { by, device, element, expect } from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show welcome screen', async () => {
    await expect(element(by.text('Welcome'))).toBeVisible()
  })

  it('should show tab navigation', async () => {
    await expect(element(by.text('Home'))).toBeVisible()
    await expect(element(by.text('Settings'))).toBeVisible()
  })
}) 