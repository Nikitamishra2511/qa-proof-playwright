
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://the-internet.herokuapp.com'
  },
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
  ]
});
