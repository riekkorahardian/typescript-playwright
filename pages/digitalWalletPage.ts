// pages/DigitalWalletPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class DigitalWalletPage {
  readonly page: Page;
  readonly promoText: Locator;
  readonly promoImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.promoText = page.locator('text=Pay easily in other countries'); // locator teks promo
    this.promoImage = page.locator('img[src*="device"]'); // atau sesuaikan bagian src sebenarnya
  }

  async goto() {
    await this.page.goto('https://www.dana.id/personal/digital-wallet');
  }

  async verifyPromoUI() {
    await expect(this.promoText).toBeVisible();
    await expect(this.promoImage).toBeVisible();
  }
}
