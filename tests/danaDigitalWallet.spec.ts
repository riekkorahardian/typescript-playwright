import { test } from '@playwright/test';
import { homePage } from '../pages/HomePage';
import { DigitalWalletPageigitalWalletPage } from '../pages/DigitalWalletPage';

// tests/navigation.spec.ts
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Navigasi dari homepage ke menu Dompet Digital', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.navigateToDompetDigital();
});