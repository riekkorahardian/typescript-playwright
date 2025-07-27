import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 30000,
    use: {
    baseURL: 'https://dana.id',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  testDir: './tests',
  reporter: [['list'], ['html']],
});
