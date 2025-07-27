// pages/HomePage.ts
import { Page, Locator, expect } from '@playwright/test';

export class homePage {
  readonly page: Page;
  readonly personalMenu: Locator;
  readonly dompetDigitalDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalMenu = page.locator('a:has-text("Personal")'); // menu "Personal"
    this.dompetDigitalDropdown = page.locator('a:has-text("Dompet Digital")'); // submenu
  }

  async goto() {
    await this.page.goto('https://www.dana.id/');
  }

  async navigateToDompetDigital() {
    await this.personalMenu.click();
    await this.dompetDigitalDropdown.click();
  }
}
