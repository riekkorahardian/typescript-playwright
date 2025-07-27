# typescript-playwright

# 🎯 Playwright Automation Portfolio – TypeScript

This is an automation portfolio project built using [Playwright](https://playwright.dev/) with **TypeScript**. The goal is to demonstrate UI automation skills using a clean, scalable, and maintainable structure.

---

## ✅ Test Scenario

### Website: [https://dana.id](https://dana.id)

**Steps:**
1. Visit the homepage of `dana.id`
2. Hover over the **"Personal"** menu
3. Click the **"Dompet Digital"** (Digital Wallet) submenu
4. Verify that the page contains the UI content: **"BISA BAYAR DI LUAR NEGERI"** (Can Pay Abroad)

---

## 🗂️ Project Structure
playwright-ts-portfolio/
│
├── tests/                         # Test suite utama
│   ├── digital-wallet.spec.ts     # Validasi teks dan gambar promo
│   └── navigation.spec.ts         # Navigasi dari homepage ke submenu Dompet Digital
│
├── pages/                         # Page Object Models (POM)
│   ├── homePage.ts                # Aksi & locator homepage
│   └── digitalWalletPage.ts       # Aksi & validasi halaman Dompet Digital
├── playwright.config.ts           # Konfigurasi test runner Playwright
│
├── tsconfig.json                  # Konfigurasi TypeScript
├── package.json                   # Dependency dan script
└── README.md                      # Dokumentasi project ini
